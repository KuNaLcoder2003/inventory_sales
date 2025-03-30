
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Package, ShoppingBag, AlertTriangle, Calendar, BarChart2, PieChart } from 'lucide-react';

const mockData = {
  monthlySales: [
    { name: 'Jan', actual: 4000, forecast: 4100 },
    { name: 'Feb', actual: 3000, forecast: 2900 },
    { name: 'Mar', actual: 2000, forecast: 2100 },
    { name: 'Apr', actual: 2780, forecast: 2800 },
    { name: 'May', actual: 1890, forecast: 1750 },
    { name: 'Jun', actual: 2390, forecast: 2500 },
    { name: 'Jul', actual: 3490, forecast: 3400 },
    { name: 'Aug', actual: null, forecast: 4300 },
    { name: 'Sep', actual: null, forecast: 3800 },
    { name: 'Oct', actual: null, forecast: 4700 },
  ],
  topProducts: [
    { name: 'Slim Fit Jeans', sellThrough: 82, stock: 124, status: 'optimal' },
    { name: 'Casual Tees', sellThrough: 91, stock: 43, status: 'low' },
    { name: 'Summer Dresses', sellThrough: 73, stock: 212, status: 'optimal' },
    { name: 'Leather Jackets', sellThrough: 37, stock: 318, status: 'high' },
    { name: 'Athletic Wear', sellThrough: 88, stock: 76, status: 'optimal' },
  ],
  inventoryHealth: [
    { name: 'Optimal', value: 64 },
    { name: 'Overstock', value: 23 },
    { name: 'Low Stock', value: 13 },
  ],
  seasonalityTrends: [
    { month: 'Jan', outerwear: 85, casualwear: 40, formalwear: 35, activewear: 45 },
    { month: 'Feb', outerwear: 75, casualwear: 45, formalwear: 40, activewear: 50 },
    { month: 'Mar', outerwear: 55, casualwear: 55, formalwear: 45, activewear: 60 },
    { month: 'Apr', outerwear: 40, casualwear: 65, formalwear: 55, activewear: 70 },
    { month: 'May', outerwear: 25, casualwear: 80, formalwear: 60, activewear: 75 },
    { month: 'Jun', outerwear: 15, casualwear: 85, formalwear: 50, activewear: 80 },
  ],
  alerts: [
    { id: 1, message: 'Casual Tees inventory reaching critical levels', severity: 'high' },
    { id: 2, message: 'Leather Jackets showing slow movement - consider promotion', severity: 'medium' },
    { id: 3, message: 'Summer collection sell-through exceeding forecast by 12%', severity: 'info' },
  ]
};

