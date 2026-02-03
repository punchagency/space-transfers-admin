import { useState } from "react";

export const SecuritySettings = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Change Password */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Change Password
        </h2>
        <div className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
              Update Password
            </button>
          </div>
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Two-Factor Authentication
            </h2>
            <p className="text-gray-500 mt-1 text-sm">
              Add an extra layer of security to your account
            </p>
          </div>
          <button
            onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
              twoFactorEnabled ? "bg-blue-600" : "bg-gray-200"
            }`}
          >
            <span
              className={`${
                twoFactorEnabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </button>
        </div>
      </div>

      {/* Login Activity History */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">
            Login Activity History
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500">
            <thead className="bg-gray-50 text-gray-700 uppercase">
              <tr>
                <th className="px-6 py-3 font-medium">
                  Device / Browser
                </th>
                <th className="px-6 py-3 font-medium">IP Address</th>
                <th className="px-6 py-3 font-medium">Location</th>
                <th className="px-6 py-3 font-medium">Time</th>
                <th className="px-6 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  device: "Chrome on MacOS",
                  ip: "192.168.1.1",
                  location: "New York, USA",
                  time: "2023-10-25 10:30 AM",
                  status: "Success",
                },
                {
                  device: "Safari on iPhone",
                  ip: "10.0.0.1",
                  location: "New York, USA",
                  time: "2023-10-24 08:15 PM",
                  status: "Success",
                },
                {
                  device: "Firefox on Windows",
                  ip: "172.16.0.1",
                  location: "London, UK",
                  time: "2023-10-23 03:45 AM",
                  status: "Failed",
                },
              ].map((log, index) => (
                <tr key={index} className="bg-white hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {log.device}
                  </td>
                  <td className="px-6 py-4">{log.ip}</td>
                  <td className="px-6 py-4">{log.location}</td>
                  <td className="px-6 py-4">{log.time}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        log.status === "Success"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
