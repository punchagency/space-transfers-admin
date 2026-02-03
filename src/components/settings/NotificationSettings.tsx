import { useState } from "react";

export const NotificationSettings = () => {
  const [notificationSettings, setNotificationSettings] = useState({
    email: {
      newOrder: true,
      lowBalance: true,
      printError: true,
      orderShipped: true,
      paymentFailed: true,
      newPartner: false,
      dailySummary: false,
    },
    sms: {
      urgentOrders: true,
      systemDowntime: true,
    },
  });

  const toggleNotification = (type: "email" | "sms", key: string) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        // @ts-expect-error: Dynamic key access
        [key]: !prev[type][key],
      },
    }));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Email Notifications */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Email Notifications
        </h2>

        <div className="space-y-3">
          {[
            {
              id: "newOrder",
              label: "New Order Placed",
              desc: "Notify when a customer places an order",
            },
            {
              id: "lowBalance",
              label: "Low Partner Balance",
              desc: "Alert when partner balance is running low",
            },
            {
              id: "printError",
              label: "Print Error Reported",
              desc: "Notify when a partner reports a printing issue",
            },
            {
              id: "orderShipped",
              label: "Order Shipped",
              desc: "Confirm when order has been shipped",
            },
            {
              id: "paymentFailed",
              label: "Payment Failed",
              desc: "Alert when a payment fails to process",
            },
            {
              id: "newPartner",
              label: "New Partner Signup",
              desc: "Notify when a new partner registers",
            },
            {
              id: "dailySummary",
              label: "Daily Summary Report",
              desc: "Receive daily summary of platform activity",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
              <button
                onClick={() => toggleNotification("email", item.id)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                  // @ts-expect-error: Dynamic key access
                  notificationSettings.email[item.id]
                    ? "bg-blue-600"
                    : "bg-gray-200"
                }`}
              >
                <span
                  className={`${
                    // @ts-expect-error: Dynamic key access
                    notificationSettings.email[item.id]
                      ? "translate-x-6"
                      : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SMS Notifications */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          SMS Notifications
        </h2>

        <div className="space-y-3">
          {[
            {
              id: "urgentOrders",
              label: "Urgent Orders",
              desc: "SMS alerts for rush orders",
            },
            {
              id: "systemDowntime",
              label: "System Downtime",
              desc: "Critical system alerts",
            },
          ].map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {item.label}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
              <button
                onClick={() => toggleNotification("sms", item.id)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                  // @ts-expect-error: Dynamic key access
                  notificationSettings.sms[item.id]
                    ? "bg-blue-600"
                    : "bg-gray-200"
                }`}
              >
                <span
                  className={`${
                    // @ts-expect-error: Dynamic key access
                    notificationSettings.sms[item.id]
                      ? "translate-x-6"
                      : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
