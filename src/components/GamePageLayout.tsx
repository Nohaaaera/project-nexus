import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfileModal } from '@/components/UserProfileModal';
import { UserProfile } from '@/types';

interface GamePageLayoutProps {
    gameName: string;
    onSaveProfile: (profile: UserProfile) => void;
}

export default function GamePageLayout({ gameName, onSaveProfile }: GamePageLayoutProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username.trim()) {
            setIsModalOpen(true);
        }
    };

    const handleSave = (profile: UserProfile) => {
        onSaveProfile(profile);
        setIsModalOpen(false);
        navigate('/public-display');
    }

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-start pt-40 bg-gray-900 text-white font-sans">
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-white">{gameName}</h1>
                <p className="text-xl mt-2 text-gray-300">Enter your gamer tag to continue</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-md px-4">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full p-4 bg-gray-800 border-2 border-blue-500 text-white rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-lg shadow-blue-500/30"
                />
            </form>
            <UserProfileModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                username={username} 
                game={gameName}
                onSave={handleSave} 
            />
        </div>
    );
}