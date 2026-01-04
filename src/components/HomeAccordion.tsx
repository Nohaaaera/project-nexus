import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const accordionItems = [
  {
    title: 'Call of Duty',
    path: '/call-of-duty',
  },
  {
    title: 'PUBG',
    path: '/pubg',
  },
  {
    title: 'Free Fire',
    path: '/free-fire',
  },
  {
    title: 'Roblox',
    path: '/roblox',
  },
  {
    title: 'War Thunder',
    path: '/war-thunder',
  },
];

const AccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b-2 border-blue-900">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-5 text-left text-xl font-bold text-blue-300 hover:bg-blue-900 focus:outline-none"
      >
        <span>{item.title}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-5 bg-gray-900">
          <Link
            to={item.path}
            className="block w-full text-left text-lg text-pink-400 hover:text-pink-500 bg-gray-800 p-4 rounded-md"
          >
            Go to {item.title} page
          </Link>
        </div>
      )}
    </div>
  );
};

const HomeAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 border-2 border-blue-800 rounded-lg overflow-hidden">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default HomeAccordion;