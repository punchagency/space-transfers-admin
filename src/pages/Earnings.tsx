import { useMemo, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { DashboardLayout } from "../components/layout/DashboardLayout";
import { StatsGrid } from "../components/stats/StatsGrid";
import { GenericTable } from "../components/common/GenericTable";
import { RevenueChartCard } from "../components/earnings/RevenueChartCard";
import { RevenueByRegionCard } from "../components/earnings/RevenueByRegionCard";
import { ProfitMarginPill } from "../components/earnings/ProfitMarginPill";
import { currency } from "../utils/formatters";
import { earningsRows, type EarningsRow } from "../data/earnings";

export const Earnings = () => {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All Statuses");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const byQuery = !q
      ? earningsRows
      : earningsRows.filter((r) => {
          return (
            r.name.toLowerCase().includes(q) || r.sku.toLowerCase().includes(q)
          );
        });

    if (status === "All Statuses") return byQuery;
    if (status === "High Margin")
      return byQuery.filter((r) => r.profitMarginPct >= 40);
    if (status === "Low Margin")
      return byQuery.filter((r) => r.profitMarginPct < 40);
    return byQuery;
  }, [query, status]);

  const columns = [
    {
      header: "Product Name",
      render: (row: EarningsRow) => (
        <div className="leading-tight">
          <div className="font-medium text-gray-900">{row.name}</div>
          <div className="text-xs text-gray-500 mt-1">{row.sku}</div>
        </div>
      ),
    },
    {
      header: "Base Cost",
      render: (row: EarningsRow) => currency(row.baseCost),
    },
    { header: "Markup %", render: (row: EarningsRow) => `${row.markupPct}%` },
    {
      header: "Final Price",
      render: (row: EarningsRow) => currency(row.finalPrice),
    },
    {
      header: "Quantity",
      render: (row: EarningsRow) => row.quantity.toString(),
    },
    {
      header: "Total Cost",
      render: (row: EarningsRow) => currency(row.totalCost),
    },
    {
      header: "Total Revenue",
      render: (row: EarningsRow) => currency(row.totalRevenue),
    },
    {
      header: "Profit",
      render: (row: EarningsRow) => (
        <span className="text-emerald-600 font-medium">
          {currency(row.profit)}
        </span>
      ),
    },
    {
      header: "Profit Margin",
      render: (row: EarningsRow) => (
        <ProfitMarginPill value={row.profitMarginPct} />
      ),
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">Earnings Dashboard</h1>
        <p className="text-gray-500">
          Configure product pricing, markup, and profit margins
        </p>
      </div>

      <StatsGrid
        cards={[
          { title: "Total Profits", value: "24", trend: "+12%" },
          { title: "Total Costs", value: "1,847", trend: "-8%" },
          { title: "Profit Earned", value: "382", trend: "-21%" },
          { title: "Total Revenue", value: "$45,293", trend: "+23%" },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          <RevenueChartCard />
        </div>
        <div className="w-[292px] flex-shrink-0">
          <RevenueByRegionCard />
        </div>
      </div>

      {/* Search + Filter row */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="relative w-full max-w-xl">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or region..."
            className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 shadow-sm placeholder:text-gray-400"
          />
        </div>

        <div className="relative">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm shadow-sm outline-none"
          >
            <option>All Statuses</option>
            <option>High Margin</option>
            <option>Low Margin</option>
          </select>
          <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>
      </div>

      <GenericTable<EarningsRow> data={filtered} columns={columns} />
    </DashboardLayout>
  );
};
