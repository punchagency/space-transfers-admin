import { FiBriefcase, FiMail, FiPhone, FiMapPin, FiGlobe } from 'react-icons/fi';

export const PartnerOverview = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Company Information */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6">
                <h2 className="text-md font-bold text-gray-900">Company Information</h2>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 shrink-0">
                            <FiBriefcase className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[12px] text-gray-400 font-medium">Business Name</p>
                            <p className="text-sm font-semibold text-gray-900">FastPrint LA</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 shrink-0">
                            <FiMail className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[12px] text-gray-400 font-medium">Email</p>
                            <p className="text-sm font-semibold text-gray-900">contact@fastprintla.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 shrink-0">
                            <FiPhone className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[12px] text-gray-400 font-medium">Phone</p>
                            <p className="text-sm font-semibold text-gray-900">+1 (310) 555-0123</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 shrink-0">
                            <FiMapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[12px] text-gray-400 font-medium">Address</p>
                            <p className="text-sm font-semibold text-gray-900">1234 Print Ave, Los Angeles, CA 90001</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 shrink-0">
                            <FiGlobe className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[12px] text-gray-400 font-medium">Website</p>
                            <p className="text-sm font-semibold text-gray-900">www.fastprintla.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 shrink-0">
                            <FiMapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[12px] text-gray-400 font-medium mb-2">Regions Covered</p>
                            <div className="flex flex-wrap gap-2">
                                {['Northwest', 'Southwest', 'Pacific Northwest'].map(region => (
                                    <span key={region} className="px-3 py-1 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-500">
                                        {region}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6 h-fit">
                <h2 className="text-md font-bold text-gray-900">System Status</h2>
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">Status</span>
                        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-[12px] font-bold border border-green-100">
                            Active
                        </span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">Capacity</span>
                        <span className="text-sm font-bold text-gray-900">500 sheets/day</span>
                    </div>
                    <div className="flex justify-between items-start">
                        <span className="text-sm font-medium text-gray-500">Supported Sheet Sizes</span>
                        <div className="flex flex-wrap justify-end gap-2 max-w-[200px]">
                            {['8.5x11', '11x17', '13x19'].map(size => (
                                <span key={size} className="px-2 py-1 bg-gray-50 text-gray-600 rounded-md text-[11px] font-medium border border-gray-100">
                                    {size}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-start">
                        <span className="text-sm font-medium text-gray-500">Shipping Carriers</span>
                        <div className="text-right space-y-1">
                            <p className="text-sm font-bold text-gray-900">USPS Priority</p>
                            <p className="text-sm font-bold text-gray-900">FedEx Ground</p>
                            <p className="text-sm font-bold text-gray-900">UPS 2-Day</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Performance */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6 h-fit">
                <h2 className="text-md font-bold text-gray-900">Performance</h2>
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">Total Orders Completed</span>
                        <span className="text-sm font-bold text-gray-900">1,247</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">Average Production Time</span>
                        <span className="text-sm font-bold text-gray-900">24-48 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">On-Time Delivery Rate</span>
                        <span className="text-sm font-bold text-gray-900">98%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-500">Rating</span>
                        <span className="text-sm font-bold text-gray-900">4.9</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
