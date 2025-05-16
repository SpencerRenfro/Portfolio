import React, { useState } from "react";

const SnowboardingStats = () => {
  const [activeTab, setActiveTab] = useState('2021');

  return (
    <div className="mt-8 border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 p-5 border-b border-gray-200 dark:border-slate-700">
        <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">Snowboarding Stats</h3>
        <p className="text-sm text-gray-600 dark:text-slate-400">Tracking my progress on the slopes</p>
      </div>

      {/* React-based Tab Navigation */}
      <div className="flex flex-wrap border-b border-gray-200 dark:border-slate-700">
        <button
          onClick={() => setActiveTab('2021')}
          className={`py-3 px-4 text-sm font-medium border-r border-gray-200 dark:border-slate-700 transition-colors ${
            activeTab === '2021'
              ? 'text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800'
              : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
          }`}
        >
          20/21
        </button>
        <button
          onClick={() => setActiveTab('2122')}
          className={`py-3 px-4 text-sm font-medium border-r border-gray-200 dark:border-slate-700 transition-colors ${
            activeTab === '2122'
              ? 'text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800'
              : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
          }`}
        >
          21/22
        </button>
        <button
          onClick={() => setActiveTab('2223')}
          className={`py-3 px-4 text-sm font-medium border-r border-gray-200 dark:border-slate-700 transition-colors ${
            activeTab === '2223'
              ? 'text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800'
              : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
          }`}
        >
          22/23
        </button>
        <button
          onClick={() => setActiveTab('2324')}
          className={`py-3 px-4 text-sm font-medium border-r border-gray-200 dark:border-slate-700 transition-colors ${
            activeTab === '2324'
              ? 'text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800'
              : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
          }`}
        >
          23/24
        </button>
        <button
          onClick={() => setActiveTab('2425')}
          className={`py-3 px-4 text-sm font-medium border-r border-gray-200 dark:border-slate-700 transition-colors ${
            activeTab === '2425'
              ? 'text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800'
              : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
          }`}
        >
          24/25
        </button>
        <button
          onClick={() => setActiveTab('lifetime')}
          className={`py-3 px-4 text-sm font-medium transition-colors ${
            activeTab === 'lifetime'
              ? 'text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800'
              : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white'
          }`}
        >
          Lifetime
        </button>
      </div>

      <div className="p-6 bg-white dark:bg-slate-900">
        {/* Season 2024/2025 Stats */}
        {activeTab === '2425' && (
          <div>
            <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-slate-200 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Season 2024/2025
            </h4>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <h5 className="text-sm font-medium text-gray-700 dark:text-slate-300">Combined Stats</h5>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">13</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Days Tracked</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">113</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Lifts</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">236</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Trails</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">121.67</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Miles</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">157.2K</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Vert Ft</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">3.3</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Days Total</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Epic Pass Stats */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <h5 className="text-sm font-medium text-gray-800 dark:text-slate-200">Epic (Vail)</h5>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">2 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">43,241 ft</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">28 lifts</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">0.67 mi</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Highest Elevation</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">8,657 ft</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Time on Mountain</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">2 days</p>
                  </div>
                </div>
              </div>

              {/* Ikon Pass Stats */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  <h5 className="text-sm font-medium text-gray-800 dark:text-slate-200">Ikon (Winter Park)</h5>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">11 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">114,000 ft</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">85 lifts</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Trails</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">236 trails</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">121 miles</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Time on Mountain</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">31.0 hours (~1.3 days)</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Most Visited</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">Winter Park</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Last Day</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">April 13th, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
              <p className="text-sm font-medium mb-2 text-gray-700 dark:text-slate-300">Difficulty Breakdown (Ikon)</p>
              <div className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
                <div className="flex h-full">
                  <div className="bg-green-500 h-full" style={{ width: '15%' }}></div>
                  <div className="bg-blue-500 h-full" style={{ width: '67%' }}></div>
                  <div className="bg-gray-800 dark:bg-slate-900 h-full" style={{ width: '18%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-slate-400">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  <span>Green (15%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                  <span>Blue (67%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-800 dark:bg-slate-900 rounded-full mr-1"></span>
                  <span>Black (18%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Season 2023/2024 Stats */}
        {activeTab === '2324' && (
          <div>
            <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-slate-200 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Season 2023/2024
            </h4>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <h5 className="text-sm font-medium text-gray-700 dark:text-slate-300">Combined Stats</h5>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">15</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Days Tracked</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">140</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Lifts</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">141</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Trails</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">177.3</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Miles</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">193.7K</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Vert Ft</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">10.9</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Days Total</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Epic Pass Stats */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <h5 className="text-sm font-medium text-gray-800 dark:text-slate-200">Epic</h5>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">10 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">130,600 ft</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">88 lifts</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">94.34 mi</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Highest Elevation</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">12,491 ft</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Most Visited</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">Keystone</p>
                  </div>
                </div>
              </div>

              {/* Ikon Pass Stats */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  <h5 className="text-sm font-medium text-gray-800 dark:text-slate-200">Ikon</h5>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">5 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">63,135 ft</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">52 lifts</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Trails</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">141 trails</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">83 miles</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Time on Mountain</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">21.6 hours</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Most Visited</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">Arapahoe Basin</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Total</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">~0.9 days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
              <p className="text-sm font-medium mb-2 text-gray-700 dark:text-slate-300">Difficulty Breakdown (Ikon)</p>
              <div className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
                <div className="flex h-full">
                  <div className="bg-green-500 h-full" style={{ width: '42%' }}></div>
                  <div className="bg-blue-500 h-full" style={{ width: '38%' }}></div>
                  <div className="bg-gray-800 dark:bg-slate-900 h-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-slate-400">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  <span>Green (42%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                  <span>Blue (38%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-800 dark:bg-slate-900 rounded-full mr-1"></span>
                  <span>Black (20%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Season 2021/2022 Stats */}
        {activeTab === '2122' && (
          <div>
            <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-slate-200 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Season 2021/2022
            </h4>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <h5 className="text-sm font-medium text-gray-700 dark:text-slate-300">Combined Stats</h5>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">10</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Days Tracked</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">78</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Lifts</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">102</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Trails</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">112.8</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Miles</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">124.5K</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Vert Ft</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">6.8</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Days Total</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Epic Pass Stats */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <h5 className="text-sm font-medium text-gray-800 dark:text-slate-200">Epic</h5>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">6 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">82,350 ft</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">52 lifts</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">74.5 mi</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Highest Elevation</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">11,250 ft</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Most Visited</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">Breckenridge</p>
                  </div>
                </div>
              </div>

              {/* Ikon Pass Stats */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  <h5 className="text-sm font-medium text-gray-800 dark:text-slate-200">Ikon</h5>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">4 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">42,150 ft</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">26 lifts</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Trails</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">102 trails</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">38.3 miles</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Time on Mountain</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">16.2 hours</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Most Visited</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">Winter Park</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Total</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">~0.7 days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <p className="text-sm font-medium mb-2 text-slate-300">Difficulty Breakdown (Ikon)</p>
              <div className="w-full h-3 bg-slate-700 rounded-full overflow-hidden mb-2">
                <div className="flex h-full">
                  <div className="bg-green-500 h-full" style={{ width: '40%' }}></div>
                  <div className="bg-blue-500 h-full" style={{ width: '45%' }}></div>
                  <div className="bg-slate-900 h-full" style={{ width: '15%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-slate-400">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  <span>Green (40%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                  <span>Blue (45%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-slate-900 rounded-full mr-1"></span>
                  <span>Black (15%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Season 2022/2023 Stats */}
        {activeTab === '2223' && (
          <div>
            <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-slate-200 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Season 2022/2023
            </h4>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <h5 className="text-sm font-medium text-gray-700 dark:text-slate-300">Combined Stats</h5>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">12</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Days Tracked</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">98</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Lifts</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">127</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Trails</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">156.2</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Miles</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">168.5K</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Vert Ft</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">8.7</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Days Total</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Epic Pass Stats */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <h5 className="text-sm font-medium text-gray-800 dark:text-slate-200">Epic</h5>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">8 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">112,450 ft</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">72 lifts</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">87.6 mi</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Highest Elevation</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">11,250 ft</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Most Visited</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">Breckenridge</p>
                  </div>
                </div>
              </div>

              {/* Ikon Pass Stats */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  <h5 className="text-sm font-medium text-gray-800 dark:text-slate-200">Ikon</h5>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">4 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">56,050 ft</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">26 lifts</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Trails</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">127 trails</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">68.6 miles</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Time on Mountain</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">18.3 hours</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Most Visited</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">Winter Park</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Total</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">~0.7 days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
              <p className="text-sm font-medium mb-2 text-gray-700 dark:text-slate-300">Difficulty Breakdown (Ikon)</p>
              <div className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
                <div className="flex h-full">
                  <div className="bg-green-500 h-full" style={{ width: '35%' }}></div>
                  <div className="bg-blue-500 h-full" style={{ width: '45%' }}></div>
                  <div className="bg-gray-800 dark:bg-slate-900 h-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-slate-400">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  <span>Green (35%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                  <span>Blue (45%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-800 dark:bg-slate-900 rounded-full mr-1"></span>
                  <span>Black (20%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Season 2020/2021 Stats */}
        {activeTab === '2021' && (
          <div>
            <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-slate-200 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Season 2020/2021
            </h4>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <h5 className="text-sm font-medium text-gray-700 dark:text-slate-300">Combined Stats</h5>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">8</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Days Tracked</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">62</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Lifts</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">84</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Trails</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">89.5</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Miles</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">98.3K</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Vert Ft</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">5.2</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Days Total</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Epic Pass Stats */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <h5 className="text-sm font-medium text-gray-800 dark:text-slate-200">Epic</h5>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">5 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">68,450 ft</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">42 lifts</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">62.3 mi</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Highest Elevation</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">10,780 ft</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Most Visited</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">Keystone</p>
                  </div>
                </div>
              </div>

              {/* Ikon Pass Stats */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  <h5 className="text-sm font-medium text-gray-800 dark:text-slate-200">Ikon</h5>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">3 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">29,850 ft</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">20 lifts</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Trails</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">84 trails</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">27.2 miles</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Time on Mountain</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">12.5 hours</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Most Visited</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">Winter Park</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Total</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">~0.5 days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
              <p className="text-sm font-medium mb-2 text-gray-700 dark:text-slate-300">Difficulty Breakdown (Ikon)</p>
              <div className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
                <div className="flex h-full">
                  <div className="bg-green-500 h-full" style={{ width: '55%' }}></div>
                  <div className="bg-blue-500 h-full" style={{ width: '35%' }}></div>
                  <div className="bg-gray-800 dark:bg-slate-900 h-full" style={{ width: '10%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-slate-400">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  <span>Green (55%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                  <span>Blue (35%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-800 dark:bg-slate-900 rounded-full mr-1"></span>
                  <span>Black (10%)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Lifetime Stats */}
        {activeTab === 'lifetime' && (
          <div>
            <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-slate-200 flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Lifetime Stats
            </h4>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <h5 className="text-sm font-medium text-gray-700 dark:text-slate-300">Combined Stats</h5>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">58</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Days Tracked</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">491</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Lifts</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">690</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Trails</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-6">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">657.5</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Miles</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">742.3K</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Vert Ft</p>
                </div>
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors shadow-sm">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">34.9</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">Days Total</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Epic Pass Stats */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <h5 className="text-sm font-medium text-gray-800 dark:text-slate-200">Epic</h5>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">31 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">436,991 ft</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">282 lifts</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">319.3 mi</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Highest Elevation</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">12,998 ft</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Most Visited</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">Breckenridge</p>
                  </div>
                </div>
              </div>

              {/* Ikon Pass Stats */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
                <div className="flex items-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                  </svg>
                  <h5 className="text-sm font-medium text-gray-800 dark:text-slate-200">Ikon</h5>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">27 days</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">305,335 ft</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">209 lifts</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Trails</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">690 trails</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">338.2 miles</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Time on Mountain</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">99.6 hours</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Most Visited</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">Winter Park</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Total</p>
                    <p className="text-lg font-semibold text-gray-800 dark:text-white">~4.1 days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
              <p className="text-sm font-medium mb-2 text-gray-700 dark:text-slate-300">Difficulty Breakdown (Overall)</p>
              <div className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
                <div className="flex h-full">
                  <div className="bg-green-500 h-full" style={{ width: '32%' }}></div>
                  <div className="bg-blue-500 h-full" style={{ width: '48%' }}></div>
                  <div className="bg-gray-800 dark:bg-slate-900 h-full" style={{ width: '20%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 dark:text-slate-400">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                  <span>Green (32%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
                  <span>Blue (48%)</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-gray-800 dark:bg-slate-900 rounded-full mr-1"></span>
                  <span>Black (20%)</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SnowboardingStats;
