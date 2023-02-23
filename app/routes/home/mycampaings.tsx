import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { CampaginCard } from "~/components/utils/campagincard";
import PastBrandCard from "~/components/utils/pastbrandcard";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";

export const loader = async ({ request }: LoaderArgs) => {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    const userid = cookie.user.id;
    const campdata = await axios({
        method: 'post',
        url: `${BaseUrl}/api/get-my-campaigns`,
        data: { "id": userid },
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Options': '*',
            'Access-Control-Allow-Methods': '*',
            'X-Content-Type-Options': '*',
            'Content-Type': 'application/json',
            'Accept': '*'
        }
    });

    let req = {
        "search": {
            "status": "3",
            "influencer": userid,
            "fromUser": userid
        }
    };
    const usercamp = await axios({
        method: 'post',
        url: `${BaseUrl}/api/search-invite`,
        data: req,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Options': '*',
            'Access-Control-Allow-Methods': '*',
            'X-Content-Type-Options': '*',
            'Content-Type': 'application/json',
            'Accept': '*'
        }
    });
    return json({ userdata: cookie.user, camp: campdata.data.data, usercamp: usercamp.data.data });
}

const MyCampaigns = () => {
    const [completed, setCompleted] = useState(false);
    const userdata = useLoaderData();
    const isBrand = userdata.userdata.role["code"] == "50" ? true : false;
    const campdata = userdata.camp.campaigns;
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
                {
                    isBrand ?
                        <div className="bg-white shadow-xl rounded-xl p-6">
                            <h1 className="text-black text-center font-bold text-2xl">Would you like to collaborate ?</h1>
                            <div className="w-full text-center bg-red">
                                <Link to={"/home/createcampaign"} >
                                    <CusButton text="Create Campaign" textColor={"text-white"} background="bg-secondary"></CusButton>
                                </Link>
                            </div>
                        </div> : null
                }
                {
                    isBrand ?
                        <div>
                            {completed
                                ?
                                <CompletedCampaigns></CompletedCampaigns>
                                :
                                <ActiveCampaign camp={campdata}></ActiveCampaign>
                            }
                        </div>
                        : null
                }
            </div>
        </>
    );
};

export default MyCampaigns;

type ActiveCampaignProps = {
    camp: object[]
}


const ActiveCampaign = (props: ActiveCampaignProps) => {
    const campdata = props.camp;
    return (
        <>
            <div className="bg-white rounded-2xl my-3 shadow-xl p-4">
                <div className="w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4"> <FontAwesomeIcon icon={faIdBadge} className="text-md text-secondary"></FontAwesomeIcon> New Campaign </div>
                {
                    campdata.length == 0 ? <h1 className="text-black font-medium text-xl text-center">Here is no campaign created..</h1> : null
                }
                <div className="grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        campdata.map((val: any, i: number) => {
                            const platforms: string[] = [];
                            for (let i: number = 0; i < val.platforms.length; i++) {
                                platforms.push(val.platforms[i]['platformLogoUrl']);
                            }
                            return (
                                <div key={i}>
                                    <CampaginCard id={val.id} currency={val.currency.code} platforms={platforms} maxval={val.costPerPost.split(".")[0]} weburl="agag" category={val.type.name} image="/images/brand/powerfitgym.jpg" name={val.name}></CampaginCard>
                                </div>
                            );
                        })
                    }
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
