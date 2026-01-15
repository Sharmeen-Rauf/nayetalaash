'use client';

import { useState } from 'react';

export default function SetupAdminPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const createAdmin = async () => {
    setStatus('loading');
    setMessage('Creating admin user...');

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

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Admin user created successfully!');
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to create admin user');
      }
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Unknown error occurred');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Admin Setup
        </h1>

        {status === 'idle' && (
          <div className="space-y-4">
            <p className="text-gray-600 text-center">
              Click the button below to create the admin user.
            </p>
            <button
              onClick={createAdmin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Create Admin User
            </button>
          </div>
        )}

        {status === 'loading' && (
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600">{message}</p>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 font-semibold mb-2">✅ Success!</p>
              <p className="text-green-700">{message}</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 font-semibold mb-2">Login Credentials:</p>
              <p className="text-blue-700">
                <strong>Username:</strong> admin<br />
                <strong>Password:</strong> nayetalaash2026project
              </p>
            </div>
            <a
              href="/admin"
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
            >
              Go to Admin Dashboard
            </a>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-semibold mb-2">❌ Error</p>
              <p className="text-red-700">{message}</p>
            </div>
            <button
              onClick={createAdmin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


