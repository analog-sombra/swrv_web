import create from "zustand";


interface IntroNavState {
    isOpen: boolean
    change: (value: boolean) => void
}


const IntroNavStore = create<IntroNavState>()((set) => ({
    isOpen: false,
    change: (value) => set((state) => ({ isOpen: value })),
}));

export default IntroNavStore;

