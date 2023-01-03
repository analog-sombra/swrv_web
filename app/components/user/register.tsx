import { Link } from "@remix-run/react";
import { CusButton } from "../utils/buttont";
import { useState } from "react";

export const RegisterBox = () => {
    const [isBrand, setBrand] = useState(false);

    return (
        <>
            <div className="w-full px-6 sm:px-16 grid  lg:grid-cols-3  md:w-4/6 lg:w-full mx-auto mb-20">
                <div className="hidden flex-col lg:flex">
                    <div className="grow"></div>
                    <div className="flex">
                        <div className="grow">
                        </div>
                        <img src="./images/avatar/login.png" alt="err" className="justify-self-end w-[250px] h-[400px]" />
                    </div>
                </div>
                <div className="bg-white rounded-xl shadow-xl py-6 px-10">
                    <div className="flex">
                        <div className="w-full" onClick={() => {
                            setBrand(false);
                        }}>
                            <CusButton width={"w-full"} text="Influencer" background={`${isBrand ? "" : "bg-secondary"}`} textColor={`${isBrand ? "text-primary" : "text-white"}`} borderColor={`${isBrand ? "border-primary" : ""}`} fontwidth="font-bold" ></CusButton>
                        </div>
                        <div className="w-10"></div>
                        <div className="w-full" onClick={() => {
                            setBrand(true);
                        }}>
                            <CusButton width={"w-full"} text="Brand" textColor={`${isBrand ? "text-white" : "text-primary"}`} background={`${isBrand ? "bg-secondary" : ""}`} borderColor={`${isBrand ? "" : "border-primary"}`} fontwidth="font-bold" ></CusButton>
                        </div>

                    </div>
                    <p className="text-black text-left font-bold text-lg mt-4">Join</p>
                    <p className="text-black text-left font-normal text-lg">Email</p>
                    <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" placeholder="example@mail.com" />
                    <p className="text-black text-left font-normal text-lg mt-4">Password</p>
                    <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" placeholder="8 character" />
                    <p className="text-black text-left font-normal text-lg mt-4">Confirm password</p>
                    <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" placeholder="8 character" />
                    <div className="grid place-items-center py-4">
                        <div className="flex content-center gap-4">
                            <div className="grid place-items-center">
                                <p className="text-black text-left font-normal text-lg  allign-center">Login with</p>
                            </div>
                            <img src="./images/icons/apple.png" alt="error" className="w-10 h-10" />
                            <img src="./images/icons/google.png" alt="error" className="w-10 h-10" />
                        </div>
                    </div>
                    <Link to={"/home"}>
                        <CusButton text="create account" textColor={"text-white"} background={"bg-primary"} fontwidth={"font-bold"} width={"w-full"}></CusButton>
                    </Link>
                    <div className="flex gap-4 content-start">
                        <div>
                            <input type={"checkbox"} name="check1" />
                        </div>
                        <label className="text-left text-[10px] text-black font-normal">I agree with Terms of use and acknowledge that my personal data is being collected and processed in accordance with Privacy policy</label>
                    </div>
                    <div className="flex gap-4 mt-4 items-start">
                        <div>
                            <input type={"checkbox"} name="check2" />
                        </div>
                        <p className="text-left text-[10px] text-black font-normal">Also, I confirm I am of eligible age</p>
                    </div>
                    <p className="text-black text-left font-normal text-lg mt-8">I’m already registered.<Link to={"/login"}> <span className="font-bold"> Let me Log in</span></Link></p>
                </div>
                <div className="hidden lg:block"></div>
            </div>
        </>
    );
}