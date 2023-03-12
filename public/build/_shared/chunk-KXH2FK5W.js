import {
  create
} from "/build/_shared/chunk-3KIOMRCQ.js";

// app/state/campaign/createcampaign.ts
var CreateCampaignStore = create()((set) => ({
  campaignTypeId: "0",
  setCampaignTypeId: (value) => set((state) => ({ campaignTypeId: value })),
  platform: [],
  setPlatform: (value) => set((state) => {
    if (state.platform.includes(value)) {
      const setval = state.platform.filter((val) => val != value);
      return { platform: [...setval] };
    } else {
      return { platform: [...state.platform, value] };
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
    return { mendtion: mymedn };
  }),
  clearMendtion: () => set((state) => ({ mendtion: [] })),
  hashtag: [],
  addHashtag: (value) => set((state) => ({ hashtag: [...state.hashtag, value] })),
  removeHashtag: (value) => set((state) => {
    const myhashtag = state.hashtag.filter((value1) => value1 != value);
    return { hashtag: myhashtag };
  }),
  clearHashtag: () => set((state) => ({ hashtag: [] })),
  dos: [],
  addDos: (value) => set((state) => ({ dos: [...state.dos, value] })),
  removeDos: (value) => set((state) => {
    const mydos = state.dos.filter((value1) => value1 != value);
    return { dos: mydos };
  }),
  donts: [],
  addDonts: (value) => set((state) => ({ donts: [...state.donts, value] })),
  removeDonts: (value) => set((state) => {
    const mydonts = state.donts.filter((value1) => value1 != value);
    return { donts: mydonts };
  }),
  pdffile: [],
  addPdfFile: (value) => set((state) => ({ pdffile: [value] })),
  infLocation: {
    id: "",
    categoryCode: "",
    categoryName: ""
  },
  setInfLocation: (id, name, type) => set((state) => ({ infLocation: { id, categoryCode: type, categoryName: name } })),
  audience: [],
  addAudience: (value) => set((state) => ({ audience: [...state.audience, value] })),
  removeAudience: (value) => set((state) => {
    const audienceloc = state.audience.filter((value1) => value1 != value);
    return { audience: audienceloc };
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
    return { image: myimages };
  }),
  brandinfo: "",
  setBrandinfo: (value) => set((state) => ({ brandinfo: value })),
  campaginPurpose: "",
  setCampaginPurpose: (value) => set((state) => ({ campaginPurpose: value })),
  campaign: {},
  addProperty: (value) => set((state) => ({ campaign: { value } }))
}));
var createcampaign_default = CreateCampaignStore;

export {
  createcampaign_default
};
//# sourceMappingURL=/build/_shared/chunk-KXH2FK5W.js.map
