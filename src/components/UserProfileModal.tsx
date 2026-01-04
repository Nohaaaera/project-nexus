import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { UserProfile } from '@/types';
import { useUI } from '@/contexts/UIContext';

interface UserProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    username: string;
    game: string;
    onSave: (profile: UserProfile) => void;
}

export function UserProfileModal({ isOpen, onClose, username, game, onSave }: UserProfileModalProps) {
    const [playStyle, setPlayStyle] = useState('');
    const [communication, setCommunication] = useState('');
    const [hobbies, setHobbies] = useState('');
    const [country, setCountry] = useState('');
    const [playtime, setPlaytime] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);
    const { isProfileFormCollapsed, setProfileFormCollapsed } = useUI();

    const handleValueChange = (setter: (value: string) => void) => (value: string) => {
        setter(value);
    };

    useEffect(() => {
        const allRequiredFilled = !!(playStyle && communication && hobbies && playtime);
        setIsFormValid(allRequiredFilled);
        if (allRequiredFilled) {
            setProfileFormCollapsed(true);
        }
    }, [playStyle, communication, hobbies, playtime, setProfileFormCollapsed]);

    const handleSave = () => {
        if (isFormValid) {
            const profile: UserProfile = {
                id: new Date().toISOString(),
                username,
                game,
                playStyle,
                communication,
                hobbies,
                country,
                playtime,
            };
            onSave(profile);
            onClose();
        }
    };

    useEffect(() => {
        if (isOpen) {
            setPlayStyle('');
            setCommunication('');
            setHobbies('');
            setCountry('');
            setPlaytime('');
            setProfileFormCollapsed(false);
            setIsFormValid(false);
        } else {
            setProfileFormCollapsed(true);
        }
    }, [isOpen, setProfileFormCollapsed]);

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] bg-gray-900 border-2 border-blue-500 text-white shadow-lg shadow-blue-500/50">
                <DialogHeader>
                    <DialogTitle className="text-5xl font-bold text-center text-pink-500">Hey {username}!</DialogTitle>
                    <DialogDescription className="text-center text-gray-400 pt-2">
                        Some info can help you match up better with your squad.
                    </DialogDescription>
                </DialogHeader>

                {!isProfileFormCollapsed ? (
                    <div className="grid gap-4 py-4">
                        <Select onValueChange={handleValueChange(setPlayStyle)} value={playStyle}>
                            <SelectTrigger className="w-full bg-gray-800 border-blue-500 text-white focus:ring-pink-500">
                                <SelectValue placeholder="Play Style *" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 text-white border-blue-500">
                                <SelectGroup>
                                    <SelectLabel className="text-pink-500">Play Style</SelectLabel>
                                    <SelectItem value="competitive" className="focus:bg-pink-500">Competitive</SelectItem>
                                    <SelectItem value="casual" className="focus:bg-pink-500">Casual</SelectItem>
                                    <SelectItem value="completionist" className="focus:bg-pink-500">Completionist</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select onValueChange={handleValueChange(setCommunication)} value={communication}>
                             <SelectTrigger className="w-full bg-gray-800 border-blue-500 text-white focus:ring-pink-500">
                                <SelectValue placeholder="Communication *" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 text-white border-blue-500">
                                <SelectGroup>
                                    <SelectLabel className="text-pink-500">Communication</SelectLabel>
                                    <SelectItem value="talkative" className="focus:bg-pink-500">Talkative</SelectItem>
                                    <SelectItem value="mute" className="focus:bg-pink-500">Mute</SelectItem>
                                    <SelectItem value="no-mic" className="focus:bg-pink-500">No-Mic</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select onValueChange={handleValueChange(setHobbies)} value={hobbies}>
                            <SelectTrigger className="w-full bg-gray-800 border-blue-500 text-white focus:ring-pink-500">
                                <SelectValue placeholder="Hobbies *" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 text-white border-blue-500">
                                <SelectGroup>
                                    <SelectLabel className="text-pink-500">Hobbies</SelectLabel>
                                    <SelectItem value="chill-talk" className="focus:bg-pink-500">Chill Talk</SelectItem>
                                    <SelectItem value="life" className="focus:bg-pink-500">Life</SelectItem>
                                    <SelectItem value="tiktok" className="focus:bg-pink-500">TikTok</SelectItem>
                                    <SelectItem value="food" className="focus:bg-pink-500">Food</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select onValueChange={handleValueChange(setCountry)} value={country}>
                            <SelectTrigger className="w-full bg-gray-800 border-blue-500 text-white focus:ring-pink-500">
                                <SelectValue placeholder="Country (Optional)" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 text-white border-blue-500">
                                <SelectGroup>
                                    <SelectLabel className="text-pink-500">Country</SelectLabel>
                                    <SelectItem value="usa" className="focus:bg-pink-500">United States</SelectItem>
                                    <SelectItem value="canada" className="focus:bg-pink-500">Canada</SelectItem>
                                    <SelectItem value="uk" className="focus:bg-pink-500">United Kingdom</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Select onValueChange={handleValueChange(setPlaytime)} value={playtime}>
                            <SelectTrigger className="w-full bg-gray-800 border-blue-500 text-white focus:ring-pink-500">
                                <SelectValue placeholder="Playtime *" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 text-white border-blue-500">
                                <SelectGroup>
                                    <SelectLabel className="text-pink-500">Playtime</SelectLabel>
                                    <SelectItem value="night-owl" className="focus:bg-pink-500">Night Owl</SelectItem>
                                    <SelectItem value="early-bird" className="focus:bg-pink-500">Early Bird</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                ) : (
                    <div className="py-4 text-white space-y-2">
                        <p><span className="font-bold text-pink-500 w-32 inline-block">Play Style:</span> {playStyle}</p>
                        <p><span className="font-bold text-pink-500 w-32 inline-block">Communication:</span> {communication}</p>
                        <p><span className="font-bold text-pink-500 w-32 inline-block">Hobbies:</span> {hobbies}</p>
                        <p><span className="font-bold text-pink-500 w-32 inline-block">Playtime:</span> {playtime}</p>
                        {country && <p><span className="font-bold text-pink-500 w-32 inline-block">Country:</span> {country}</p>}
                        <Button variant="outline" onClick={() => setProfileFormCollapsed(false)} className="w-full mt-4 border-blue-500 text-white hover:bg-blue-500 hover:text-white">
                            Edit Selections
                        </Button>
                    </div>
                )}

                <Button onClick={handleSave} disabled={!isFormValid} className="w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-500 text-white font-bold py-2 px-4 rounded">
                    Save
                </Button>
            </DialogContent>
        </Dialog>
    )
}