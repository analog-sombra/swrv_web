
import { create } from "zustand";



interface CreateCampaignState {
    platform: string[]
    setPlatform: (value: string) => void

    campaignTypeId: string
    setCampaignTypeId: (value: string) => void

    media: string
    setMedia: (value: string) => void

    campaignInfo: string
    setCampaignInfo: (value: string) => void


    approval: boolean
    setApproval: (value: boolean) => void

    discoutCoupon: string
    setDiscoutCoupon: (value: string) => void


    affiliatedLinks: string
    setAffiliatedLinks: (value: string) => void


    target: number,
    setTarget: (value: number) => void

    minTarget: number,
    setMinTarget: (value: number) => void

    rating: number,
    setRating: (value: number) => void

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

    pdffile: File[]
    addPdfFile: (value: File) => void

    //step 3
    audience: string[]
    addAudience: (value: string) => void
    removeAudience: (value: string) => void
    clearAudience: () => void


    infLocation: {
        id: string
        categoryCode: string
        categoryName: string
    }
    setInfLocation: (id: string, name: string, type: string) => void

    tilldate: string
    setTillDate: (value: string) => void

    maxInf: number
    setMaxInf: (value: number) => void

    remuneration: string
    setRemuneration: (value: string) => void

    remunerationType: string
    setRemunerationType: (value: string) => void


    // step 4
    campaignName: string
    setCampaignName: (value: string) => void

    planedBudget: number
    setPlanedBudget: (value: number) => void

    costPerPost: number
    setCostPerPost: (value: number) => void

    startDate: string
    setStartDate: (value: string) => void

    endDate: string
    setEndDate: (value: string) => void

    minReach: number
    setMinReach: (value: number) => void

    maxReact: number
    setMaxReact: (value: number) => void

    publicGlobally: boolean
    setPublicGlobally: (value: boolean) => void


    //step 5

    brandinfo: string
    setBrandinfo: (value: string) => void

    campaginPurpose: string
    setCampaginPurpose: (value: string) => void

    image: File[]
    addImage: (value: File) => void
    removeImage: (value: File) => void

    campaign: object
    addProperty: (value: object) => void
}


const CreateCampaignStore = create<CreateCampaignState>()((set) => ({

    campaignTypeId: "0",
    setCampaignTypeId: (value) => set((state) => ({ campaignTypeId: value })),

    platform: [],
    setPlatform: (value) => set((state) => {
        if (state.platform.includes(value)) {
            const setval = state.platform.filter((val) => val != value);
            return ({ platform: [...setval] });
        } else {
            return ({ platform: [...state.platform, value] });
        }
    }),

    media: "",
    setMedia: (value) => set((state) => ({ media: value })),

    campaignInfo: "",
    setCampaignInfo: (value) => set((state) => ({ campaignInfo: value })),


    approval: false,
    setApproval: (value) => set((state) => ({ approval: value })),


    discoutCoupon: "",
    setDiscoutCoupon: (value) => set((state) => ({ discoutCoupon: value })),

    affiliatedLinks: "",
    setAffiliatedLinks: (value) => set((state) => ({ affiliatedLinks: value })),

    target: 0,
    setTarget: (value) => set((state) => ({ target: value })),

    minTarget: 0,
    setMinTarget: (value) => set((state) => ({ minTarget: value })),

    rating: 0,
    setRating: (value) => set((state) => ({ rating: value })),

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

    pdffile: [],
    addPdfFile: (value) => set((state) => ({ pdffile: [value] })),

    //setp 3
    infLocation: {
        id: "",
        categoryCode: "",
        categoryName: "",
    },
    setInfLocation: (id, name, type) => set((state) => ({ infLocation: { id: id, categoryCode: type, categoryName: name } })),

    audience: [],
    addAudience: (value) => set((state) => ({ audience: [...state.audience, value] })),
    removeAudience: (value) => set((state) => {
        const audienceloc = state.audience.filter((value1) => value1 != value);
        return ({ audience: audienceloc });
    }),
    clearAudience: () => set((state) => ({ audience: [] })),

    tilldate: "",
    setTillDate: (value) => set((state) => ({ tilldate: value })),

    maxInf: 0,
    setMaxInf: (value) => set((state) => ({ maxInf: value })),

    remuneration: "",
    setRemuneration: (value) => set((state) => ({ remuneration: value })),


    remunerationType: "",
    setRemunerationType: (value) => set((state) => ({ remunerationType: value })),

    // step 4
    campaignName: "",
    setCampaignName: (value) => set((state) => ({ campaignName: value })),

    planedBudget: 0,
    setPlanedBudget: (value) => set((state) => ({ planedBudget: value })),

    costPerPost: 0,
    setCostPerPost: (value) => set((state) => ({ costPerPost: value })),

    startDate: "",
    setStartDate: (value) => set((state) => ({ startDate: value })),

    endDate: "",
    setEndDate: (value) => set((state) => ({ endDate: value })),

    minReach: 0,
    setMinReach: (value) => set((state) => ({ minReach: value })),

    maxReact: 0,
    setMaxReact: (value) => set((state) => ({ maxReact: value })),

    publicGlobally: false,
    setPublicGlobally: (value) => set((state) => ({ publicGlobally: value })),

    image: [],
    addImage: (value) => set((state) => ({ image: [...state.image, value] })),
    removeImage: (value) => set((state) => {
        const myimages = state.image.filter((value1) => value1 != value);
        return ({ image: myimages });
    }),

    brandinfo: "",
    setBrandinfo: (value) => set((state) => ({ brandinfo: value })),
    campaginPurpose: "",
    setCampaginPurpose: (value) => set((state) => ({ campaginPurpose: value })),

    campaign: {},
    addProperty: (value) => set((state) => ({ campaign: { value } })),
}));

export default CreateCampaignStore;

