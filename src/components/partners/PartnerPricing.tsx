import { useState } from 'react';
import { FiEdit3 } from 'react-icons/fi';
import { PricingEditorModal } from './PricingEditorModal';

export const PartnerPricing = () => {
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [selectedRegions, setSelectedRegions] = useState(['West Coast', 'Northeast', 'Mid-Atlantic']);
    const [basePrintPrice, setBasePrintPrice] = useState('2.5');
    const [baseShippingPrice, setBaseShippingPrice] = useState('5');
    const [extraFees, setExtraFees] = useState([
        { id: 1, name: 'Rush Processing', value: '10' },
        { id: 2, name: 'Weekend Delivery', value: '15' }
    ]);
    const [markupType, setMarkupType] = useState('Fixed Amount');
    const [markupAmount, setMarkupAmount] = useState('1.25');

    const customerPrice = (parseFloat(basePrintPrice) || 0) + (parseFloat(markupAmount) || 0);
    const profit = parseFloat(markupAmount) || 0;

    const toggleRegion = (region: string) => {
        setSelectedRegions(prev =>
            prev.includes(region)
                ? prev.filter(r => r !== region)
                : [...prev, region]
        );
    };

    const handleSavePricing = (newData: any) => {
        setBasePrintPrice(newData.basePrintPrice);
        setBaseShippingPrice(newData.baseShippingPrice);
        setExtraFees(newData.extraFees);
        setMarkupType(newData.markupType);
        setMarkupAmount(newData.markupAmount);
        setIsEditorOpen(false);
    };

    return (
        <div className="space-y-6 animate-in fade-in duration-300">
            {/* Pricing Header */}
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h2 className="text-[16px] font-semibold text-gray-900">Pricing Management</h2>
                    <p className="text-[14px] text-gray-500">Configure base prices, extra fees, and platform markup</p>
                </div>
                <button
                    onClick={() => setIsEditorOpen(true)}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
                >
                    <FiEdit3 className="w-4 h-4" />
                    <span>Edit Pricing</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Base Pricing */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6">
                    <h3 className="text-[16px] font-semibold text-gray-900">Base Pricing</h3>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Base Print Price</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                                <input
                                    type="text"
                                    value={basePrintPrice}
                                    onChange={(e) => setBasePrintPrice(e.target.value)}
                                    className="w-full pl-8 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium text-gray-900 outline-none focus:bg-white focus:border-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Base Shipping Price</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                                <input
                                    type="text"
                                    value={baseShippingPrice}
                                    onChange={(e) => setBaseShippingPrice(e.target.value)}
                                    className="w-full pl-8 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium text-gray-900 outline-none focus:bg-white focus:border-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="flex justify-between items-center mb-4">
                                <h4 className="text-sm font-bold text-gray-900">Extra Fees</h4>
                                <button
                                    className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:underline"
                                    onClick={() => setExtraFees([...extraFees, { id: Date.now(), name: '', value: '0' }])}
                                >
                                    <span>+ Add Fee</span>
                                </button>
                            </div>
                            <div className="space-y-3">
                                {extraFees.map((fee, index) => (
                                    <div key={fee.id} className="flex gap-3">
                                        <input
                                            type="text"
                                            value={fee.name}
                                            placeholder="Fee Name"
                                            onChange={(e) => {
                                                const newFees = [...extraFees];
                                                newFees[index].name = e.target.value;
                                                setExtraFees(newFees);
                                            }}
                                            className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium text-gray-500 outline-none focus:bg-white focus:border-blue-500 transition-all"
                                        />
                                        <div className="relative w-24">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                                            <input
                                                type="text"
                                                value={fee.value}
                                                onChange={(e) => {
                                                    const newFees = [...extraFees];
                                                    newFees[index].value = e.target.value;
                                                    setExtraFees(newFees);
                                                }}
                                                className="w-full pl-8 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium text-gray-900 outline-none text-center focus:bg-white focus:border-blue-500 transition-all"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Platform Markup */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6 flex flex-col">
                    <h3 className="text-[16px] font-semibold text-gray-900">Platform Markup</h3>

                    <div className="space-y-6 flex-1">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Markup Type</label>
                            <div className="relative">
                                <select
                                    value={markupType}
                                    onChange={(e) => setMarkupType(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium text-gray-900 outline-none appearance-none cursor-pointer focus:bg-white focus:border-blue-500 transition-all"
                                >
                                    <option>Fixed Amount</option>
                                    <option>Percentage</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-700">Markup Amount</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                                <input
                                    type="text"
                                    value={markupAmount}
                                    onChange={(e) => setMarkupAmount(e.target.value)}
                                    className="w-full pl-8 pr-4 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm font-medium text-gray-900 outline-none focus:bg-white focus:border-blue-500 transition-all"
                                />
                            </div>
                        </div>

                        <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-6 space-y-2">
                            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Customer Price Preview</p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-3xl font-bold text-blue-600">${customerPrice.toFixed(2)}</span>
                            </div>
                            <p className="text-xs text-blue-500 font-medium">Your profit: ${profit.toFixed(2)} per squarefoot</p>
                        </div>
                    </div>
                </div>

                {/* Region Assignment - Across both columns */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-6">
                    <h3 className="text-[16px] font-semibold text-gray-900">Region Assignment</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                        {['West Coast', 'Northeast', 'Mid-Atlantic', 'South', 'Southeast', 'Midwest', 'Southwest', 'Pacific Northwest', 'Great Lakes'].map((region) => {
                            const isSelected = selectedRegions.includes(region);
                            return (
                                <div
                                    key={region}
                                    onClick={() => toggleRegion(region)}
                                    className={`flex items-center gap-2 px-3 py-3 border rounded-lg cursor-pointer transition-all ${isSelected ? 'border-blue-200 bg-blue-50/10' : 'bg-white border-gray-200'}`}
                                >
                                    <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-300'}`}>
                                        {isSelected && <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>}
                                    </div>
                                    <span className={`text-[11px] font-semibold leading-tight transition-colors ${isSelected ? 'text-blue-700' : 'text-gray-600'}`}>{region}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <button className="bg-blue-600 text-white px-8 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-md">
                    Save Changes
                </button>
            </div>

            <PricingEditorModal
                isOpen={isEditorOpen}
                onClose={() => setIsEditorOpen(false)}
                onSave={handleSavePricing}
                initialData={{
                    basePrintPrice,
                    baseShippingPrice,
                    extraFees,
                    markupType,
                    markupAmount
                }}
            />
        </div>
    );
};
