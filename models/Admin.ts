import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IAdmin extends Document {
  username: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const AdminSchema: Schema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving (only if not already hashed)
(AdminSchema as any).pre('save', async function (next: (err?: Error) => void) {
  // Only hash if password is modified
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    // Get password value
    const passwordValue = (this as any).password;
    
    // Ensure password is a string
    if (typeof passwordValue !== 'string' || !passwordValue) {
      return next(new Error('Password must be a non-empty string'));
    }
    
    // Check if password is already hashed (bcrypt hashes start with $2a$, $2b$, or $2y$)
    if (passwordValue.startsWith('$2a$') || passwordValue.startsWith('$2b$') || passwordValue.startsWith('$2y$')) {
      // Password is already hashed, skip hashing
      return next();
    }
    
    // Verify bcrypt is available
    if (!bcrypt || typeof bcrypt.genSalt !== 'function' || typeof bcrypt.hash !== 'function') {
      return next(new Error('bcrypt is not properly imported or initialized'));
    }
    
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(passwordValue, salt);
    
    // Ensure hashed password is a string
    if (typeof hashedPassword !== 'string' || !hashedPassword) {
      return next(new Error('Password hashing failed - result is not a string'));
    }
    
    // Set the hashed password
    (this as any).password = hashedPassword;
    return next();
  } catch (error: unknown) {
    // Safely convert error to Error object
    let err: Error;
    if (error instanceof Error) {
      err = error;
    } else if (typeof error === 'string') {
      err = new Error(error);
    } else {
      err = new Error(String(error));
    }
    return next(err);
  }
});

// Compare password method
AdminSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const Admin = mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);

export default Admin;

