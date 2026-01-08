import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

export async function GET(request: NextRequest) {
  const diagnostics: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    environment: {
      nodeEnv: process.env.NODE_ENV,
      vercel: process.env.VERCEL === '1',
      hasMongoUri: !!process.env.MONGODB_URI,
      mongoUriLength: process.env.MONGODB_URI?.length || 0,
    },
    database: {
      connected: false,
      error: null as string | null,
    },
    admin: {
      exists: false,
      count: 0,
      error: null as string | null,
    },
  };

  // Test database connection
  try {
    await connectDB();
    diagnostics.database.connected = true;
    diagnostics.database.error = null;
  } catch (dbError) {
    diagnostics.database.connected = false;
    diagnostics.database.error = dbError instanceof Error ? dbError.message : 'Unknown error';
  }

  // Test admin model
  if (diagnostics.database.connected) {
    try {
      const adminCount = await Admin.countDocuments();
      const adminExists = await Admin.findOne({ username: 'admin' });
      diagnostics.admin.exists = !!adminExists;
      diagnostics.admin.count = adminCount;
      diagnostics.admin.error = null;
    } catch (adminError) {
      diagnostics.admin.error = adminError instanceof Error ? adminError.message : 'Unknown error';
    }
  }

  return NextResponse.json(diagnostics, { status: 200 });
}
