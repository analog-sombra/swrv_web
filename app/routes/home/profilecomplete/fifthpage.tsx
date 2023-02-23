import { ActionArgs, ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl, instaUrl } from "~/const";
import { userPrefs } from "~/cookies";
import UserInputStore from "~/state/user/firstinput";
import * as EmailValidator from 'email-validator';


export const loader: LoaderFunction = async (props: LoaderArgs) => {

    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);

    return json({ user: cookie.user });
}

const ThirdPage = () => {
    const userdata = useLoaderData();
    const userId: string = userdata.user.id
    const brandId: string = userdata.user.brand.id;

    const [error, setError] = useState<String | null>(null);
    const [sus, setSus] = useState<String | null>(null);

    const setIndex = UserInputStore((state) => state.setIndex);


    const nextButton = useRef<HTMLButtonElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const [contactnumber, setContactnumber] = useState<number>()
    const handelcontent = (e: any) => {
        setContactnumber(e.target.value.replace(/\D/g, ''));
    }

    type InvitedUser = {
        name: string
        email: string
        number: string
    }
    const [invitedUser, setInvitedUser] = useState<InvitedUser[]>([]);



    return (
        <>
            <div className="p-8 w-full">
                <h1 className="text-2xl text-black font-bold">Invite users</h1>
                <div className="flex w-full">
                    <div className="w-full">
                        <div>
                            <p className="text-black text-left font-normal text-lg  mt-4">Username</p>
                            <input ref={nameRef} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                            <p className="text-black text-left font-normal text-lg  mt-4">Email</p>
                            <input ref={emailRef} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                            <p className="text-black text-left font-normal text-lg  mt-4">contact number</p>
                            <input onChange={handelcontent} value={contactnumber} type={"text"} maxLength={10} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        </div>
                        <div className="flex my-4">
                            <div className="grow"></div>
                            <button onClick={async () => {

                                if (nameRef.current?.value == null || nameRef.current?.value == undefined || nameRef.current?.value == "") {
                                    setError("Enter the user ");
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
                                        "brandId": brandId,
                                        "name": nameRef.current?.value,
                                        "email": emailRef.current?.value,
                                        "contact": contactnumber
                                    };

                                    const data = await axios({
                                        method: 'post',
                                        url: `${BaseUrl}/api/send-brand-invite`,
                                        data: req,
                                    });
                                    if (data.data.status == false) {
                                        return setError(data.data.message);
                                    }
                                    else {

                                        let user: InvitedUser = {
                                            name: nameRef.current?.value,
                                            email: emailRef.current?.value,
                                            number: contactnumber.toString()
                                        };
                                        setInvitedUser([...invitedUser, user]);
                                        setError(null);
                                        setContactnumber(0);
                                        nameRef.current!.value = "";
                                        emailRef.current!.value = "";
                                        return setSus("User invited successfully");
                                    }
                                }
                            }} className="text-white rounded-lg bg-secondary py-1 px-4 font-semibold text-lg">Invite</button>
                        </div>
                        {(error == "" || error == null || error == undefined) ? null :
                            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                        }
                        {(sus == "" || sus == null || sus == undefined) ? null :
                            <div className="bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4">{sus}</div>
                        }
                        {
                            invitedUser.map((val: InvitedUser, index: number) => {
                                return (
                                    <div key={index} className="my-4 bg-gray-200 shadow-md rounded-md py-1 px-4">
                                        <p className="text-slate-900 text-md">{index + 1}: {val.name} - {val.email} </p>
                                    </div>
                                );
                            })
                        }
                        <div onClick={() => {
                            if (invitedUser.length == 0) {
                                setSus(null);
                                setError("Invite at least one user");
                            } else {
                                setIndex(5);
                                nextButton.current!.click();
                            }
                        }}>
                            <CusButton text="Next" textColor={"text-white"} width={'w-full'} background={"bg-primary"} fontwidth={"font-bold"}></CusButton>
                        </div>
                        <Form method="post" className="hidden">
                            <input type="hidden" name="id" value={userId.toString()} />
                            <button ref={nextButton} name="submit">Submit</button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ThirdPage;




export const action: ActionFunction = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const value = Object.fromEntries(formData);

    const userdata = await axios({
        method: 'post',
        url: `${BaseUrl}/api/getuser`,
        data: { "id": value.id },
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
    if (userdata.data.status == false) {
        return { message: userdata.data.message };
    } else {
        return redirect("/home", {
            headers: {
                "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: true }),
            },
        });
    }
}
