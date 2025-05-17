// src/components/sections/LatestResultsSection.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaClock } from 'react-icons/fa';

const LatestResultsSection = () => {
  const [activeTab, setActiveTab] = useState('U17');

  const results = {
    'U17': [
      {
        id: 1,
        homeTeam: 'Mat Warriors U17',
        awayTeam: 'City Stars U17',
        homeScore: 3,
        awayScore: 1,
        date: '2024-01-15',
        competition: 'Youth League',
        venue: 'Warriors Stadium',
        isWin: true,
      },
      {
        id: 2,
        homeTeam: 'United Youth U17',
        awayTeam: 'Mat Warriors U17',
        homeScore: 0,
        awayScore: 2,
        date: '2024-01-08',
        competition: 'Cup Quarter-Final',
        venue: 'United Ground',
        isWin: true,
      },
    ],
    'U12': [
      {
        id: 1,
        homeTeam: 'Mat Warriors U12',
        awayTeam: 'Junior FC U12',
        homeScore: 4,
        awayScore: 0,
        date: '2024-01-14',
        competition: 'Junior League',
        venue: 'Warriors Stadium',
        isWin: true,
      },
      {
        id: 2,
        homeTeam: 'Academy Stars U12',
        awayTeam: 'Mat Warriors U12',
        homeScore: 2,
        awayScore: 2,
        date: '2024-01-07',
        competition: 'Junior League',
        venue: 'Academy Ground',
        isWin: null,
      },
    ],
    'U10': [
      {
        id: 1,
        homeTeam: 'Mat Warriors U10',
        awayTeam: 'Mini Stars U10',
        homeScore: 5,
        awayScore: 1,
        date: '2024-01-13',
        competition: 'Development League',
        venue: 'Warriors Stadium',
        isWin: true,
      },
      {
        id: 2,
        homeTeam: 'Young Lions U10',
        awayTeam: 'Mat Warriors U10',
        homeScore: 1,
        awayScore: 3,
        date: '2024-01-06',
        competition: 'Development League',
        venue: 'Lions Arena',
        isWin: true,
      },
    ],
  };

  const tabs = ['U17', 'U12', 'U10'];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-4">
          LATEST RESULTS
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Check out how our youth teams are performing
        </p>

        {/* Age Group Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-200
                          ${activeTab === tab 
                            ? 'bg-[#DC2626] text-white shadow-md' 
                            : 'text-gray-600 hover:text-[#DC2626]'
                          }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Results Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {results[activeTab].map((result) => (
                <div
                  key={result.id}
                  className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md 
                           transition-shadow duration-200"
                >
                  {/* Competition & Date */}
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FaTrophy className="text-[#DC2626] mr-2" />
                      {result.competition}
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-[#DC2626] mr-2" />
                      {new Date(result.date).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Match Result */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1 text-right">
                      <p className={`text-lg font-bold ${
                        result.homeTeam.includes('Mat Warriors') ? 'text-[#DC2626]' : ''
                      }`}>
                        {result.homeTeam}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-center mx-4 px-6 py-2 
                                  bg-gray-900 rounded-lg text-white font-bold">
                      <span className="text-xl mx-2">{result.homeScore}</span>
                      <span className="text-gray-400 mx-2">-</span>
                      <span className="text-xl mx-2">{result.awayScore}</span>
                    </div>

                    <div className="flex-1">
                      <p className={`text-lg font-bold ${
                        result.awayTeam.includes('Mat Warriors') ? 'text-[#DC2626]' : ''
                      }`}>
                        {result.awayTeam}
                      </p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="text-center mt-4 text-sm text-gray-600">
                    {result.venue}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LatestResultsSection;