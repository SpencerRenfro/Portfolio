import React from "react";

const MilitaryService = () => {
  const militaryInfo = {
    rank: "E-4, Senior Airman",
    afsc: "Aerospace Ground Equipment Journeyman",
    ribbons: [
      {
        name: "Global War on Terrorism",
        image: "/images/GlobalWar.png",
      },
      // Add more ribbons as needed:
      // { name: "Air Force Good Conduct Medal", image: "/images/GoodConduct.png" },
      // { name: "National Defense Service Medal", image: "/images/NationalDefense.png" }
    ],
    timeInService: "6 years",
    branch: "U.S. Air Force",
  };

  return (
    <div>
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 p-5 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl mb-6 font-semibold">Military Service</h2>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-700 shadow-md">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Military Branch Logo */}
            <div className="md:w-1/4 flex justify-center">
              <img
                src="/images/SrAirman.png"
                alt="E-4 Rank, U.S. Air Force"
                className="w-32 h-32"
              />
            </div>

            {/* Military Information */}
            <div className="md:w-3/4">
              <h3 className="text-xl font-medium mb-4">
                {militaryInfo.branch}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    Rank
                  </p>
                  <p className="font-medium">{militaryInfo.rank}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    Time in Service
                  </p>
                  <p className="font-medium">{militaryInfo.timeInService}</p>
                </div>

                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    AFSC
                  </p>
                  <p className="font-medium">{militaryInfo.afsc}</p>
                </div>

                <div className="md:col-span-2">
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    Ribbons & Awards
                  </p>
                  <ul className="list-disc ml-5 mt-1">
                    {militaryInfo.ribbons.map((ribbon, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <img
                          src={ribbon.image}
                          alt={`${ribbon.name} Ribbon`}
                          className="w-16 h-16 mr-3"
                        />
                        <p className="font-medium">{ribbon.name}</p>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                <p className="text-gray-700 dark:text-slate-300">
                  Served as an Aerospace Ground Equipment Journeyman,
                  maintaining and repairing equipment essential for aircraft
                  operation. Contributed to mission readiness through equipment
                  maintenance, troubleshooting, and repair.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilitaryService;
