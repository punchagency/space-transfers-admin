import { useState } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { OrdersTable } from '../components/orders/OrdersTable';
import { FiSearch } from 'react-icons/fi';
import { mockOrders } from '../data/orders';

const tabs = [
  { label: 'All', count: 87 },
  { label: 'Pending', count: 14 },
  { label: 'Assigned', count: 18 },
  { label: 'Processing', count: 23 },
  { label: 'Ready to Ship', count: 12 },
  { label: 'Shipped', count: 15 },
  { label: 'Completed', count: 3 },
  { label: 'Rejected', count: 2 },
];

export const Orders = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredOrders = activeTab === 'All'
    ? mockOrders
    : mockOrders.filter(order => order.status === activeTab);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Order Management</h1>
          <p className="text-gray-500">View and manage all orders across your network</p>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-center gap-4 mx-8 bg-white pt-1 px-1 pb-0 rounded-4xl border border-gray-200 shadow-sm overflow-hidden">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`relative flex items-center gap-2 px-4 py-3 text-[14px] font-medium transition-colors whitespace-nowrap
                ${activeTab === tab.label
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:bg-gray-50'
                }
              `}
            >
              {tab.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-md ${activeTab === tab.label
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600'
                  }`}
              >
                {tab.count}
              </span>
              {activeTab === tab.label && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search orders..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl w-full text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white shadow-sm placeholder:text-gray-400"
          />
        </div>

        <OrdersTable orders={filteredOrders} />
      </div>
    </DashboardLayout>
  );
};
