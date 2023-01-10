import create from "zustand";

interface userState {
    user: unknown
    setUser: (value: any) => void
}

const UserStore = create<userState>()((set) => ({
    user: {},
    setUser: (value) => set((state) => ({ user: value })),
}));


export default UserStore;

