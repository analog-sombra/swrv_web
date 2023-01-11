import { Link, useNavigate } from "@remix-run/react";
import { CusButton } from "~/components/utils/buttont";

const Step5 = () => {
    const navigator = useNavigate();

    return (
        <>
            <div className="flex gap-x-4 flex-col lg:flex-row">
                <div className="bg-white shadow-xl rounded-xl px-8 py-4 mt-4">
                    <h1 className="text-primary text-lg font-medium">Create campaign</h1>
                    <p className="text-primary text-md font-normal">The term business demography is used to cover a set of variables which explain the characteristics and demography of the business population.</p>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Brand info</h2>
                    <textarea className="p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"  ></textarea>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Campaign purpose</h2>
                    <textarea className="p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"  ></textarea>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Mood boards</h2>
                    <div className="flex gap-x-4  overflow-x-scroll">
                        <div className="w-40 h-40 bg-gray-200 rounded-xl"></div>
                        <div className="w-40 h-40 bg-gray-200 rounded-xl"></div>
                        <div className="w-40 h-40 bg-gray-200 rounded-xl"></div>
                    </div>
                </div>
                <div>

                    <div className="lg:w-80 bg-white shadow-lx rounded-xl p-4 mt-4">
                        <h1 className="text-primary text-lg font-medium">Campaign Summary</h1>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">Brand info</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">Brand info</p>
                        </div>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">Campaign purpose</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">Campaign purpose</p>
                        </div>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">Hashtags</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">Hashtags</p>
                        </div>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">Mentions</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">Mentions</p>
                        </div>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">You should do:</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">You should do:</p>
                        </div>
                        <div className="flex my-4">
                            <p className="text-sm text-primary font-normal">You should don't:</p>
                            <div className="grow"></div>
                            <p className="text-sm text-primary font-medium">You should don't:</p>
                        </div>
                        <div className="flex w-full">
                            <div onClick={() => { navigator(-1) }} className="w-full">
                                <CusButton text="Back" textColor={"text-black"} background="bg-gray-100" width={"w-full"} fontwidth={"font-bold"}></CusButton>
                            </div>
                            <div className="w-10"></div>
                            <Link to={"/home/createcampaign/step6"} className="w-full">
                                <CusButton text="Next" textColor={"text-white"} background="bg-secondary" width={"w-full"} fontwidth={"font-bold"}></CusButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Step5;