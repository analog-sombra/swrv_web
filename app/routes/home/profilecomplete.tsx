import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import isbot from "isbot";
import { userPrefs } from "~/cookies";
import UserInputStore from "~/state/user/firstinput";
export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    return json({ user: cookie.user });
}


const UserEditBox = () => {
    const userdata = useLoaderData();
    const isBrand = userdata.user.role["code"] == "50" ? true : false;

    const index = UserInputStore((state) => state.index);
    const setIndex = UserInputStore((state) => state.setIndex);

    return (
        <>
            <div className="w-full bg-white rounded-xl p-4 shadow-xl mt-6">
                <div className="w-full  rounded-lg flex shadow-lg my-4">
                    <div className={`text-lg text-center font-medium p-2 bg-secondary text-white  ${index == 1 ? "w-2/5" : ""} ${index == 2 ? "w-3/5" : ""} ${index == 3 ? "w-4/5" : ""} ${index == 4 ? "w-full" : ""} rounded-xl`}>
                        {
                            index == 1 ? "0% Completed" : ""
                        }
                        {
                            index == 2 ? "25% Completed" : ""
                        }
                        {
                            index == 3 ? "50% Completed" : ""
                        }
                        {
                            index == 4 ? "75% Completed" : ""
                        }
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <div className="p-6  w-full hidden md:block">
                        <div className="hidden place-items-center lg:grid ">
                            <img src="/images/avatar/profile1.png" alt="error" className="h-[400px]" />
                        </div>
                        <h1 className="pt-4 text-3xl text-primary text-left font-semibold">Welcome</h1>
                        <p className="pt-2 text-black text-xl font-normal">Thank you for the confirmation, Login with your account and start searching for the brands.</p>
                    </div>
                    <div>
                        <div className="bg-white rounded-xl shadow-xl px-2 py-4 flex flex-row items-center lg:flex-col justify-between overflow-x-hidden no-scrollbar">
                            <ProfileCompleteBox isActive={index == 1 ? true : false} positionumber={"01"} title={"Info"}></ProfileCompleteBox>
                            <ProfileCompleteBox isActive={index == 2 ? true : false} positionumber={"02"} title={"Audience"}></ProfileCompleteBox>
                            <ProfileCompleteBox isActive={index == 3 ? true : false} positionumber={"03"} title={"Connect"}></ProfileCompleteBox>
                            <ProfileCompleteBox isActive={index == 4 ? true : false} positionumber={"04"} title={"Contact"}></ProfileCompleteBox>
                            {isBrand ?
                                <ProfileCompleteBox isActive={index == 5 ? true : false} positionumber={"05"} title={"Users"}></ProfileCompleteBox> : null
                            }
                        </div>
                    </div>
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
}

export default UserEditBox;



type ProfileCompleteBoxProps = {
    isActive: boolean
    positionumber: string
    title: string
}
const ProfileCompleteBox = (props: ProfileCompleteBoxProps) => {
    return (
        <>
            <div className="px-3 py-2">
                <div className={`grid place-items-center h-14 w-14 shadow-md rounded-md ${props.isActive ? "bg-secondary" : "bg-gray-200"}`}>
                    <p className={`font-medium text-xl ${props.isActive ? "text-white" : "text-black"}`}>{props.positionumber}</p>
                </div>
                <h4 className={`text-sm text-center ${props.isActive ? "text-black" : "text-gray-500"} mt-2`}>{props.title}</h4>
            </div>
        </>
    );
}


