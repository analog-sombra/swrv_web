import create from "zustand";


interface SideBarState {
    isOpen: boolean
    change: (value: boolean) => void
}


const SideBarStore = create<SideBarState>()((set) => ({
    isOpen: false,
    change: (value) => set((state) => ({ isOpen: value })),
}));

export default SideBarStore ;

