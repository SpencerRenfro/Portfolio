import React, { useState } from "react";
import { militaryInfo } from "../data/militaryData";
import NavButton from "./ui/NavButton";
import AFSCEquipment from "./AFSCEquipment";

const MilitaryService = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div>
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 p-5 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl mb-2 font-semibold">Military Service</h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap border-x border-gray-200 dark:border-slate-700">
          <NavButton
            label="Overview"
            active={activeTab === "overview"}
            onClick={() => setActiveTab("overview")}
          />
          <NavButton
            label="AFSC"
            active={activeTab === "afsc"}
            onClick={() => setActiveTab("afsc")}
          />
          <NavButton
            label="Assignments"
            active={activeTab === "assignments"}
            onClick={() => setActiveTab("assignments")}
          />
          <NavButton
            label="Professional Development"
            active={activeTab === "development"}
            onClick={() => setActiveTab("development")}
          />
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-slate-800 p-6 border-x border-b border-gray-200 dark:border-slate-700 rounded-b-lg shadow-md">
          {/* AFSC Content */}
          {activeTab === "afsc" && (
            <div>
              <div className="flex flex-col md:flex-row gap-6">
                {/* AFSC Information */}
                <div className="md:w-1/4 flex justify-center">
                  <img
                    src={militaryInfo.afsc.image}
                    alt={`${militaryInfo.rank} Rank, ${militaryInfo.branch}`}
                    className="w-32 h-32"
                  />
                </div>

                <div className="md:w-3/4">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white">
                    {militaryInfo.afsc.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {militaryInfo.afsc.code}
                  </p>
                  <div className="grid grid-cols-3 col-span-3 md:grid-cols-2 gap-4 mt-4 ">
                    <div className="col-span-3 md:col-span-2 w-full">
                      <p className="w-full text-gray-700 dark:text-slate-300 mb-4">
                        {militaryInfo.afsc.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-8">
                <h4 className="text-center text-md font-medium text-gray-800 dark:text-white mb-3">
                  Skills
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {militaryInfo.afsc.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Equipment Sub-Navigation */}
              {militaryInfo.afsc.equipment && (
                <AFSCEquipment equipment={militaryInfo.afsc.equipment} />
              )}
            </div>
          )}
          {/* Assignments Content */}
          {activeTab === "assignments" && (
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                Duty Assignments
              </h3>

              <div className="space-y-6">
                {militaryInfo.assignments.map((assignment, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-4 py-1"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                      <div className="flex items-center gap-3">
                        {assignment.flag && (
                          <img
                            src={assignment.flag}
                            alt={`${assignment.location} flag`}
                            className="w-6 h-4 object-cover"
                          />
                        )}
                        <h4 className="text-md font-medium text-gray-800 dark:text-white">
                          {assignment.base}
                        </h4>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-slate-400">
                        {assignment.dates}
                      </span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">
                      {assignment.location} | {assignment.role}
                    </p>
                    <p className="text-gray-700 dark:text-slate-300">
                      {assignment.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Professional Development Content */}
          {activeTab === "development" && (
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">
                Professional Military Education
              </h3>

              <div className="space-y-6">
                {militaryInfo.professionalDevelopment.map((course, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-slate-900 p-4 rounded-lg border border-gray-200 dark:border-slate-700"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h4 className="text-md font-medium text-gray-800 dark:text-white">
                        {course.title}
                      </h4>
                      <span className="text-sm text-gray-500 dark:text-slate-400">
                        {course.dates}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-slate-300 mb-3">
                      {course.description}
                    </p>

                    {course.achievements.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">
                          Achievements
                        </h5>
                        <ul className="list-disc list-inside text-gray-700 dark:text-slate-300">
                          {course.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "overview" && (
            <div>
              <div className="flex flex-col md:flex-row gap-6">
                {/* Military Branch Logo */}
                <div className="md:w-1/4 flex justify-center">
                  <img
                    src={militaryInfo.overview.rankImage}
                    alt={`${militaryInfo.rank} Rank, ${militaryInfo.branch}`}
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
                      <p className="font-medium">
                        {militaryInfo.overview.timeInService}
                      </p>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500 dark:text-slate-400">
                        AFSC
                      </p>
                      <p className="font-medium">
                        {militaryInfo.afsc.title} ({militaryInfo.afsc.code})
                      </p>
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
                        Ribbons & Awards
                      </p>
                      <div className="flex flex-wrap gap-4 mt-2">
                        {militaryInfo.ribbons.map((ribbon, index) => (
                          <div key={index} className="relative group">
                            <a
                              href={ribbon.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block"
                            >
                              <img
                                src={ribbon.image}
                                alt={`${ribbon.name} Ribbon`}
                                className="w-16 h-16 mr-3 cursor-pointer transition-transform duration-200 hover:scale-110"
                              />
                            </a>
                            {/* Tooltip that appears on hover */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 dark:bg-slate-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10 shadow-lg">
                              {ribbon.name}
                              {/* Arrow pointing down */}
                              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800 dark:border-t-slate-700"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                    <p className="text-gray-700 dark:text-slate-300">
                      {militaryInfo.overview.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MilitaryService;
