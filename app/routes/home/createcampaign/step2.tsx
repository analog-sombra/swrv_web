import { faAdd, faCheck, faPaperclip, faRemove, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";

export const loader = async () => {
    const platform = await axios.post(`${BaseUrl}/api/getplatform`);
    return json({ platform: platform.data.data });
}
const Step2 = () => {
    const mediatype = ["Post", "Story", "Reel", "Video", "Audio"];
    const data = useLoaderData();
    const navigator = useNavigate();
    return (
        <>
            <div className="bg-white shadow-xl rounded-xl px-8 py-4 mt-4">
                <h2 className="text-black tect-xl font-medium text-left">Sponsored post</h2>
                <div className="md:flex gap-2 mt-2 grid place-items-center grid-cols-4">
                    {data.platform.map((val: Object, i: number) => {
                        return (
                            <div key={i} className="bg-gray-200 p-2 rounded-lg">
                                <img src={data.platform[i]["platformLogoUrl"]} alt="error" className="w-10 h-10" />
                            </div>
                        );
                    })}
                </div>
                <div className="lg:flex gap-4 mt-4 grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    {mediatype.map((val: String, i: number) => {
                        return (
                            <div className="text-primary text-lg text-center font-normal w-28 py-1 bg-gray-100 rounded-xl">
                                {val}
                            </div>
                        )
                    })}
                </div>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Mentions</h2>
                <div className="flex">
                    <div className="bg-[#EEEEEE] w-full h-10 rounded-lg divide-x-0 flex">
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>
                    <p className="text-primary text-center text-md font-normal my-2 w-20">clear all</p>
                </div>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Hashtag</h2>
                <div className="flex">
                    <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex">
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>
                    <p className="text-primary text-center text-md font-normal my-2 w-20">clear all</p>
                </div>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Minimum rating required</h2>
                <div className="flex gap-x-4">
                    <div>
                        <FontAwesomeIcon className="text-2xl text-yellow-500 font-bold" icon={faStar}></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-2xl text-yellow-500 font-bold" icon={faStar}></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-2xl text-yellow-500 font-bold" icon={faStar}></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-2xl text-yellow-500 font-bold" icon={faStar}></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-2xl text-yellow-500 font-bold" icon={faStar}></FontAwesomeIcon>
                    </div>
                </div>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Affiliated links (optional)</h2>
                <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                <h2 className="text-primary tect-xl font-medium text-left my-1">Discount coupons</h2>
                <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />

                <div className="flex flex-col lg:flex-row">
                    <div>
                        <h2 className="text-primary tect-xl font-medium text-left my-1">Target</h2>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                    </div>
                    <div className="grow"></div>
                    <div>
                        <h2 className="text-primary tect-xl font-medium text-left my-1">Min target</h2>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                    </div>
                </div>

                <h2 className="text-primary tect-xl font-medium text-left my-1">Campaign info</h2>
                <textarea className="p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"  ></textarea>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Optional attachments</h2>
                <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex">
                    <div className="grow"></div>
                    <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                        <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
                    </div>
                </div>
                <h2 className="text-primary tect-xl font-medium text-left my-1">You should</h2>
                <div className="flex flex-col lg:flex-row gap-2">
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
                    <div className="w-10"></div>
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
                </div>
                <div className="flex flex-col lg:flex-row items-center mt-4">
                    <h2 className="text-primary tect-xl font-medium text-left my-1">
                        Does the influencer need to seek an approval of the post before posting
                    </h2>
                    <div className="grow"></div>
                    <div className={"flex items-center"}>
                        <CusButton text="Yes" textColor={"text-primary"} background="bg-gray-100" width={"w-20"}></CusButton>
                        <div className="w-10"></div>
                        <CusButton text="No" textColor={"text-primary"} background="bg-gray-100" width={"w-20"}></CusButton>
                    </div>
                </div>

                <div className="flex w-full">
                    <div onClick={() => { navigator(-1) }} className="w-full">
                        <CusButton text="Back" textColor={"text-black"} background="bg-gray-100" width={"w-full"}></CusButton>
                    </div>
                    <div className="w-10"></div>
                    <Link to={"/home/createcampaign/step3"} className="w-full">
                        <CusButton text="Next" textColor={"text-white"} background="bg-primary" width={"w-full"}></CusButton>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default Step2;