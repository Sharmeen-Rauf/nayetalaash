'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { LogOut, Search, Filter, CheckCircle, XCircle, Clock, Phone, Mail, Calendar, MapPin, Users, Car, Hotel, User } from 'lucide-react';

interface TourRequest {
  _id: string;
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
  createdAt: string;
  updatedAt: string;
}

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [username, setUsername] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [creatingAdmin, setCreatingAdmin] = useState(false);
  const [adminMessage, setAdminMessage] = useState('');
  
  const [tourRequests, setTourRequests] = useState<TourRequest[]>([]);
  const [filteredRequests, setFilteredRequests] = useState<TourRequest[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<TourRequest | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loadingRequests, setLoadingRequests] = useState(false);

  const primaryOrange = '#f99621';
  const secondaryBlack = '#211f20';

  // Check authentication on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const fetchTourRequests = useCallback(async () => {
    setLoadingRequests(true);
    try {
      const url = statusFilter !== 'all' 
        ? `/api/admin/tour-requests?status=${statusFilter}`
        : '/api/admin/tour-requests';
      
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setTourRequests(data.tourRequests || []);
      } else {
        if (response.status === 401) {
          setIsAuthenticated(false);
        }
      }
    } catch (error) {
      console.error('Error fetching tour requests:', error);
      // Error already logged
    } finally {
      setLoadingRequests(false);
    }
  }, [statusFilter, setIsAuthenticated]);

  // Fetch tour requests when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchTourRequests();
    }
  }, [isAuthenticated, fetchTourRequests]);

  // Filter and search tour requests
  useEffect(() => {
    let filtered = tourRequests;

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(req => req.status === statusFilter);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(req =>
        req.fullName.toLowerCase().includes(query) ||
        req.destination.toLowerCase().includes(query) ||
        req.phone.includes(query) ||
        (req.email && req.email.toLowerCase().includes(query))
      );
    }

    setFilteredRequests(filtered);
  }, [tourRequests, statusFilter, searchQuery]);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/verify');
      const data = await response.json();
      
      if (data.authenticated) {
        setIsAuthenticated(true);
        setUsername(data.username);
      } else {
        setIsAuthenticated(false);
      }
    } catch {
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: loginUsername,
          password: loginPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setUsername(data.username);
        setLoginUsername('');
        setLoginPassword('');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setUsername('');
      setTourRequests([]);
      setSelectedRequest(null);
    } catch {
      // Logout error - ignore
    }
  };

  const handleCreateAdmin = async () => {
    setCreatingAdmin(true);
    setAdminMessage('');
    setError('');

    try {
      const response = await fetch('/api/admin/init', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          secretKey: 'change-this-secret-in-production',
          force: true, // Force recreate to fix any password issues
        }),
      });

      let data: Record<string, unknown> | null = null;
      try {
        const text = await response.text();
        if (text) {
          try {
            data = JSON.parse(text) as Record<string, unknown>;
          } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            setAdminMessage(`Server error (${response.status}): Invalid JSON response. Raw: ${text.substring(0, 200)}`);
            return;
          }
        }
      } catch (jsonError) {
        console.error('Error reading response:', jsonError);
        setAdminMessage(`Server error (${response.status}): Could not read response. Check Vercel logs for details.`);
        return;
      }

      if (response.ok) {
        setAdminMessage('✅ Admin user created successfully! You can now login with username: admin and password: nayetalaash2026project');
        setLoginUsername('admin');
      } else {
        // Show detailed error message - ensure all values are strings
        let errorMsg = 'Failed to create admin user';
        
        try {
          if (data && typeof data === 'object') {
            const errorValue = data.error;
            if (errorValue !== undefined && errorValue !== null) {
              errorMsg = String(errorValue);
            } else {
              errorMsg = `Failed to create admin user (Status: ${response.status})`;
            }
            
            // Safely add details
            if (data.details !== undefined && data.details !== null) {
              const details = String(data.details);
              if (details && details !== 'undefined' && details !== 'null' && details.trim()) {
                errorMsg += `\n\nDetails: ${details}`;
              }
            }
            
            // Safely add hint
            if (data.hint !== undefined && data.hint !== null) {
              const hint = String(data.hint);
              if (hint && hint !== 'undefined' && hint !== 'null' && hint.trim()) {
                errorMsg += `\n\nHint: ${hint}`;
              }
            }
            
            // Safely add type
            if (data.type !== undefined && data.type !== null) {
              const type = String(data.type);
              if (type && type !== 'undefined' && type !== 'null' && type.trim()) {
                errorMsg += `\n\nError Type: ${type}`;
              }
            }
          }
        } catch (msgError) {
          console.error('Error building error message:', msgError);
          errorMsg = `Failed to create admin user (Status: ${response.status})`;
        }
        
        setAdminMessage(errorMsg);
        console.error('Admin creation error:', { status: response.status, data });
      }
    } catch (err) {
      const errorMsg = 'Network error: ' + (err instanceof Error ? err.message : 'Unknown error');
      setAdminMessage(errorMsg);
      console.error('Admin creation network error:', err);
    } finally {
      setCreatingAdmin(false);
    }
  };


  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch('/api/admin/tour-requests', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (response.ok) {
        fetchTourRequests();
        if (selectedRequest && selectedRequest._id === id) {
          setSelectedRequest({ ...selectedRequest, status: newStatus as 'pending' | 'contacted' | 'confirmed' | 'cancelled' });
        }
      }
    } catch (error) {
      console.error('Error updating status:', error);
      // Error already logged
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'contacted':
        return 'bg-blue-100 text-blue-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'contacted':
        return <Phone className="w-4 h-4" />;
      case 'confirmed':
        return <CheckCircle className="w-4 h-4" />;
      case 'cancelled':
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  // Login form
  if (isAuthenticated === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-6" style={{ color: secondaryBlack }}>
            Admin Login
          </h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
                Username
              </label>
              <input
                type="text"
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
                style={{ color: secondaryBlack }}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: secondaryBlack }}>
                Password
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#f99621]"
                style={{ color: secondaryBlack }}
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 font-bold text-white rounded-lg transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: primaryOrange }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center mb-3">
              Admin user doesn't exist?
            </p>
            <button
              type="button"
              onClick={handleCreateAdmin}
              disabled={creatingAdmin}
              className="w-full py-2 px-4 text-sm font-medium text-white rounded-lg transition-all duration-300 hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: '#10b981' }}
            >
              {creatingAdmin ? 'Creating Admin...' : 'Create Admin User'}
            </button>
            {adminMessage && (
              <div className={`mt-3 px-4 py-2 rounded text-sm whitespace-pre-line ${
                adminMessage.includes('✅') 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {adminMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg" style={{ color: secondaryBlack }}>Loading...</div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b" style={{ borderColor: `${primaryOrange}30` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: secondaryBlack }}>
                Admin Dashboard
              </h1>
              <p className="text-sm text-gray-600">Welcome, {username}</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors hover:bg-gray-100"
              style={{ color: secondaryBlack }}
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Requests</p>
                <p className="text-2xl font-bold" style={{ color: secondaryBlack }}>
                  {tourRequests.length}
                </p>
              </div>
              <div className="p-3 rounded-full" style={{ backgroundColor: `${primaryOrange}20` }}>
                <Calendar className="w-6 h-6" style={{ color: primaryOrange }} />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {tourRequests.filter(r => r.status === 'pending').length}
                </p>
              </div>
              <div className="p-3 rounded-full bg-yellow-100">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Contacted</p>
                <p className="text-2xl font-bold text-blue-600">
                  {tourRequests.filter(r => r.status === 'contacted').length}
                </p>
              </div>
              <div className="p-3 rounded-full bg-blue-100">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Confirmed</p>
                <p className="text-2xl font-bold text-green-600">
                  {tourRequests.filter(r => r.status === 'confirmed').length}
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-100">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name, destination, phone, or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f99621]"
                  style={{ color: secondaryBlack }}
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#f99621]"
                style={{ color: secondaryBlack }}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="contacted">Contacted</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tour Requests List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {loadingRequests ? (
            <div className="p-8 text-center">
              <div className="text-lg" style={{ color: secondaryBlack }}>Loading tour requests...</div>
            </div>
          ) : filteredRequests.length === 0 ? (
            <div className="p-8 text-center">
              <div className="text-lg text-gray-500">No tour requests found</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Destination
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredRequests.map((request) => (
                    <tr key={request._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(request.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium" style={{ color: secondaryBlack }}>
                          {request.fullName}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm" style={{ color: secondaryBlack }}>
                          {request.destination}
                        </div>
                        <div className="text-xs text-gray-500">{request.totalDays} days</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm" style={{ color: secondaryBlack }}>
                          {request.phone}
                        </div>
                        {request.email && (
                          <div className="text-xs text-gray-500">{request.email}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                          {getStatusIcon(request.status)}
                          {request.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button
                          onClick={() => setSelectedRequest(request)}
                          className="text-[#f99621] hover:text-[#e8851a] font-medium"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold" style={{ color: secondaryBlack }}>
                Tour Request Details
              </h2>
              <button
                onClick={() => setSelectedRequest(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Contact Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: secondaryBlack }}>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <User className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Full Name</p>
                      <p className="font-medium" style={{ color: secondaryBlack }}>
                        {selectedRequest.fullName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Phone/WhatsApp</p>
                      <p className="font-medium" style={{ color: secondaryBlack }}>
                        {selectedRequest.phone}
                      </p>
                    </div>
                  </div>
                  {selectedRequest.email && (
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium" style={{ color: secondaryBlack }}>
                          {selectedRequest.email}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Trip Details */}
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: secondaryBlack }}>
                  Trip Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Destination</p>
                      <p className="font-medium" style={{ color: secondaryBlack }}>
                        {selectedRequest.destination}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Total Days</p>
                      <p className="font-medium" style={{ color: secondaryBlack }}>
                        {selectedRequest.totalDays} days
                      </p>
                    </div>
                  </div>
                  {selectedRequest.startingDate && (
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">Starting Date</p>
                        <p className="font-medium" style={{ color: secondaryBlack }}>
                          {selectedRequest.startingDate}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Travel Mode</p>
                      <p className="font-medium" style={{ color: secondaryBlack }}>
                        {selectedRequest.travelMode === 'air' ? 'By Air' : 'By Road'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Vehicle Preference</p>
                      <p className="font-medium" style={{ color: secondaryBlack }}>
                        {selectedRequest.vehiclePreference}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Total Persons</p>
                      <p className="font-medium" style={{ color: secondaryBlack }}>
                        {selectedRequest.totalPersons}
                      </p>
                    </div>
                  </div>
                  {selectedRequest.adults && (
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">Adults (12+)</p>
                        <p className="font-medium" style={{ color: secondaryBlack }}>
                          {selectedRequest.adults}
                        </p>
                      </div>
                    </div>
                  )}
                  {selectedRequest.children && (
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">Children (0-12)</p>
                        <p className="font-medium" style={{ color: secondaryBlack }}>
                          {selectedRequest.children}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Hotel className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Total Rooms</p>
                      <p className="font-medium" style={{ color: secondaryBlack }}>
                        {selectedRequest.totalRooms}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-600">Departure Location</p>
                      <p className="font-medium" style={{ color: secondaryBlack }}>
                        {selectedRequest.departureLocation}
                      </p>
                    </div>
                  </div>
                  {selectedRequest.tourGuide && (
                    <div className="flex items-start gap-3">
                      <User className="w-5 h-5 text-gray-400 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">Tour Guide</p>
                        <p className="font-medium" style={{ color: secondaryBlack }}>
                          {selectedRequest.tourGuide === 'yes' ? 'Yes' : 'No'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4" style={{ color: secondaryBlack }}>
                  Additional Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Group Category</p>
                    <p className="font-medium" style={{ color: secondaryBlack }}>
                      {selectedRequest.groupCategory}
                    </p>
                  </div>
                  {selectedRequest.serviceType && (
                    <div>
                      <p className="text-sm text-gray-600">Service Type (Budget)</p>
                      <p className="font-medium" style={{ color: secondaryBlack }}>
                        {selectedRequest.serviceType}
                      </p>
                    </div>
                  )}
                </div>
                {selectedRequest.specificRequirements && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-600 mb-2">Specific Requirements</p>
                    <p className="text-sm" style={{ color: secondaryBlack }}>
                      {selectedRequest.specificRequirements}
                    </p>
                  </div>
                )}
              </div>

              {/* Status Update */}
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-4" style={{ color: secondaryBlack }}>
                  Update Status
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['pending', 'contacted', 'confirmed', 'cancelled'].map((status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(selectedRequest._id, status)}
                      disabled={selectedRequest.status === status}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedRequest.status === status
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:opacity-80'
                      } ${getStatusColor(status)}`}
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;


