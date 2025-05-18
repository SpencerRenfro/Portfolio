import React, { useState } from "react";

const MilitaryService = () => {
  const [activeTab, setActiveTab] = useState('afsc');

  const militaryInfo = {
    rank: "E-4, Senior Airman",
    afsc: {
      title: "Aerospace Ground Equipment Journeyman",
      code: "2A6X2",
      description: "Responsible for maintaining and repairing equipment essential for aircraft operation, including generators, air conditioners, heaters, and hydraulic test stands. Performed scheduled inspections, troubleshooting, and repairs to ensure mission readiness.",
      skills: ["Equipment Maintenance", "Troubleshooting", "Hydraulic Systems", "Electrical Systems", "Technical Documentation"]
    },
    assignments: [
      {
        base: "Lackland AFB",
        location: "San Antonio, TX",
        dates: "June 2010 - August 2010",
        role: "Basic Military Training",
        description: "Completed 8.5 weeks of intensive basic military training, learning military customs, courtesies, and operational procedures."
      },
      {
        base: "Sheppard AFB",
        location: "Wichita Falls, TX",
        dates: "August 2010 - February 2011",
        role: "Technical Training",
        description: "Completed technical training for Aerospace Ground Equipment, learning maintenance procedures for various support equipment."
      },
      {
        base: "Nellis AFB",
        location: "Las Vegas, NV",
        dates: "February 2011 - June 2016",
        role: "AGE Journeyman",
        description: "Maintained and repaired aerospace ground equipment supporting F-15, F-16, and F-22 aircraft. Performed scheduled inspections and troubleshooting to ensure mission readiness."
      }
    ],
    professionalDevelopment: [
      {
        title: "Airman Leadership School",
        dates: "January 2015 - March 2015",
        description: "Completed 6-week professional military education course focused on leadership, management, and communication skills.",
        achievements: ["Distinguished Graduate", "Academic Achievement Award"]
      },
      {
        title: "7-Level Technical Training",
        dates: "September 2014 - December 2014",
        description: "Advanced technical training for AGE craftsman qualification, focusing on complex troubleshooting and repair procedures.",
        achievements: ["Certified on all AGE equipment"]
      },
      {
        title: "CCAF Associate Degree",
        dates: "Completed June 2015",
        description: "Associate of Applied Science in Aerospace Ground Equipment Technology from the Community College of the Air Force.",
        achievements: ["3.8 GPA"]
      }
    ],
    ribbons: [
      {
        name: "National Defense Service Medal",
        image: "/images/National_Defense.png",
        link: "https://www.afpc.af.mil/Fact-Sheets/Display/Article/421890/national-defense-service-medal/"
      },
      {
        name: "Global War on Terrorism",
        image: "/images/GlobalWar.png",
        link: "https://www.afpc.af.mil/Fact-Sheets/Display/Article/421912/global-war-on-terrorism-service-medal/"
      },
      {
        name: "Air Force Training",
        image: "/images/Training_Ribbon.png",
        link: "https://www.afpc.af.mil/Fact-Sheets/Display/Article/421945/air-and-space-training-ribbon/"
      }
    ],
    timeInService: "6 years",
    branch: "U.S. Air Force",
  };

  return (
    <div>
      <div className="mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 p-5 border-b border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl mb-2 font-semibold">Military Service</h2>
          <p className="text-gray-600 dark:text-slate-400 mb-4">{militaryInfo.branch} | {militaryInfo.timeInService}</p>
        </div>

        {/* Header Section with Rank and Branch */}
        <div className="bg-white dark:bg-slate-800 p-6 border-x border-t border-gray-200 dark:border-slate-700 shadow-md">
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            {/* Military Branch Logo */}
            <div className="md:w-1/4 flex justify-center">
              <img
                src="/images/SrAirman.png"
                alt="E-4 Rank, U.S. Air Force"
                className="w-32 h-32"
              />
            </div>

            {/* Basic Military Information */}
            <div className="md:w-3/4">
              <h3 className="text-xl font-medium mb-4">
                {militaryInfo.rank}
              </h3>

              {/* Ribbons & Awards */}
              <div>
                <p className="text-sm text-gray-500 dark:text-slate-400 mb-2">
                  Ribbons & Awards
                </p>
                <div className="flex flex-wrap">
                  {militaryInfo.ribbons.map((ribbon, index) => (
                    <div key={index} className="relative group mb-2">
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
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap border-x border-gray-200 dark:border-slate-700">
          <button
            onClick={() => setActiveTab('afsc')}
            className={`py-3 px-4 text-sm font-medium border-r border-b border-gray-200 dark:border-slate-700 transition-colors ${
              activeTab === 'afsc'
                ? 'text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800 border-b-transparent'
                : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white bg-gray-50 dark:bg-slate-900'
            }`}
          >
            AFSC
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`py-3 px-4 text-sm font-medium border-r border-b border-gray-200 dark:border-slate-700 transition-colors ${
              activeTab === 'assignments'
                ? 'text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800 border-b-transparent'
                : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white bg-gray-50 dark:bg-slate-900'
            }`}
          >
            Assignments
          </button>
          <button
            onClick={() => setActiveTab('development')}
            className={`py-3 px-4 text-sm font-medium border-b border-gray-200 dark:border-slate-700 transition-colors ${
              activeTab === 'development'
                ? 'text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800 border-b-transparent'
                : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white bg-gray-50 dark:bg-slate-900'
            }`}
          >
            Professional Development
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white dark:bg-slate-800 p-6 border-x border-b border-gray-200 dark:border-slate-700 rounded-b-lg shadow-md">
          {/* AFSC Content */}
          {activeTab === 'afsc' && (
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 dark:text-white">{militaryInfo.afsc.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">{militaryInfo.afsc.code}</p>
              </div>

              <p className="text-gray-700 dark:text-slate-300 mb-4">
                {militaryInfo.afsc.description}
              </p>

              <div className="mt-4">
                <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">Key Skills</h4>
                <div className="flex flex-wrap gap-2">
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
            </div>
          )}

          {/* Assignments Content */}
          {activeTab === 'assignments' && (
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Duty Assignments</h3>

              <div className="space-y-6">
                {militaryInfo.assignments.map((assignment, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                      <h4 className="text-md font-medium text-gray-800 dark:text-white">{assignment.base}</h4>
                      <span className="text-sm text-gray-500 dark:text-slate-400">{assignment.dates}</span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-2">{assignment.location} | {assignment.role}</p>
                    <p className="text-gray-700 dark:text-slate-300">{assignment.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Professional Development Content */}
          {activeTab === 'development' && (
            <div>
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Professional Military Education</h3>

              <div className="space-y-6">
                {militaryInfo.professionalDevelopment.map((course, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-slate-900 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h4 className="text-md font-medium text-gray-800 dark:text-white">{course.title}</h4>
                      <span className="text-sm text-gray-500 dark:text-slate-400">{course.dates}</span>
                    </div>
                    <p className="text-gray-700 dark:text-slate-300 mb-3">{course.description}</p>

                    {course.achievements.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 dark:text-slate-300 mb-1">Achievements</h5>
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
        </div>
      </div>
    </div>
  );
};

export default MilitaryService;
