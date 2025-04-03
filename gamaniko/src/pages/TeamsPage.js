// src/pages/TeamsPage.js
import React, { useState } from 'react';
import { Users, Trophy, Gamepad2 } from 'lucide-react';

const TeamsPage = () => {
  const [teams] = useState([
    {
      id: 1,
      name: 'Team Nexus',
      game: 'League of Legends',
      members: 5,
      rank: 'Diamond',
      achievements: ['Regional Champions 2023', 'Top 8 National Tournament']
    },
    {
      id: 2,
      name: 'Phoenix Squad',
      game: 'Valorant',
      members: 5,
      rank: 'Immortal',
      achievements: ['Tournament Winners Q4 2023', 'Community Cup Champions']
    },
    {
      id: 3,
      name: 'Tactical Force',
      game: 'CS:GO',
      members: 5,
      rank: 'Global Elite',
      achievements: ['ESL Open Winners', 'Regional Finalist']
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Professional Teams
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {teams.map(team => (
          <div key={team.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-lg p-6 transform transition-all hover:scale-105">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">{team.name}</h3>
              <span className="bg-gaming-purple text-white px-3 py-1 rounded-full text-sm">
                {team.game}
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Users className="mr-2 text-gaming-purple" size={20} />
                <span>{team.members} Members</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Trophy className="mr-2 text-gaming-purple" size={20} />
                <span>{team.rank}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Gamepad2 className="mr-2 text-gaming-purple" size={20} />
                <div className="flex flex-col">
                  <span className="font-semibold mb-1">Achievements:</span>
                  <ul className="list-disc list-inside pl-2 space-y-1">
                    {team.achievements.map((achievement, index) => (
                      <li key={index} className="text-sm">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full bg-gaming-purple hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
              View Team Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;