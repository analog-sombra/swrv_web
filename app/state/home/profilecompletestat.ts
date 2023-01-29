import { create } from "zustand";

interface ProfileCompleteState {
    isOpen: boolean
    change: (value: boolean) => void
}


const ProfileComleteStore = create<ProfileCompleteState>()((set) => ({
    isOpen: true,
    change: (value) => set((state) => ({ isOpen: value })),
}));

export default ProfileComleteStore;

