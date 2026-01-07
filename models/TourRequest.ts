import mongoose, { Schema, Document } from 'mongoose';

export interface ITourRequest extends Document {
  destination: string;
  totalDays: string;
  startingDate?: string;
  travelMode: string;
  vehiclePreference: string;
  totalPersons: string;
  adults?: string;
  children?: string;
  totalRooms: string;
  departureLocation: string;
  tourGuide?: string;
  groupCategory: string;
  serviceType?: string;
  specificRequirements?: string;
  fullName: string;
  email?: string;
  phone: string;
  status: 'pending' | 'contacted' | 'confirmed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

const TourRequestSchema: Schema = new Schema(
  {
    destination: { type: String, required: true },
    totalDays: { type: String, required: true },
    startingDate: { type: String },
    travelMode: { type: String, required: true },
    vehiclePreference: { type: String, required: true },
    totalPersons: { type: String, required: true },
    adults: { type: String },
    children: { type: String },
    totalRooms: { type: String, required: true },
    departureLocation: { type: String, required: true },
    tourGuide: { type: String },
    groupCategory: { type: String, required: true },
    serviceType: { type: String },
    specificRequirements: { type: String },
    fullName: { type: String, required: true },
    email: { type: String },
    phone: { type: String, required: true },
    status: { 
      type: String, 
      enum: ['pending', 'contacted', 'confirmed', 'cancelled'],
      default: 'pending' 
    },
  },
  {
    timestamps: true,
  }
);

const TourRequest = mongoose.models.TourRequest || mongoose.model<ITourRequest>('TourRequest', TourRequestSchema);

export default TourRequest;

