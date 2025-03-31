
// 

// import React, { useState, useEffect } from 'react';
// import { BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { TrendingUp, TrendingDown, Package, ShoppingBag, AlertTriangle, Calendar, BarChart2, PieChart, Menu, X, Search, Bell, User } from 'lucide-react';

// const mockData = {
//   monthlySales: [
//     { name: 'Jan', actual: 4000, forecast: 4100 },
//     { name: 'Feb', actual: 3000, forecast: 2900 },
//     { name: 'Mar', actual: 2000, forecast: 2100 },
//     { name: 'Apr', actual: 2780, forecast: 2800 },
//     { name: 'May', actual: 1890, forecast: 1750 },
//     { name: 'Jun', actual: 2390, forecast: 2500 },
//     { name: 'Jul', actual: 3490, forecast: 3400 },
//     { name: 'Aug', actual: null, forecast: 4300 },
//     { name: 'Sep', actual: null, forecast: 3800 },
//     { name: 'Oct', actual: null, forecast: 4700 },
//   ],
//   topProducts: [
//     { name: 'Slim Fit Jeans', sellThrough: 82, stock: 124, status: 'optimal' },
//     { name: 'Casual Tees', sellThrough: 91, stock: 43, status: 'low' },
//     { name: 'Summer Dresses', sellThrough: 73, stock: 212, status: 'optimal' },
//     { name: 'Leather Jackets', sellThrough: 37, stock: 318, status: 'high' },
//     { name: 'Athletic Wear', sellThrough: 88, stock: 76, status: 'optimal' },
//   ],
//   inventoryHealth: [
//     { name: 'Optimal', value: 64 },
//     { name: 'Overstock', value: 23 },
//     { name: 'Low Stock', value: 13 },
//   ],
//   seasonalityTrends: [
//     { month: 'Jan', outerwear: 85, casualwear: 40, formalwear: 35, activewear: 45 },
//     { month: 'Feb', outerwear: 75, casualwear: 45, formalwear: 40, activewear: 50 },
//     { month: 'Mar', outerwear: 55, casualwear: 55, formalwear: 45, activewear: 60 },
//     { month: 'Apr', outerwear: 40, casualwear: 65, formalwear: 55, activewear: 70 },
//     { month: 'May', outerwear: 25, casualwear: 80, formalwear: 60, activewear: 75 },
//     { month: 'Jun', outerwear: 15, casualwear: 85, formalwear: 50, activewear: 80 },
//   ],
//   alerts: [
//     { id: 1, message: 'Casual Tees inventory reaching critical levels', severity: 'high' },
//     { id: 2, message: 'Leather Jackets showing slow movement - consider promotion', severity: 'medium' },
//     { id: 3, message: 'Summer collection sell-through exceeding forecast by 12%', severity: 'info' },
//   ]
// };

// const ModernInventoryDashboard = () => {
//   const [inventoryData, setInventoryData] = useState(mockData);
//   const [loading, setLoading] = useState(true);
//   const [currentTab, setCurrentTab] = useState('overview');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     // Simulate loading data
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1200);
    
//     return () => clearTimeout(timer);
//   }, []);

//   // Animation for the stats cards
//   const [animated, setAnimated] = useState(false);
//   useEffect(() => {
//     if (!loading) {
//       const timer = setTimeout(() => {
//         setAnimated(true);
//       }, 100);
//       return () => clearTimeout(timer);
//     }
//   }, [loading]);

