import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import '@/styles/WelcomeAnimation.css';

const Welcome = ({ onFinish }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (onFinish) {
        onFinish();
      }
      navigate('/home');
    }, 500); // Match animation duration
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-pink-100 to-orange-100 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-500 ease-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <div 
          className="ghost-image"
          style={{ backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/0fd73a12-0951-42e9-a65f-a7438590441f/warthunder-logo-3e7q2pl-1767526650926.webp)', opacity: 0.4 }}
        ></div>
        <div 
          className="ghost-image"
          style={{ 
            backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/0fd73a12-0951-42e9-a65f-a7438590441f/roblox-logo-ng09ypy-1767526656513.webp)',
            animationDelay: '5s',
            opacity: 0.4
          }}
        ></div>
        <div 
          className="ghost-image"
          style={{ 
            backgroundImage: 'url(https://storage.googleapis.com/dala-prod-public-storage/generated-images/0fd73a12-0951-42e9-a65f-a7438590441f/cod-logo-k1ohxcy-1767526663110.webp)',
            animationDelay: '10s',
            opacity: 0.4
          }}
        ></div>
      </div>

      <div className="absolute top-4 right-4 z-20">
        <Select>
          <SelectTrigger className="w-[180px] bg-white/80 backdrop-blur-sm">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="am">Amharic</SelectItem>
            <SelectItem value="ar">Arabic</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-8xl font-pacifico text-gray-800 mb-4 -mt-20">Nexus Hub</h1>
        <p className="text-2xl text-gray-600 mb-8">Welcome to the lobby Gamer ready to find a Squad?</p>
        <Button
          onClick={handleContinue}
          className="bg-pink-500 hover:bg-pink-600 text-white text-lg py-6 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
