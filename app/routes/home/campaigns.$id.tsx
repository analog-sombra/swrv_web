import { faCoins, faPaperclip, faRemove, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { Completed, Connection, Rating } from "./brand.$id";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import axios from "axios";
import { BaseUrl } from "~/const";
import { useLoaderData } from "@remix-run/react";
import { UploadFile, getCampaignType } from "~/utils";
import { userPrefs } from "~/cookies";


enum AcceptRequest {
    None,
    Panding,
    Accepted,
    Rejected
}

export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const platform = await axios.post(`${BaseUrl}/api/getplatform`);
    const id = props.params.id;
    const campaigndata = await axios.post(`${BaseUrl}/api/campaign-search`, { "id": id, });
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    return json({ campaign: campaigndata.data.data[0], user: cookie.user, platform: platform.data.data });
}


const Campaigns = () => {
    const champaign = useLoaderData().campaign;
    const user = useLoaderData().user;
    const isbrand = user.role.code != 10;
    const data = useLoaderData();


    const userId = user.id;
    const brandimage = champaign.brand == null || champaign.brand.length == 0 || champaign.brand == undefined || champaign.brand == "" ? "/images/avatar/user.png" : champaign.brand.logo == "" || champaign.brand.logo == null || champaign.brand.logo == "0" || champaign.brand.logo == undefined ? "/images/avatar/user.png" : champaign.brand.logo;
    const brandname = champaign.brand.name;
    const [category, setCategory] = useState<string>("");
    const [acceptreq, setAcceptreq] = useState<AcceptRequest>(AcceptRequest.None);

    const [requestdata, setRequestdata] = useState<any[]>([]);

    const init = async () => {
        setCategory(await getCampaignType(champaign.campaignTypeId));

        let req = {
            "search": {
                "campaign": champaign.id,
                "influencer": userId,
                "fromUser": userId,
            }
        };
        const reqdata = await axios.post(`${BaseUrl}/api/search-invite`, req);
        if (reqdata.data.status == true) {
            if (reqdata.data.data[0].status.code == "1") setAcceptreq(AcceptRequest.Panding);
            if (reqdata.data.data[0].status.code == "3") setAcceptreq(AcceptRequest.Accepted);
            if (reqdata.data.data[0].status.code == "5") setAcceptreq(AcceptRequest.Rejected);
            setRequestdata(reqdata.data.data);
        } else {
            setAcceptreq(AcceptRequest.None);
        }
    }
    useEffect(() => {
        init();
    }, []);



    return (
        <>
            <div className="grid gap-y-4 lg:gap-4 grid-cols-1 lg:grid-cols-7 mt-4 justify-start align-top content-start place-items-start place-content-start">
                <BrandInfo logo={brandimage} name={brandname} website={champaign.brand.website} info={champaign.brand.info}></BrandInfo>
                <CampaignsInfo dont={champaign.donts} dos={champaign.dos} hastag={champaign.hashtags} mendtion={champaign.mentions} platform={champaign.platforms} moddboard={champaign.moodBoards} info={champaign.campaignInfo} name={champaign.campaignName} image={brandimage} website={champaign.brand.website} category={category}></CampaignsInfo>
                <div className="lg:col-start-6 lg:col-end-8 grid gap-y-4 w-full">
                    <Budget currecny={champaign.currency.code} costperpost={champaign.costPerPost} totalbudget={champaign.totalBudget.split(".")[0]} remaining={"1400"} ></Budget>
                    <Target audienceloaction={champaign.audienceLocations} minreach={champaign.minReach} maxreach={champaign.maxReach} startdate={champaign.startAt} enddate={champaign.endAt}></Target>
                    {
                        isbrand ?
                            null
                            :
                            <>
                                {
                                    acceptreq == AcceptRequest.None ?
                                        <Apply champaignId={champaign.id} touserId={champaign.brandUserId} userId={userId} influencerId={userId} fromuserId={userId}></Apply> : null
                                }

                                {
                                    acceptreq == AcceptRequest.Panding ?
                                        <Panding></Panding>
                                        : null
                                }
                                {
                                    acceptreq == AcceptRequest.Rejected ?
                                        <Rejected reason={requestdata[0].status.message} champaignId={champaign.id} touserId={champaign.brandUserId} userId={userId} influencerId={userId} fromuserId={userId}></Rejected>
                                        : null
                                }
                            </>
                    }
                </div>
            </div>


            {
                acceptreq == AcceptRequest.Accepted ?
                    <div className="flex gap-4 flex-col lg:flex-row mt-8">
                        <div className="grow flex-1">
                            <CreateDraft influencerId={userId} champaingId={champaign.id} platforms={data.platform}></CreateDraft>
                        </div>
                        <div className="grow flex-1">
                            <p className="text-md text-primary font-semibold py-1">Live campaigns</p>
                            <div className="w-full h-[1px] bg-slate-300"></div>
                            <div className="bg-white rounded-md p-4 mt-2">
                                <div className="flex">
                                    <img src="/images/media/facebook.png" alt="error" className="h-10 w-10 shrink-0" />
                                    <div className="ml-4">
                                        <p className="text-primary text-sm font-semibold text-left">Ivankbfc_Blasters</p>
                                        <p className="text-primary text-sm font-normal text-left">Publish date: Today</p>
                                    </div>
                                </div>
                                <button className="mt-4 text-md w-full text-black font-semibold bg-[#F7941D] rounded-md shadow-lg py-1">Link campaign</button>
                            </div>
                            <div className="bg-white rounded-md p-4 mt-2">
                                <div className="flex">
                                    <img src="/images/media/instagram.png" alt="error" className="h-10 w-10 shrink-0" />
                                    <div className="ml-4">
                                        <p className="text-primary text-sm font-semibold text-left">Ivankbfc_Blasters</p>
                                        <p className="text-primary text-sm font-normal text-left">Publish date: 30-01-2022</p>
                                    </div>
                                </div>
                                <button className="mt-4 text-md w-full text-black font-semibold bg-[#F7941D] rounded-md shadow-lg py-1">View insight</button>
                            </div>
                        </div>
                        <div className="grow flex-1">
                            <p className="text-md text-primary font-semibold py-1">Payments</p>
                            <div className="w-full h-[1px] bg-slate-300"></div>

                            <div className="rounded-xl shadow-xl bg-white p-4 w-full mt-2">
                                <div className="flex">
                                    <FontAwesomeIcon icon={faCoins} className="text-xl text-primary"></FontAwesomeIcon>
                                    <h2 className="text-xl text-primary font-medium px-4">Budget</h2>
                                    <div className="grow"></div>
                                    <p className="text-md font-bold text-black">
                                        6420 USD
                                    </p>
                                </div>
                                <div className="h-[1px] bg-gray-500 w-full my-2 "></div>
                                <div className="flex my-2">
                                    <p className="text-md text-primary">
                                        Received
                                    </p>
                                    <div className="grow"></div>
                                    <p className="text-md font-normal text-black">
                                        2700 USD
                                    </p>
                                </div>
                                <div className="flex my-2">
                                    <p className="text-md text-primary">
                                        Pending
                                    </p>
                                    <div className="grow"></div>
                                    <p className="text-md font-normal text-black">
                                        3540 USD
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 bg-white mt-2 rounded-md">
                                <p className="text-sm text-normal font-semibold py-1 text-primary">Payment request</p>
                                <button className="text-black bg-[#01FFF4] rounded-lg w-full text-center py-2 font-semibold text-md mt-2">Request</button>
                            </div>
                        </div>
                    </div>
                    : null
            }

            <div className="my-6">
                {
                    isbrand ?
                        <>
                            <ChampaingAcceptRequest userId={userId} campaingid={champaign.id}></ChampaingAcceptRequest>
                            <div className="h-4"></div>
                            <DraftAcceptRequest userId={userId} campaingid={champaign.id}></DraftAcceptRequest>
                        </>
                        : null
                }
            </div>
        </>
    );
}





