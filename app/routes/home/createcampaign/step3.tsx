import { faAdd, faArrowDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "@remix-run/react";
import { CusButton } from "~/components/utils/buttont";

const Step3 = () => {
    const navigator = useNavigate();
    return (
        <>
            <div className="bg-white shadow-xl rounded-xl px-8 py-4 mt-4">
                <h2 className="text-black tect-xl font-medium text-left">Audience & demeography</h2>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Audience location</h2>
                <div className="flex">
                    <div className="bg-[#EEEEEE] w-full h-10 rounded-lg divide-x-0 flex">
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>
                    <p className="text-primary text-center text-md font-normal my-2 w-20">clear all</p>
                </div>
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
                <div className="bg-[#EEEEEE] w-full h-10 rounded-lg divide-x-0 flex">
                    <div className="grow"></div>
                    <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                        <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                    </div>
                </div>
                <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md mt-4 w-full p-2" placeholder="Product details" />
                <div className="flex w-full">
                    <div onClick={() => { navigator(-1) }} className="w-full">
                        <CusButton text="Back" textColor={"text-black"} background="bg-gray-100" width={"w-full"}></CusButton>
                    </div>
                    <div className="w-10"></div>
                    <Link to={"/home"} className="w-full">
                        <CusButton text="Next" textColor={"text-white"} background="bg-primary" width={"w-full"}></CusButton>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default Step3;