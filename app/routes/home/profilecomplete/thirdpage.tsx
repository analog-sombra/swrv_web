import { ActionArgs, ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";
import UserInputStore from "~/state/user/firstinput";

export const loader: LoaderFunction = async (props: LoaderArgs) => {

    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    const paltform = await axios({
        method: 'post',
        url: `${BaseUrl}/api/getplatform`,
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

    return json({ user: cookie.user, paltform: paltform.data.data });
}



const ThirdPage = () => {
    const userdata = useLoaderData();
    const userId: string = userdata.user.id
    const platform = userdata.paltform;

    const [selPlatform, setSelPlatfome] = useState<any[]>([]);
    const [addedPlatfrom, setAddPlatform] = useState<any[]>([]);
    const [error, setError] = useState<String | null>(null);
    const [sus, setSus] = useState<String | null>(null);

    const setIndex = UserInputStore((state) => state.setIndex);
    const navigator = useNavigate();


    // const [url, setUrl] = useState<String>("");
    // useEffect(() => {
    //     let myurl = window.location.href.split("/");
    //     let out = "/" + myurl.slice(3, myurl.length).join("/");
    //     setUrl(out)
    // }, [])

    return (
        <>
            <div className="p-8 w-full">
                <h1 className="text-2xl text-black font-bold">Channels</h1>
                <div className="flex content-center items-center gap-2 flex-col md:flex-row mt-2">
                    <div className="md:flex gap-2 mt-2 grid place-items-center grid-cols-4">
                        {platform.map((val: any, i: number) => {
                            return (
                                <div key={i} className={`w-12 h-12 p-2 rounded-lg ${selPlatform.includes(val) ? "bg-white shadow-xl " : "bg-gray-200"} `} onClick={() => {
                                    setSelPlatfome([val]);
                                }}>
                                    <img src={platform[i]["platformLogoUrl"]} alt="error" className="w-10" />
                                </div>
                            );
                        })}
                    </div>
                    <div className="grow hidden md:block"></div>
                    <div onClick={() => {
                        setAddPlatform([...addedPlatfrom, { val: selPlatform[0], status: false, text: "" }]);
                        setSelPlatfome([]);
                    }}>
                        <CusButton text="Add new Channel" textColor={"text-white"} width={'w-36'} background={"bg-primary"} fontwidth={"font-normal"} textSize={"text-md"} ></CusButton>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="w-full">
                        <div>
                            {
                                addedPlatfrom.map((val: any, index: number) => {
                                    return (
                                        <div key={index} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 mt-2 flex ">
                                            <div><img src={`${val["val"]["platformLogoUrl"]}`} alt="logo" className="w-10" /></div>
                                            <input disabled={val["status"]} type={"text"} value={val["text"]} onChange={(e) => {
                                                let adddata = addedPlatfrom.filter((data) => data != val);
                                                setAddPlatform([...adddata, { val: val["val"], status: false, text: e.target.value }])
                                            }} className="mx-3 bg-transparent  outline-none border-none focus:border-gray-300 rounded-md w-full" />
                                            {
                                                val["status"] ? null : <div className="text-white bg-green-500 font-medium text-md text-center rounded-md grid place-items-center px-4 cursor-pointer" onClick={async () => {
                                                    if (val["text"] == null || val["text"] == undefined || val["text"] == "") {
                                                        setError("Fill the handle name");
                                                    }
                                                    else if (val["text"].indexOf(" ") >= 0) {
                                                        setError("Hashtag cannot containt space");
                                                    }
                                                    else {
                                                        let req = {
                                                            "userId": userId,
                                                            "platformId": val["val"]["id"],
                                                            "handleName": val["text"]
                                                        };

                                                        const data = await axios({
                                                            method: 'post',
                                                            url: `${BaseUrl}/api/add-handle`,
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
                                                        else {
                                                            setError(null);
                                                            setSus("Successfully added the user handel");
                                                            let adddata = addedPlatfrom.filter((data) => data != val);
                                                            setAddPlatform([...adddata, { val: val["val"], status: true, text: val["text"] }]);
                                                        }
                                                    }
                                                }
                                                }>Done</div>
                                            }
                                        </div>
                                    );
                                })
                            }
                        </div>
                        {(error == "" || error == null || error == undefined) ? null :
                            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                        }
                        {(sus == "" || sus == null || sus == undefined) ? null :
                            <div className="bg-green-500 bg-opacity-10 border-2 text-center border-green-500 rounded-md text-green-500 text-md font-normal text-md my-4">{sus}</div>
                        }
                        {/* <Form method="post"> */}
                            {/* <input type="hidden" value={userId} name="userid" /> */}
                            {/* <input type="hidden" value={url.toString()} name="url" /> */}
                            <div onClick={() => {
                                if (addedPlatfrom.length == 0) {
                                    setError("Add at least one handel");
                                }
                                else {
                                    if (addedPlatfrom[0]["status"]) {
                                        setIndex(4);
                                        navigator("/home/profilecomplete/forthpage");
                                    } else {
                                        setError("Add at least one handel");
                                    }
                                }
                            }}>
                                <CusButton text="Next" textColor={"text-white"} width={'w-full'} background={"bg-primary"} fontwidth={"font-bold"}></CusButton>
                            </div>
                        {/* </Form> */}

                    </div>
                </div>
            </div>
        </>
    );
}
export default ThirdPage;


// export const action: ActionFunction = async (props: ActionArgs) => {
//     const formData = await props.request.formData();
//     const value = Object.fromEntries(formData);

//     console.log(value.userid);
//     console.log(value.url);
//     let req = { "id": value.userid };
//     const data = await axios({
//         method: 'post',
//         url: `${BaseUrl}/api/getuser`,
//         data: req,
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Headers': '*',
//             'Access-Control-Allow-Options': '*',
//             'Access-Control-Allow-Methods': '*',
//             'X-Content-Type-Options': '*',
//             'Content-Type': 'application/json',
//             'Accept': '*'
//         }
//     });

//     if (data.data.status == false) {
//         return json({ message: "unbale to update user" });
//     }
//     else {
//         console.log(data.data.data);
//         return redirect(value.url.toString(), {
//             headers: {
//                 "Set-Cookie": await userPrefs.serialize({ user: data.data.data, isLogin: true }),
//             },
//         });
//     }

// };