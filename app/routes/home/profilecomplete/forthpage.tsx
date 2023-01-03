import { Link, useLocation, useNavigate } from "@remix-run/react";
import { CusButton } from "~/components/utils/buttont";



const ForthPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="p-8 w-full">
                <div className="flex w-full">
                    <div className="w-full">
                        <p className="text-black text-left font-normal text-lg mt-4">Country</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Addrss</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">State/Region</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">City</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Phone number</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <div className="flex gap-2 mt-4 items-start">
                            <div>
                                <input type={"checkbox"} name="check2" />
                            </div>
                            <p className="text-left text-[10px] text-black font-normal">The above details are true and correct</p>
                        </div>
                        <div className="flex">
                            <div onClick={() => navigate(-1)} className={"w-full"}>
                                <CusButton text="back" textColor={"text-black"} width={'w-full'} background={"bg-gray-200"} fontwidth={"font-bold"}></CusButton>
                            </div>
                            <div className="w-10"></div>
                            <Link to={"/home"} className={"w-full"}>
                                <CusButton text="Next" textColor={"text-white"} width={'w-full'} background={"bg-primary"} fontwidth={"font-bold"}></CusButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ForthPage;