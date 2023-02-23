import { ActionArgs, ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";
import UserInputStore from "~/state/user/firstinput";
import { UploadFile } from "~/utils";
import axios from "axios";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    return json({ user: cookie.user });
}

const UserInputBoxOne = () => {

    const user = useLoaderData();
    const useremail: string = user.user.email;
    const userID: String = user.user.id;
    const setIndex = UserInputStore((state) => state.setIndex);
    const navigator = useNavigate();

    const [img, setImg] = useState<File | null>(null);
    let imgref = useRef<HTMLInputElement | null>(null);
    const [imgerror, setImgerror] = useState<string | null>(null);
    const [error, setError] = useState<String | null>(null);


    const emailRef = useRef<HTMLInputElement | null>(null);
    const usernameRef = useRef<HTMLInputElement | null>(null);
    const nicknameRef = useRef<HTMLInputElement | null>(null);
    const datepicker = useRef<HTMLInputElement | null>(null);
    const bioRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        emailRef!.current!.value = useremail;
        usernameRef!.current!.value = useremail;
    }, []);

    const nextButton = useRef<HTMLButtonElement>(null);

    return (
        <>
            <div className="p-8 w-full">
                <h1 className="text-2xl text-black font-bold">Tell us about yourself</h1>
                <div className="flex w-full md:flex-row flex-col">
                    <div>
                        <div className="hidden">
                            <input type="file" accept="image/*" ref={imgref} onChange={(value) => {
                                let file_size = parseInt(((value!.target.files![0].size / 1024) / 1024).toString());
                                if (file_size < 4) {
                                    setImgerror(null);
                                    setImg(value!.target.files![0]);
                                } else {
                                    setImgerror("Image file size must be less then 4 mb");
                                }
                            }} />
                        </div>
                        <div className="bg-gray-200 rounded-lg my-6 mr-6 p-4 text-gray-400 flex md:flex-col flex-row w-full md:w-56">
                            <div className="grow sm:w-full">
                                {img == null ? <img src="/images/icons/gallery.png" alt="error" className="w-40 sm:w-full object-cover inline-block" /> : <img src={URL.createObjectURL(img)} alt="error" className="w-40 sm:w-full inline-block object-cover rounded-md" />}
                            </div>
                            <div className="w-52 sm:w-full">
                                <p className="mt-4">
                                    Drop profile photo here.
                                </p>
                                <p className="mt-4">
                                    The image should either be jpg
                                    jped or png format and be a maximum size of 5 MB
                                </p>
                                {(imgerror == "" || imgerror == null || imgerror == undefined) ? null :
                                    <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{imgerror}</div>
                                }
                                <div onClick={() => { imgref.current?.click(); }}>
                                    <CusButton text="Upload" textColor={"text-white"} width={'w-full'} background={"bg-gray-400"}></CusButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-black text-left font-normal text-lg mt-4">Email</p>
                        <input ref={emailRef} disabled={true} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Username</p>
                        <input ref={usernameRef} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Nickname</p>
                        <input ref={nicknameRef} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Date of birth</p>
                        <input type={"date"} ref={datepicker} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-lg  mt-4">Bio</p>
                        <textarea ref={bioRef} className="p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"  ></textarea>
                        {(error == "" || error == null || error == undefined) ? null :
                            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                        }
                        <div onClick={async () => {

                            if (img == null) {
                                setError("Please select the image")
                            }
                            else if (emailRef.current?.value == null || emailRef.current?.value == undefined || emailRef.current?.value == "") {
                                setError("Enter the email");
                            }
                            else if (usernameRef.current?.value == null || usernameRef.current?.value == undefined || usernameRef.current?.value == "") {
                                setError("Enter the username");
                            }
                            else if (nicknameRef.current?.value == null || nicknameRef.current?.value == undefined || nicknameRef.current?.value == "") {
                                setError("Enter the nickname");
                            }
                            else if (datepicker.current?.value == null || datepicker.current?.value == undefined || datepicker.current?.value == "") {
                                setError("Enter the date of birth");
                            }
                            else if (bioRef.current?.value == null || bioRef.current?.value == undefined || bioRef.current?.value == "") {
                                setError("Enter the bio");
                            }
                            else {
                                let avatar: String = await UploadFile(img);
                                let req = {
                                    "id": userID,
                                    "userName": usernameRef.current?.value,
                                    "userKnownAs": nicknameRef.current?.value,
                                    "userBioInfo": bioRef.current?.value,
                                    "userDOB": datepicker.current?.value,
                                    "userPicUrl": avatar
                                };
                                const data = await axios({
                                    method: 'post',
                                    url: `${BaseUrl}/api/updateuser`,
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
                                }
                                setIndex(2);
                                nextButton.current!.click();
                            }

                        }}>
                            <CusButton text="Next" textColor={"text-white"} width={'w-full'} background={"bg-primary"} fontwidth={"font-bold"}></CusButton>
                        </div>
                        <Form method="post" className="hidden">
                            <input type="hidden" name="id" value={userID.toString()} />
                            <button ref={nextButton} name="submit">Submit</button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UserInputBoxOne;


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
        return redirect("/home/profilecomplete/secondpage", {
            headers: {
                "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: true }),
            },
        });
    }
}
