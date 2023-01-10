import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { CampaginCard } from "~/components/utils/campagincard";
import PastBrandCard from "~/components/utils/pastbrandcard";
import { userPrefs } from "~/cookies";
import UserStore from "~/state/user";


export const loader = async ({ request }: LoaderArgs) => {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);

    return json({ user: cookie.user });
}

const MyCampaigns = () => {
    const [completed, setCompleted] = useState(false);
    const userdata = useLoaderData();
    const isBrand = userdata.user.role["code"] == "50" ? true : false;


    return (
        <>
            <div>
                <div className="flex my-6 md:flex-row flex-col">
                    <div>
                        <h1 className="text-2xl font-bold text-black text-left mt-4">My campaigns</h1>
                        <p className="text-md font-normal text-black text-left">Here you can manage all the campaigns that you are participating in.</p>
                    </div>
                    <div className="hidden md:block md:grow"></div>
                    <div className="flex justify-center">
                        <div onClick={() => { setCompleted(false) }}>
                            <CusButton height="h-12" text="Active campaigns" fontwidth="font-bold" background={`${completed ? "bg-gray-300" : "bg-[#7CFF01]"}`} textColor={`text-black}`}></CusButton>
                        </div>
                        <div className="w-8"></div>
                        <div onClick={() => { setCompleted(true) }}>
                            <CusButton height="h-12" text="Finished campaigns" fontwidth="font-bold" background={`${completed ? "bg-[#7CFF01]" : "bg-gray-300"}`} textColor="text-black"></CusButton>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-xl p-6">
                    <h1 className="text-black text-center font-bold text-2xl">Would you like to collaborate ?</h1>
                    <div className="w-full text-center bg-red">

                        <Link to={"/home/createcampaign"} >
                            <CusButton text="Create Campaign" textColor={"text-white"} background="bg-secondary"></CusButton>
                        </Link>
                    </div>
                </div>
                <div>
                    {completed
                        ?
                        <CompletedCampaigns></CompletedCampaigns>
                        :
                        <ActiveCampaign></ActiveCampaign>
                    }
                </div>
            </div>

        </>
    );
};

export default MyCampaigns;


const ActiveCampaign = () => {
    return (
        <>
            <div className="bg-white rounded-2xl my-3 shadow-xl p-4">
                <div className="w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4"> <FontAwesomeIcon icon={faIdBadge} className="text-md text-secondary"></FontAwesomeIcon> New Campaign </div>
                <div className="grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <CampaginCard image="/images/brand/powerfitgym.jpg" name="Power Fit Gym"></CampaginCard>
                    <CampaginCard image="/images/brand/szechuan_restaurant.jpg" name="Szechuan Restaurant"></CampaginCard>
                    <CampaginCard image="/images/brand/theburgershop.jpg" name="Theburgershop"></CampaginCard>
                    <CampaginCard image="/images/brand/tronicsfix.jpg" name="Tronicsfix"></CampaginCard>
                </div>
            </div>
        </>
    );
}


const CompletedCampaigns = () => {
    return (
        <>
            <div className="grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center">
                <PastBrandCard></PastBrandCard>
                <PastBrandCard></PastBrandCard>
            </div>
        </>
    );
}
