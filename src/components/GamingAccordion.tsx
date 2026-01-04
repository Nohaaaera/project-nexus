'use client';

import { useState } from 'react';

const games = [
  { name: "Call of Duty" },
  { name: "PUBG" },
  { name: "Free Fire" },
  { name: "Roblox" },
  { name: "War Thunder" },
];

const AccordionItem = ({ game, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={onToggle}
        className="w-full text-left p-4 focus:outline-none transition-colors hover:bg-gray-900"
      >
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-blue-400">{game.name}</span>
          <span className='text-pink-500 text-2xl'>{isOpen ? '-' : '+'}</span>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-950">
          <label htmlFor={`${game.name}-name`} className="block text-sm font-medium text-pink-500 mb-2">Your Name</label>
          <input
            type="text"
            id={`${game.name}-name`}
            className="w-full bg-gray-800 border border-gray-600 rounded-md p-2 text-white focus:ring-pink-500 focus:border-pink-500"
            placeholder="Enter your name"
          />
        </div>
      )}
    </div>
  );
};

const GamingAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black rounded-lg shadow-lg border border-blue-800">
      {games.map((game, index) => (
        <AccordionItem
          key={index}
          game={game}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default GamingAccordion;
