import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'nayetalaash2026project_secret_key_change_in_production';

export interface AuthUser {
  id: string;
  username: string;
}

export function verifyToken(request: NextRequest): AuthUser | null {
  try {
    const token = request.cookies.get('adminToken')?.value;

    if (!token) {
      return null;
    }

    const decoded = jwt.verify(token, JWT_SECRET) as AuthUser;
    return decoded;
  } catch {
    return null;
  }
}

export function requireAuth(request: NextRequest): AuthUser {
  const user = verifyToken(request);
  
  if (!user) {
    throw new Error('Unauthorized');
  }
  
  return user;
}

