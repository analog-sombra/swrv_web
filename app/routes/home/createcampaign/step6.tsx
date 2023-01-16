import { faAdd, faCaretDown, faCheck, faPaperclip, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";
import CreateCampaignStore from "~/state/campaign/createcampaign";
import { UploadFile } from "~/utils";

export async function loader({ request }: LoaderArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    return json({ userdata: cookie.user });
}

const Step6 = () => {
    const userdata = useLoaderData();

    const userId: string = userdata.userdata.id
    console.log(userId);
    const navigator = useNavigate();

    const dosdata = CreateCampaignStore((state) => state.dos);
    const dontsdata = CreateCampaignStore((state) => state.donts);
    const pdfFile = CreateCampaignStore((state) => state.pdffile);
    const image = CreateCampaignStore((state) => state.image);


    const platform = CreateCampaignStore((state) => state.platform).join();
    const campaignTypeId = CreateCampaignStore((state) => state.campaignTypeId);
    const media = CreateCampaignStore((state) => state.media);
    const campaignInfo = CreateCampaignStore((state) => state.campaignInfo);
    const approval = CreateCampaignStore((state) => state.approval) ? "1" : "0";
    const discoutCoupon = CreateCampaignStore((state) => state.discoutCoupon);
    const affiliatedLinks = CreateCampaignStore((state) => state.affiliatedLinks);
    const target = CreateCampaignStore((state) => state.target).toString();
    const minTarget = CreateCampaignStore((state) => state.minTarget).toString();
    const rating = CreateCampaignStore((state) => state.rating).toString();
    const mendtion = CreateCampaignStore((state) => state.mendtion).join();
    const hashtag = CreateCampaignStore((state) => state.hashtag).join();
    const dos = CreateCampaignStore((state) => state.dos).join();
    const donts = CreateCampaignStore((state) => state.donts).join();
    const audience = CreateCampaignStore((state) => state.audience).join();
    const infLocation = CreateCampaignStore((state) => state.infLocation).id;
    const tilldate = CreateCampaignStore((state) => state.tilldate);
    const maxInf = CreateCampaignStore((state) => state.maxInf).toString();
    const remuneration = CreateCampaignStore((state) => state.remuneration);
    const remunerationType = CreateCampaignStore((state) => state.remunerationType);
    const campaignName = CreateCampaignStore((state) => state.campaignName);
    const planedBudget = CreateCampaignStore((state) => state.planedBudget).toString();
    const costPerPost = CreateCampaignStore((state) => state.costPerPost).toString();
    const startDate = CreateCampaignStore((state) => state.startDate);
    const endDate = CreateCampaignStore((state) => state.endDate);
    const minReach = CreateCampaignStore((state) => state.minReach).toString();
    const maxReact = CreateCampaignStore((state) => state.maxReact).toString();
    const publicGlobally = CreateCampaignStore((state) => state.publicGlobally) ? "1" : "2";
    const brandinfo = CreateCampaignStore((state) => state.brandinfo);
    const campaginPurpose = CreateCampaignStore((state) => state.campaginPurpose);

    const [error, setError] = useState<string | null>(null);

    async function createCampagin() {
        const req: { [key: string]: string; } = {
            "userId": userId,
            "brandUserId": userId,
            "brandId": userId,
            "cityId": "1",
            "campaignTypeId": campaignTypeId,
            "campaignName": campaignName,
            "campaignInfo": campaignInfo,
            "startAt": startDate,
            "endAt": endDate,
            "minReach": minReach,
            "maxReach": maxReact,
            "costPerPost": costPerPost,
            "totalBudget": planedBudget,
            "minEligibleRating": rating,
            "currencyId": "1",
            "categories": infLocation,
            "platforms": platform,
            "mentions": mendtion,
            "hashtags": hashtag,
            "dos": dos,
            "donts": donts,
            "totalParticipants": maxInf,
            "remuneration": remunerationType,
            "geoLat": "0",
            "geoLng": "0",
            "georadiusKm": "3",
            "postApproval": approval,
            "audienceLocations": audience,
            "inviteStartAt": startDate,
            "inviteEndAt": tilldate,
            "purpose": campaginPurpose,
            "isPublic": publicGlobally

        }
            ;
        if (remunerationType == "1") {
            req["remunerationCash"] = remuneration;
        }
        if (remunerationType == "2") {
            req["remunerationProductDetail"] = remuneration;
        }
        if (remunerationType == "3") {
            req["remunerationRevenuePer"] = remuneration;
        }
        if (remunerationType == "4") {
            req["dicountCoupon"] = remuneration;
        }

        if (campaignTypeId == "4") {
            req["minTarget"] = minTarget;
            req["maxTarget"] = target;
        }



        const data = await axios({
            method: 'post',
            url: `${BaseUrl}/api/add-campaign`,
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


        if (data.data.status == false) {
            return setError(data.data.message);
        }
        const id = data.data.data["id"];

        const pdfurl = await UploadFile(pdfFile[0]);

        const pdfref: { [key: string]: string; } = {
            "campaignId": id,
            "title": `attachemtn${id}`,
            "url": pdfurl
        }

        await axios({
            method: 'post',
            url: `${BaseUrl}/api/add-campaign-attachment`,
            data: pdfref,
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



        for (let i: number = 0; i < image.length; i++) {

            const imgurl = await UploadFile(image[i]);
            const imgref: { [key: string]: string; } = {
                "campaignId": id,
                "title": `moodboard${id}${i}`,
                "url": imgurl
            }


            await axios({
                method: 'post',
                url: `${BaseUrl}/api/add-campaign-attachment`,
                data: imgref,
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
        }





        navigator("/home")

    }
    return (
        <>
            <div className="flex gap-x-4 flex-col lg:flex-row">
                <div className="bg-white shadow-xl rounded-xl px-8 py-4 mt-4">
                    <div className="flex items-end gap-x-3">
                        <div>
                            <img src="/images/brand/adidas.jpg" alt="error" className="object-cover w-16 h-16 rounded" />
                        </div>
                    </div>
                    <h3 className="text-black font-bold text-md text-left mt-4">Info</h3>
                    <p className="text-black font-semibold text-xs text-left">
                        {campaignInfo}
                    </p>
                    <h3 className="text-black font-bold text-md text-left mt-4">campaign Information</h3>
                    <p className="text-black font-semibold text-xs text-left">
                        {brandinfo}
                    </p>
                    <h3 className="text-black font-bold text-md text-left mt-4">Mood boards</h3>
                    <div className="flex gap-x-4  overflow-x-scroll no-scrollbar w-[300px] lg:w-[600px] md:w-[400px]">
                        {
                            image.map((value: File, i: number) => {
                                var url =
                                    URL.createObjectURL(value)
                                return (
                                    <div key={i}>
                                        <div className="w-32 h-32 bg-gray-200 rounded-xl grid place-items-center relative">
                                            <div className="top-0 left-0 absolute h-full w-full">
                                                <img src={url} alt="error" className="w-full h-full rounded-xl object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Optional attachments</h2>
                    <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4">
                        <h3 className="text-black font-semibold  text-md">{pdfFile.length == 0 ? "" : pdfFile[0].name}</h3>
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full">
                            <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
                        </div>
                    </div>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">You should</h2>
                    <div className="flex flex-col lg:flex-row gap-2">
                        {/* dos start here */}
                        <div className="w-full">
                            <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex">
                                <div className="grid place-items-center px-4 rounded-lg font-bold text-green-500">
                                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                </div>
                                <div className="grid place-items-center">
                                    <h2 className="text-primary text-lg text-left font-medium">Do</h2>
                                </div>
                                <div className="grow"></div>
                                <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                                    <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div>
                                {dosdata.map((value: string, i: number) => {
                                    return (
                                        <div key={i}>
                                            <div className="bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex">
                                                {value}
                                                <div className="grow"> </div>

                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {/* dos end here */}
                        <div className="w-10"></div>
                        {/* donts start here */}
                        <div className="w-full">
                            <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex">
                                <div className="grid place-items-center px-4 rounded-lg font-bold text-red-500">
                                    <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                                </div>
                                <div className="grid place-items-center">
                                    <h2 className="text-primary text-lg text-left font-medium">Don't</h2>
                                </div>
                                <div className="grow"></div>
                                <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                                    <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                                </div>
                            </div>

                            <div>
                                {dontsdata.map((value: string, i: number) => {
                                    return (
                                        <div key={i}>
                                            <div className="bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex">
                                                {value}
                                                <div className="grow"> </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>


                        </div>
                        {/* donts end here */}
                    </div>


                </div>

                <div>
                    <div className="lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4">
                        <h1 className="text-primary text-lg font-medium">Campaign Summary</h1>
                        <h3 className="text-black font-bold text-md text-left mt-4">Congratulations</h3>
                        <p className="text-black font-semibold text-xs text-left">
                            The Jaquar Group, established in 1960, is a growing multi-diversified bathroom and lighting solutions company with 17% CAGR over 10 years in a row, offers faucets, showers, shower enclosures, sanitary ware, flushing systems, wellness products, concealed cisterns, water heaters, and varied lighting products.
                        </p>
                        {(error == "" || error == null || error == undefined) ? null :
                            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                        }
                        <div className="flex w-full mt-10">
                            <div onClick={() => { navigator(-1) }} className="w-full">
                                <CusButton text="Back" textColor={"text-black"} background="bg-gray-100" width={"w-full"} fontwidth={"font-bold"}></CusButton>
                            </div>
                            <div className="w-10"></div>
                            <div className="w-full" onClick={() => {

                                createCampagin();
                            }}>
                                <CusButton text="Create" textColor={"text-white"} background="bg-secondary" width={"w-full"} fontwidth={"font-bold"}></CusButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Step6;