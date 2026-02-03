import { useNavigate } from "react-router-dom";
import type { Order } from "../../data/orders";
import { GenericTable } from "../common/GenericTable";

const getStatusColor = (status: string) => {
  switch (status) {
    case "Assigned":
      return "text-amber-500";
    case "Completed":
      return "text-green-500";
    case "Ready to Ship":
      return "text-gray-900";
    case "Processing":
      return "text-indigo-600";
    case "Pending":
      return "text-yellow-400";
    case "Rejected":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

export const OrdersTable = ({ orders }: { orders: Order[] }) => {
  const navigate = useNavigate();

  const columns = [
    { header: "Order ID", key: "id" as keyof Order, className: "font-medium text-gray-900" },
    { header: "Customer", key: "customer" as keyof Order, className: "text-gray-700 font-medium" },
    { header: "Region", key: "region" as keyof Order, className: "text-gray-500" },
    {
      header: "Partner",
      render: (order: Order) => (
        <span className={order.partner === "Unassigned" ? "text-gray-400 italic" : "text-gray-600"}>
          {order.partner}
        </span>
      )
    },
    {
      header: "Status",
      render: (order: Order) => (
        <span className={`font-medium ${getStatusColor(order.status)}`}>
          {order.status}
        </span>
      )
    },
    { header: "Amount", key: "amount" as keyof Order, className: "font-bold text-gray-900" },
    { header: "Profits", key: "profit" as keyof Order, className: "font-bold text-gray-900" },
    { header: "Date", key: "date" as keyof Order, className: "text-gray-500" },
    {
      header: "Action",
      render: () => (
        <button className="text-gray-400 hover:text-gray-600 font-medium text-xs uppercase tracking-wide">
          View
        </button>
      )
    },
  ];

  return (
    <GenericTable
      data={orders}
      columns={columns}
      title="Recent Orders"
      onRowClick={(order) => navigate(`/dashboard/orders/${order.id.replace('#', '')}`)}
    />
  );
};
