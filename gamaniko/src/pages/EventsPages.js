// src/pages/EventsPage.js
import React, { useState } from 'react';

const EventsPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "League of Legends Championship",
      date: "May 15, 2024",
      time: "7:00 PM EST",
      location: "Online Tournament",
      description: "Annual LoL competitive tournament",
      participants: 64,
      prize: "$10,000"
    },
    {
      id: 2,
      name: "Fortnite World Cup Qualifiers",
      date: "June 22, 2024",
      time: "2:00 PM PST",
      location: "Global Online Event",
      description: "Battle royale championship",
      participants: 100,
      prize: "$25,000"
    },
    {
      id: 3,
      name: "CS:GO Masters Tournament",
      date: "July 5, 2024",
      time: "5:00 PM GMT",
      location: "European Qualifier",
      description: "Counter-Strike global competition",
      participants: 32,
      prize: "$15,000"
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Gaming Events
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div 
            key={event.id} 
            className="bg-white/10 backdrop-blur-lg 
            rounded-xl p-6 hover:bg-white/20 
            transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {event.name}
            </h2>
            <div className="space-y-2 text-sm opacity-80">
              <p>📅 Date: {event.date}</p>
              <p>🕒 Time: {event.time}</p>
              <p>📍 Location: {event.location}</p>
              <p>📝 Description: {event.description}</p>
              <p>👥 Participants: {event.participants}</p>
              <p>🏆 Prize: {event.prize}</p>
            </div>
            <button className="mt-4 w-full bg-purple-600 
            text-white py-2 rounded-full 
            hover:bg-purple-700 transition-colors">
              Register Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;