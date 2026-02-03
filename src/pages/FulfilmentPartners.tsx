import { useState, useMemo } from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { PartnersTable } from '../components/partners/PartnersTable';
import { FiPlus } from 'react-icons/fi';
import { mockPartners } from '../data/partners';
import { SelectInput } from '../components/common/SelectInput';
import { SearchInput } from '../components/common/SearchInput';

export const FulfilmentPartners = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [regionFilter, setRegionFilter] = useState('All Regions');

  const filteredPartners = useMemo(() => {
    return mockPartners.filter((partner) => {
      const matchesSearch =
        partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.email.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === 'All Status' || partner.status === statusFilter;

      const matchesRegion =
        regionFilter === 'All Regions' || partner.regions.includes(regionFilter);

      return matchesSearch && matchesStatus && matchesRegion;
    });
  }, [searchTerm, statusFilter, regionFilter]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-[24px] font-bold text-gray-900">Fulfilment Partners</h1>
            <p className="text-gray-500">Manage your DTF printing network partners</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-sm">
            <FiPlus />
            <span className='text-[14px]'>Add New Partner</span>
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center">
          <SearchInput
            placeholder="Search by name or region..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            containerClassName="flex-1 w-full"
          />

          <SelectInput
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            containerClassName="w-full md:w-48"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Pending</option>
            <option>Suspended</option>
          </SelectInput>

          <SelectInput
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            containerClassName="w-full md:w-48"
          >
            <option>All Regions</option>
            <option>South</option>
            <option>Central</option>
            <option>Midwest</option>
            <option>Pacific Northwest</option>
            <option>Southwest</option>
            <option>North-east</option>
            <option>Westcoast</option>
          </SelectInput>
        </div>

        <PartnersTable partners={filteredPartners} />
      </div>
    </DashboardLayout>
  );
};
