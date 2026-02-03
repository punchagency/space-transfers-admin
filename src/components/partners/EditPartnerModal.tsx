import { FiX, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

interface EditPartnerModalProps {
    isOpen: boolean;
    onClose: () => void;
    partnerData: {
        name: string;
        email: string;
        phone: string;
        region: string;
        status: string;
        notes?: string;
    };
}

export const EditPartnerModal = ({ isOpen, onClose, partnerData }: EditPartnerModalProps) => {
    const [name, setName] = useState(partnerData.name);
    const [email, setEmail] = useState(partnerData.email);
    const [phone, setPhone] = useState(partnerData.phone);
    const [region, setRegion] = useState(partnerData.region);
    const [isActive, setIsActive] = useState(partnerData.status === 'Active');
    const [notes, setNotes] = useState(partnerData.notes || '');

    if (!isOpen) return null;

    const Toggle = ({ enabled, setEnabled }: { enabled: boolean; setEnabled: (v: boolean) => void }) => (
        <button
            onClick={() => setEnabled(!enabled)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${enabled ? 'bg-blue-600' : 'bg-gray-200'}`}
        >
            <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${enabled ? 'translate-x-5' : 'translate-x-0'}`}
            />
        </button>
    );

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Blur Overlay */}
            <div
                className="fixed inset-0 bg-black/20 backdrop-blur-xs transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 shrink-0">
                    <h2 className="text-xl font-bold text-gray-900">Edit Partner</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400 hover:text-gray-600"
                    >
                        <FiX className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 py-3 space-y-6 overflow-y-auto">
                    {/* Partner Name */}
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-900">
                            Partner Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-1 bg-gray-50 border border-transparent rounded-xl text-sm font-medium text-gray-900 focus:bg-white focus:border-blue-500 transition-all outline-none"
                            placeholder="John Doe Printing"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-900">
                            Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-medium text-gray-900 focus:bg-white focus:border-blue-500 transition-all outline-none"
                            placeholder="john@doeprinting.com"
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-900">
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-medium text-gray-900 focus:bg-white focus:border-blue-500 transition-all outline-none"
                            placeholder="+1 (555) 123-4567"
                        />
                    </div>

                    {/* Region */}
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-900">
                            Region <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <select
                                value={region}
                                onChange={(e) => setRegion(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-xl text-sm font-medium text-gray-900 focus:bg-white focus:border-blue-500 transition-all outline-none appearance-none cursor-pointer"
                            >
                                <option>North America</option>
                                <option>Europe</option>
                                <option>Asia</option>
                            </select>
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <FiChevronDown />
                            </div>
                        </div>
                    </div>

                    {/* Active Status */}
                    <div className="bg-gray-50/50 rounded-xl p-6 flex items-center justify-between">
                        <div className="space-y-0.5">
                            <p className="text-sm font-bold text-gray-900">Active Status</p>
                            <p className="text-[13px] text-gray-400 font-medium">Partner is currently active</p>
                        </div>
                        <Toggle enabled={isActive} setEnabled={setIsActive} />
                    </div>

                    {/* Notes */}
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-gray-500">
                            Notes <span className="text-gray-400 font-medium">(Optional)</span>
                        </label>
                        <textarea
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            rows={4}
                            placeholder="Add any additional notes about this partner..."
                            className="w-full px-4 py-4 bg-gray-50 border border-transparent rounded-xl text-sm font-medium text-gray-900 focus:bg-white focus:border-blue-500 transition-all outline-none resize-none"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-3 border-t border-gray-100 flex gap-4 shrink-0">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 px-4 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onClose}
                        className="flex-1 py-3 px-4 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};
