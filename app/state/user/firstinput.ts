import { create } from "zustand";

interface userInputState {
    index: number
    setIndex: (value: number) => void
}

const UserInputStore = create<userInputState>()((set) => ({
    index: 1,
    setIndex: (value) => set((state) => ({ index: value })),
}));


export default UserInputStore;

