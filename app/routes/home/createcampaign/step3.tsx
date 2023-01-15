import { faAdd, faCaretDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import CreateCampaignStore from "~/state/campaign/createcampaign";
import "react-datepicker/dist/react-datepicker.css";

export const loader = async () => {
    const data = await axios.post(`${BaseUrl}/api/getcategory`);
    return json({ data: data.data.data });
}


const Step3 = () => {
    // const [revenue, setRevenue] = useState("cash");
    const navigator = useNavigate();
    const data = useLoaderData();

    const [error, setError] = useState<string | null>(null);


    const audienceText = useRef<HTMLInputElement>(null);
    const [auderror, setAudError] = useState<string | null>(null);
    const [addaudience, setAddAudience] = useState<boolean>(false);
    const audience = CreateCampaignStore((state) => state.audience);
    const removeAudience = CreateCampaignStore((state) => state.removeAudience);
    const clearAudience = CreateCampaignStore((state) => state.clearAudience);
    const addAudience = CreateCampaignStore((state) => state.addAudience);


    const infLocation = CreateCampaignStore((state) => state.infLocation);
    const setInfLocation = CreateCampaignStore((state) => state.setInfLocation);


    const datepicker = useRef<HTMLInputElement | null>(null);
    const tilldate = CreateCampaignStore((state) => state.tilldate);
    const setTillDate = CreateCampaignStore((state) => state.setTillDate);

    const maxInf = useRef<HTMLInputElement | null>(null);
    const maxinf = CreateCampaignStore((state) => state.maxInf);
    const setMaxInf = CreateCampaignStore((state) => state.setMaxInf);

    const remuneration = useRef<HTMLInputElement | null>(null);
    const Remuneration = CreateCampaignStore((state) => state.remuneration);
    const setRemuneration = CreateCampaignStore((state) => state.setRemuneration);

    const remunerationType = CreateCampaignStore((state) => state.remunerationType);
    const setRemunerationType = CreateCampaignStore((state) => state.setRemunerationType);

    useEffect(() => {
        if (datepicker.current?.value != null) {
            datepicker!.current!.value = tilldate;
        }
        if (maxInf.current?.value != null) {
            maxInf!.current!.value = maxinf.toString();
        }
        if (remuneration.current?.value != null) {
            remuneration!.current!.value = Remuneration;
        }
    }, []);



    return (
        <>
            <div className="bg-white shadow-xl rounded-xl px-8 py-4 mt-4">
                <h2 className="text-black tect-xl font-medium text-left">Audience & demeography</h2>
                {/* audience start here */}
                <h2 className="text-primary tect-xl font-medium text-left my-1">Audience location</h2>
                <div className="flex">
                    <div className="bg-[#EEEEEE]  h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72">
                        <div className="flex gap-x-2 overflow-x-scroll no-scrollbar">
                            {audience.map((value: string, i: number) => {
                                return (
                                    <div key={i} className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4">
                                        <div className=" text-black font-semibold ">
                                            {`@${value}`}
                                        </div>
                                        <div className="grid place-items-center cursor-pointer" onClick={() => removeAudience(value)}>
                                            <FontAwesomeIcon icon={faCircleXmark} className="text-lg font-bold text-red-500"></FontAwesomeIcon>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg" onClick={() => setAddAudience(true)}>
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div>
                        <p className="text-primary text-center text-md font-normal my-2 w-20 cursor-pointer" onClick={clearAudience}>clear all</p>
                    </div>
                </div>
                {
                    addaudience ?
                        <div className="mt-4 flex">
                            <div className="grid place-items-center">
                                <input ref={audienceText} type="text" className="bg-gray-200 w-full outline-none rounded-lg px-4 py-2" placeholder="Audience" />
                            </div>
                            <div className="w-6"></div>
                            <div onClick={() => {
                                if (audienceText!.current!.value == "" || audienceText!.current!.value == null || audienceText!.current!.value == undefined) {
                                    setAudError("Mendtion can't be empty!")
                                } else if (audience.includes(audienceText!.current!.value)) {
                                    setAudError("Mendtion already exist add a diffrent one");
                                } else if (audienceText!.current!.value.indexOf(" ") >= 0) {

                                    setAudError("Mendtion cannot containt space");
                                }
                                else {
                                    addAudience(audienceText!.current!.value);
                                    audienceText!.current!.value = "";
                                    setAddAudience(false);
                                    setAudError(null);
                                }
                            }}>
                                <CusButton text="ADD" background="bg-primary" width={"w-20"}></CusButton>
                            </div>
                        </div>
                        : null
                }
                {(auderror == "" || auderror == null || auderror == undefined) ? null :
                    <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md">{auderror}</div>
                }

                {/* audience end here */}


                <h2 className="text-primary tect-xl font-medium text-left my-1">Influencer category</h2>
                <select className="w-full p-2 bg-[#EEEEEE] rounded-lg outline-none border-none pr-6" onClick={(value: any) => {
                    const data = value.target.value + "";
                    const setdata = data.split(" ");
                    setInfLocation(setdata[0], setdata[1], setdata[2]);
                }} >
                    {data.data.map((value: any, i: number) => {
                        if (value.id == infLocation.id) {
                            return (
                                <option value={`${value.id} ${value.categoryName} ${value.categoryCode}`} key={i} className="border-none outline-none font-normal text-lg" selected >{`${value.categoryName} [${value.categoryCode}]`}</option>
                            );
                        } else {
                            return (
                                <option value={`${value.id} ${value.categoryName} ${value.categoryCode}`} key={i} className="border-none outline-none font-normal text-lg"  >{`${value.categoryName} [${value.categoryCode}]`}</option>
                            );
                        }

                    })}
                </select>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Maximum no of influencers that can join the campaign</h2>
                <input ref={maxInf} type={"number"} className="bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 mt-4 w-full p-2"></input>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Geo restriction ( Optional only applicable for influencer filtering ) radius in kilometers</h2>
                <div className="w-full h-96">
                    <img src={"https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"} alt={'error'} className="object-cover h-96 w-full rounded-xl" />
                </div>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Accept participation / invite till</h2>
                <input type={"date"} ref={datepicker} className="bg-[#EEEEEE] outline-none border-none rounded-lg focus:border-gray-300 mt-4 w-full p-2"></input>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Remuneration</h2>
                <select className="w-full p-2 bg-[#EEEEEE] rounded-lg outline-none border-none pr-6" onChange={(value) => {
                    setRemunerationType(value.target.value);
                }}>
                    <option value="1" className="border-none outline-none font-normal text-lg">Cash</option>
                    <option value="2" className="border-none outline-none font-normal text-lg">Product</option>
                    <option value="3" className="border-none outline-none font-normal text-lg">Revenue</option>
                    <option value="4" className="border-none outline-none font-normal text-lg">Discount</option>
                </select>
                {
                    (remunerationType == "1") ?
                        <input ref={remuneration} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2" placeholder="usd" />
                        : null
                }
                {
                    (remunerationType == "2") ?
                        <input ref={remuneration} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2" placeholder="Product details" />
                        : null
                }
                {
                    (remunerationType == "3") ?
                        <input ref={remuneration} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2" placeholder="% per sale" />
                        : null
                }
                {
                    (remunerationType == "4") ?
                        <input ref={remuneration} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2" placeholder="Coupons" />
                        : null
                }
                {(error == "" || error == null || error == undefined) ? null :
                    <div className="my-4 bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md">{error}</div>
                }
                <div className="flex w-full">
                    <div onClick={() => { navigator(-1) }} className="w-full">
                        <CusButton text="Back" textColor={"text-black"} background="bg-gray-100" width={"w-full"}></CusButton>
                    </div>
                    <div className="w-10"></div>
                    <div className="w-full" onClick={() => {
                        if (audience.length == 0) {
                            setError("Add Audience Location");
                        } else if (infLocation.id == null || infLocation.id == undefined || infLocation.id == "") {
                            setError("Select Influencer category");
                        }
                        else if (maxInf.current?.value == null || maxInf.current.value == undefined || maxInf.current?.value == "" || parseInt(maxInf.current?.value) == 0) {
                            setError("Select maximum influencer no. ");
                        } else if (datepicker.current?.value == null || datepicker.current?.value == undefined || datepicker.current?.value == "") {
                            setError("Select Accept participation last date. ");
                        } else if (remuneration.current?.value == null || remuneration.current?.value == undefined || remuneration.current?.value == "") {
                            setError("Select emuneration. ");
                        }
                        else {
                            setTillDate(datepicker.current?.value);
                            setMaxInf(parseInt(maxInf.current?.value));
                            setRemuneration(remuneration.current?.value);
                            navigator("/home/createcampaign/step4");
                        }
                    }}>
                        <CusButton text="Next" textColor={"text-white"} background="bg-primary" width={"w-full"}></CusButton>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Step3;