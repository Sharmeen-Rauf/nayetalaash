import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';
import bcrypt from 'bcryptjs';

// This is a one-time initialization endpoint
// Call this once after deployment to create the admin user
// DELETE THIS ROUTE AFTER INITIAL SETUP FOR SECURITY

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      let parseErrorMessage = 'Unknown error';
      if (parseError instanceof Error) {
        parseErrorMessage = parseError.message || 'Unknown error';
      } else if (typeof parseError === 'string') {
        parseErrorMessage = parseError;
      }
      return NextResponse.json(
        { error: 'Invalid request body', details: String(parseErrorMessage) },
        { status: 400 }
      );
    }

    const { secretKey, force } = body || {};
    
    // You can set this in Vercel environment variables
    const INIT_SECRET = process.env.INIT_SECRET || 'change-this-secret-in-production';
    
    if (secretKey !== INIT_SECRET) {
      console.warn('Unauthorized init attempt - secret key mismatch');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Connect to database
    try {
      await connectDB();
      console.log('Database connected successfully for admin init');
    } catch (dbError) {
      console.error('Database connection error in init:', dbError);
      let dbErrorMessage = 'Unknown database error';
      if (dbError instanceof Error) {
        dbErrorMessage = dbError.message || 'Unknown database error';
      } else if (typeof dbError === 'string') {
        dbErrorMessage = dbError;
      } else if (dbError && typeof dbError === 'object' && 'message' in dbError) {
        dbErrorMessage = String(dbError.message);
      }
      return NextResponse.json(
        { 
          error: 'Database connection failed', 
          details: String(dbErrorMessage),
          hint: 'Please check: 1) MONGODB_URI is set in Vercel, 2) MongoDB Atlas network access allows all IPs (0.0.0.0/0), 3) MongoDB cluster is running'
        },
        { status: 500 }
      );
    }
    
    const username = 'admin';
    const password = 'nayetalaash2026project';

    // Check if admin already exists
    let existingAdmin;
    try {
      existingAdmin = await Admin.findOne({ username });
      console.log(`Admin lookup result: ${existingAdmin ? 'found' : 'not found'}`);
    } catch (findError) {
      console.error('Error finding admin:', findError);
      let findErrorMessage = 'Unknown error';
      if (findError instanceof Error) {
        findErrorMessage = findError.message || 'Unknown error';
      } else if (typeof findError === 'string') {
        findErrorMessage = findError;
      }
      return NextResponse.json(
        { 
          error: 'Error checking for existing admin', 
          details: String(findErrorMessage)
        },
        { status: 500 }
      );
    }
    
    if (existingAdmin && !force) {
      return NextResponse.json({
        message: 'Admin user already exists',
        exists: true,
        note: 'Use { "secretKey": "...", "force": true } to recreate admin user',
      });
    }

    // Delete existing admin if force is true
    if (existingAdmin && force) {
      try {
        await Admin.deleteOne({ username });
        console.log('Deleted existing admin user');
      } catch (deleteError) {
        console.error('Error deleting existing admin:', deleteError);
        let deleteErrorMessage = 'Unknown error';
        if (deleteError instanceof Error) {
          deleteErrorMessage = deleteError.message || 'Unknown error';
        } else if (typeof deleteError === 'string') {
          deleteErrorMessage = deleteError;
        }
        return NextResponse.json(
          { 
            error: 'Error deleting existing admin', 
            details: String(deleteErrorMessage)
          },
          { status: 500 }
        );
      }
    }

    // Create admin user
    try {
      // Validate inputs before creating
      if (typeof username !== 'string' || !username) {
        return NextResponse.json(
          { error: 'Invalid username', details: 'Username must be a non-empty string' },
          { status: 400 }
        );
      }
      
      if (typeof password !== 'string' || !password) {
        return NextResponse.json(
          { error: 'Invalid password', details: 'Password must be a non-empty string' },
          { status: 400 }
        );
      }

      // Hash password directly here instead of relying on pre-save hook
      let hashedPassword: string;
      try {
        console.log('Hashing password...');
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(String(password), salt);
        console.log('Password hashed successfully');
      } catch (hashError) {
        console.error('Error hashing password:', hashError);
        const hashErrorMessage = hashError instanceof Error ? hashError.message : String(hashError);
        return NextResponse.json(
          { 
            error: 'Failed to hash password', 
            details: String(hashErrorMessage)
          },
          { status: 500 }
        );
      }

      // Use direct MongoDB collection insert to completely bypass Mongoose hooks
      try {
        console.log('Creating admin user using direct MongoDB insert...');
        
        // Import mongoose to access connection
        const mongoose = await import('mongoose');
        const connection = mongoose.default.connection;
        
        if (!connection || !connection.db) {
          throw new Error('Database connection not available');
        }
        
        // Use insertOne to completely bypass Mongoose hooks and validation
        const result = await connection.db.collection('admins').insertOne({
          username: String(username),
          password: hashedPassword,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        
        console.log('Admin user created successfully using direct insert');
        console.log('Inserted ID:', result.insertedId);
        
        return NextResponse.json({
          message: 'Admin user created successfully!',
          username: 'admin',
          password: 'nayetalaash2026project',
          note: 'Please delete this API route after initialization for security',
        });
      } catch (saveError: unknown) {
        console.error('Error creating admin user:', saveError);
        console.error('Save error type:', typeof saveError);
        console.error('Save error constructor:', saveError?.constructor?.name);
        
        // If it's a validation error or mongoose error, extract more details
        if (saveError && typeof saveError === 'object') {
          const errorObj = saveError as Record<string, unknown>;
          if (errorObj.errors) {
            console.error('Mongoose validation errors:', errorObj.errors);
          }
          if (errorObj.message) {
            console.error('Mongoose error message:', errorObj.message);
          }
          if (errorObj.code) {
            console.error('MongoDB error code:', errorObj.code);
          }
        }
        
        throw saveError; // Re-throw to be caught by outer catch
      }
    } catch (saveError: unknown) {
      console.error('Error saving admin user:', saveError);
      
      // Safely extract error message with multiple fallbacks
      let saveErrorMessage = 'Unknown error occurred while saving admin user';
      
      try {
        if (saveError instanceof Error) {
          saveErrorMessage = saveError.message || saveError.toString() || 'Unknown error';
        } else if (typeof saveError === 'string') {
          saveErrorMessage = saveError;
        } else if (saveError && typeof saveError === 'object') {
          if ('message' in saveError) {
            saveErrorMessage = String(saveError.message);
          } else if ('error' in saveError) {
            saveErrorMessage = String(saveError.error);
          } else {
            saveErrorMessage = JSON.stringify(saveError);
          }
        } else {
          saveErrorMessage = String(saveError);
        }
      } catch (extractError) {
        console.error('Error extracting error message:', extractError);
        saveErrorMessage = 'Failed to extract error details';
      }
      
      // Ensure it's a string
      const finalErrorMessage = String(saveErrorMessage || 'Unknown error');
      
      // Check for duplicate key error
      if (finalErrorMessage.includes('duplicate key') || finalErrorMessage.includes('E11000')) {
        return NextResponse.json(
          { 
            error: 'Admin user already exists (duplicate key error)', 
            details: 'Try using force: true to recreate',
            hint: 'The admin user may have been created between the check and save operations'
          },
          { status: 409 }
        );
      }
      
      return NextResponse.json(
        { 
          error: 'Failed to save admin user', 
          details: finalErrorMessage
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Unexpected error in admin init:', error);
    
    // Safely extract error information
    let errorMessage = 'Unknown error';
    let errorName: string | undefined;
    
    if (error instanceof Error) {
      errorMessage = error.message || 'Unknown error';
      errorName = error.name;
    } else if (typeof error === 'string') {
      errorMessage = error;
    } else if (error && typeof error === 'object' && 'message' in error) {
      errorMessage = String(error.message);
      if ('name' in error) {
        errorName = String(error.name);
      }
    }
    
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error('Init error details:', { errorMessage, errorStack, errorName });
    
    return NextResponse.json(
      { 
        error: 'Failed to initialize admin', 
        details: String(errorMessage),
        ...(errorName && { type: String(errorName) })
      },
      { status: 500 }
    );
  }
}

