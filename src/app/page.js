"use client";
import React, { useState } from 'react';
<<<<<<< HEAD
import { Lock, User } from 'lucide-react';
import Image from 'next/image';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    // Here you would typically call an authentication API
    console.log('Login attempted with:', { username, password });
    setError('');
    
    // For demonstration purposes, we'll redirect to the dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="relative w-32 h-32">
              {/* This would be replaced with your actual logo image */}
              <Image 
                src="/strata-logo.png" 
                alt="Strata Management Logo"
                width={128}
                height={128}
                className="rounded-lg"
              />
            </div>
          </div>
          
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            StrataSphere
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Strata Management Portal for NSW Buildings
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
              {error}
            </div>
          )}
          
          <div className="rounded-md -space-y-px">
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
                  placeholder="Enter your password"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
=======
import { 
  Home, 
  CreditCard, 
  Wrench, 
  FileText, 
  Users, 
  LogOut,
  Bell,
  Calendar,
  Building,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Dashboard = () => {
  // State for notifications
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Annual General Meeting scheduled for May 15", type: "info", date: "2025-04-02" },
    { id: 2, message: "New maintenance request from Unit 305", type: "alert", date: "2025-04-03" },
    { id: 3, message: "Quarterly fee payments due by April 30", type: "warning", date: "2025-04-01" },
  ]);

  // State for upcoming events
  const [events, setEvents] = useState([
    { id: 1, title: "Annual General Meeting", date: "2025-05-15", location: "Community Room" },
    { id: 2, title: "Building Inspection", date: "2025-04-20", location: "All Common Areas" },
    { id: 3, title: "Strata Committee Meeting", date: "2025-04-12", location: "Management Office" },
  ]);

  // State for maintenance stats
  const [maintenanceStats, setMaintenanceStats] = useState({
    open: 5,
    inProgress: 3,
    completed: 12,
    urgent: 2
  });

  // State for financial summary
  const [financialSummary, setFinancialSummary] = useState({
    adminFund: 125842.00,
    capitalWorksFund: 347910.00,
    outstandingLevies: 15750.00
  });

  // Format money
  const formatMoney = (amount) => {
    return new Intl.NumberFormat('en-AU', {
      style: 'currency',
      currency: 'AUD'
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Image src="/strata-logo.png" alt="StrataSphere Logo" width={40} height={40} className="rounded" />
              <h1 className="text-xl font-bold text-gray-900">StrataSphere</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Admin</span>
              <button className="flex items-center space-x-1 bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white text-sm">
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-12">
            <Link href="/dashboard" className="flex items-center px-4 h-full bg-gray-900">
              <Home size={16} className="mr-2" />
              <span>Dashboard</span>
            </Link>
            <Link href="/financial" className="flex items-center px-4 h-full hover:bg-gray-700">
              <CreditCard size={16} className="mr-2" />
              <span>Financials</span>
            </Link>
            <Link href="/maintenance" className="flex items-center px-4 h-full hover:bg-gray-700">
              <Wrench size={16} className="mr-2" />
              <span>Maintenance</span>
            </Link>
            <Link href="/documents" className="flex items-center px-4 h-full hover:bg-gray-700">
              <FileText size={16} className="mr-2" />
              <span>Documents</span>
            </Link>
            <Link href="/community" className="flex items-center px-4 h-full hover:bg-gray-700">
              <Users size={16} className="mr-2" />
              <span>Community</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard Overview</h2>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-5 border-l-4 border-blue-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium text-gray-800">Admin Fund</h3>
              <DollarSign className="h-6 w-6 text-blue-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{formatMoney(financialSummary.adminFund)}</p>
            <p className="text-sm text-gray-500 mt-1">Last updated: April 1, 2025</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-5 border-l-4 border-green-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium text-gray-800">Capital Works</h3>
              <Building className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{formatMoney(financialSummary.capitalWorksFund)}</p>
            <p className="text-sm text-gray-500 mt-1">Last updated: April 1, 2025</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-5 border-l-4 border-yellow-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium text-gray-800">Maintenance</h3>
              <Wrench className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-sm text-gray-600">Open</p>
                <p className="text-xl font-bold text-blue-600">{maintenanceStats.open}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Urgent</p>
                <p className="text-xl font-bold text-red-600">{maintenanceStats.urgent}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-5 border-l-4 border-red-500">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium text-gray-800">Outstanding Levies</h3>
              <AlertTriangle className="h-6 w-6 text-red-500" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{formatMoney(financialSummary.outstandingLevies)}</p>
            <p className="text-sm text-gray-500 mt-1">From 4 owners</p>
          </div>
        </div>
        
        {/* Notifications & Calendar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Notifications */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-200 flex items-center">
              <Bell className="text-blue-500 mr-2" size={20} />
              <h3 className="text-lg font-medium text-gray-800">Recent Notifications</h3>
            </div>
            <div className="p-4">
              <ul className="divide-y divide-gray-200">
                {notifications.map(note => (
                  <li key={note.id} className="py-3 flex items-start">
                    <div className={`flex-shrink-0 h-3 w-3 rounded-full mt-2 mr-3 ${
                      note.type === 'alert' ? 'bg-red-500' : 
                      note.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">{note.message}</p>
                      <p className="text-xs text-gray-500">{new Date(note.date).toLocaleDateString()}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
                View all notifications
                <ArrowRight className="ml-1" size={14} />
              </button>
            </div>
          </div>
          
          {/* Upcoming Events */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-5 py-4 bg-gray-50 border-b border-gray-200 flex items-center">
              <Calendar className="text-purple-500 mr-2" size={20} />
              <h3 className="text-lg font-medium text-gray-800">Upcoming Events</h3>
            </div>
            <div className="p-4">
              <ul className="divide-y divide-gray-200">
                {events.map(event => (
                  <li key={event.id} className="py-3">
                    <div className="flex">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-800 rounded-md flex flex-col items-center justify-center mr-4">
                        <span className="text-xs font-medium">{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
                        <span className="text-lg font-bold">{new Date(event.date).getDate()}</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{event.title}</h4>
                        <p className="text-xs text-gray-500">{event.location}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="mt-2 text-sm font-medium text-purple-600 hover:text-purple-500 flex items-center">
                View full calendar
                <ArrowRight className="ml-1" size={14} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Building Information */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200 flex items-center">
            <Building className="text-gray-700 mr-2" size={20} />
            <h3 className="text-lg font-medium text-gray-800">Building Information</h3>
          </div>
          <div className="p-5">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-4 md:mb-0 md:pr-4">
                <Image 
                  src="/building-photo.jpg" 
                  alt="Building Photo" 
                  width={400}
                  height={300}
                  className="rounded-lg w-full h-auto shadow" 
                />
              </div>
              <div className="md:w-2/3">
                <h4 className="text-lg font-medium mb-2 text-gray-800">Oceanview Apartments</h4>
                <p className="mb-4 text-gray-700">12-story strata property with 48 residential units and 5 commercial spaces on the ground floor, located in Bondi, NSW.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border p-3 rounded-md bg-blue-50">
                    <h5 className="font-medium text-gray-800">Strata Committee</h5>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li><span className="font-medium">Chairperson:</span> Sarah Johnson</li>
                      <li><span className="font-medium">Secretary:</span> Michael Wong</li>
                      <li><span className="font-medium">Treasurer:</span> David Chen</li>
                    </ul>
                  </div>
                  <div className="border p-3 rounded-md bg-green-50">
                    <h5 className="font-medium text-gray-800">Building Manager</h5>
                    <ul className="mt-2 space-y-1 text-gray-700">
                      <li><span className="font-medium">Name:</span> Robert Smith</li>
                      <li><span className="font-medium">Phone:</span> 0412 345 678</li>
                      <li><span className="font-medium">Email:</span> manager@example.com</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Maintenance Status */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-5 py-4 bg-gray-50 border-b border-gray-200 flex items-center">
            <Wrench className="text-yellow-600 mr-2" size={20} />
            <h3 className="text-lg font-medium text-gray-800">Maintenance Status</h3>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="border rounded-lg p-3 bg-blue-50 flex flex-col items-center">
                <Clock className="h-8 w-8 text-blue-600 mb-2" />
                <span className="text-lg font-bold text-gray-800">{maintenanceStats.open}</span>
                <span className="text-sm text-gray-600">Open</span>
              </div>
              <div className="border rounded-lg p-3 bg-yellow-50 flex flex-col items-center">
                <Wrench className="h-8 w-8 text-yellow-600 mb-2" />
                <span className="text-lg font-bold text-gray-800">{maintenanceStats.inProgress}</span>
                <span className="text-sm text-gray-600">In Progress</span>
              </div>
              <div className="border rounded-lg p-3 bg-green-50 flex flex-col items-center">
                <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
                <span className="text-lg font-bold text-gray-800">{maintenanceStats.completed}</span>
                <span className="text-sm text-gray-600">Completed</span>
              </div>
              <div className="border rounded-lg p-3 bg-red-50 flex flex-col items-center">
                <AlertTriangle className="h-8 w-8 text-red-600 mb-2" />
                <span className="text-lg font-bold text-gray-800">{maintenanceStats.urgent}</span>
                <span className="text-sm text-gray-600">Urgent</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Link href="/maintenance" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-600 hover:bg-yellow-700 flex items-center">
                <Wrench className="mr-2 h-4 w-4" />
                View Maintenance Requests
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-sm">&copy; 2025 StrataSphere. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-sm text-gray-300 hover:text-white">Terms</Link>
              <Link href="/privacy" className="text-sm text-gray-300 hover:text-white">Privacy</Link>
              <Link href="/contact" className="text-sm text-gray-300 hover:text-white">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
>>>>>>> 9f5ae35cb0f8aa255c12524e1abf1b9aad7ad8e9
    </div>
  );
};

<<<<<<< HEAD
export default LoginPage;
=======
export default Dashboard;
>>>>>>> 9f5ae35cb0f8aa255c12524e1abf1b9aad7ad8e9
