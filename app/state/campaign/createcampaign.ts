import create from "zustand";


interface CreateCampaignState {
    campaignTypeId: string
    setCampaignTypeId: (value: string) => void

    mendtion: string[]
    addMendtion: (value: string) => void
    removeMeddtion: (value: string) => void
    clearMendtion: () => void

    hashtag: string[]
    addHashtag: (value: string) => void
    removeHashtag: (value: string) => void
    clearHashtag: () => void

    dos: string[]
    addDos: (value: string) => void
    removeDos: (value: string) => void

    donts: string[]
    addDonts: (value: string) => void
    removeDonts: (value: string) => void

    audience: string[]
    addAudience: (value: string) => void
    removeAudience: (value: string) => void
    clearAudience: () => void

    campaign: object
    addProperty: (value: object) => void
}


const CreateCampaignStore = create<CreateCampaignState>()((set) => ({
    campaignTypeId: "0",
    setCampaignTypeId: (value) => set((state) => ({ campaignTypeId: value })),
    mendtion: [],
    addMendtion: (value) => set((state) => ({ mendtion: [...state.mendtion, value] })),
    removeMeddtion: (value) => set((state) => {
        const mymedn = state.mendtion.filter((value1) => value1 != value);
        return ({ mendtion: mymedn });
    }),
    clearMendtion: () => set((state) => ({ mendtion: [] })),

    hashtag: [],
    addHashtag: (value) => set((state) => ({ hashtag: [...state.hashtag, value] })),
    removeHashtag: (value) => set((state) => {
        const myhashtag = state.hashtag.filter((value1) => value1 != value);
        return ({ hashtag: myhashtag });
    }),
    clearHashtag: () => set((state) => ({ hashtag: [] })),

    dos: [],
    addDos: (value) => set((state) => ({ dos: [...state.dos, value] })),
    removeDos: (value) => set((state) => {
        const mydos = state.dos.filter((value1) => value1 != value);
        return ({ dos: mydos });
    }),

    donts: [],
    addDonts: (value) => set((state) => ({ donts: [...state.donts, value] })),
    removeDonts: (value) => set((state) => {
        const mydonts = state.donts.filter((value1) => value1 != value);
        return ({ donts: mydonts });
    }),

    audience: [],
    addAudience: (value) => set((state) => ({ audience: [...state.audience, value] })),
    removeAudience: (value) => set((state) => {
        const audienceloc = state.audience.filter((value1) => value1 != value);
        return ({ audience: audienceloc });
    }),
    clearAudience: () => set((state) => ({ audience: [] })),


    campaign: {},
    addProperty: (value) => set((state) => ({ campaign: { value } })),
}));

export default CreateCampaignStore;

