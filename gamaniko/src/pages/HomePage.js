import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Calendar, Trophy, Info, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import InfiniteMenu3D from '../components/InfiniteMenu3D';
import DynamicBackground from '../components/DynamicBackground';
import BlurText from '../components/BlurText';
import CircularGallery from '../components/CircularGallery';

const menuItems = [
  {
    image: 'https://picsum.photos/900/900?random=1',
    link: '/tournaments',
    title: 'Tournaments',
    description: 'Browse and participate in exciting gaming tournaments'
  },
  {
    image: 'https://picsum.photos/900/900?random=2',
    link: '/events',
    title: 'Events',
    description: 'Host and manage gaming events with our arcade console rentals'
  },
  {
    image: 'https://picsum.photos/900/900?random=3',
    link: '/teams',
    title: 'Teams',
    description: 'Find and join competitive gaming teams'
  },
  {
    image: 'https://picsum.photos/900/900?random=4',
    link: '/about',
    title: 'About Us',
    description: 'Learn about our gaming event management services'
  }
];

const galleryItems = [
  { image: 'https://picsum.photos/seed/1/800/600?grayscale', text: 'Gaming Tournament' },
  { image: 'https://picsum.photos/seed/2/800/600?grayscale', text: 'Arcade Setup' },
  { image: 'https://picsum.photos/seed/3/800/600?grayscale', text: 'Team Battle' },
  { image: 'https://picsum.photos/seed/4/800/600?grayscale', text: 'Prize Ceremony' },
  { image: 'https://picsum.photos/seed/5/800/600?grayscale', text: 'Gaming Event' },
  { image: 'https://picsum.photos/seed/16/800/600?grayscale', text: 'Console Setup' },
  { image: 'https://picsum.photos/seed/17/800/600?grayscale', text: 'Player Match' },
  { image: 'https://picsum.photos/seed/8/800/600?grayscale', text: 'Tournament Finals' },
  { image: 'https://picsum.photos/seed/9/800/600?grayscale', text: 'Team Victory' },
  { image: 'https://picsum.photos/seed/10/800/600?grayscale', text: 'Gaming Community' },
  { image: 'https://picsum.photos/seed/21/800/600?grayscale', text: 'Event Setup' },
  { image: 'https://picsum.photos/seed/12/800/600?grayscale', text: "Championship" }
];

export default function HomePage() {
  const [showMenu, setShowMenu] = useState(false);

  const handleGetStarted = () => {
    setShowMenu(true);
  };

  return (
    <div className="min-h-screen bg-gray-900/80 backdrop-blur-sm">
      <DynamicBackground />

      {!showMenu ? (
        // Hero Section
        <div className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-transparent"></div>
          <div className="relative z-10 text-center px-4">
            <BlurText 
              text="Gamaniko" 
              className="text-6xl font-bold text-white mb-6"
              delay={100}
              animateBy="letters"
              loop={true}
              loopInterval={4000}
              direction="top"
            />
            <BlurText 
              text="Your Ultimate Gaming Event Management Platform" 
              className="text-xl text-gray-300 mb-8"
              delay={50}
              loop={true}
              loopInterval={5000}
              direction="bottom"
            />
            <button
              onClick={handleGetStarted}
              className="bg-gaming-purple hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        // 3D Menu Section
        <div className="h-screen">
          <InfiniteMenu3D items={menuItems} />
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">100+</div>
            <BlurText 
              text="Active Tournaments" 
              className="text-gray-300"
              delay={100}
            />
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">50K+</div>
            <BlurText 
              text="Active Players" 
              className="text-gray-300"
              delay={100}
            />
          </div>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">$1M+</div>
            <BlurText 
              text="Prize Pool" 
              className="text-gray-300"
              delay={100}
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-16">
          <BlurText 
            text="Our Services" 
            className="text-3xl font-bold text-white mb-8 text-center"
            delay={100}
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <Gamepad2 className="w-12 h-12 text-gaming-purple mb-4" />
              <BlurText 
                text="Arcade Console Rentals" 
                className="text-xl font-bold text-white mb-2"
                delay={100}
              />
              <BlurText 
                text="Professional gaming consoles for your events" 
                className="text-gray-300"
                delay={100}
              />
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <Calendar className="w-12 h-12 text-gaming-purple mb-4" />
              <BlurText 
                text="Event Management" 
                className="text-xl font-bold text-white mb-2"
                delay={100}
              />
              <BlurText 
                text="Complete event planning and execution" 
                className="text-gray-300"
                delay={100}
              />
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <Trophy className="w-12 h-12 text-gaming-purple mb-4" />
              <BlurText 
                text="Tournaments" 
                className="text-xl font-bold text-white mb-2"
                delay={100}
              />
              <BlurText 
                text="Organize and participate in tournaments" 
                className="text-gray-300"
                delay={100}
              />
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-16">
          <BlurText 
            text="Gallery" 
            className="text-3xl font-bold text-white mb-8 text-center"
            delay={100}
          />
          <div className="h-[600px] bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden">
            <CircularGallery 
              items={galleryItems}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              font="bold 30px DM Sans"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <BlurText 
            text="Contact Us" 
            className="text-3xl font-bold text-white mb-8 text-center"
            delay={100}
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <BlurText 
                text="Get in Touch" 
                className="text-xl font-bold text-white mb-4"
                delay={100}
              />
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-5 h-5 text-gaming-purple mr-2" />
                  <BlurText 
                    text="contact@gamaniko.com" 
                    delay={100}
                  />
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 text-gaming-purple mr-2" />
                  <BlurText 
                    text="+1 (555) 123-4567" 
                    delay={100}
                  />
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 text-gaming-purple mr-2" />
                  <BlurText 
                    text="123 Gaming Street, Digital City" 
                    delay={100}
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
              <BlurText 
                text="Follow Us" 
                className="text-xl font-bold text-white mb-4"
                delay={100}
              />
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/gamaniko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gaming-purple transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.twitter.com/gamaniko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gaming-purple transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/gamaniko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gaming-purple transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.youtube.com/gamaniko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-gaming-purple transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}