//   const getStatusColor = (status) => {
//     switch(status) {
//       case 'high': return 'bg-amber-100 text-amber-800';
//       case 'low': return 'bg-red-100 text-red-800';
//       case 'optimal': return 'bg-green-100 text-green-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getAlertColor = (severity) => {
//     switch(severity) {
//       case 'high': return 'border-l-4 border-red-500 bg-red-50';
//       case 'medium': return 'border-l-4 border-amber-500 bg-amber-50';
//       case 'info': return 'border-l-4 border-blue-500 bg-blue-50';
//       default: return 'border-l-4 border-gray-500 bg-gray-50';
//     }
//   };
  
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-slate-50">
//         <div className="text-center">
//           <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-violet-600 border-r-transparent"></div>
//           <p className="mt-4 text-xl font-medium text-slate-700">Loading your dashboard...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       {/* Sidebar - hidden on mobile */}
//       <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
//         <div className="flex flex-col flex-grow bg-white border-r border-slate-100 pt-5 pb-4 overflow-y-auto">
//           <div className="flex items-center flex-shrink-0 px-6">
//             <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
//               <Package className="h-6 w-6 text-white" />
//             </div>
//             <span className="ml-3 text-xl font-bold text-slate-800">SmartStock</span>
//           </div>
//           <div className="mt-8 flex-1 flex flex-col px-3">
//             <nav className="flex-1 space-y-2">
//               <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-violet-50 text-violet-700">
//                 <BarChart2 className="mr-3 h-5 w-5" />
//                 Dashboard
//               </a>
//               <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50">
//                 <Package className="mr-3 h-5 w-5" />
//                 Inventory
//               </a>
//               <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50">
//                 <ShoppingBag className="mr-3 h-5 w-5" />
//                 Products
//               </a>
//               <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50">
//                 <TrendingUp className="mr-3 h-5 w-5" />
//                 Analytics
//               </a>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <div className={`fixed inset-0 flex z-40 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
//         <div className="fixed inset-0 bg-slate-600 bg-opacity-75 transition-opacity" onClick={() => setMobileMenuOpen(false)}></div>
//         <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
//           <div className="absolute top-0 right-0 -mr-12 pt-4">
//             <button
//               className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               <X className="h-6 w-6 text-white" />
//             </button>
//           </div>
//           <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
//             <div className="flex-shrink-0 flex items-center px-4">
//               <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
//                 <Package className="h-6 w-6 text-white" />
//               </div>
//               <span className="ml-3 text-xl font-bold text-slate-800">SmartStock</span>
//             </div>
//             <nav className="mt-5 px-2 space-y-1">
//               <a href="#" className="group flex items-center px-3 py-2 text-base font-medium rounded-lg bg-violet-50 text-violet-700">
//                 <BarChart2 className="mr-3 h-5 w-5" />
//                 Dashboard
//               </a>
//               <a href="#" className="group flex items-center px-3 py-2 text-base font-medium rounded-lg text-slate-600 hover:bg-slate-50">
//                 <Package className="mr-3 h-5 w-5" />
//                 Inventory
//               </a>
//               <a href="#" className="group flex items-center px-3 py-2 text-base font-medium rounded-lg text-slate-600 hover:bg-slate-50">
//                 <ShoppingBag className="mr-3 h-5 w-5" />
//                 Products
//               </a>
//               <a href="#" className="group flex items-center px-3 py-2 text-base font-medium rounded-lg text-slate-600 hover:bg-slate-50">
//                 <TrendingUp className="mr-3 h-5 w-5" />
//                 Analytics
//               </a>
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="lg:pl-64">
//         {/* Top navbar */}
//         <div className="sticky top-0 z-10 bg-white border-b border-slate-100 lg:border-none shadow-sm lg:shadow-none">
//           <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center flex-1">
//               <button
//                 type="button"
//                 className="lg:hidden -ml-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-slate-500 hover:text-slate-900"
//                 onClick={() => setMobileMenuOpen(true)}
//               >
//                 <span className="sr-only">Open sidebar</span>
//                 <Menu className="h-6 w-6" />
//               </button>
//               <div className="max-w-2xl w-full lg:max-w-xs ml-4">
//                 <label htmlFor="search" className="sr-only">Search</label>
//                 <div className="relative text-slate-400 focus-within:text-slate-600">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <Search className="h-5 w-5" />
//                   </div>
//                   <input
//                     id="search"
//                     className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:bg-white focus:border-violet-500 focus:ring-0 focus:text-slate-900"
//                     placeholder="Search products..."
//                     type="search"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <button className="p-1 text-slate-400 rounded-full hover:text-slate-500 relative">
//                 <Bell className="h-6 w-6" />
//                 <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
//               </button>
              
//               <div className="ml-4 flex items-center md:ml-6">
//                 <div className="ml-3 relative">
//                   <div className="flex items-center">
//                     <div className="h-8 w-8 rounded-full bg-violet-500 flex items-center justify-center text-white">
//                       <User className="h-5 w-5" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Page header */}
//         <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow-sm">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-2xl font-bold text-slate-800">Apparel Inventory Dashboard</h1>
//               <p className="text-sm text-slate-500 mt-1">Optimize your inventory with AI-powered insights</p>
//             </div>
//             <div className="flex space-x-3">
//               <button className="px-4 py-2 rounded-lg text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition shadow-sm flex items-center">
//                 <Calendar className="h-4 w-4 mr-2" />
//                 Last 30 Days
//               </button>
//               <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition shadow-sm flex items-center">
//                 <BarChart2 className="h-4 w-4 mr-2" />
//                 Reports
//               </button>
//             </div>
//           </div>
//         </header>

