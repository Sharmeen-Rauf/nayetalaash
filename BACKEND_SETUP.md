# Backend Setup Guide

This guide will help you set up the backend for the Nayi Talaash tour booking system.

## Prerequisites

- Node.js installed
- MongoDB Atlas account (or local MongoDB)
- MongoDB connection string

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Create Environment File

Create a `.env.local` file in the root directory with the following content:

```env
# MongoDB Connection String
MONGODB_URI=mongodb+srv://nayitalaash_db_user:twelveseptember2025@cluster0.yeyguxy.mongodb.net/?appName=Cluster0

# JWT Secret for admin authentication
JWT_SECRET=nayetalaash2026project_secret_key_change_in_production

# Node Environment
NODE_ENV=development
```

### 3. Initialize Admin User

Run the following command to create the admin user:

```bash
npm run init-admin
```

This will create an admin user with:
- **Username:** `admin`
- **Password:** `nayetalaash2026project`

### 4. Start Development Server

```bash
npm run dev
```

## Admin Dashboard

Access the admin dashboard at:
- **URL:** `http://localhost:3000/admin`
- **Username:** `admin`
- **Password:** `nayetalaash2026project`

## Features

### Admin Dashboard Features:
- View all tour requests
- Filter by status (pending, contacted, confirmed, cancelled)
- Search by name, destination, phone, or email
- View detailed information for each request
- Update request status
- Statistics dashboard

### API Endpoints:

1. **POST /api/tour-requests**
   - Submit a new tour request
   - Public endpoint

2. **POST /api/admin/login**
   - Admin login
   - Returns JWT token in HTTP-only cookie

3. **GET /api/admin/tour-requests**
   - Get all tour requests
   - Protected (requires admin authentication)
   - Query parameters: `status`, `page`, `limit`

4. **PATCH /api/admin/tour-requests**
   - Update tour request status
   - Protected (requires admin authentication)

5. **GET /api/admin/verify**
   - Verify admin authentication
   - Protected

6. **POST /api/admin/logout**
   - Admin logout
   - Clears authentication cookie

## Database Models

### TourRequest
Stores all customize tour form submissions with the following fields:
- destination, totalDays, startingDate
- travelMode, vehiclePreference
- totalPersons, adults, children
- totalRooms, departureLocation
- tourGuide, groupCategory, serviceType
- specificRequirements
- fullName, email, phone
- status (pending, contacted, confirmed, cancelled)
- timestamps (createdAt, updatedAt)

### Admin
Stores admin user credentials:
- username
- password (hashed with bcrypt)
- timestamps

## Security Notes

1. **JWT Secret:** Change the JWT_SECRET in production
2. **Password:** Change the default admin password after first login
3. **HTTPS:** Use HTTPS in production
4. **Environment Variables:** Never commit `.env.local` to version control

## Troubleshooting

### MongoDB Connection Issues
- Verify the connection string is correct
- Check if your IP is whitelisted in MongoDB Atlas
- Ensure the database user has proper permissions

### Admin Login Issues
- Make sure you've run `npm run init-admin`
- Check that the admin user exists in the database
- Verify the password is correct

### API Errors
- Check the server console for error messages
- Verify all environment variables are set
- Ensure MongoDB is accessible

