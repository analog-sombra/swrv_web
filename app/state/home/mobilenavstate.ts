import { create } from "zustand";


interface MobileNavState {
    isOpen: boolean
    change: (value: boolean) => void
}


const MobileNavStore = create<MobileNavState>()((set) => ({
    isOpen: false,
    change: (value) => set((state) => ({ isOpen: value })),
}));

export default MobileNavStore;

