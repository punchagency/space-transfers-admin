import { DashboardLayout } from "../components/layout/DashboardLayout";
import { StatsGrid } from "../components/stats/StatsGrid";
import { OrdersTable } from "../components/orders/OrdersTable";
import { mockOrders } from "../data/orders";

export const Dashboard = () => (
  <DashboardLayout>
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>
      <p className="text-gray-500">
        Welcome to your DTF print management admin portal
      </p>
    </div>
    <StatsGrid />
    {/* Show only recent 5 orders */}
    <OrdersTable orders={mockOrders.slice(0, 5)} />
  </DashboardLayout>
);
