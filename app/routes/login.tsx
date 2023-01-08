import { useActionData } from "@remix-run/react";
import { MainFooter } from "~/components/home/footer/mainfooter";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import { LoginBox } from "~/components/user/login";
import { ValidateEmail } from "~/utils";
import { ActionFunction, json, redirect } from "@remix-run/node";
import axios from "axios";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";


const login = () => {
    const data = useActionData();
    return (
        <>
            <div className="flex flex-col h-screen">
                <IntroNavBar></IntroNavBar>
                <LoginBox message={data?.message}></LoginBox>
                <div className="grow"></div>
                <MainFooter></MainFooter>
            </div>
        </>
    );
}


export async function loader({ request }: any) {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    // console.log(cookie.showBanner);
    // return json({ showBanner: cookie.showBanner });
    return null;
}



export const action = async ({ request }: any) => {

    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    cookie.showBanner = false;



    const formData = await request.formData();
    const value = Object.fromEntries(formData);
    if (value.email == null || value.email == "" || !ValidateEmail(value.email)) {
        return { message: "Enter a valid email." };
    }
    if (value.password == "" || value.password == null) {
        return { message: "Enter the password" };
    }
    try {
        const data = await axios.post(`${BaseUrl}/api/login`, { "email": value.email, "password": value.password });
        if (data.data.status == false) {
            return { message: data.data.message };
        } else {
            return redirect("/home", {
                headers: {
                    "Set-Cookie": await userPrefs.serialize(cookie),
                },
            });
        }
    } catch (e) {
        return { message: e };
    }
}

export default login;