//         <main className="px-4 sm:px-6 lg:px-8 py-8">
//           {/* Tab navigation */}
//           <div className="flex mb-6 border rounded-lg bg-white shadow-sm p-1">
//             <button 
//               className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition ${currentTab === 'overview' ? 'bg-violet-100 text-violet-800' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
//               onClick={() => setCurrentTab('overview')}
//             >
//               Overview
//             </button>
//             <button 
//               className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition ${currentTab === 'inventory' ? 'bg-violet-100 text-violet-800' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
//               onClick={() => setCurrentTab('inventory')}
//             >
//               Inventory
//             </button>
//             <button 
//               className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition ${currentTab === 'forecast' ? 'bg-violet-100 text-violet-800' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
//               onClick={() => setCurrentTab('forecast')}
//             >
//               Forecasting
//             </button>
//             <button 
//               className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition ${currentTab === 'analytics' ? 'bg-violet-100 text-violet-800' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
//               onClick={() => setCurrentTab('analytics')}
//             >
//               Analytics
//             </button>
//           </div>
          
//           {/* Stats Cards */}
//           <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-all duration-500 ease-in-out ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//             <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 transform hover:scale-105 transition duration-300 hover:shadow-md">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="text-sm font-medium text-slate-500">Overall Sell-Through Rate</p>
//                   <p className="text-3xl font-bold text-slate-800 mt-1">76.8%</p>
//                   <p className="flex items-center text-emerald-600 text-sm mt-2">
//                     <TrendingUp className="h-4 w-4 mr-1" />
//                     +5.2% from last month
//                   </p>
//                 </div>
//                 <div className="p-3 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-lg">
//                   <BarChart2 className="h-6 w-6 text-violet-500" />
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 transform hover:scale-105 transition duration-300 hover:shadow-md">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="text-sm font-medium text-slate-500">Inventory Turnover</p>
//                   <p className="text-3xl font-bold text-slate-800 mt-1">4.2x</p>
//                   <p className="flex items-center text-emerald-600 text-sm mt-2">
//                     <TrendingUp className="h-4 w-4 mr-1" />
//                     +0.3x from last quarter
//                   </p>
//                 </div>
//                 <div className="p-3 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg">
//                   <Package className="h-6 w-6 text-pink-500" />
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 transform hover:scale-105 transition duration-300 hover:shadow-md">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="text-sm font-medium text-slate-500">Days of Inventory</p>
//                   <p className="text-3xl font-bold text-slate-800 mt-1">43</p>
//                   <p className="flex items-center text-red-600 text-sm mt-2">
//                     <TrendingDown className="h-4 w-4 mr-1" />
//                     -2 days from target
//                   </p>
//                 </div>
//                 <div className="p-3 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg">
//                   <Calendar className="h-6 w-6 text-indigo-500" />
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 transform hover:scale-105 transition duration-300 hover:shadow-md">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <p className="text-sm font-medium text-slate-500">Stock Optimality</p>
//                   <p className="text-3xl font-bold text-slate-800 mt-1">64%</p>
//                   <p className="flex items-center text-amber-600 text-sm mt-2">
//                     <AlertTriangle className="h-4 w-4 mr-1" />
//                     23% overstocked items
//                   </p>
//                 </div>
//                 <div className="p-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
//                   <PieChart className="h-6 w-6 text-emerald-500" />
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           {/* Main Content Area */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Left Column */}
//             <div className="lg:col-span-2 space-y-6">
//               {/* Sales Forecast Chart */}
//               <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
//                 <h2 className="text-lg font-semibold text-slate-800 mb-4">Sales Performance vs AI Forecast</h2>
//                 <div className="h-80">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <LineChart data={inventoryData.monthlySales}>
//                       <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                       <XAxis dataKey="name" stroke="#94a3b8" />
//                       <YAxis stroke="#94a3b8" />
//                       <Tooltip contentStyle={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
//                       <Legend />
//                       <Line 
//                         type="monotone" 
//                         dataKey="actual" 
//                         stroke="#8b5cf6" 
//                         strokeWidth={3} 
//                         dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
//                         activeDot={{ r: 6, stroke: "#c4b5fd", strokeWidth: 2 }}
//                         name="Actual Sales"
//                       />
//                       <Line 
//                         type="monotone" 
//                         dataKey="forecast" 
//                         stroke="#c4b5fd" 
//                         strokeWidth={2} 
//                         strokeDasharray="5 5"
//                         dot={{ r: 4, strokeWidth: 2, fill: "#fff" }}
//                         name="AI Forecast"
//                       />
//                     </LineChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
              
