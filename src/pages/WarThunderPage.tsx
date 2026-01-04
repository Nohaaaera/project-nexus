import GamePageLayout from '@/components/GamePageLayout';
import { UserProfile } from '@/types';

interface WarThunderPageProps {
    onSaveProfile: (profile: UserProfile) => void;
}

export default function WarThunderPage({ onSaveProfile }: WarThunderPageProps) {
    return (
        <GamePageLayout gameName="War Thunder" onSaveProfile={onSaveProfile} />
    );
}
