// src/pages/TournamentsPage.js
import React from 'react';

const tournaments = [
  {
    id: 1,
    name: 'Valorant Championship',
    game: 'Valorant',
    startDate: '2024-03-15',
    registrationDeadline: '2024-03-10',
    totalPrize: '$10,000',
    status: 'Open',
    image: 'https://picsum.photos/900/900?random=1',
    link: '/tournaments/1',
    description: 'Join the biggest Valorant tournament of the year! Compete against the best teams and win amazing prizes.'
  },
  {
    id: 2,
    name: 'League of Legends Pro League',
    game: 'League of Legends',
    startDate: '2024-03-20',
    registrationDeadline: '2024-03-15',
    totalPrize: '$15,000',
    status: 'Open',
    image: 'https://picsum.photos/900/900?random=2',
    link: '/tournaments/2',
    description: 'The ultimate League of Legends tournament for professional teams. Show your skills and compete for glory!'
  },
  {
    id: 3,
    name: 'CS:GO Major Championship',
    game: 'CS:GO',
    startDate: '2024-03-25',
    registrationDeadline: '2024-03-20',
    totalPrize: '$20,000',
    status: 'Open',
    image: 'https://picsum.photos/900/900?random=3',
    link: '/tournaments/3',
    description: 'Experience the intensity of competitive CS:GO at its finest. Register now for this major championship!'
  }
];

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">Tournaments</h1>
        
        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <div
              key={tournament.id}
              className="bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-white">{tournament.name}</h2>
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">
                  {tournament.game}
                </span>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <span className="mr-2">🎮</span>
                  <span>Start: {tournament.startDate}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-2">⏰</span>
                  <span>Registration: {tournament.registrationDeadline}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-2">💰</span>
                  <span>Prize Pool: {tournament.totalPrize}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="mr-2">🏆</span>
                  <span>Status: {tournament.status}</span>
                </div>
              </div>

              <button
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                onClick={() => window.open(tournament.link, '_blank')}
              >
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}