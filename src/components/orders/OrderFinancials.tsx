import { FiDownload, FiFileText } from 'react-icons/fi';

export const OrderFinancials = () => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Invoice & Financials</h2>

            <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Customer Paid</span>
                    <span className="font-medium text-gray-900">$45.00</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Partner Cost</span>
                    <span className="font-medium text-gray-900">$27.00</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-4 border-t border-gray-100">
                    <span className="font-semibold text-gray-900">Admin Profit</span>
                    <span className="font-bold text-green-600">$18.00</span>
                </div>
            </div>

            <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    <FiDownload className="w-4 h-4" />
                    Download Invoice
                </button>
                <button className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    <FiFileText className="w-4 h-4" />
                    Production Sheet
                </button>
            </div>
        </div>
    );
};
