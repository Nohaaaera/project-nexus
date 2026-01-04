import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { useUI } from '@/contexts/UIContext';

const games = [
  { name: 'Call of Duty', path: '/call-of-duty', icon: '🎯' },
  { name: 'PUBG', path: '/pubg', icon: '🍳' },
  { name: 'Free Fire', path: '/free-fire', icon: '🔥' },
  { name: 'Roblox', path: '/roblox', icon: '🧱' },
  { name: 'War Thunder', path: '/war-thunder', icon: '✈️' },
];

export function SidePanel() {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();
  const { setProfileFormCollapsed } = useUI();

  const handleGameSelect = () => {
    setProfileFormCollapsed(true);
  };

  return (
    <aside className={`flex flex-col bg-white shadow-lg transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-20'}`}>
      <div className="relative flex items-center justify-center h-16 border-b">
        {isExpanded && <h2 className="text-xl font-bold text-gray-800">Game Lobby</h2>}
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className="absolute top-1/2 -right-3 transform -translate-y-1/2 p-1 bg-white border-2 border-gray-200 rounded-full text-gray-600 hover:bg-gray-100 focus:outline-none z-10"
        >
          <ChevronLeft className={`transition-transform duration-300 ${!isExpanded && "rotate-180"}`} size={20} />
        </button>
      </div>
      <nav className="flex-1 px-4 py-4">
        <ul className="space-y-2">
          {games.map((game) => (
            <li key={game.name}>
              <Link
                to={game.path}
                onClick={handleGameSelect}
                className={`flex items-center p-2 rounded-md transition-colors text-sm font-medium ${
                  location.pathname === game.path
                    ? 'bg-pink-100 text-pink-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                title={isExpanded ? '' : game.name}
              >
                <span className="flex items-center justify-center w-8 h-8 text-xl rounded-full mr-3 flex-shrink-0">
                  {game.icon}
                </span>
                {isExpanded && <span className="truncate">{game.name}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}