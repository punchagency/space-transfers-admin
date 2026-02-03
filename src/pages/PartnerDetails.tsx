import { DashboardLayout } from '../components/layout/DashboardLayout';
import { useState } from 'react';
import { PartnerHeader } from '../components/partners/PartnerHeader';
import { PartnerOverview } from '../components/partners/PartnerOverview';
import { PartnerPricing } from '../components/partners/PartnerPricing';
import { PartnerOrders } from '../components/partners/PartnerOrders';
import { PartnerSettings } from '../components/partners/PartnerSettings';
import { EditPartnerModal } from '../components/partners/EditPartnerModal';

export const PartnerDetails = () => {
    const [activeTab, setActiveTab] = useState('Overview');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const tabs = ['Overview', 'Pricing', 'Orders', 'Settings'];

    const partnerData = {
        name: 'FastPrint LA',
        email: 'contact@fastprintla.com',
        phone: '+1 (310) 555-0123',
        region: 'North America',
        status: 'Active',
        notes: 'Premium partner with high reliability.'
    };

    return (
        <>
            <DashboardLayout>
                <div className="space-y-6">
                    <PartnerHeader
                        name={partnerData.name}
                        email={partnerData.email}
                        status={partnerData.status}
                        onEdit={() => setIsEditModalOpen(true)}
                    />

                    {/* Tab Bar Container */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="flex border-b border-gray-100 px-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative px-4 py-4 text-sm font-medium transition-colors ${activeTab === tab
                                        ? 'text-blue-600'
                                        : 'text-gray-500 hover:text-gray-700'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="p-6">
                            {activeTab === 'Overview' && <PartnerOverview />}
                            {activeTab === 'Pricing' && <PartnerPricing />}
                            {activeTab === 'Orders' && <PartnerOrders />}
                            {activeTab === 'Settings' && <PartnerSettings />}
                        </div>
                    </div>
                </div>
            </DashboardLayout>

            <EditPartnerModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                partnerData={partnerData}
            />
        </>
    );
};
