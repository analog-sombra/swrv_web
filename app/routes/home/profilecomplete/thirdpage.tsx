import { Link } from "@remix-run/react";
import { CusButton } from "~/components/utils/buttont";



const ThirdPage = () => {
    return (
        <>
            <div className="p-8 w-full">
                <h1 className="text-2xl text-black font-bold">Channels</h1>
                <div className="flex content-center items-center gap-2 flex-col md:flex-row mt-2">
                    <div className="flex w-full justify-around md:w-auto">
                        <div>
                            <img src="/images/media/instagram.png" alt="error" className="w-8 h-8" />
                        </div>
                        <div>
                            <img src="/images/media/facebook.png" alt="error" className="w-8 h-8" />
                        </div>
                        <div>
                            <img src="/images/media/youtube.png" alt="error" className="w-8 h-8" />
                        </div>
                        <div>
                            <img src="/images/media/snapchat.png" alt="error" className="w-8 h-8" />
                        </div>
                        <div>
                            <img src="/images/media/twitter.png" alt="error" className="w-8 h-8" />
                        </div>
                    </div>
                    <div className="grow hidden md:block"></div>
                    <CusButton text="Add new Channel" textColor={"text-white"} width={'w-36'} background={"bg-primary"} fontwidth={"font-normal"} textSize={"text-md"} ></CusButton>
                </div>
                <div className="flex w-full">
                    <div className="w-full">
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 mt-2" />
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 mt-2" />
                        <Link to={"/home/profilecomplete/forthpage"}>
                            <CusButton text="Next" textColor={"text-white"} width={'w-full'} background={"bg-primary"} fontwidth={"font-bold"}></CusButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ThirdPage;