import { faSortDown, faRemove, faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CusButton } from "~/components/utils/buttont";
import ReactSwitch from "react-switch";
import { useState } from "react";
import { CampaginCard } from "~/components/utils/campagincard";

const FindCampaign = () => {
    const [active, setActive] = useState(false);
    return (
        <>
            <div>
                <div className="flex my-6 md:flex-row flex-col">
                    <div>
                        <h1 className="text-2xl font-bold text-black text-left mt-4">Find campaign</h1>
                        <p className="text-md font-normal text-black text-left">Here you can manage all the campaigns that you are participating in.</p>
                    </div>
                    <div className="hidden md:block md:grow"></div>
                    <div className="flex justify-center">
                        <CusButton height="h-12" text="Campaign" fontwidth="font-bold" background="bg-cyan-300" textColor="text-black"></CusButton>
                        <div className="w-8"></div>
                        <CusButton height="h-12" text="Brand" fontwidth="font-bold" background="bg-gray-300" textColor="text-gray-600"></CusButton>
                    </div>
                </div>
                <div className="rounded-xl shadow-xl p-6 bg-white">
                    <div className="flex px-2">
                        <h2 className="text-black text-xl text-left font-bold">Filter</h2>
                        <div className="grow">
                        </div>
                        <button className="bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center">Save Filter</button>
                        <div className="w-6"></div>
                        <button className="bg-gray-200  rounded-md px-4 py-1 font-medium text-md text-center">Saved filter <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon> </button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4">
                        <div className="px-2">
                            <h1 className="text-primary text-lg font-bold mb">Select</h1>
                            <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" placeholder="Unboxing or Review Posts" />
                            <div className="flex mt-8">
                                <ReactSwitch onChange={() => setActive(!active)} checked={active} checkedIcon={false} uncheckedIcon={false} onColor="#03125E"></ReactSwitch>
                                <p className="text-primary font-bold text-ld ml-2">Show only active campaigns</p>
                            </div>
                        </div>
                        <div className="px-2">
                            <h1 className="text-primary text-lg font-bold mb">Channels</h1>
                            <div className="flex">
                                <div className="mx-2">
                                    <img src="/images/media/instagram.png" alt="error" className="w-8 h-8 rounded-full" />
                                </div>
                                <div className="mx-2">
                                    <img src="/images/media/facebook.png" alt="error" className="w-8 h-8  rounded-full" />
                                </div>
                                <div className="mx-2">
                                    <img src="/images/media/youtube.png" alt="error" className="w-8 h-8  rounded-full" />
                                </div>
                                <div className="mx-2">
                                    <img src="/images/media/snapchat.png" alt="error" className="w-8 h-8  rounded-full" />
                                </div>
                                <div className="mx-2">
                                    <img src="/images/media/twitter.png" alt="error" className="w-8 h-8  rounded-full" />
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <h1 className="text-primary text-lg font-bold mb">Country</h1>
                            <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                            <div className="flex mt-4 items-center">
                                <div className="text-primary text-md font-semibold"><FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon> Advanced filter </div>
                                <div className="grow"></div>
                                <FontAwesomeIcon className="text-primary text-2xl" icon={faTrash}></FontAwesomeIcon>
                                <div className="w-4"></div>
                                <CusButton text="Search" textColor={"text-white"} background={"bg-primary"} fontwidth={"font-bold"}></CusButton>
                            </div>
                        </div>
                    </div>
                </div>
                <SearchedCampaign></SearchedCampaign>
            </div>
        </>
    );
}

export default FindCampaign;


const SearchedCampaign = () => {
    return (
        <>
            <div className="bg-white rounded-2xl my-6 shadow-xl p-4">
                <div className="w-60 text-md font-bold text-primary p-2 my-2">Found: 06 Campaigns </div>
                <div className="grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <CampaginCard image="/images/brand/adidas.jpg" name="Adidas"></CampaginCard>
                    <CampaginCard image="/images/brand/furinicom.jpg" name="Furinicom"></CampaginCard>
                    <CampaginCard image="/images/brand/hilton.jpg" name="Hilton"></CampaginCard>
                    <CampaginCard image="/images/brand/lucent.jpg" name="Lucent"></CampaginCard>
                    <CampaginCard image="/images/brand/adidas.jpg" name="Adidas"></CampaginCard>
                    <CampaginCard image="/images/brand/furinicom.jpg" name="Furinicom"></CampaginCard>
                </div>
            </div>
        </>
    );
}