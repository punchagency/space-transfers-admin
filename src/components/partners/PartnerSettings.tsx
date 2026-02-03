import { useState } from 'react';

export const PartnerSettings = () => {
    const [maxSheets, setMaxSheets] = useState('500');
    const [cutOffTime, setCutOffTime] = useState('');
    const [isWeekendAvailable, setIsWeekendAvailable] = useState(true);
    const [isPartnerActive, setIsPartnerActive] = useState(true);
    const [isAutoAssignmentEnabled, setIsAutoAssignmentEnabled] = useState(true);

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
        <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Production Settings Card */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 space-y-8">
                    <h2 className="text-[16px] font-bold text-gray-900">Production Settings</h2>

                    <div className="space-y-6">
                        {/* Max Sheets */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Max Sheets Per Day</label>
                            <input
                                type="text"
                                value={maxSheets}
                                onChange={(e) => setMaxSheets(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg text-sm font-medium text-gray-900 focus:bg-white focus:border-blue-500 transition-all outline-none"
                            />
                            <p className="text-[13px] text-gray-400 font-medium">Maximum daily capacity for this partner</p>
                        </div>

                        {/* Cut-off Time */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-gray-900">Cut-off Time</label>
                            <input
                                type="text"
                                value={cutOffTime}
                                placeholder="e.g. 2:00 PM"
                                onChange={(e) => setCutOffTime(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-transparent rounded-lg text-sm font-medium text-gray-900 focus:bg-white focus:border-blue-500 transition-all outline-none"
                            />
                            <p className="text-[13px] text-gray-400 font-medium">Orders received after this time will be processed next day</p>
                        </div>

                        {/* Weekend Availability */}
                        <div className="flex items-center justify-between pt-2">
                            <div className="space-y-0.5">
                                <label className="text-sm font-bold text-gray-900">Weekend Availability</label>
                                <p className="text-[13px] text-gray-400 font-medium">Accept orders on weekends</p>
                            </div>
                            <Toggle enabled={isWeekendAvailable} setEnabled={setIsWeekendAvailable} />
                        </div>
                    </div>
                </div>

                {/* Account Settings Card */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 space-y-8 h-fit">
                    <h2 className="text-[16px] font-bold text-gray-900">Account Settings</h2>

                    <div className="space-y-8">
                        {/* Activate/Deactivate */}
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <label className="text-sm font-bold text-gray-900">Activate/Deactivate Partner</label>
                                <p className="text-[13px] text-gray-400 font-medium">Control whether this partner can receive orders</p>
                            </div>
                            <Toggle enabled={isPartnerActive} setEnabled={setIsPartnerActive} />
                        </div>

                        {/* Auto-Assignment */}
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <label className="text-sm font-bold text-gray-900">Enable Auto-Assignment</label>
                                <p className="text-[13px] text-gray-400 font-medium">Automatically assign orders to this partner</p>
                            </div>
                            <Toggle enabled={isAutoAssignmentEnabled} setEnabled={setIsAutoAssignmentEnabled} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4">
                <button className="bg-blue-600 text-white px-8 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-md">
                    Save Settings
                </button>
            </div>
        </div>
    );
};
