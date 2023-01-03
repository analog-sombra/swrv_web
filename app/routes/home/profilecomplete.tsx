import { Outlet } from "@remix-run/react";

const UserEditBox = () => {
    return (
        <>
            <div className="w-full bg-white rounded-xl p-4 shadow-xl ">
                <div className="w-full  rounded-lg flex shadow-lg my-4">
                    <div className="text-lg text-center font-medium p-2 bg-secondary text-white w-4/6 rounded-xl">
                        Please complete your profile
                    </div>
                    <div className="text-lg text-center font-medium p-2 bg-white text-primary w-4/6 rounded-r-xl">
                        60% completed
                    </div>
                </div>
                <div className="flex">
                    <div className="p-6  w-full hidden md:block">
                        <div className="w-full grid place-items-center">
                            <img src="/images/avatar/profile1.png" alt="error" className="h-[400px]" />
                        </div>
                        <h1 className="pt-4 text-3xl text-primary text-left font-semibold">Welcome</h1>
                        <p className="pt-2 text-black text-xl font-normal">Thank you for the confirmation, Login with your account and start searching for the brands.</p>
                    </div>
                    <div>
                        <div className="bg-white rounded-xl shadow-xl px-2 py-4 flex flex-col items-center">
                            <ProfileCompleteBox isActive={true} positionumber={"01"} title={"Info"}></ProfileCompleteBox>
                            <ProfileCompleteBox isActive={false} positionumber={"02"} title={"Audience"}></ProfileCompleteBox>
                            <ProfileCompleteBox isActive={false} positionumber={"03"} title={"Connect"}></ProfileCompleteBox>
                            <ProfileCompleteBox isActive={false} positionumber={"04"} title={"Contact"}></ProfileCompleteBox>
                        </div>
                    </div>
                    <Outlet></Outlet>

                    {/* <UserInputBoxOne></UserInputBoxOne> */}
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


