export const ProfileSecurity = () => {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-lg font-bold text-gray-900">Security Options</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your account security settings.
        </p>
      </div>

      {/* Change Password */}
      <div className="space-y-6">
        <h3 className="text-base font-bold text-gray-900">Change Password</h3>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700">
            Current Password
          </label>
          <input
            type="password"
            placeholder="Enter current password"
            className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700">
            New Password
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium text-gray-700">
            Confirm New Password
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        <div className="pt-2">
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
            Update Password
          </button>
        </div>
      </div>

      <div className="border-t border-gray-100 my-8"></div>

      {/* Active Sessions */}
      <div>
        <h3 className="text-base font-bold text-gray-900 mb-6">
          Active Sessions
        </h3>

        <div className="space-y-4">
          {/* Current Session */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <div className="font-medium text-gray-900 text-sm">
                Current Session
              </div>
              <div className="text-sm text-gray-500 mt-0.5">
                Chrome on MacOS • Los Angeles, CA
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Last activity: Just now
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700">
              Active
            </span>
          </div>

          {/* Mobile Session */}
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div>
              <div className="font-medium text-gray-900 text-sm">
                Mobile Session
              </div>
              <div className="text-sm text-gray-500 mt-0.5">
                Safari on iOS • Los Angeles, CA
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Last activity: 3 hours ago
              </div>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600">
              Inactive
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
