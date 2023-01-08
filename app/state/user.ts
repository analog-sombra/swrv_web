import create from "zustand";
import { devtools, persist } from 'zustand/middleware'

interface userState {
    user: unknown
    changeUser: (value: any) => void
}




const UserStore = create<userState>()(
    devtools(
        persist((set) => (
            {
                user: {},
                changeUser: (value: unknown) => set((state) => ({ user: value }))
            }
        ), {
            name: 'user-storage', // name of the item in the storage (must be unique)
            getStorage: () => localStorage, // (optional) by default, 'localStorage' is used
        })
    )
);
export default UserStore;

