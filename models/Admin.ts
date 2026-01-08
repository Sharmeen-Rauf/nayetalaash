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

// Hash password before saving
(AdminSchema as any).pre('save', async function (this: IAdmin, next: (err?: Error) => void) {
  if (!this.isModified('password')) {
    return next();
  }
  
  try {
    // Ensure password is a string
    if (typeof this.password !== 'string') {
      return next(new Error('Password must be a string'));
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    
    // Ensure hashed password is a string
    if (typeof hashedPassword !== 'string') {
      return next(new Error('Password hashing failed'));
    }
    
    this.password = hashedPassword;
    return next();
  } catch (error: unknown) {
    const err = error instanceof Error ? error : new Error(String(error));
    return next(err);
  }
});

// Compare password method
AdminSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const Admin = mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);

export default Admin;

