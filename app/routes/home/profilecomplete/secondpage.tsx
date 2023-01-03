import { Link } from "@remix-run/react";
import { CusButton } from "~/components/utils/buttont";



const SecondPage = () => {
    return (
        <>
            <div className="p-8 w-full">
                <div className="flex w-full">
                    <div className="w-full">
                        <p className="text-black text-left font-normal text-lg mt-4">Main market</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Other markets</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Category</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Account currency</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Languages</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <Link to={"/home/profilecomplete/thirdpage"}>
                            <CusButton text="Next" textColor={"text-white"} width={'w-full'} background={"bg-primary"} fontwidth={"font-bold"}></CusButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SecondPage;