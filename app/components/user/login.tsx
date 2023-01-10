import { Form, Link } from "@remix-run/react";
import { CusButton } from "../utils/buttont";

type LoginBoxState = {
    message: string | null | undefined
}

export const LoginBox = (props: LoginBoxState) => {
    return (
        <>
            <div className="relative">
                <div className=" text-center text-[70px] -translate-y-4 font-black text-stroke text-white absolute top-0 w-full md:-translate-y-10 md:text-[150px]">Welcome</div>
                <div className="w-full px-6 sm:px-16 grid  lg:grid-cols-3 md:w-4/6 lg:w-full mx-auto mb-20">
                    <div className="hidden lg:flex">
                    </div>
                    <div className="bg-white rounded-xl shadow-xl py-6 px-10 relative mt-12">
                        <Form method="post">
                            {props.message && <p className="w-full border-2 border-red-500 bg-red-500 bg-opacity-5  text-center my-2 rounded-md p-2 text-sm font-semibold text-red-500">{props.message}</p>}
                            <p className="text-black text-left font-bold text-lg mt-4">Login</p>
                            <p className="text-black text-left font-normal text-lg">Email</p>
                            <input name="email" type={"email"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" placeholder="example@mail.com" />
                            <p className="text-black text-left font-normal text-lg mt-4">Password</p>
                            <input name="password" type={"password"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" placeholder="8 character" />

                            <div className="grid place-items-center py-2">
                                <div className="flex content-center gap-4">
                                    <div className="grid place-items-center">
                                        <p className="text-black text-left font-normal text-lg  allign-center">Login with</p>
                                    </div>
                                    <img src="./images/icons/apple.png" alt="error" className="w-10 h-10" />
                                    <img src="./images/icons/google.png" alt="error" className="w-10 h-10" />
                                </div>
                            </div>
                            <button className="w-full inline black rounded-xl bg-secondary shadow-lg text-center font-bold text-white text-xl py-2 ">Submit</button>
                            <div className="flex gap-2 mt-4 items-start">
                                <div>
                                    <input type={"checkbox"} name="check" />
                                </div>
                                <div className="grid place-items-center">
                                    <p className="text-left text-xs text-black font-normal">Keep me logged in</p>
                                </div>
                            </div>
                            <p className="text-black text-left font-normal text-sm">CAN'T LOG IN? <span className="font-bold">RESTORE PASSWORD</span></p>
                            <p className="text-black text-left font-bold text-sm mt-6">Don't have an account?</p>
                            <Link to={"/register"}>
                                <CusButton text="Join" textColor={"text-white"} background={"bg-primary"} fontwidth={"font-bold"} width={"w-full"} ></CusButton>
                            </Link>
                        </Form>
                    </div>
                    <div className="hidden lg:block"></div>
                </div>
            </div>

        </>
    );
}



