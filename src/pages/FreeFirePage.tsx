import GamePageLayout from '@/components/GamePageLayout';
import { UserProfile } from '@/types';

interface FreeFirePageProps {
    onSaveProfile: (profile: UserProfile) => void;
}

export default function FreeFirePage({ onSaveProfile }: FreeFirePageProps) {
    return (
        <GamePageLayout gameName="Free Fire" onSaveProfile={onSaveProfile} />
    );
}
