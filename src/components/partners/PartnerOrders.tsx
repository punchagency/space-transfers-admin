import { FiSearch, FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { mockOrders } from '../../data/orders';

export const PartnerOrders = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            {/* Filters and Search */}
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 w-full">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search orders..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-100 bg-gray-50/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white focus:border-blue-500 transition-all"
                    />
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:w-40">
                        <select className="w-full pl-4 pr-10 py-2 border border-gray-100 bg-gray-50/50 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white focus:border-blue-500 transition-all">
                            <option>All Status</option>
                            <option>Assigned</option>
                            <option>Processing</option>
                            <option>Completed</option>
                            <option>Shipped</option>
                        </select>
                        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                    <div className="relative flex-1 md:w-40">
                        <select className="w-full pl-4 pr-10 py-2 border border-gray-100 bg-gray-50/50 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white focus:border-blue-500 transition-all">
                            <option>All Region</option>
                            <option>West</option>
                            <option>East</option>
                            <option>North</option>
                            <option>South</option>
                        </select>
                        <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Orders Table Container */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr className="text-[12px] font-bold text-gray-900 uppercase tracking-wider">
                                <th className="px-6 py-4">Order ID</th>
                                <th className="px-6 py-4">Customer</th>
                                <th className="px-6 py-4">Region</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-right">Printer Payout</th>
                                <th className="px-6 py-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {mockOrders.filter(row => row.partner === "FastPrint LA").map((order) => (
                                <tr key={order.id} className="text-sm hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 font-bold text-gray-900">{order.id.replace('#', '')}</td>
                                    <td className="px-6 py-4 font-bold text-gray-900">{order.customer}</td>
                                    <td className="px-6 py-4 text-gray-500">{order.region} Coast</td>
                                    <td className="px-6 py-4 text-gray-500">{order.date}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center">
                                            <span className={`px-3 py-1 rounded-md text-[11px] font-bold ${order.status === 'Completed' ? 'bg-green-50 text-green-600 border border-green-100' :
                                                order.status === 'Processing' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                                                    order.status === 'Shipped' ? 'bg-purple-50 text-purple-600 border border-purple-100' :
                                                        'bg-amber-50 text-amber-600 border border-amber-100'
                                                }`}>
                                                {order.status === 'Assigned' ? 'In Progress' : order.status}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-right font-bold text-gray-900">{order.amount}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            onClick={() => navigate(`/dashboard/orders/${order.id.replace('#', '')}`)}
                                            className="text-gray-400 font-medium hover:text-blue-600 transition-colors"
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="px-6 py-4 bg-white border-t border-gray-50 text-sm text-gray-500 italic">
                    Showing 5 of 1247 orders
                </div>
            </div>
        </div>
    );
};