//               {/* Seasonality Trends */}
//               <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
//                 <h2 className="text-lg font-semibold text-slate-800 mb-4">Category Seasonality Trends</h2>
//                 <div className="h-80">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <AreaChart data={inventoryData.seasonalityTrends}>
//                       <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                       <XAxis dataKey="month" stroke="#94a3b8" />
//                       <YAxis stroke="#94a3b8" />
//                       <Tooltip contentStyle={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
//                       <Legend />
//                       <Area type="monotone" dataKey="outerwear" stackId="1" stroke="#8b5cf6" fill="#c4b5fd" fillOpacity="0.8" name="Outerwear" />
//                       <Area type="monotone" dataKey="casualwear" stackId="1" stroke="#ec4899" fill="#f9a8d4" fillOpacity="0.8" name="Casual Wear" />
//                       <Area type="monotone" dataKey="formalwear" stackId="1" stroke="#0ea5e9" fill="#7dd3fc" fillOpacity="0.8" name="Formal Wear" />
//                       <Area type="monotone" dataKey="activewear" stackId="1" stroke="#10b981" fill="#6ee7b7" fillOpacity="0.8" name="Active Wear" />
//                     </AreaChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right Column */}
//             <div className="space-y-6">
//               {/* Smart Alerts */}
//               <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-lg font-semibold text-slate-800">Smart Inventory Alerts</h2>
//                   <span className="text-xs font-medium px-2.5 py-1 bg-violet-100 text-violet-800 rounded-full">
//                     {inventoryData.alerts.length} New
//                   </span>
//                 </div>
//                 <div className="space-y-3">
//                   {inventoryData.alerts.map(alert => (
//                     <div key={alert.id} className={`${getAlertColor(alert.severity)} p-4 rounded-lg shadow-sm`}>
//                       <p className="text-sm font-medium">{alert.message}</p>
//                       <div className="flex justify-end mt-2">
//                         <button className="text-xs text-violet-600 hover:text-violet-800 font-medium">Take Action</button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
              
//               {/* Top Products */}
//               <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
//                 <h2 className="text-lg font-semibold text-slate-800 mb-4">Top Products Performance</h2>
//                 <div className="space-y-3">
//                   {inventoryData.topProducts.map((product, index) => (
//                     <div key={index} className="p-4 border border-slate-100 rounded-lg hover:bg-slate-50 transition shadow-sm">
//                       <div className="flex justify-between items-center">
//                         <h3 className="text-sm font-medium text-slate-800">{product.name}</h3>
//                         <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
//                           {product.stock} units
//                         </span>
//                       </div>
//                       <div className="mt-2 flex items-center">
//                         <div className="w-full bg-slate-200 rounded-full h-2.5">
//                           <div 
//                             className={`h-2.5 rounded-full ${
//                               product.sellThrough > 80 ? 'bg-gradient-to-r from-emerald-400 to-emerald-500' : 
//                               product.sellThrough > 60 ? 'bg-gradient-to-r from-violet-400 to-violet-500' : 
//                               'bg-gradient-to-r from-amber-400 to-amber-500'
//                             }`}
//                             style={{ width: `${product.sellThrough}%` }}
//                           ></div>
//                         </div>
//                         <span className="ml-2 text-xs font-medium text-slate-600">{product.sellThrough}%</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-violet-50 to-indigo-50 text-violet-700 rounded-lg hover:from-violet-100 hover:to-indigo-100 transition text-sm font-medium shadow-sm">
//                   View All Products
//                 </button>
//               </div>
              
