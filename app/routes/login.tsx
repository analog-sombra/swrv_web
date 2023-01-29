import { useActionData } from "@remix-run/react";
import { MainFooter } from "~/components/home/footer/mainfooter";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import { LoginBox } from "~/components/user/login";
import * as EmailValidator from 'email-validator';
import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";
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


export async function loader({ request }: LoaderArgs) {
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    if (cookie) {
        if (cookie.isLogin) {
            return redirect("/home");
        }
    }
    return null;
}

export const action = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const value = Object.fromEntries(formData);
    if (value.email == null || value.email == "" || !EmailValidator.validate(value.email.toString()) || value.email == undefined) {
        return { message: "Enter a valid email." };
    }
    if (value.password == "" || value.password == null || value.password == undefined) {
        return { message: "Enter the password" };
    }
    try {
        const data = await axios.post(`${BaseUrl}/api/login`, { "email": value.email, "password": value.password });
        if (data.data.status == false) {
            return { message: data.data.message };
        } else {
            return redirect("/home", {
                headers: {
                    "Set-Cookie": await userPrefs.serialize({ user: data.data.data, isLogin: true }),
                },
            });
        }
    } catch (e) {
        return { message: e };
    }
}

export default login;
