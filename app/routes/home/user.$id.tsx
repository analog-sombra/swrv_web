import { faCalendar, faHandshake, faHeart, faNetworkWired, faRemove, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";

enum UserDetailsType {
    insights,
    payments,
    camapaign
}

export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const id = props.params.id;

    const userinsights = await axios({
        method: 'post',
        url: `${BaseUrl}/api/user-analytics`,
        data: {
            "id": id
        },
    });
    const userdata = await axios.post(`${BaseUrl}/api/getuser`, { "id": id, });
    return json({ user: userdata.data.data[0], userinsights: userinsights.data.data.profile });
}

const BrandPage = () => {
    const user = useLoaderData().user;
    const userinsights = useLoaderData().userinsights;

    const [userDetails, setUserDetails] = useState<UserDetailsType>(UserDetailsType.insights);

    const avatar = user["pic"] == "0" || user["pic"] == null || user["pic"] == undefined || user["pic"] == "" ? "/images/avatar/user.png" : user["pic"];



    const [error, setError] = useState<string | null>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const [connectBox, setConnectBox] = useState<boolean>(false);

    return (
        <>
            <div className={`w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${connectBox ? "fixed" : "hidden"}`} style={{ zIndex: 100 }}>
                <div className="p-6 bg-white rounded-xl shadow-xl w-96">
                    <div className="flex">
                        <div className="grow"></div>
                        <div onClick={() => {
                            setConnectBox(false);
                        }}>
                            <FontAwesomeIcon icon={faRemove} className="font-bold text-2xl text-center text-primary"></FontAwesomeIcon>
                        </div>
                    </div>
                    <h1 className="text-primary text-lg font-bold text-left">Connect</h1>
                    <textarea ref={messageRef} className="p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4" placeholder="message" ></textarea>
                    {(error == "" || error == null || error == undefined) ? null :
                        <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                    }
                    <div className="flex">
                        <div className="grow"></div>
                        <div onClick={async () => {
                            if (messageRef.current?.value == null || messageRef.current?.value == undefined || messageRef.current?.value == "") return setError("Message can't be blank");
                            let req = {
                                "campaignDraftId": "0",
                                "fromUserId": user.id,
                                "toUserId": "89",
                                "comment": messageRef.current?.value
                            };
                            const data = await axios({
                                method: 'post',
                                url: `${BaseUrl}/api/add-chat`,
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
                            if (!data.data.status) return setError(data.data.message);
                            return setConnectBox(false);
                        }}>
                            <CusButton text="send" background="bg-primary" textColor={"text-white"} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full mt-4 shadow-xl bg-white rounded-xl">
                <img src="/images/products/shoe1.jpg" alt="error" className="w-full h-60 object-cover rounded-t-xl" />
                <div className="flex flex-col lg:flex-row">
                    <div className="p-8 flex flex-row gap-x-3 lg:flex-col">
                        <div>
                            <img src={avatar} alt="user avatar" className="w-32 h-32 rounded-md" />
                        </div>
                        <div>
                            <h1 className="text-black text-lg font-medium my-2">{user.userName}</h1>
                            <h1 className="text-gray-600 text-sm font-medium my-2">{user.knownAs}</h1>
                            <p className="text-gray-800 text-md font-normal">{user.email}</p>
                            <div onClick={() => {
                                setConnectBox(true);
                            }}>
                                <CusButton text="Message" background="bg-secondary" fontwidth="font-bold"></CusButton>
                            </div>
                        </div>
                    </div>
                    <div className="h-72 w-[2px] bg-gray-300 hidden lg:block mt-8"></div>
                    <div className="p-8">
                        <div className="flex gap-x-4 flex-col md:flex-row gap-y-2">
                        </div>
                        <h1 className="text-primary text-lg font-medium mt-4 mb-2">User Bio</h1>
                        <p className="text-black text-sm font-normal">{user.bio}</p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-4 shadow-xl bg-white rounded-xl">
                <div className="flex mx-4 gap-4">
                    <div onClick={() => { setUserDetails(UserDetailsType.insights) }}>
                        <CusButton text="Insights" background={`${userDetails == UserDetailsType.insights ? "bg-[#01FFF4]" : "bg-gray-100"}`} fontwidth="font-bold" textColor={`${userDetails == UserDetailsType.insights ? "text-black" : "text-gray-600"}`}></CusButton>
                    </div>
                    <div onClick={() => { setUserDetails(UserDetailsType.payments) }}>
                        <CusButton text="Payments" background={`${userDetails == UserDetailsType.payments ? "bg-[#01FFF4]" : "bg-gray-100"}`} fontwidth="font-bold" textColor={`${userDetails == UserDetailsType.payments ? "text-black" : "text-gray-600"}`}></CusButton>
                    </div>
                </div>
            </div>

            <div>
                {
                    userDetails == UserDetailsType.insights ? <Insights insights={userinsights}></Insights> : <></>
                }
                {
                    userDetails == UserDetailsType.payments ? <Payments></Payments> : <></>
                }
            </div>
        </>
    );
}

export default BrandPage;

type InsightsProps = {
    insights: any
}

const Insights = (props: InsightsProps) => {
    return (
        <>
            <div className="my-4 rounded-md p-4 bg-white flex gap-8 flex-wrap justify-center align-middle">
                <div className="w-80 shrink-0 bg-white shadow-lg rounded-md px-4 py-6">
                    <p className="text-slate-900 text-lg font-semibold">Audience gender</p>
                    {
                        props.insights.audience.genders.map((val: any, index: number) => {
                            return (
                                <div className="flex border-b-2 border-gray-300 my-4" key={index}>
                                    <p className="text-primary text-md font-semibold text-left">{val.code}</p>
                                    <div className="grow"></div>
                                    <p className="text-primary text-md font-semibold text-right">{val.weight}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="w-80 shrink-0 bg-white shadow-lg rounded-md px-4 py-6">
                    <p className="text-slate-900 text-lg font-semibold ">Audience age</p>
                    {
                        props.insights.audience.ages.map((val: any, index: number) => {
                            return (
                                <div className="flex border-b-2 border-gray-300 my-4" key={index}>
                                    <p className="text-primary text-md font-semibold text-left">{val.code}</p>
                                    <div className="grow"></div>
                                    <p className="text-primary text-md font-semibold text-right">{val.weight}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="w-80 shrink-0 bg-white shadow-lg rounded-md px-4 py-6">
                    <p className="text-slate-900 text-lg font-semibold ">Audience country</p>
                    {
                        props.insights.audience.geoCountries.map((val: any, index: number) => {
                            return (
                                <div className="flex border-b-2 border-gray-300 my-4" key={index}>
                                    <p className="text-primary text-md font-semibold text-left">[{val.code}] - {val.name}</p>
                                    <div className="grow"></div>
                                    <p className="text-primary text-md font-semibold text-right">{val.weight}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="w-80 shrink-0 bg-white shadow-lg rounded-md px-4 py-6">
                    <p className="text-slate-900 text-lg font-semibold ">Average Result</p>
                    <div className="flex border-b-2 border-gray-300 my-4">
                        <p className="text-primary text-md font-semibold text-left">Posts Count</p>
                        <div className="grow"></div>
                        <p className="text-primary text-md font-semibold text-right">{props.insights.postsCount}</p>
                    </div>
                    <div className="flex border-b-2 border-gray-300 my-4">
                        <p className="text-primary text-md font-semibold text-left">Followers</p>
                        <div className="grow"></div>
                        <p className="text-primary text-md font-semibold text-right">{props.insights.profile.followers}</p>
                    </div>
                    <div className="flex border-b-2 border-gray-300 my-4">
                        <p className="text-primary text-md font-semibold text-left">Engagement</p>
                        <div className="grow"></div>
                        <p className="text-primary text-md font-semibold text-right">{props.insights.profile.engagements}</p>
                    </div>
                    <div className="flex border-b-2 border-gray-300 my-4">
                        <p className="text-primary text-md font-semibold text-left">Engagements Rate</p>
                        <div className="grow"></div>
                        <p className="text-primary text-md font-semibold text-right">{props.insights.profile.engagementRate}</p>
                    </div>
                    <div className="flex border-b-2 border-gray-300 my-4">
                        <p className="text-primary text-md font-semibold text-left">Average Comments</p>
                        <div className="grow"></div>
                        <p className="text-primary text-md font-semibold text-right">{props.insights.avgComments}</p>
                    </div>
                    <div className="flex border-b-2 border-gray-300 my-4">
                        <p className="text-primary text-md font-semibold text-left">Average View</p>
                        <div className="grow"></div>
                        <p className="text-primary text-md font-semibold text-right">{props.insights.avgViews}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

const Payments = () => {
    const payment_data = [
        {
            name: "San Joe",
            camppaign: ["/images/inf/inf1.png"],
            details: ["puma", "Dec 31, 2021"],
            target: "3 M",
            amount: "7500 USD",
            amountres: "1200 USD"
        },
        {
            name: "San Joe",
            camppaign: ["/images/inf/inf2.png"],
            details: ["puma", "Dec 31, 2021"],
            target: "3 M",
            amount: "7500 USD",
            amountres: "1200 USD"
        },
        {
            name: "San Joe",
            camppaign: ["/images/inf/inf3.png"],
            details: ["puma", "Dec 31, 2021"],
            target: "3 M",
            amount: "7500 USD",
            amountres: "1200 USD"
        },
        {
            name: "San Joe",
            camppaign: ["/images/inf/inf4.png"],
            details: ["puma", "Dec 31, 2021"],
            target: "3 M",
            amount: "7500 USD",
            amountres: "1200 USD"
        },
        {
            name: "San Joe",
            camppaign: ["/images/inf/inf5.png"],
            details: ["puma", "Dec 31, 2021"],
            target: "3 M",
            amount: "7500 USD",
            amountres: "1200 USD"
        },
        {
            name: "San Joe",
            camppaign: ["/images/inf/inf6.png"],
            details: ["puma", "Dec 31, 2021"],
            target: "3 M",
            amount: "7500 USD",
            amountres: "1200 USD"
        },
    ];
    return (
        <>
            <div className="overflow-x-scroll no-scrollbar my-4 rounded-md p-4 block bg-white">
                {/* <div className="flex">
                    <div className="flex bg-gray-200 p-2 rounded-lg px-4">
                        <div className="flex gap-2 w-90 rounded-md">
                            <div>
                                <FontAwesomeIcon className="text-gray-600" icon={faSearch}></FontAwesomeIcon>
                            </div>
                            <input type="text" placeholder="Search" className="placeholder:text-gray-600 bg-transparent" />
                        </div>
                    </div>
                    <div className="grow"></div>
                    <div className="flex bg-gray-200 rounded-lg py-2 px-4">
                        <p className="text-black">Jun 30 - Jul 06, 2022</p>
                        <div className="w-4"></div>
                        <div>
                            <FontAwesomeIcon className="text-primary" icon={faCalendar}></FontAwesomeIcon>
                        </div>
                    </div>
                </div> */}
                <table className="table-auto w-full min-w-[800px]" style={{
                    "borderCollapse": "separate", "borderSpacing": "0 1em"
                }}>
                    <thead>
                        <tr style={{ padding: "10px" }}>
                            <th className="bg-gray-200 py-4 rounded-l-lg min-w-44 text-primary text-md font-semibold">Influencer</th>
                            <th className="bg-gray-200 min-w-44 text-primary text-md font-semibold">Campaign</th>
                            <th className="bg-gray-200 min-w-44 text-primary text-md font-semibold">Campaign details</th>
                            <th className="bg-gray-200 min-w-44 text-primary text-md font-semibold">Target</th>
                            <th className="bg-gray-200 min-w-44 text-primary text-md font-semibold">Amount</th>
                            <th className="bg-gray-200 rounded-r-lg min-w-44 text-primary text-md font-semibold">Amount Released</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment_data.map((val: any, index: number) => {
                                return (
                                    <>
                                        <tr style={{ border: "2px solid black !important" }}>
                                            <td className="text-primary text-md font-semibold text-center">{val.name}</td>
                                            <td className="text-center gird place-items-center">
                                                <div className="grid place-content-center">
                                                    <img src={val.camppaign[0]} alt="error" className="w-20 h-20 rounded-lg object-cover" />
                                                </div>
                                            </td>
                                            <td className=" text-center grid place-items-center">
                                                <div>
                                                    <p className="text-left font-semibold text-md">{val.details[0]}</p>
                                                    <p className="text-left font-normal text-sm">{val.details[1]}</p>
                                                </div>
                                            </td>
                                            <td className=" text-center text-primary text-md font-semibold">{val.target}</td>
                                            <td className=" text-center text-primary text-md font-semibold">{val.amount}</td>
                                            <td className=" text-center text-primary text-md font-semibold">{val.amountres}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={6}>
                                                <div className="bg-gray-300 w-full h-[1px]"></div>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}