const AppInventoryDashboard = () => {
  const [inventoryData, setInventoryData] = useState(mockData);
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('overview');

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation for the stats cards
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setAnimated(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'high': return 'bg-amber-100 text-amber-800';
      case 'low': return 'bg-red-100 text-red-800';
      case 'optimal': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAlertColor = (severity) => {
    switch(severity) {
      case 'high': return 'border-l-4 border-red-500 bg-red-50';
      case 'medium': return 'border-l-4 border-amber-500 bg-amber-50';
      case 'info': return 'border-l-4 border-blue-500 bg-blue-50';
      default: return 'border-l-4 border-gray-500 bg-gray-50';
    }
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-4 text-xl font-semibold text-gray-700">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-white">SmartStock AI</h1>
              <p className="text-blue-100">Apparel Inventory Optimization Dashboard</p>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-white bg-opacity-20 cursor-pointer rounded-md text-black hover:bg-opacity-30 transition">
                <Calendar className="inline-block mr-2 h-5 w-5" />
                Last 30 Days
              </button>
              <button className="px-4 py-2 bg-white bg-opacity-20 cursor-pointer rounded-md text-black hover:bg-opacity-30 transition">
                <BarChart2 className="inline-block mr-2 h-5 w-5" />
                Reports
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tab navigation */}
        <div className="flex border-b border-gray-200 mb-6">
          <button 
            className={`px-4 py-2 font-medium ${currentTab === 'overview' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setCurrentTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`px-4 py-2 font-medium ${currentTab === 'inventory' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setCurrentTab('inventory')}
          >
            Inventory
          </button>
          <button 
            className={`px-4 py-2 font-medium ${currentTab === 'forecast' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setCurrentTab('forecast')}
          >
            Forecasting
          </button>
          <button 
            className={`px-4 py-2 font-medium ${currentTab === 'analytics' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setCurrentTab('analytics')}
          >
            Analytics
          </button>
        </div>
        
        {/* Stats Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-all duration-500 ease-in-out ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition duration-300">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Overall Sell-Through Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">76.8%</p>
                <p className="flex items-center text-green-600 text-sm mt-2">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +5.2% from last month
                </p>
              </div>
              <div className="p-3 bg-blue-100 rounded-lg">
                <BarChart2 className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition duration-300">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Inventory Turnover</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">4.2x</p>
                <p className="flex items-center text-green-600 text-sm mt-2">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +0.3x from last quarter
                </p>
              </div>
              <div className="p-3 bg-purple-100 rounded-lg">
                <Package className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition duration-300">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Days of Inventory</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">43</p>
                <p className="flex items-center text-red-600 text-sm mt-2">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  -2 days from target
                </p>
              </div>
              <div className="p-3 bg-indigo-100 rounded-lg">
                <Calendar className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition duration-300">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">Stock Optimality</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">64%</p>
                <p className="flex items-center text-amber-600 text-sm mt-2">
                  <AlertTriangle className="h-4 w-4 mr-1" />
                  23% overstocked items
                </p>
              </div>
              <div className="p-3 bg-green-100 rounded-lg">
                <PieChart className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sales Forecast Chart */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales Performance vs AI Forecast</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={inventoryData.monthlySales}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      stroke="#3B82F6" 
                      strokeWidth={2} 
                      dot={{ r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Actual Sales"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="forecast" 
                      stroke="#8B5CF6" 
                      strokeWidth={2} 
                      strokeDasharray="5 5"
                      dot={{ r: 4 }}
                      name="AI Forecast"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Seasonality Trends */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Category Seasonality Trends</h2>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={inventoryData.seasonalityTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="outerwear" stackId="1" stroke="#2563EB" fill="#3B82F6" name="Outerwear" />
                    <Area type="monotone" dataKey="casualwear" stackId="1" stroke="#7C3AED" fill="#8B5CF6" name="Casual Wear" />
                    <Area type="monotone" dataKey="formalwear" stackId="1" stroke="#9D174D" fill="#DB2777" name="Formal Wear" />
                    <Area type="monotone" dataKey="activewear" stackId="1" stroke="#047857" fill="#059669" name="Active Wear" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* Smart Alerts */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Smart Inventory Alerts</h2>
                <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  {inventoryData.alerts.length} New
                </span>
              </div>
              <div className="space-y-3">
                {inventoryData.alerts.map(alert => (
                  <div key={alert.id} className={`${getAlertColor(alert.severity)} p-4 rounded`}>
                    <p className="text-sm">{alert.message}</p>
                    <div className="flex justify-end mt-2">
                      <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">Take Action</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Top Products */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Products Performance</h2>
              <div className="space-y-3">
                {inventoryData.topProducts.map((product, index) => (
                  <div key={index} className="flex items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
                      <div className="mt-1 flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${product.sellThrough > 80 ? 'bg-green-500' : product.sellThrough > 60 ? 'bg-blue-500' : 'bg-amber-500'}`}
                            style={{ width: `${product.sellThrough}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-xs text-gray-600">{product.sellThrough}%</span>
                      </div>
                    </div>
                    <div className="flex-none">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                        {product.stock} units
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition text-sm font-medium">
                View All Products
              </button>
            </div>
            
            {/* Inventory Health */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Inventory Health Distribution</h2>
              <div className="h-52">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={inventoryData.inventoryHealth} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={100} />
                    <Tooltip />
                    <Bar 
                      dataKey="value" 
                      barSize={20}
                      radius={[0, 4, 4, 0]}
                    >
                      {
                        inventoryData.inventoryHealth.map((entry, index) => (
                          <rect 
                            key={`cell-${index}`} 
                            fill={index === 0 ? '#059669' : index === 1 ? '#F59E0B' : '#EF4444'} 
                          />
                        ))
                      }
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppInventoryDashboard;