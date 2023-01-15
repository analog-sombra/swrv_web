import create from "zustand";

interface userState {
    user: string | null
    setUser: (value: string | null) => void
}

const UserStore = create<userState>()((set) => ({
    user: null,
    setUser: (value) => set((state) => ({ user: value })),
}));


export default UserStore;

