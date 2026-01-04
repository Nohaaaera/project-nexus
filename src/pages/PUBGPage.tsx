import GamePageLayout from '@/components/GamePageLayout';
import { UserProfile } from '@/types';

interface PUBGPageProps {
    onSaveProfile: (profile: UserProfile) => void;
}

export default function PUBGPage({ onSaveProfile }: PUBGPageProps) {
    return (
        <GamePageLayout gameName="PUBG" onSaveProfile={onSaveProfile} />
    );
}
