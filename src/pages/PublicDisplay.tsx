import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { UserProfile } from '@/types';

interface PublicDisplayProps {
  profiles: UserProfile[];
}

const PublicDisplay = ({ profiles }: PublicDisplayProps) => {
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Player Lobby</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile) => (
          <Card 
            key={profile.id} 
            className="bg-gray-800 text-white cursor-pointer hover:bg-gray-700 transition-colors"
            onClick={() => setSelectedProfile(profile)}
          >
            <CardHeader>
              <CardTitle className="text-blue-500">{profile.username}</CardTitle>
            </CardHeader>
            <CardContent>
                <p>Game: {profile.game}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProfile && (
        <Dialog open={!!selectedProfile} onOpenChange={() => setSelectedProfile(null)}>
            <DialogContent className="sm:max-w-[425px] bg-gray-900 border-2 border-blue-500 text-white shadow-lg shadow-blue-500/50">
                <DialogHeader>
                    <DialogTitle className="text-4xl font-bold text-center text-pink-500">{selectedProfile.username}</DialogTitle>
                    <DialogDescription className="text-center text-gray-400 pt-2">
                        {selectedProfile.game}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4 text-lg">
                    <p><span className='font-bold text-pink-500'>Play Style:</span> {selectedProfile.playStyle}</p>
                    <p><span className='font-bold text-pink-500'>Communication:</span> {selectedProfile.communication}</p>
                    <p><span className='font-bold text-pink-500'>Hobbies:</span> {selectedProfile.hobbies}</p>
                    {selectedProfile.country && <p><span className='font-bold text-pink-500'>Country:</span> {selectedProfile.country}</p>}
                    <p><span className='font-bold text-pink-500'>Playtime:</span> {selectedProfile.playtime}</p>
                </div>
            </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default PublicDisplay;
