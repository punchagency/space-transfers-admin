export const GeneralSettings = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          General Settings
        </h2>

        <div className="space-y-6">
          {/* Platform Name */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">
              Platform Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Support Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Support Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Customer Service Phone
              </label>
              <input
                type="text"
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Currency & Timezone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Default Currency
              </label>
              <input
                type="text"
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">
                Timezone
              </label>
              <input
                type="text"
                className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Order Prefix Format */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">
              Order Prefix Format
            </label>
            <input
              type="text"
              className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-gray-400"
            />
            <p className="text-sm text-gray-500">
              Order numbers will be formatted as: DTF-00001, DTF-00002, etc.
            </p>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
          Save Changes
        </button>
      </div>
    </div>
  );
};
