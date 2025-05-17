import React from 'react';

/**
 * A comprehensive component for displaying snowboarding season statistics
 *
 * @param {object} seasonData - Complete data for the season
 * @param {string} seasonData.seasonName - Name of the season (e.g., "2023/2024")
 * @param {object} seasonData.combinedStats - Combined statistics for the season
 * @param {object} seasonData.epicStats - Epic pass statistics
 * @param {object} seasonData.ikonStats - Ikon pass statistics
 * @param {object} seasonData.difficulty - Difficulty breakdown percentages
 * @param {object} logos - Object containing logo images
 */
const SeasonStatsCard = ({ seasonData, logos }) => {
  const { seasonName, combinedStats, epicStats, ikonStats, difficulty } = seasonData;

  // Render a stat card
  const renderStatCard = (value, label, highlight = false, icon = null) => (
    <div className={`bg-white dark:bg-slate-800 p-4 rounded-lg border ${highlight ? 'border-blue-500' : 'border-gray-200 dark:border-slate-700'} hover:border-blue-500 transition-colors shadow-sm`}>
      <div className="flex items-center">
        {icon && (
          typeof icon === 'string' ?
            <span className="mr-2">{icon}</span> :
            <img src={icon} alt={label} className="w-6 h-6 mr-2" />
        )}
        <p className="text-3xl font-bold text-gray-800 dark:text-white">{value}</p>
      </div>
      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400 mt-1">{label}</p>
    </div>
  );

  // Render a pass stats section
  const renderPassStats = (passType, stats, logoSrc) => (
    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
      <div className="flex items-center mb-3">
        <img src={logoSrc} width={50} alt={`${passType} logo`} />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Days Tracked</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">{stats.daysTracked}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Vertical</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">{stats.vertical}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Lifts Ridden</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">{stats.liftsRidden}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">{stats.trails ? 'Trails' : 'Miles'}</p>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">{stats.trails || stats.miles}</p>
        </div>
      </div>

      {stats.timeOnMountain && (
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Miles</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{stats.miles}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">Time on Mountain</p>
            <p className="text-lg font-semibold text-gray-800 dark:text-white">{stats.timeOnMountain}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">
            {stats.highestElevation ? 'Highest Elevation' : 'Most Visited'}
          </p>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            {stats.highestElevation || stats.mostVisited}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-1">
            {stats.lastDay ? 'Last Day' : (stats.daysTotal ? 'Days Total' : 'Most Visited')}
          </p>
          <p className="text-lg font-semibold text-gray-800 dark:text-white">
            {stats.lastDay || stats.daysTotal || stats.mostVisited}
          </p>
        </div>
      </div>
    </div>
  );

  // Render difficulty breakdown
  const renderDifficultyBreakdown = (title, green, blue, black) => (
    <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 shadow-sm">
      <p className="text-sm font-medium mb-2 text-gray-700 dark:text-slate-300">{title}</p>
      <div className="w-full h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden mb-2">
        <div className="flex h-full">
          <div className="bg-green-500 h-full" style={{ width: `${green}%` }}></div>
          <div className="bg-blue-500 h-full" style={{ width: `${blue}%` }}></div>
          <div className="bg-gray-800 dark:bg-slate-900 h-full" style={{ width: `${black}%` }}></div>
        </div>
      </div>
      <div className="flex justify-between text-xs text-gray-600 dark:text-slate-400">
        <div className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
          <span>Green ({green}%)</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-1"></span>
          <span>Blue ({blue}%)</span>
        </div>
        <div className="flex items-center">
          <span className="w-2 h-2 bg-gray-800 dark:bg-slate-900 rounded-full mr-1"></span>
          <span>Black ({black}%)</span>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h4 className="text-lg font-medium mb-4 text-gray-800 dark:text-slate-200 flex items-center">
        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
        Season {seasonName}
      </h4>

      <div className="mb-6">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <h5 className="text-sm font-medium text-gray-700 dark:text-slate-300">Combined Stats</h5>
        </div>

        {/* First row of combined stats */}
        <div className="grid grid-cols-3 gap-5 mb-6">
          {renderStatCard(combinedStats.daysTracked, "Days Tracked", false, "📅")}
          {renderStatCard(combinedStats.lifts, "Lifts", false, "🚠")}
          {renderStatCard(combinedStats.trails, "Trails", false, "⛷️")}
        </div>

        {/* Second row of combined stats */}
        <div className="grid grid-cols-3 gap-5 mb-6">
          {renderStatCard(combinedStats.miles, "Miles", false, "🏔️")}
          {renderStatCard(combinedStats.vertFt, "Vert Ft", true, "⬆️")}
          {renderStatCard(combinedStats.daysTotal, "Days Total", false, "📅")}
        </div>
      </div>

      {/* Pass Stats */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Epic Pass Stats */}
        {renderPassStats("Epic", epicStats, logos.epic)}

        {/* Ikon Pass Stats */}
        {renderPassStats("Ikon", ikonStats, logos.ikon)}
      </div>

      {/* Difficulty Breakdown */}
      {renderDifficultyBreakdown(
        difficulty.title || "Difficulty Breakdown",
        difficulty.green,
        difficulty.blue,
        difficulty.black
      )}
    </div>
  );
};

export default SeasonStatsCard;