export default Campaigns;

type BrandInfoProps = {
    logo: string
    name: string
    website: string
    info: string
}

const BrandInfo = (props: BrandInfoProps) => {
    return (
        <>
            <div className="col-span-2 rounded-xl shadow-xl bg-white p-4 w-full">
                <div className="flex items-end gap-x-3">
                    <div>
                        <img src={props.logo} alt="brand logo" className="object-cover w-16 h-16 rounded" />
                    </div>
                    <p className="text-black font-semibold text-xl content-end text-left">{props.name}</p>
                </div>
                <p className="text-black font-semibold text-xs text-left mt-2">Category : Consumer Electronics</p>
                <p className="text-black font-semibold text-xs text-left">{props.website}</p>
                <h3 className="text-black font-bold text-md text-left">Brand info</h3>
                <p className="text-black font-semibold text-xs text-left">{props.info}</p>
                <div className="h-4"></div>
                <Rating />
                <div className="h-4"></div>
                <Connection />
                <div className="h-4"></div>
                <Completed />
            </div>

        </>
    );
}

type CampaignsInfoProps = {
    name: string
    image: string
    category: string
    website: string
    info: string
    moddboard: any
    platform: any
    dos: string
    dont: string
    mendtion: string
    hastag: string
}

const CampaignsInfo = (props: CampaignsInfoProps) => {
    return (
        <>
            <div className="col-span-3 rounded-xl shadow-xl bg-white p-4 w-full">
                <div className="flex items-end gap-x-3">
                    <div>
                        <img src={props.image} alt="error" className="object-cover w-16 h-16 rounded" />
                    </div>
                    <p className="text-black font-semibold text-xl content-end text-left">{props.name}</p>
                </div>

                <p className="text-black font-semibold text-xs text-left mt-4">Category : {props.category}</p>
                <p className="text-black font-semibold text-xs text-left">{props.website}</p>
                <h3 className="text-black font-bold text-md text-left">Campaign info</h3>
                <p className="text-black font-semibold text-xs text-left">
                    {props.info}
                </p>
                <div>
                    <p className="text-black text-left text-md font-medium mt-2">Moodboard</p>
                    <div className="flex gap-x-4 overflow-x-scroll no-scrollbar">
                        {
                            props.moddboard.map((val: any, index: number) => {
                                return (
                                    <div className="shrink-0" key={index}>
                                        <img src={val.url} alt="error" className="h-14 w-14 object-cover rounded-md" />
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <p className="text-black text-left text-md font-medium mt-2">Platforms</p>
                <div className="flex items-center w-32 overflow-x-scroll no-scrollbar">
                    {
                        props.platform.map((val: any, index: number) => {
                            return (
                                <div key={index} className="p-1 shrink-0 mx-1 ">
                                    <img src={val["platformLogoUrl"]} alt="error" className="rounded-lg w-8 h-8" />
                                </div>
                            );
                        })
                    }
                </div>
                <div className="bg-gray-200  rounded-md py-2 flex justify-around w-72 mt-6">
                    <div>
                        <p className="text-sm font-semibold">Do's</p>
                        {
                            props.dos.split(",").map((val: any, index: number) => {
                                return (
                                    <p key={index} className="text-md font-normal">{val}</p>
                                );
                            })
                        }
                    </div>
                    <div className="h-10 w-[1px] bg-slate-900"></div>
                    <div>
                        <p className="text-sm font-semibold">Dont's</p>
                        {
                            props.dont.split(",").map((val: any, index: number) => {
                                return (
                                    <p key={index} className="text-md font-normal">{val}</p>
                                );
                            })
                        }
                    </div>
                </div>
                <p className="text-sm font-semibold mt-4">Hastags</p>
                <div className="flex flex-nowrap gap-2 my-4">
                    {
                        props.hastag.split(",").map((val: any, index: number) => {
                            return (
                                <p key={index} className="text-md font-normal rounded-md bg-gray-300 py-1 px-4">#{val}</p>
                            );
                        })
                    }
                </div>
                <p className="text-sm font-semibold mt-4">Mendtions</p>
                <div className="flex flex-nowrap gap-2 my-4">
                    {
                        props.mendtion.split(",").map((val: any, index: number) => {
                            return (
                                <p key={index} className="text-md font-normal rounded-md bg-gray-300 py-1 px-4">@{val}</p>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

type TargetProps = {
    audienceloaction: string
    minreach: string
    maxreach: string
    startdate: string
    enddate: string
}

const Target = (props: TargetProps) => {
    return (
        <>
            <div className="rounded-xl shadow-xl bg-white p-4 w-full">
                <div className="flex">
                    <FontAwesomeIcon icon={faCoins} className="text-xl text-primary"></FontAwesomeIcon>
                    <h2 className="text-xl text-primary font-medium px-4">Target</h2>
                </div>
                <div className="h-[1px] bg-gray-500 w-full my-2"></div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        Audience loaction
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-primary">
                        {props.audienceloaction}
                    </p>
                </div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        Min Reach
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-black">
                        {props.minreach}
                    </p>
                </div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        Max Reach
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-black">
                        {props.maxreach}
                    </p>
                </div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        Start Date
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-black">
                        {props.startdate}
                    </p>
                </div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        End date
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-black">
                        {props.enddate}
                    </p>
                </div>
            </div>
        </>
    );
}


type ApplyProps = {
    userId: string
    influencerId: string
    fromuserId: string
    touserId: string
    champaignId: string
}

const Apply = (props: ApplyProps) => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [error, setError] = useState<string | null>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const applyChampaign = async () => {
        if (messageRef.current?.value == null || messageRef.current?.value == undefined || messageRef.current?.value == "") return setError("Message can't be blank");
        let req = {
            "campaignId": props.champaignId,
            "influencerId": props.influencerId,
            "fromUserId": props.fromuserId,
            "toUserId": props.touserId,
            "inviteMessage": messageRef.current?.value
        };

        const data = await axios.post(`${BaseUrl}/api/add-invite`, req);
        if (data.data.status == false) {
            setError(data.data.message);
        } else {
            messageRef!.current!.value = "";
            onCloseModal();
        }
        window.location.reload();
    }
    return (
        <>
            <div className="p-4 rounded-xl shadow-xl bg-primary">
                <h1 className="text-white text-xl text-left font-normal">
                    Would you like to participate in this campaign?
                </h1>
                <div className="w-full grid place-items-center" onClick={onOpenModal}>
                    <CusButton text="Apply" textColor={"text-white"} background={"bg-secondary"}></CusButton>
                </div>
            </div>
            <div className={`w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${open ? "fixed" : "hidden"} `}>
                <div className="p-6 bg-white rounded-xl shadow-xl w-96">
                    <div className="flex">
                        <div className="grow"></div>
                        <div onClick={onCloseModal}>
                            <FontAwesomeIcon icon={faRemove} className="font-bold text-2xl text-center text-primary"></FontAwesomeIcon>
                        </div>
                    </div>
                    <h1 className="text-primary text-lg font-bold text-left">Connect</h1>
                    <p className="text-lg font-normal">Subject : Applay for campaign</p>
                    <textarea ref={messageRef} className="p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4" placeholder="message" ></textarea>
                    {(error == "" || error == null || error == undefined) ? null :
                        <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                    }
                    <div className="flex">
                        <div className="grow"></div>
                        <div onClick={applyChampaign}>
                            <CusButton text="send" background="bg-primary" textColor={"text-white"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

type BudgetProps = {
    costperpost: string
    totalbudget: string
    remaining: string
    currecny: string
}

const Budget = (props: BudgetProps) => {
    return (
        <>
            <div className="rounded-xl shadow-xl bg-white p-4 w-full">
                <div className="flex">
                    <FontAwesomeIcon icon={faCoins} className="text-xl text-primary"></FontAwesomeIcon>
                    <h2 className="text-xl text-primary font-medium px-4">Budget</h2>
                </div>
                <div className="h-[1px] bg-gray-500 w-full my-2 "></div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        Cost per post
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-primary">
                        {props.costperpost} {props.currecny}
                    </p>
                </div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        Total budget
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-black">
                        {props.totalbudget} {props.currecny}
                    </p>
                </div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        Remaining
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-black">
                        {props.remaining} {props.currecny}
                    </p>
                </div>
            </div>
        </>
    );
}



const Panding = () => {
    return (
        <>
            <div className="p-4 rounded-xl shadow-xl bg-primary">
                <h1 className="text-white text-xl text-left font-normal">
                    Your request in progress..
                </h1>
            </div>
        </>
    );
}




type ChampaingAcceptRequestProps = {
    campaingid: string,
    userId: string
}


const ChampaingAcceptRequest = (props: ChampaingAcceptRequestProps) => {
    const [resinvite, setRequestinvite] = useState<any[]>([]);
    const [acceptbox, setAcceptbox] = useState<boolean>(false);
    const [rejectbox, setrejectbox] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const rejectiontextRef = useRef<HTMLInputElement>(null);
    const [id, setId] = useState<string | null>(null);

    const init = async () => {
        let req = {
            "search": {
                "status": "1",
                "campaign": props.campaingid,
                "toUser": props.userId,
            }
        };
        const responseData = await axios.post(`${BaseUrl}/api/search-invite`, req);
        if (responseData.data.status == true) {
            setRequestinvite(responseData.data.data);
        }
    }

    const acceptRequest = async () => {
        let req = { "id": id, "status": "3" };
        const responseData = await axios.post(`${BaseUrl}/api/update-invite`, req);
        if (responseData.data.staus == false) return setError(responseData.data.message);
        setAcceptbox(false);
        window.location.reload();

    }

    const rejectRequest = async () => {
        if (rejectiontextRef.current?.value == null || rejectiontextRef.current?.value == undefined || rejectiontextRef.current?.value == "") return setError("Fell the reason.");
        let req = { "id": id, "status": "5", "rejectReason": rejectiontextRef.current?.value };
        const responseData = await axios.post(`${BaseUrl}/api/update-invite`, req);
        if (responseData.data.staus == false) return setError(responseData.data.message);
        rejectiontextRef.current!.value == "";
        setrejectbox(false);
        window.location.reload();

    }


    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <div className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${acceptbox ? "grid" : "hidden"}`}>
                <div className="bg-white w-72 shadow-lg p-4 rounded-lg">
                    <p className="text-center font-medium text-2xl">Accept</p>
                    <div className="w-full bg-gray-400 h-[1px] my-2"></div>
                    <p className="text-center font-medium text-gray-800">Are you sure you want to accept this?</p>
                    {(error == "" || error == null || error == undefined) ? null :
                        <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                    }
                    <div className="flex mt-2">
                        <button onClick={() => { setAcceptbox(false); }} className="bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500"><FontAwesomeIcon className="mx-2" icon={faThumbsDown}></FontAwesomeIcon>Cancel</button>
                        <div className="grow"></div>
                        <button onClick={acceptRequest} className="bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500"><FontAwesomeIcon className="mx-2" icon={faThumbsUp}></FontAwesomeIcon>Accept</button>
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${rejectbox ? "grid" : "hidden"}`}>
                <div className="bg-white w-72 shadow-lg p-4 rounded-lg">
                    <p className="text-center font-medium text-2xl">Reject</p>
                    <div className="w-full bg-gray-400 h-[1px] my-2"></div>
                    <input ref={rejectiontextRef} type="text" className="w-full bg-gray-200 rounded-lg  px-2 py-1 my-2 outline-none" placeholder="Enter the reason of rejection." />
                    {(error == "" || error == null || error == undefined) ? null :
                        <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                    }
                    <div className="flex mt-2">
                        <button onClick={() => { setrejectbox(false); }} className="bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500"><FontAwesomeIcon className="mx-2" icon={faThumbsDown}></FontAwesomeIcon>Cancel</button>
                        <div className="grow"></div>
                        <button onClick={rejectRequest} className="bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500"><FontAwesomeIcon className="mx-2" icon={faThumbsUp}></FontAwesomeIcon>Reject</button>
                    </div>
                </div>
            </div>
            <div className="p-4 rounded-xl shadow-xl bg-white">
                {
                    resinvite.length == 0 ?
                        <div>No Invite request is panding</div>
                        :
                        <div>
                            <p className="text-md font-medium">Requested Invites</p>
                            <div className="w-full bg-gray-400 h-[1px] my-2"></div>
                            <div className="grid mt-4 place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {
                                    resinvite.map((val: any, index: number) => {
                                        return <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
                                            <div className="flex">
                                                <img src={val.influencer.pic} alt="influencer pic" className="w-10 h-10 shrink-0 rounded-md" />
                                                <div className="ml-2">
                                                    <p className="text-md font-medium">{val.influencer.name}</p>
                                                    <p className="text-sm font-medium">{val.influencer.email}</p>
                                                </div>
                                            </div>
                                            <p className="mt-2 text-md font-medium">Message</p>
                                            <p className="text-sm font-medium">{val.inviteMessage}</p>
                                            <div className="flex gap-4 mt-2">
                                                <button onClick={() => {
                                                    setId(val.id);
                                                    setAcceptbox(true);
                                                }} className="bg-white  text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500"><FontAwesomeIcon className="mx-2" icon={faThumbsUp}></FontAwesomeIcon>Accept</button>
                                                <button onClick={() => {
                                                    setId(val.id);
                                                    setrejectbox(true)
                                                }} className="bg-white  text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500"><FontAwesomeIcon className="mx-2" icon={faThumbsDown}></FontAwesomeIcon>Reject</button>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                }
            </div>
        </>
    );
}


type DraftAcceptRequestProps = {
    campaingid: string,
    userId: string
}


const DraftAcceptRequest = (props: DraftAcceptRequestProps) => {
    const [resinvite, setRequestinvite] = useState<any[]>([]);

    const [acceptbox, setAcceptbox] = useState<boolean>(false);
    const [rejectbox, setrejectbox] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const rejectiontextRef = useRef<HTMLInputElement>(null);
    const [id, setId] = useState<string | null>(null);

    const init = async () => {
        let req = {
            "search": {
                "status": "1",
                "campaign": props.campaingid,
                "toUser": props.userId,
            }
        };
        const responseData = await axios.post(`${BaseUrl}/api/search-draft`, req);
        if (responseData.data.status == true) {
            setRequestinvite(responseData.data.data);
        }
    }

    const acceptRequest = async () => {
        let req = { "id": id, "status": "3" };
        const responseData = await axios.post(`${BaseUrl}/api/update-draft`, req);
        if (responseData.data.staus == false) return setError(responseData.data.message);
        setAcceptbox(false);
        window.location.reload();
    }

    const rejectRequest = async () => {
        if (rejectiontextRef.current?.value == null || rejectiontextRef.current?.value == undefined || rejectiontextRef.current?.value == "") return setError("Fell the reason.");
        let req = { "id": id, "status": "5", "rejectReason": rejectiontextRef.current?.value };
        const responseData = await axios.post(`${BaseUrl}/api/update-draft`, req);
        if (responseData.data.staus == false) return setError(responseData.data.message);
        rejectiontextRef.current!.value == "";
        setrejectbox(false);
        window.location.reload();
    }


    useEffect(() => {
        init();
    }, []);

    return (
        <>
            <div className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${acceptbox ? "grid" : "hidden"}`}>
                <div className="bg-white w-72 shadow-lg p-4 rounded-lg">
                    <p className="text-center font-medium text-2xl">Accept</p>
                    <div className="w-full bg-gray-400 h-[1px] my-2"></div>
                    <p className="text-center font-medium text-gray-800">Are you sure you want to accept this draft?</p>
                    {(error == "" || error == null || error == undefined) ? null :
                        <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                    }
                    <div className="flex mt-2">
                        <button onClick={() => { setAcceptbox(false); }} className="bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500"><FontAwesomeIcon className="mx-2" icon={faThumbsDown}></FontAwesomeIcon>Cancel</button>
                        <div className="grow"></div>
                        <button onClick={acceptRequest} className="bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500"><FontAwesomeIcon className="mx-2" icon={faThumbsUp}></FontAwesomeIcon>Accept</button>
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 left-0  h-screen w-full bg-slate-900 bg-opacity-10 place-items-center ${rejectbox ? "grid" : "hidden"}`}>
                <div className="bg-white w-72 shadow-lg p-4 rounded-lg">
                    <p className="text-center font-medium text-2xl">Reject</p>
                    <div className="w-full bg-gray-400 h-[1px] my-2"></div>
                    <input ref={rejectiontextRef} type="text" className="w-full bg-gray-200 rounded-lg  px-2 py-1 my-2 outline-none" placeholder="Enter the reason of rejection." />
                    {(error == "" || error == null || error == undefined) ? null :
                        <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                    }
                    <div className="flex mt-2">
                        <button onClick={() => { setrejectbox(false); }} className="bg-white rounded-xl text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500"><FontAwesomeIcon className="mx-2" icon={faThumbsDown}></FontAwesomeIcon>Cancel</button>
                        <div className="grow"></div>
                        <button onClick={rejectRequest} className="bg-white rounded-xl text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500"><FontAwesomeIcon className="mx-2" icon={faThumbsUp}></FontAwesomeIcon>Reject</button>
                    </div>
                </div>
            </div>
            <div className="p-4 rounded-xl shadow-xl bg-white">
                {
                    resinvite.length == 0 ?
                        <div>No draft request is panding</div>
                        :
                        <div>
                            <p className="text-md font-medium">Requested drafts</p>
                            <div className="w-full bg-gray-400 h-[1px] my-2"></div>
                            <div className="grid mt-4 place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                {
                                    resinvite.map((val: any, index: number) => {
                                        return <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
                                            <div className="flex">
                                                <img src={val.influencer.pic} alt="influencer pic" className="w-10 h-10 shrink-0 rounded-md" />
                                                <div className="ml-2">
                                                    <p className="text-md font-medium">{val.influencer.name}</p>
                                                    <p className="text-sm font-medium">{val.influencer.email}</p>
                                                </div>
                                            </div>
                                            <p className="mt-2 text-md font-medium">Description</p>
                                            <p className="text-sm font-medium">{val.description}</p>
                                            <p className="mt-2 text-md font-medium">Attachment</p>
                                            <a target="_blank" className="mt-2 text-sm font-normal border-2 border-blue-500 inline-block my-2 py-1 px-4  text-blue-500 hover:text-white hover:bg-blue-500" href={val.attach01}>View pdf</a>
                                            <div className="flex gap-4 mt-2">
                                                <button onClick={() => {
                                                    setId(val.id);
                                                    setAcceptbox(true);
                                                }} className="bg-white  text-green-500 font-normal border-2 border-green-500 py-1 px-2 w-28 hover:text-white hover:bg-green-500"><FontAwesomeIcon className="mx-2" icon={faThumbsUp}></FontAwesomeIcon>Accept</button>
                                                <button onClick={() => {
                                                    setId(val.id);
                                                    setrejectbox(true)
                                                }} className="bg-white  text-red-500 font-normal border-2 border-red-500 py-1 px-2 w-28 hover:text-white hover:bg-red-500"><FontAwesomeIcon className="mx-2" icon={faThumbsDown}></FontAwesomeIcon>Reject</button>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                }
            </div>
        </>
    );
}

type RejectedProps = {
    userId: string
    influencerId: string
    fromuserId: string
    touserId: string
    champaignId: string
    reason: string
}

const Rejected = (props: RejectedProps) => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const [error, setError] = useState<string | null>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const applyChampaign = async () => {
        if (messageRef.current?.value == null || messageRef.current?.value == undefined || messageRef.current?.value == "") return setError("Message can't be blank");
        let req = {
            "campaignId": props.champaignId,
            "influencerId": props.influencerId,
            "fromUserId": props.fromuserId,
            "toUserId": props.touserId,
            "inviteMessage": messageRef.current?.value
        };

        const data = await axios.post(`${BaseUrl}/api/add-invite`, req);
        if (data.data.status == false) {
            setError(data.data.message);
        } else {
            messageRef!.current!.value = "";
            onCloseModal();
        }
        window.location.reload();
    }
    return (
        <>
            <div className="p-4 rounded-xl shadow-xl bg-primary">
                <h1 className="text-white text-xl text-left font-normal">
                    Your request has been rejected..
                </h1>
                <p className="text-white font-normal text-md">Reason : {props.reason}</p>
                <div className="w-full grid place-items-center" onClick={onOpenModal}>
                    <CusButton text="Apply again!" textColor={"text-white"} background={"bg-secondary"}></CusButton>
                </div>
            </div>
            <div className={`w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${open ? "fixed" : "hidden"} `}>
                <div className="p-6 bg-white rounded-xl shadow-xl w-96">
                    <div className="flex">
                        <div className="grow"></div>
                        <div onClick={onCloseModal}>
                            <FontAwesomeIcon icon={faRemove} className="font-bold text-2xl text-center text-primary"></FontAwesomeIcon>
                        </div>
                    </div>
                    <h1 className="text-primary text-lg font-bold text-left">Connect</h1>
                    <p className="text-lg font-normal">Subject : Applay for campaign</p>
                    <textarea ref={messageRef} className="p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4" placeholder="message" ></textarea>
                    {(error == "" || error == null || error == undefined) ? null :
                        <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                    }
                    <div className="flex">
                        <div className="grow"></div>
                        <div onClick={applyChampaign}>
                            <CusButton text="send" background="bg-primary" textColor={"text-white"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

type CreateDraftProps = {
    platforms: any[]
    influencerId: string
    champaingId: string
}


const CreateDraft = (props: CreateDraftProps) => {
    const datepicker = useRef<HTMLInputElement | null>(null);
    const inputFile = useRef<HTMLInputElement | null>(null);
    const descraption = useRef<HTMLTextAreaElement | null>(null);
    const [pdfFile, setPdfFile] = useState<File>();
    const [platform, setPlatform] = useState<any>(null);
    const [createbox, setCreatebox] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    return (
        <>
            <p className="text-md text-primary font-semibold py-1">Campaign draft</p>
            <div className="w-full h-[1px] bg-slate-300"></div>
            {
                createbox ?
                    <>
                        <div className="p-4 bg-white mt-2 rounded-md">
                            <p className="text-sm text-normal font-semibold py-1 text-primary">Create campaign draft</p>
                            <div className="flex gap-2 mt-2 overflow-x-scroll no-scrollbar py-4">
                                {props.platforms.map((val: any, i: number) => {
                                    return (
                                        <div key={i} className={`shrink-0  p-2 rounded-lg ${platform == val.id ? "bg-white shadow-xl " : "bg-gray-200"} `} onClick={() => {
                                            setPlatform(val.id);
                                        }}>
                                            <img src={props.platforms[i]["platformLogoUrl"]} alt="error" className="w-10 h-10" />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4">
                                <h3 className="text-black font-semibold  text-md">{pdfFile == null ? "" : pdfFile.name}</h3>
                                <div className="grow"></div>
                                <div className="grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full" onClick={() => { inputFile!.current!.click() }}>
                                    <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="hidden">
                                <input ref={inputFile} type="file" accept="application/pdf" onChange={(value) => {
                                    let file_size = parseInt(((value!.target.files![0].size / 1024) / 1024).toString());
                                    if (file_size < 2) {
                                        setError(null);
                                        setPdfFile(value!.target.files![0]);
                                    } else {
                                        setError("Pdf file size must be less then 4 mb");
                                    }
                                }} />
                            </div>
                            <input type={"date"} ref={datepicker} className="bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 mt-4 w-full p-2"></input>
                            <textarea ref={descraption} className="focus:border-none focus:outline-none mt-4 p-4 w-full h-20 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" placeholder="description..." ></textarea>
                            {(error == "" || error == null || error == undefined) ? null :
                                <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                            }
                            <button onClick={async () => {
                                if (platform == null || platform == undefined || platform == 0 || platform == "") {
                                    setError("Select the platform.");
                                } else if (pdfFile == null || pdfFile == undefined) {
                                    setError("Select the pdf file.");
                                } else if (datepicker.current?.value == null || datepicker.current?.value == undefined || datepicker.current?.value == "") {
                                    setError("Select the date.");
                                } else if (descraption.current?.value == null || descraption.current?.value == undefined || descraption.current?.value == "") {
                                    setError("Write the description.");
                                }
                                const pdfurl = await UploadFile(pdfFile!);

                                let req = {
                                    "campaignId": props.champaingId,
                                    "influencerId": props.influencerId,
                                    "handleId": platform,
                                    "publishAt": datepicker.current?.value,
                                    "attach01": pdfurl,
                                    "description": descraption.current?.value
                                };
                                const data = await axios({
                                    method: 'post',
                                    url: `${BaseUrl}/api/add-draft`,
                                    data: req,
                                });
                                if (data.data.status == false) {
                                    return setError(data.data.message);
                                } else {
                                    setError(null);
                                    return setCreatebox(false);
                                }
                            }} className="text-white bg-primary rounded-lg w-full text-center py-2 font-semibold text-md mt-2">Submit</button>
                        </div>
                    </>
                    :
                    <>

                        <div className="p-4 bg-white mt-2 rounded-md">
                            <p className="text-sm text-normal font-semibold py-1 text-primary">Create campaign draft</p>
                            <button onClick={() => {
                                setCreatebox(true);
                            }} className="text-white bg-primary rounded-lg w-full text-center py-2 font-semibold text-md mt-2">Create</button>
                        </div>
                    </>
            }



        </>
    );
} 