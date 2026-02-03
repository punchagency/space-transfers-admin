import { useState } from "react";

export const ProfilePreferences = () => {
  const [emailNotifications, setEmailNotifications] = useState({
    orderUpdates: true,
    partnerActivity: true,
    systemAlerts: true,
  });

  const toggleNotification = (key: keyof typeof emailNotifications) => {
    setEmailNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-lg font-bold text-gray-900">Preferences</h1>
        <p className="text-sm text-gray-500 mt-1">
          Customize your dashboard experience.
        </p>
      </div>

      <div className="border-t border-gray-100 mb-8"></div>

      {/* Language & Region */}
      <div className="space-y-6">
        <h3 className="text-base font-bold text-gray-900">Language & Region</h3>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700">Language</label>
          <input
            type="text"
            placeholder="English (US)"
            className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700">Timezone</label>
          <input
            type="text"
            placeholder="Pacific Time (PT)"
            className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700">
            Date Format
          </label>
          <input
            type="text"
            placeholder="MM/DD/YYYY"
            className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Email Notifications */}
      <div className="mt-10">
        <h3 className="text-base font-bold text-gray-900 mb-6">
          Email Notifications
        </h3>

        <div className="space-y-4">
          {/* Order Updates */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <div className="font-medium text-gray-900 text-sm">
                Order Updates
              </div>
              <div className="text-sm text-gray-500 mt-0.5">
                Get notified when orders are placed or updated
              </div>
            </div>
            <button
              onClick={() => toggleNotification("orderUpdates")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                emailNotifications.orderUpdates ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`${
                  emailNotifications.orderUpdates
                    ? "translate-x-6"
                    : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
          </div>

          {/* Partner Activity */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <div className="font-medium text-gray-900 text-sm">
                Partner Activity
              </div>
              <div className="text-sm text-gray-500 mt-0.5">
                Receive updates about partner activities
              </div>
            </div>
            <button
              onClick={() => toggleNotification("partnerActivity")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                emailNotifications.partnerActivity
                  ? "bg-blue-600"
                  : "bg-gray-200"
              }`}
            >
              <span
                className={`${
                  emailNotifications.partnerActivity
                    ? "translate-x-6"
                    : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
          </div>

          {/* System Alerts */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <div className="font-medium text-gray-900 text-sm">
                System Alerts
              </div>
              <div className="text-sm text-gray-500 mt-0.5">
                Important system notifications and updates
              </div>
            </div>
            <button
              onClick={() => toggleNotification("systemAlerts")}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                emailNotifications.systemAlerts ? "bg-blue-600" : "bg-gray-200"
              }`}
            >
              <span
                className={`${
                  emailNotifications.systemAlerts
                    ? "translate-x-6"
                    : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
