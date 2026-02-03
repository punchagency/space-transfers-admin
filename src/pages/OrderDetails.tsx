import { DashboardLayout } from '../components/layout/DashboardLayout';
import { OrderHeader } from '../components/orders/OrderHeader';
import { OrderSummary } from '../components/orders/OrderSummary';
import { OrderTimeline } from '../components/orders/OrderTimeline';
import { OrderFinancials } from '../components/orders/OrderFinancials';

export const OrderDetails = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <OrderHeader orderId="3243" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT COLUMN - Order Summary */}
          <div className="lg:col-span-2 space-y-6">
            <OrderSummary />
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-1 space-y-6">
            <OrderTimeline />
            <OrderFinancials />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};
