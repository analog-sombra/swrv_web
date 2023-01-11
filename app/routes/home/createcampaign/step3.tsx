import { faAdd, faArrowDown, faCaretDown, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "@remix-run/react";
import { useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import CreateCampaignStore from "~/state/campaign/createcampaign";

const Step3 = () => {
    const [revenue, setRevenue] = useState("cash");
    const navigator = useNavigate();


    const audienceText = useRef<HTMLInputElement>(null);
    const [auderror, setAudError] = useState<string | null>(null);
    const [addaudience, setAddAudience] = useState<boolean>(false);
    const audience = CreateCampaignStore((state) => state.audience);
    const removeAudience = CreateCampaignStore((state) => state.removeAudience);
    const clearAudience = CreateCampaignStore((state) => state.clearAudience);
    const addAudience = CreateCampaignStore((state) => state.addAudience);
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
                                    <div className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4">
                                        <div key={i} className=" text-black font-semibold ">
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
                                <input ref={audienceText} type="text" className="bg-gray-200 w-full outline-none rounded-lg px-4 py-2" placeholder="Mendtion" />
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
                <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                <h2 className="text-primary tect-xl font-medium text-left my-1">Maximum no of influencers that can join the campaign</h2>
                <div className="bg-[#EEEEEE] w-full h-10 rounded-lg divide-x-0 flex">
                    <div className="grow"></div>
                    <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                    </div>
                </div>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Geo restriction ( Optional only applicable for influencer filtering ) radius in kilometers</h2>
                <div className="w-full h-96">
                    <img src={"https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"} alt={'error'} className="object-cover h-96 w-full rounded-xl" />
                </div>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Accept participation / invite till</h2>
                <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                <h2 className="text-primary tect-xl font-medium text-left my-1">Remuneration</h2>

                <select id="remuneration" name="remuneration" className="w-full p-2 bg-[#EEEEEE] rounded-lg outline-none border-none pr-6" onChange={(value) => {
                    setRevenue(value.target.value);
                }}>
                    <option value="cash" className="border-none outline-none font-normal text-lg" selected>Cash</option>
                    <option value="product" className="border-none outline-none font-normal text-lg">Product</option>
                    <option value="revenue" className="border-none outline-none font-normal text-lg">Revenue</option>
                    <option value="discount" className="border-none outline-none font-normal text-lg">Discount</option>
                </select>
                {
                    (revenue == "cash") ?
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2" placeholder="usd" />
                        : null
                }
                {
                    (revenue == "product") ?
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2" placeholder="Product details" />
                        : null
                }
                {
                    (revenue == "revenue") ?
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2" placeholder="% per sale" />
                        : null
                }
                {
                    (revenue == "discount") ?
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2" placeholder="Coupons" />
                        : null
                }
                <div className="flex w-full">
                    <div onClick={() => { navigator(-1) }} className="w-full">
                        <CusButton text="Back" textColor={"text-black"} background="bg-gray-100" width={"w-full"}></CusButton>
                    </div>
                    <div className="w-10"></div>
                    <Link to={"/home/createcampaign/step4"} className="w-full">
                        <CusButton text="Next" textColor={"text-white"} background="bg-primary" width={"w-full"}></CusButton>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default Step3;