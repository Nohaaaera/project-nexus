import GamePageLayout from '@/components/GamePageLayout';
import { UserProfile } from '@/types';

interface RobloxPageProps {
    onSaveProfile: (profile: UserProfile) => void;
}

export default function RobloxPage({ onSaveProfile }: RobloxPageProps) {
    return (
        <GamePageLayout gameName="Roblox" onSaveProfile={onSaveProfile} />
    );
}
