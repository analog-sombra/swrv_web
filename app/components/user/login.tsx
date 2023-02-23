import { Form, Link, useNavigate } from "@remix-run/react";
import { CusButton } from "../utils/buttont";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "~/services/firebase";
import axios from "axios";
import { BaseUrl } from "~/const";
import * as EmailValidator from 'email-validator';


type LoginBoxState = {
    message: string | null | undefined
}
export const LoginBox = (props: LoginBoxState) => {
    const navigator = useNavigate();
    const [showpass, setShowPass] = useState<boolean>(false);
    const changePassVisabel = () => {
        setShowPass(!showpass);
    }
    const [error, setError] = useState<String | null>(null);
    const socialLogin = async (email: string, pass: string) => {
        const apidata = await axios.post(`${BaseUrl}/api/login`, { "email": email, "password": pass });
        if (apidata.data.status) {
            navigator(`/extra/sociallogin/${apidata.data.data.id}`);
        } else {
            setError(apidata.data.message);
        }
    }
    const emailRef = useRef<HTMLInputElement>(null);
    const [emailError, setEmailError] = useState<String | null>(null);
    const [forgetPasswordBox, setForgetPasswordBox] = useState<boolean>(false);

    const forgetPassword = async () => {
        if (emailRef.current?.value == null || emailRef.current?.value == undefined || emailRef.current?.value == "") {
            setEmailError("Fill the Brand info");
        }
        else if (!EmailValidator.validate(emailRef.current?.value)) {
            setEmailError("Enter valid email");
        } else {
            const apidata = await axios.post(`${BaseUrl}/api/send-forgot-password`, { "user": emailRef.current?.value });
            if (!apidata.data.status) return setEmailError(apidata.data.message);
            return setForgetPasswordBox(false);
        }

    };
    return (
        <>
            <div className={`fixed top-0 left-0 bg-gray-600 bg-opacity-20 h-screen w-full grid place-items-center shadow-xl ${forgetPasswordBox ? "" : "hidden"} `} style={{ zIndex: 100 }}>
                <div className="bg-white rounded-lg p-8 w-96">
                    <div className="flex">
                        <div className="grow"></div>
                        <div onClick={() => { setForgetPasswordBox(false) }}> <FontAwesomeIcon className="text-black text-2xl font-bold" icon={faXmark}></FontAwesomeIcon> </div>
                    </div>
                    <p className="text-black font-bold text-lg mt-4 text-center my-4">Forget password</p>
                    <input ref={emailRef} type={"email"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" placeholder="example@mail.com" />
                    {(emailError == "" || emailError == null || emailError == undefined) ? null :
                        <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{emailError}</div>
                    }
                    <div onClick={forgetPassword}>
                        <CusButton text="Send" textColor={"text-white"} background={"bg-primary"} fontwidth={"font-bold"} width={"w-full"} ></CusButton>
                    </div>
                </div>
            </div>
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
                            <div className="bg-gray-200 rounded-md px-4 py-2 flex">
                                <input name="password" type={showpass ? "text" : "password"} className="bg-transparent outline-none border-none focus:border-gray-300 rounded-md w-full" placeholder="8 character" />
                                <div className="text-gray-600 text-center px-1 text-md" onClick={changePassVisabel}>
                                    <FontAwesomeIcon icon={showpass ? faEye : faEyeSlash}></FontAwesomeIcon>
                                </div>
                            </div>
                            <div className="grid place-items-center py-2">
                                <div className="flex content-center gap-4">
                                    <div className="grid place-items-center">
                                        <p className="text-black text-left font-normal text-lg  allign-center">Login with</p>
                                    </div>
                                    <img src="./images/media/facebook.png" alt="error" className="w-10 h-10" />
                                    <div onClick={async () => {
                                        const googleProvider = new GoogleAuthProvider();
                                        const res = await signInWithPopup(auth, googleProvider);
                                        const pass = res.user.displayName?.trim().split(" ").join('').toLowerCase().trim() + "SWRV123@#";
                                        try {
                                            await socialLogin(res.user.email!, pass);
                                        } catch (e: any) {
                                            setError(e.toString());
                                        }
                                    }}>
                                        <img src="./images/icons/google.png" alt="error" className="w-10 h-10" />
                                    </div>
                                </div>
                            </div>
                            {(error == "" || error == null || error == undefined) ? null :
                                <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                            }
                            <button className="w-full inline black rounded-xl bg-secondary shadow-lg text-center font-bold text-white text-xl py-2 ">Submit</button>
                            <p className="text-black text-left font-normal text-sm mt-4">CAN'T LOG IN? <span onClick={() => { setForgetPasswordBox(true); }} className="font-bold cursor-pointer">RESTORE PASSWORD</span></p>
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



