import { ActionArgs, ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { Form, Link, useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl, instaUrl } from "~/const";
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

    // const [insta, setInsta] = useState<boolean>(false);
    // const [userInsta, setUserInsta] = useState<any>();
    // const [newval, setval] = useState<any>();



    // const getuserData = async (username: String) => {
    //     const data = await axios.get(`${instaUrl}/data/${username}`);
    //     setUserInsta(data.data);
    // }



    // const [url, setUrl] = useState<String>("");
    // useEffect(() => {
    //     let myurl = window.location.href.split("/");
    //     let out = "/" + myurl.slice(3, myurl.length).join("/");
    //     setUrl(out)
    // }, [])

    return (
        <>
            {/* <div className={`h-screen w-full bg-gray-200 bg-opacity-50  grid place-items-center fixed top-0 left-0 ${insta ? "grid" : "hidden"}`}>
                <div className="bg-white shadow-xl rounded-lg p-4">
                    <h3 className="text-slate-800 font-medium text-xl text-center mt-4">{userInsta == undefined || userInsta == null ? "" : userInsta.username}</h3>
                    <div className="my-2 h-[1px] bg-slate-500 w-full"></div>
                    <div className="flex mx-10">
                        <div>
                            <h1 className="text-center text-xl font-medium text-slate-800">Follower</h1>
                            <h1 className="text-center text-md font-normal text-slate-600">{userInsta == undefined || userInsta == null ? "" : userInsta.follower}</h1>
                        </div>
                        <div className="w-10"></div>
                        <div>
                            <h1 className="text-center text-xl font-medium text-slate-800">Following</h1>
                            <h1 className="text-center text-md font-normal text-slate-600">{userInsta == undefined || userInsta == null ? "" : userInsta.following}</h1>
                        </div>
                    </div>
                    <div className="my-2 h-[1px] bg-slate-500 w-full"></div>
                    <div className="w-full grid place-content-center">
                        <button onClick={async () => {

                            let req = {
                                "userId": userId,
                                "platformId": newval["val"]["id"],
                                "handleName": newval["text"]
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
                                setSus(null);
                                return setError(data.data.message);
                            }
                            else {
                                setError(null);
                                setSus("Successfully added the user handel");
                                let adddata = addedPlatfrom.filter((data) => data != newval);
                                setAddPlatform([...adddata, { val: newval["val"], status: true, text: newval["text"] }]);
                            }
                            setInsta(false);
                        }} className="bg-secondary px-6 py-2 font-bold hover:-translate-y-1 hover:shadow-lg transition-all rounded-lg text-white">Add</button>
                    </div>
                </div>
            </div> */}
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
                        <CusButton text="Add new Channel" textColor={"text-white"} width={'w-36'} background={"bg-primary"} fontwidth={"font-normal"} textSize={"text-md"}></CusButton>
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
                                                        setSus(null);
                                                        setError("Fill the handle name");
                                                    }
                                                    else if (val["text"].indexOf(" ") >= 0) {
                                                        setSus(null);
                                                        setError("Hashtag cannot containt space");
                                                    }
                                                    else {

                                                        // await getuserData(val["text"]);
                                                        // setInsta(true);
                                                        // setval(val);


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
                                                            setSus(null);
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
                                setSus(null);
                                setError("Add at least one handel");
                            }
                            else {
                                if (addedPlatfrom[0]["status"]) {
                                    setIndex(4);
                                    navigator("/home/profilecomplete/forthpage");
                                } else {
                                    setSus(null);
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