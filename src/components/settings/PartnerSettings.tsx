import { useState } from "react";

export const PartnerSettings = () => {
  const [maxJobsEnabled, setMaxJobsEnabled] = useState(true);
  const [maxJobsValue, setMaxJobsValue] = useState("10");

  const handleMaxJobsToggle = () => {
    if (maxJobsEnabled) {
      setMaxJobsValue(""); // Clear input when disabling
    } else {
      setMaxJobsValue("10"); // Reset to default when enabling
    }
    setMaxJobsEnabled(!maxJobsEnabled);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Partner Job Assignment */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Partner Job Assignment
        </h2>

        <div className="space-y-6">
          <div className="space-y-4">
            <label className="text-sm font-medium text-gray-700">
              Default Job Assignment Rule
            </label>

            <div className="space-y-3">
              {/* Nearest Region */}
              <label className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center h-5">
                  <input
                    type="radio"
                    name="assignment-rule"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <span className="block font-medium text-gray-900">
                    Nearest Region
                  </span>
                  <span className="block text-gray-500 mt-0.5">
                    Assign to partner closest to delivery address
                  </span>
                </div>
              </label>

              {/* Price-Based */}
              <label className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center h-5">
                  <input
                    type="radio"
                    name="assignment-rule"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <span className="block font-medium text-gray-900">
                    Price-Based
                  </span>
                  <span className="block text-gray-500 mt-0.5">
                    Assign to partner with lowest quote
                  </span>
                </div>
              </label>

              {/* Manual Assignment */}
              <label className="flex items-start p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center h-5">
                  <input
                    type="radio"
                    name="assignment-rule"
                    className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <span className="block font-medium text-gray-900">
                    Manual Assignment
                  </span>
                  <span className="block text-gray-500 mt-0.5">
                    Admin manually assigns each job
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Maximum Jobs Per Partner */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Maximum Jobs Per Partner
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Limit concurrent jobs per partner to manage capacity
                </p>
              </div>
              <button
                onClick={handleMaxJobsToggle}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                  maxJobsEnabled ? "bg-blue-600" : "bg-gray-200"
                }`}
              >
                <span
                  className={`${
                    maxJobsEnabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </button>
            </div>
            <div className="mt-4">
              <input
                type="number"
                value={maxJobsValue}
                onChange={(e) => setMaxJobsValue(e.target.value)}
                disabled={!maxJobsEnabled}
                className={`w-24 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all ${
                  !maxJobsEnabled ? "opacity-50 cursor-not-allowed" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Partner Onboarding Requirements */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          Partner Onboarding Requirements
        </h2>

        <div className="space-y-3">
          {[
            "Business License",
            "Tax ID / EIN",
            "Liability Insurance",
            "Equipment Verification",
            "Sample Prints",
            "Background Check",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
            >
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-3 text-sm font-medium text-gray-900">
                {item}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
