import { useEffect, useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import * as EmailValidator from 'email-validator';
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { userPrefs } from "~/cookies";
import { useLoaderData, useTransition } from "@remix-run/react";
import axios from "axios";
import { BaseUrl } from "~/const";
export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    return json({ user: cookie.user });
}

const Invite = () => {
    const navigation = useTransition();
    const isSubmitting = navigation.state === "submitting";

    const userdata = useLoaderData();
    const userId: string = userdata.user.id;
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const [contactnumber, setContactnumber] = useState<number>()
    const [error, setError] = useState<String>("");

    const [refstatus, setRefStatus] = useState<any[]>([]);
    const [sus, setSus] = useState<String>("");
    const handelcontent = (e: any) => {
        setContactnumber(e.target.value.replace(/\D/g, ''));
    }
    const init = async () => {
        const data = await axios({
            method: 'get',
            url: `${BaseUrl}/api/user-referrals/${userId}`,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Options': '*',
                'Access-Control-Allow-Methods': '*',
                'X-Content-Type-Options': '*',
                'Content-Type': 'application/json',
                'Accept': '*'
            }
        });
        setRefStatus(data.data.data[0].refferrals);
    };


    useEffect(() => { init(); }, [])
    return (
        <>
            <div></div>
            <div>
                <div className="grid place-items-center w-full bg-yellow-500 rounded-xl shadow-xl my-6">
                    <img src="/images/cashgirl.png" alt="error" className="h-72" />
                </div>
                <div className="flex gap-4 grow flex-col lg:flex-row">
                    <div className="bg-white rounded-lg shadow-xl p-4 lg:w-96">
                        <h1 className="text-black text-xl font-bold text-left">Refer an influencer or brand</h1>
                        <p className="text-black text-left font-normal text-md">Name</p>
                        <input ref={nameRef} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-md mt-4">Email</p>
                        <input ref={emailRef} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-md mt-4">Contact Number</p>
                        <input onChange={handelcontent} value={contactnumber} type={"text"} maxLength={10} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        {(error == "" || error == null || error == undefined) ? null :
                            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                        }
                        {(sus == "" || sus == null || sus == undefined) ? null :
                            <div className="bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4">{sus}</div>
                        }
                        <div className=" my-2" onClick={async () => {
                            if (nameRef.current?.value == null || nameRef.current?.value == undefined || nameRef.current?.value == "") {
                                setError("Fill user name");
                            }
                            else if (emailRef.current?.value == null || emailRef.current?.value == undefined || emailRef.current?.value == "") {
                                setError("Fill the Brand info");
                            }
                            else if (!EmailValidator.validate(emailRef.current?.value)) {
                                setError("Enter valid email");
                            }
                            else if (contactnumber == null || contactnumber == undefined || contactnumber == 0) {
                                setError("Fill the contact number");
                            }
                            else if (contactnumber.toString().length != 10) {
                                setError("Enter a 10 degit valid contact number");
                            } else {
                                let req = {
                                    "userId": userId,
                                    "name": nameRef.current?.value,
                                    "email": emailRef.current?.value,
                                    "contact": contactnumber
                                };
                                const data = await axios({
                                    method: 'post',
                                    url: `${BaseUrl}/api/send-referral`,
                                    data: req,
                                    headers: {
                                        'Access-Control-Allow-Origin': '*',
                                        'Access-Control-Allow-Headers': '*',
                                        'Access-Control-Allow-Options': '*',
                                        'Access-Control-Allow-Methods': '*',
                                        'X-Content-Type-Options': '*',
                                        'Content-Type': 'application/json',
                                        'Accept': '*'
                                    }
                                });
                                if (data.data.status == false) {
                                    return setError(data.data.message);
                                } else {
                                    setError("");
                                    nameRef.current.value = "";
                                    emailRef.current.value = "";
                                    setContactnumber(undefined);
                                    setSus("Invitation has been send.");
                                }
                            }
                        }}>
                            <button className="w-full text-center text-xl rounded-md my-2 py-1 text-primary font-bold bg-[#01FFF4]">Invite </button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-4 grow w-full overflow-x-auto">
                        <h1 className="text-black text-xl font-bold text-left">Referral status</h1>
                        {refstatus.length == 0 ?
                            <>
                                <h1 className="text-black text-md font-semibold text-center">Your referral list is empty </h1>
                            </>
                            :
                            <table className="md:w-full md:table-auto border-separate border-spacing-y-3 w-[700px]">
                                <thead className="w-full bg-gray-100 rounded-xl p-2">
                                    <tr>
                                        <th scope="col" className="mt-2 font-normal p-2 text-left w-20"></th>
                                        <th scope="col" className="mt-2 font-normal p-2 text-left w-40">Name</th>
                                        <th scope="col" className="mt-2 font-normal p-2 text-left">Email</th>
                                        <th scope="col" className="mt-2 font-normal p-2 text-left">Contact</th>
                                        <th scope="col" className="mt-2 font-normal p-2 text-left">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="gap-y-4">
                                    {refstatus.map((val: any, index: number) => {
                                        const avatar = val["pic"] == "0" || val["pic"] == null || val["pic"] == undefined || val["pic"] == "" ? "/images/avatar/user.png" : val["pic"];
                                        return (
                                            <tr key={index}>
                                                <td><img src={avatar} alt="error" className="w-12 h-12 rounded-md object-cover" /></td>
                                                <td>{val.userName}</td>
                                                <td>{val.email}</td>
                                                <td>{val.contact}</td>
                                                <td className="font-medium">{val.status.isVerified}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>}

                    </div>
                </div>
            </div>
        </>
    );
}

export default Invite;