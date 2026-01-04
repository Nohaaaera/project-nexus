import GamePageLayout from '@/components/GamePageLayout';
import { UserProfile } from '@/types';

interface CallOfDutyPageProps {
    onSaveProfile: (profile: UserProfile) => void;
}

export default function CallOfDutyPage({ onSaveProfile }: CallOfDutyPageProps) {
    return (
        <GamePageLayout gameName="Call of Duty" onSaveProfile={onSaveProfile} />
    );
}
