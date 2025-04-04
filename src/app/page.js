"use client";
import React, { useState } from 'react';
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
              <Tool className="h-6 w-6 text-yellow-500" />
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
                <Tool className="h-8 w-8 text-yellow-600 mb-2" />
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
    </div>
  );
};

export default Dashboard;