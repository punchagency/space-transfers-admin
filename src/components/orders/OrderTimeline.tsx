import { FiCheck } from 'react-icons/fi';

export const OrderTimeline = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Order Status Timeline</h2>

            <div className="relative pl-4 border-l-2 border-gray-100 space-y-8 ml-2">

                {/* Step 1: Received */}
                <div className="relative">
                    <div className="absolute -left-[29px] bg-green-100 rounded-full p-1">
                        <div className="bg-green-500 rounded-full p-0.5 text-white">
                            <FiCheck size={12} />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">Order Received</p>
                        <p className="text-xs text-gray-500">Dec 3, 10:24 AM</p>
                    </div>
                </div>

                {/* Step 2: Payment Verified */}
                <div className="relative">
                    <div className="absolute -left-[29px] bg-green-100 rounded-full p-1">
                        <div className="bg-green-500 rounded-full p-0.5 text-white">
                            <FiCheck size={12} />
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">Payment Verified</p>
                        <p className="text-xs text-gray-500">Dec 3, 10:25 AM</p>
                    </div>
                </div>

                {/* Step 3: Assigned (Active) */}
                <div className="relative">
                    <div className="absolute -left-[29px] bg-blue-100 rounded-full p-1">
                        <div className="bg-blue-500 rounded-full w-4 h-4 border-2 border-white"></div>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-blue-600">Assigned to Partner</p>
                        <p className="text-xs text-gray-500">Dec 3, 10:32 AM</p>
                    </div>
                </div>

                {/* Step 4: In Production */}
                <div className="relative">
                    <div className="absolute -left-[23px] top-1 bg-gray-200 rounded-full w-3 h-3 border-2 border-white ring-1 ring-gray-100"></div>
                    <div>
                        <p className="text-sm font-medium text-gray-400">In Production</p>
                        <p className="text-xs text-gray-500">-</p>
                    </div>
                </div>

                {/* Step 5: Ready to Ship */}
                <div className="relative">
                    <div className="absolute -left-[23px] top-1 bg-gray-200 rounded-full w-3 h-3 border-2 border-white ring-1 ring-gray-100"></div>
                    <div>
                        <p className="text-sm font-medium text-gray-400">Ready to Ship</p>
                        <p className="text-xs text-gray-500">-</p>
                    </div>
                </div>

                {/* Step 6: Shipped */}
                <div className="relative">
                    <div className="absolute -left-[23px] top-1 bg-gray-200 rounded-full w-3 h-3 border-2 border-white ring-1 ring-gray-100"></div>
                    <div>
                        <p className="text-sm font-medium text-gray-400">Shipped</p>
                        <p className="text-xs text-gray-500">-</p>
                    </div>
                </div>

            </div>
        </div>
    );
};
