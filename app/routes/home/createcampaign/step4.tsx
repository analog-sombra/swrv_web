import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "@remix-run/react";
import { useState } from "react";
import ReactSwitch from "react-switch";
import { CusButton } from "~/components/utils/buttont";

const Step4 = () => {
    const navigator = useNavigate();
    const [active, setActive] = useState(false);

    return (
        <>
            <div className="flex gap-x-4 flex-col lg:flex-row">
                <div className="bg-white shadow-xl rounded-xl px-8 py-4 mt-4">
                    <h1 className="text-primary text-lg font-medium">Create campaign</h1>
                    <p className="text-primary text-md font-normal">The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population.</p>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Campaign name</h2>
                    <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />

                    <div className="flex flex-col lg:flex-row">
                        <div>
                            <h2 className="text-primary tect-xl font-medium text-left my-1">Planed budget</h2>
                            <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        </div>
                        <div className="w-8"></div>
                        <div>
                            <h2 className="text-primary tect-xl font-medium text-left my-1">Cost per post</h2>
                            <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        </div>
                    </div>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Audience loaction</h2>
                    <div className="flex">
                        <div className="bg-[#EEEEEE] w-full h-10 rounded-lg divide-x-0 flex">
                            <div className="grow"></div>
                            <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                                <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                            </div>
                        </div>
                        <p className="text-primary text-center text-md font-normal my-2 w-20">clear all</p>
                    </div>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Influencer category</h2>
                    <div className="flex">
                        <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex">
                            <div className="grow"></div>
                            <div className="grid place-items-center px-4 bg-gray-300 rounded-lg">
                                <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                            </div>
                        </div>
                        <p className="text-primary text-center text-md font-normal my-2 w-20">clear all</p>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div>
                            <h2 className="text-primary tect-xl font-medium text-left my-1">Start date</h2>
                            <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        </div>
                        <div className="w-8"></div>
                        <div>
                            <h2 className="text-primary tect-xl font-medium text-left my-1">End date</h2>
                            <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <div>
                            <h2 className="text-primary tect-xl font-medium text-left my-1">Min reach</h2>
                            <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        </div>
                        <div className="w-8"></div>
                        <div>
                            <h2 className="text-primary tect-xl font-medium text-left my-1">Max reach</h2>
                            <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <ReactSwitch onChange={() => setActive(!active)} checked={active} checkedIcon={false} uncheckedIcon={false} onColor="#03125E"></ReactSwitch>
                        <div className="grow">
                            <h1 className="text-primary text-lg font-medium">Public globally</h1>
                            <p className="text-primary text-md font-normal">The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population.</p>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="lg:w-80 bg-white  shadow-lx rounded-xl p-4 mt-4">
                        <h1 className="text-primary text-lg font-medium">Campaign Summary</h1>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">Brand name</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">Brand name</p>
                        </div>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">Campaign name</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">Campaign name</p>
                        </div>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">Planed budget</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">Planed budget</p>
                        </div>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">Cost per post</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">Cost per post</p>
                        </div>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">Audience loaction</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">Audience loaction</p>
                        </div>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">Influencer category</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">Influencer category</p>
                        </div>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">Start date</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">Start date</p>
                        </div>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">Min reach</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">Min reach</p>
                        </div>

                        <div className="flex w-full">
                            <div onClick={() => { navigator(-1) }} className="w-full">
                                <CusButton text="Back" textColor={"text-black"} background="bg-gray-100" width={"w-full"} fontwidth={"font-bold"}></CusButton>
                            </div>
                            <div className="w-10"></div>
                            <Link to={"/home/createcampaign/step5"} className="w-full">
                                <CusButton text="Next" textColor={"text-white"} background="bg-secondary" width={"w-full"} fontwidth={"font-bold"}></CusButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Step4;