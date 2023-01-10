import create from "zustand";


interface CreateCampaignState {
    campaign: object
    addProperty: (value: object) => void
}


const CreateCampaignStore = create<CreateCampaignState>()((set) => ({
    campaign: {},
    addProperty: (value) => set((state) => ({ campaign: { value } })),
}));

export default CreateCampaignStore;

