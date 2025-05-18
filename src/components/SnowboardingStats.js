import React, { useState } from "react";

// Import reusable component
import SeasonStatsCard from "./snowboarding/SeasonStatsCard";

const SnowboardingStats = () => {
  const [activeTab, setActiveTab] = useState("2021");

  // Create an array of season data objects
  const seasonData = [
    {
      id: "2425",
      seasonName: "2024/2025",
      combinedStats: {
        daysTracked: "13",
        lifts: "113",
        trails: "236",
        miles: "121.67",
        vertFt: "157.2K",
        daysTotal: "3.3"
      },
      epicStats: {
        daysTracked: "2 days",
        vertical: "43,241 ft",
        liftsRidden: "28 lifts",
        miles: "0.67 mi",
        highestElevation: "8,657 ft",
        timeOnMountain: "2 days"
      },
      ikonStats: {
        daysTracked: "11 days",
        vertical: "114,000 ft",
        liftsRidden: "85 lifts",
        trails: "236 trails",
        miles: "121 miles",
        timeOnMountain: "31.0 hours (~1.3 days)",
        mostVisited: "Winter Park",
        lastDay: "April 13th, 2025"
      },
      difficulty: {
        title: "Difficulty Breakdown (Ikon)",
        green: 15,
        blue: 67,
        black: 18
      }
    },
    {
      id: "2324",
      seasonName: "2023/2024",
      combinedStats: {
        daysTracked: "15",
        lifts: "140",
        trails: "141",
        miles: "177.3",
        vertFt: "193.7K",
        daysTotal: "10.9"
      },
      epicStats: {
        daysTracked: "10 days",
        vertical: "130,600 ft",
        liftsRidden: "88 lifts",
        miles: "94.34 mi",
        highestElevation: "12,491 ft",
        mostVisited: "Keystone"
      },
      ikonStats: {
        daysTracked: "5 days",
        vertical: "63,135 ft",
        liftsRidden: "52 lifts",
        trails: "141 trails",
        miles: "83 miles",
        timeOnMountain: "21.6 hours",
        mostVisited: "Arapahoe Basin",
        daysTotal: "~0.9 days"
      },
      difficulty: {
        title: "Difficulty Breakdown (Ikon)",
        green: 42,
        blue: 38,
        black: 20
      }
    },
    {
      id: "2223",
      seasonName: "2022/2023",
      combinedStats: {
        daysTracked: "12",
        lifts: "98",
        trails: "112",
        miles: "143.5",
        vertFt: "168.2K",
        daysTotal: "8.7"
      },
      epicStats: {
        daysTracked: "8 days",
        vertical: "112,450 ft",
        liftsRidden: "67 lifts",
        miles: "89.3 mi",
        highestElevation: "11,250 ft",
        mostVisited: "Breckenridge"
      },
      ikonStats: {
        daysTracked: "4 days",
        vertical: "55,750 ft",
        liftsRidden: "31 lifts",
        trails: "112 trails",
        miles: "54.2 miles",
        timeOnMountain: "18.4 hours",
        mostVisited: "Winter Park",
        daysTotal: "~0.8 days"
      },
      difficulty: {
        title: "Difficulty Breakdown (Ikon)",
        green: 35,
        blue: 45,
        black: 20
      }
    },
    {
      id: "2122",
      seasonName: "2021/2022",
      combinedStats: {
        daysTracked: "10",
        lifts: "78",
        trails: "102",
        miles: "112.8",
        vertFt: "124.5K",
        daysTotal: "7.2"
      },
      epicStats: {
        daysTracked: "6 days",
        vertical: "82,350 ft",
        liftsRidden: "53 lifts",
        miles: "76.4 mi",
        highestElevation: "10,780 ft",
        mostVisited: "Vail"
      },
      ikonStats: {
        daysTracked: "4 days",
        vertical: "42,150 ft",
        liftsRidden: "25 lifts",
        trails: "102 trails",
        miles: "36.4 miles",
        timeOnMountain: "15.8 hours",
        mostVisited: "Copper Mountain",
        daysTotal: "~0.7 days"
      },
      difficulty: {
        title: "Difficulty Breakdown (Ikon)",
        green: 40,
        blue: 45,
        black: 15
      }
    },
    {
      id: "2021",
      seasonName: "2020/2021",
      combinedStats: {
        daysTracked: "36",
        lifts: "215",
        trails: "187",
        miles: "324.6",
        vertFt: "505.4K",
        daysTotal: "15.8"
      },
      epicStats: {
        daysTracked: "31 days",
        vertical: "436,991 ft",
        liftsRidden: "183 lifts",
        miles: "278.2 mi",
        highestElevation: "12,998 ft",
        mostVisited: "Breckenridge"
      },
      ikonStats: {
        daysTracked: "5 days",
        vertical: "68,450 ft",
        liftsRidden: "32 lifts",
        trails: "187 trails",
        miles: "46.4 miles",
        timeOnMountain: "22.5 hours",
        mostVisited: "Winter Park",
        daysTotal: "~0.9 days"
      },
      difficulty: {
        title: "Difficulty Breakdown (Ikon)",
        green: 40,
        blue: 45,
        black: 15
      }
    },
    {
      id: "lifetime",
      seasonName: "Lifetime Stats",
      combinedStats: {
        daysTracked: "86",
        lifts: "644",
        trails: "778",
        miles: "879.9",
        vertFt: "1.15M",
        daysTotal: "45.9"
      },
      epicStats: {
        daysTracked: "57 days",
        vertical: "805,632 ft",
        liftsRidden: "419 lifts",
        miles: "539.0 mi",
        highestElevation: "12,998 ft",
        mostVisited: "Breckenridge"
      },
      ikonStats: {
        daysTracked: "29 days",
        vertical: "343,485 ft",
        liftsRidden: "225 lifts",
        trails: "778 trails",
        miles: "340.9 miles",
        timeOnMountain: "109.3 hours",
        mostVisited: "Winter Park",
        daysTotal: "~4.6 days"
      },
      difficulty: {
        title: "Difficulty Breakdown (Overall)",
        green: 34,
        blue: 48,
        black: 18
      }
    }
  ];

  return (
    <div className="mt-8 border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-900 p-5 border-b border-gray-200 dark:border-slate-700">
        <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
          Snowboarding Stats
        </h3>
        <p className="text-sm text-gray-600 dark:text-slate-400">
          Tracking my progress on the slopes
        </p>
      </div>

      {/* React-based Tab Navigation */}
      <div className="flex flex-wrap border-b border-gray-200 dark:border-slate-700">
        {seasonData.map((season) => (
          <button
            key={season.id}
            onClick={() => setActiveTab(season.id)}
            className={`py-3 px-4 text-sm font-medium border-r border-gray-200 dark:border-slate-700 transition-colors ${
              activeTab === season.id
                ? "text-blue-600 bg-blue-50 dark:text-white dark:bg-slate-800"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            }`}
          >
            {season.id === "lifetime" ? "Lifetime" : season.id.substring(0, 2) + "/" + season.id.substring(2)}
          </button>
        ))}
      </div>

      <div className="p-6 bg-white dark:bg-slate-900">
        {/* Season Stats */}
        {seasonData.map((season) => (
          activeTab === season.id && (
            <SeasonStatsCard
              key={season.id}
              seasonData={season}
              logos={{
                epic: "../images/epic.png",
                ikon: "../images/ikon.png"
              }}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default SnowboardingStats;



