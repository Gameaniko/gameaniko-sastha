import React from 'react';
import { 
  CalendarIcon, 
  UserGroupIcon, 
  TrophyIcon, 
  HomeIcon 
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const InfiniteMenu = () => {
  const navigate = useNavigate();

  const menuItems = [
    { 
      icon: <HomeIcon className="h-6 w-6" />, 
      text: 'Home', 
      path: '/' 
    },
    { 
      icon: <CalendarIcon className="h-6 w-6" />, 
      text: 'Events', 
      path: '/events' 
    },
    { 
      icon: <UserGroupIcon className="h-6 w-6" />, 
      text: 'Teams', 
      path: '/teams' 
    },
    { 
      icon: <TrophyIcon className="h-6 w-6" />, 
      text: 'Tournaments', 
      path: '/tournaments' 
    }
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 
      bg-white/20 backdrop-blur-lg rounded-full p-2 shadow-lg">
      <div className="flex space-x-4 items-center">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            onClick={() => navigate(item.path)}
            className="flex items-center space-x-2 text-white 
              hover:bg-white/30 p-2 rounded-full 
              transition-all duration-300 cursor-pointer"
          >
            {item.icon}
            <span className="text-sm font-medium hidden md:block">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default InfiniteMenu;