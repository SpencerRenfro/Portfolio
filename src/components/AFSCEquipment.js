import React, { useState } from "react";

const AFSCEquipment = ({ equipment }) => {
  const [activeEquipment, setActiveEquipment] = useState(equipment[0].id);

  return (
    <div className="mt-8 border-t border-gray-200 dark:border-slate-700 pt-6">
      <h4 className="text-md font-medium text-gray-800 dark:text-white mb-3">
        Equipment
      </h4>
      <div className="flex flex-wrap border-b border-gray-200 dark:border-slate-700 mb-4">
        {equipment.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveEquipment(item.id)}
            className={`py-2 px-4 text-sm font-medium border-r border-gray-200 dark:border-slate-700 transition-colors ${
              activeEquipment === item.id
                ? "text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Equipment Details */}
      {equipment.map((item) => (
        activeEquipment === item.id && (
          <div key={item.id} className="bg-gray-50 dark:bg-slate-900 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
            <h5 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
              {item.name}
            </h5>
            <p className="text-gray-700 dark:text-slate-300 mb-4">
              {item.description}
            </p>
            
            <div className="mb-3">
              <h6 className="text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                Specifications
              </h6>
              <ul className="list-disc list-inside text-gray-700 dark:text-slate-300">
                {item.specs.map((spec, i) => (
                  <li key={i}>{spec}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h6 className="text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                Maintenance
              </h6>
              <p className="text-gray-700 dark:text-slate-300">
                {item.maintenance}
              </p>
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default AFSCEquipment;
