import create from "zustand";


interface NotificationState {
    isOpen: boolean
    change: (value: boolean) => void
}


const NotificationStore = create<NotificationState>()((set) => ({
    isOpen: false,
    change: (value) => set((state) => ({ isOpen: value })),
}));

export default NotificationStore;