//               {/* Inventory Health */}
//               <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
//                 <h2 className="text-lg font-semibold text-slate-800 mb-4">Inventory Health Distribution</h2>
//                 <div className="h-52">
//                   <ResponsiveContainer width="100%" height="100%">
//                     <BarChart data={inventoryData.inventoryHealth} layout="vertical">
//                       <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//                       <XAxis type="number" stroke="#94a3b8" />
//                       <YAxis dataKey="name" type="category" width={100} stroke="#94a3b8" />
//                       <Tooltip contentStyle={{ borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
//                       <Bar 
//                         dataKey="value" 
//                         barSize={20}
//                         radius={[0, 6, 6, 0]}
//                       >
//                         {
//                           inventoryData.inventoryHealth.map((entry, index) => (
//                             <rect 
//                               key={`cell-${index}`} 
//                               fill={
//                                 index === 0 ? '#10b981' : 
//                                 index === 1 ? '#f59e0b' : 
//                                 '#ef4444'
//                               } 
//                             />
//                           ))
//                         }
//                       </Bar>
//                     </BarChart>
//                   </ResponsiveContainer>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default ModernInventoryDashboard;





import React, { useState, useEffect } from 'react';
import { BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Package, ShoppingBag, AlertTriangle, Calendar, BarChart2, PieChart, Menu, X, Search, Bell, User } from 'lucide-react';

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

