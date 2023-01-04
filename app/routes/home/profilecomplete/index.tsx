import { Link } from "@remix-run/react";
import { CusButton } from "~/components/utils/buttont";



const UserInputBoxOne = () => {
    return (
        <>
            <div className="p-8 w-full">
                <h1 className="text-2xl text-black font-bold">Tell us about yourself</h1>
                <div className="flex w-full md:flex-row flex-col">
                    <div>
                        <div className="bg-gray-200 rounded-lg my-6 mr-6 p-4 text-gray-400 flex md:flex-col flex-row w-full md:w-56">
                            <div>
                                <img src="/images/icons/gallery.png" alt="error" />
                            </div>
                            <div>
                                <p className="mt-4">
                                    Drop profile photo here.
                                </p>
                                <p className="mt-4">
                                    The image should either be jpg
                                    jped or png format and be a maximum size of 5 MB
                                </p>
                                <div className="mt-4">
                                    <CusButton text="Upload" textColor={"text-white"} width={'w-full'} background={"bg-gray-400"}></CusButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-black text-left font-normal text-lg mt-4">Email</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Last Name</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Nickname</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Date of birth</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Gender</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Bio</p>
                        <textarea className="p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"  ></textarea>
                        <Link to={"/home/profilecomplete/secondpage"}>
                            <CusButton text="Next" textColor={"text-white"} width={'w-full'} background={"bg-primary"} fontwidth={"font-bold"}></CusButton>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserInputBoxOne;