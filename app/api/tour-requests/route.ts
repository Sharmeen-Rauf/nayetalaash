import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import TourRequest from '@/models/TourRequest';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    // Validate required fields
    if (!body.destination || !body.totalDays || !body.fullName || !body.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create new tour request
    const tourRequest = new TourRequest({
      destination: body.destination,
      totalDays: body.totalDays,
      startingDate: body.startingDate || '',
      travelMode: body.travelMode || '',
      vehiclePreference: body.vehiclePreference || '',
      totalPersons: body.totalPersons || '',
      adults: body.adults || '',
      children: body.children || '',
      totalRooms: body.totalRooms || '',
      departureLocation: body.departureLocation || '',
      tourGuide: body.tourGuide || '',
      groupCategory: body.groupCategory || '',
      serviceType: body.serviceType || '',
      specificRequirements: body.specificRequirements || '',
      fullName: body.fullName,
      email: body.email || '',
      phone: body.phone,
      status: 'pending',
    });

    await tourRequest.save();

    return NextResponse.json(
      { 
        message: 'Tour request submitted successfully',
        id: tourRequest._id 
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error submitting tour request:', error);
    return NextResponse.json(
      { error: 'Failed to submit tour request', details: error.message },
      { status: 500 }
    );
  }
}