const DarkInventoryDashboard = () => {
  const [inventoryData, setInventoryData] = useState(mockData);
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      case 'high': return 'bg-amber-900 text-amber-100';
      case 'low': return 'bg-red-900 text-red-100';
      case 'optimal': return 'bg-green-900 text-green-100';
      default: return 'bg-gray-800 text-gray-100';
    }
  };

  const getAlertColor = (severity) => {
    switch(severity) {
      case 'high': return 'border-l-4 border-red-500 bg-red-900/30';
      case 'medium': return 'border-l-4 border-amber-500 bg-amber-900/30';
      case 'info': return 'border-l-4 border-blue-500 bg-blue-900/30';
      default: return 'border-l-4 border-gray-500 bg-gray-800/30';
    }
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
        <div className="text-center">
          <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-violet-500 border-r-transparent"></div>
          <p className="mt-4 text-xl font-medium text-gray-300">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 font-sans text-gray-200">
      {/* Sidebar - hidden on mobile */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-gray-900 border-r border-gray-800 pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
              <Package className="h-6 w-6 text-white" />
            </div>
            <span className="ml-3 text-xl font-bold text-gray-100">SmartStock</span>
          </div>
          <div className="mt-8 flex-1 flex flex-col px-3">
            <nav className="flex-1 space-y-2">
              <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg bg-violet-900/40 text-violet-100">
                <BarChart2 className="mr-3 h-5 w-5" />
                Dashboard
              </a>
              <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800">
                <Package className="mr-3 h-5 w-5" />
                Inventory
              </a>
              <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800">
                <ShoppingBag className="mr-3 h-5 w-5" />
                Products
              </a>
              <a href="#" className="group flex items-center px-3 py-2 text-sm font-medium rounded-lg text-gray-300 hover:bg-gray-800">
                <TrendingUp className="mr-3 h-5 w-5" />
                Analytics
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 flex z-40 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-900">
          <div className="absolute top-0 right-0 -mr-12 pt-4">
            <button
              className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
            <div className="flex-shrink-0 flex items-center px-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <Package className="h-6 w-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-gray-100">SmartStock</span>
            </div>
            <nav className="mt-5 px-2 space-y-1">
              <a href="#" className="group flex items-center px-3 py-2 text-base font-medium rounded-lg bg-violet-900/40 text-violet-100">
                <BarChart2 className="mr-3 h-5 w-5" />
                Dashboard
              </a>
              <a href="#" className="group flex items-center px-3 py-2 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800">
                <Package className="mr-3 h-5 w-5" />
                Inventory
              </a>
              <a href="#" className="group flex items-center px-3 py-2 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800">
                <ShoppingBag className="mr-3 h-5 w-5" />
                Products
              </a>
              <a href="#" className="group flex items-center px-3 py-2 text-base font-medium rounded-lg text-gray-300 hover:bg-gray-800">
                <TrendingUp className="mr-3 h-5 w-5" />
                Analytics
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top navbar */}
        <div className="sticky top-0 z-10 bg-gray-900 border-b border-gray-800 shadow-lg">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center flex-1">
              <button
                type="button"
                className="lg:hidden -ml-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-gray-200"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Menu className="h-6 w-6" />
              </button>
              <div className="max-w-2xl w-full lg:max-w-xs ml-4">
                <label htmlFor="search" className="sr-only">Search</label>
                <div className="relative text-gray-400 focus-within:text-gray-300">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5" />
                  </div>
                  <input
                    id="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-lg leading-5 bg-gray-800 placeholder-gray-500 focus:outline-none focus:bg-gray-700 focus:border-violet-500 focus:ring-0 focus:text-gray-100"
                    placeholder="Search products..."
                    type="search"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-1 text-gray-400 rounded-full hover:text-gray-200 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center text-white">
                      <User className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page header */}
        <header className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 shadow-md">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-100">Apparel Inventory Dashboard</h1>
              <p className="text-sm text-gray-400 mt-1">Optimize your inventory with AI-powered insights</p>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 bg-gray-800 border border-gray-700 hover:bg-gray-700 transition shadow-md flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Last 30 Days
              </button>
              <button className="px-4 py-2 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 transition shadow-md flex items-center">
                <BarChart2 className="h-4 w-4 mr-2" />
                Reports
              </button>
            </div>
          </div>
        </header>

        <main className="px-4 sm:px-6 lg:px-8 py-8">
          {/* Tab navigation */}
          <div className="flex mb-6 border rounded-lg bg-gray-900 shadow-md border-gray-800 p-1">
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition ${currentTab === 'overview' ? 'bg-violet-900/50 text-violet-100' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'}`}
              onClick={() => setCurrentTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition ${currentTab === 'inventory' ? 'bg-violet-900/50 text-violet-100' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'}`}
              onClick={() => setCurrentTab('inventory')}
            >
              Inventory
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition ${currentTab === 'forecast' ? 'bg-violet-900/50 text-violet-100' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'}`}
              onClick={() => setCurrentTab('forecast')}
            >
              Forecasting
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium rounded-md flex-1 transition ${currentTab === 'analytics' ? 'bg-violet-900/50 text-violet-100' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'}`}
              onClick={() => setCurrentTab('analytics')}
            >
              Analytics
            </button>
          </div>
          
          {/* Stats Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 transition-all duration-500 ease-in-out ${animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="bg-gray-900 rounded-xl shadow-md border border-gray-800 p-6 transform hover:scale-105 transition duration-300 hover:shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-400">Overall Sell-Through Rate</p>
                  <p className="text-3xl font-bold text-gray-100 mt-1">76.8%</p>
                  <p className="flex items-center text-emerald-400 text-sm mt-2">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +5.2% from last month
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-br from-violet-900/30 to-indigo-900/30 rounded-lg">
                  <BarChart2 className="h-6 w-6 text-violet-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl shadow-md border border-gray-800 p-6 transform hover:scale-105 transition duration-300 hover:shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-400">Inventory Turnover</p>
                  <p className="text-3xl font-bold text-gray-100 mt-1">4.2x</p>
                  <p className="flex items-center text-emerald-400 text-sm mt-2">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +0.3x from last quarter
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-br from-pink-900/30 to-rose-900/30 rounded-lg">
                  <Package className="h-6 w-6 text-pink-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl shadow-md border border-gray-800 p-6 transform hover:scale-105 transition duration-300 hover:shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-400">Days of Inventory</p>
                  <p className="text-3xl font-bold text-gray-100 mt-1">43</p>
                  <p className="flex items-center text-red-400 text-sm mt-2">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    -2 days from target
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-lg">
                  <Calendar className="h-6 w-6 text-indigo-400" />
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-xl shadow-md border border-gray-800 p-6 transform hover:scale-105 transition duration-300 hover:shadow-lg">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-400">Stock Optimality</p>
                  <p className="text-3xl font-bold text-gray-100 mt-1">64%</p>
                  <p className="flex items-center text-amber-400 text-sm mt-2">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    23% overstocked items
                  </p>
                </div>
                <div className="p-3 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-lg">
                  <PieChart className="h-6 w-6 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Sales Forecast Chart */}
              <div className="bg-gray-900 rounded-xl shadow-md border border-gray-800 p-6">
                <h2 className="text-lg font-semibold text-gray-100 mb-4">Sales Performance vs AI Forecast</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={inventoryData.monthlySales}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip contentStyle={{ borderRadius: '0.5rem', backgroundColor: '#1f2937', borderColor: '#374151', color: '#f9fafb' }} />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="actual" 
                        stroke="#8b5cf6" 
                        strokeWidth={3} 
                        dot={{ r: 4, strokeWidth: 2, fill: "#111827" }}
                        activeDot={{ r: 6, stroke: "#c4b5fd", strokeWidth: 2 }}
                        name="Actual Sales"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="forecast" 
                        stroke="#a78bfa" 
                        strokeWidth={2} 
                        strokeDasharray="5 5"
                        dot={{ r: 4, strokeWidth: 2, fill: "#111827" }}
                        name="AI Forecast"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Seasonality Trends */}
              <div className="bg-gray-900 rounded-xl shadow-md border border-gray-800 p-6">
                <h2 className="text-lg font-semibold text-gray-100 mb-4">Category Seasonality Trends</h2>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={inventoryData.seasonalityTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="month" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip contentStyle={{ borderRadius: '0.5rem', backgroundColor: '#1f2937', borderColor: '#374151', color: '#f9fafb' }} />
                      <Legend />
                      <Area type="monotone" dataKey="outerwear" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity="0.4" name="Outerwear" />
                      <Area type="monotone" dataKey="casualwear" stackId="1" stroke="#ec4899" fill="#ec4899" fillOpacity="0.4" name="Casual Wear" />
                      <Area type="monotone" dataKey="formalwear" stackId="1" stroke="#38bdf8" fill="#38bdf8" fillOpacity="0.4" name="Formal Wear" />
                      <Area type="monotone" dataKey="activewear" stackId="1" stroke="#34d399" fill="#34d399" fillOpacity="0.4" name="Active Wear" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Smart Alerts */}
              <div className="bg-gray-900 rounded-xl shadow-md border border-gray-800 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-100">Smart Inventory Alerts</h2>
                  <span className="text-xs font-medium px-2.5 py-1 bg-violet-900/40 text-violet-100 rounded-full">
                    {inventoryData.alerts.length} New
                  </span>
                </div>
                <div className="space-y-3">
                  {inventoryData.alerts.map(alert => (
                    <div key={alert.id} className={`${getAlertColor(alert.severity)} p-4 rounded-lg shadow-md`}>
                      <p className="text-sm font-medium text-gray-200">{alert.message}</p>
                      <div className="flex justify-end mt-2">
                        <button className="text-xs text-violet-400 hover:text-violet-300 font-medium">Take Action</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Top Products */}
              <div className="bg-gray-900 rounded-xl shadow-md border border-gray-800 p-6">
                <h2 className="text-lg font-semibold text-gray-100 mb-4">Top Products Performance</h2>
                <div className="space-y-3">
                  {inventoryData.topProducts.map((product, index) => (
                    <div key={index} className="p-4 border border-gray-800 rounded-lg hover:bg-gray-800 transition shadow-md">
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium text-gray-200">{product.name}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                          {product.stock} units
                        </span>
                      </div>
                      <div className="mt-2 flex items-center">
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <div 
                            className={`h-2.5 rounded-full ${
                              product.sellThrough > 80 ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' : 
                              product.sellThrough > 60 ? 'bg-gradient-to-r from-violet-600 to-violet-400' : 
                              'bg-gradient-to-r from-amber-600 to-amber-400'
                            }`}
                            style={{ width: `${product.sellThrough}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-xs font-medium text-gray-400">{product.sellThrough}%</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-gray-800 text-violet-300 rounded-lg hover:bg-gray-700 transition text-sm font-medium shadow-md border border-gray-700">
                  View All Products
                </button>
              </div>
              
              {/* Inventory Health */}
              <div className="bg-gray-900 rounded-xl shadow-md border border-gray-800 p-6">
                <h2 className="text-lg font-semibold text-gray-100 mb-4">Inventory Health Distribution</h2>
                <div className="h-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={inventoryData.inventoryHealth} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis type="number" stroke="#9ca3af" />
                      <YAxis dataKey="name" type="category" width={100} stroke="#9ca3af" />
                      <Tooltip contentStyle={{ borderRadius: '0.5rem', backgroundColor: '#1f2937', borderColor: '#374151', color: '#f9fafb' }} />
                      <Bar 
                        dataKey="value" 
                        barSize={20}
                        radius={[0, 6, 6, 0]}
                      >
                        {
                          inventoryData.inventoryHealth.map((entry, index) => (
                            <rect 
                              key={`cell-${index}`} 
                              fill={
                                index === 0 ? '#10b981' : 
                                index === 1 ? '#f59e0b' : 
                                '#ef4444'
                              } 
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
        </main>
      </div>
    </div>
  );
};

export default DarkInventoryDashboard;