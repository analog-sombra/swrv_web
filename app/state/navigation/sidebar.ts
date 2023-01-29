import create from "zustand";

enum SideBarTabs {
    None,
    MyCampaigns,
    FindCampaigns,
    Inbox,
    MyEarnings,
    Drafts,
    Favourite,
    Invite,
    Help
}


interface SideBarState {
    currentIndex: SideBarTabs
    changeTab: (value: SideBarTabs) => void
}


const SideBarNavStore = create<SideBarState>()((set) => ({
    currentIndex: SideBarTabs.None,
    changeTab: (value) => set((state) => ({ currentIndex: value })),
}));

export default SideBarNavStore;

export { SideBarTabs };