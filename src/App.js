import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuroraBackground from './components/AuroraBackground';
import InfiniteMenu from './components/InfiniteMenu';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import TeamsPage from './pages/TeamsPage';
import TournamentsPage from './pages/TournamentsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative text-white">
        <AuroraBackground />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
        </Routes>

        <InfiniteMenu />
      </div>
    </Router>
  );
}

export default App;