import { useActionData } from "@remix-run/react";
import { MainFooter } from "~/components/home/footer/mainfooter";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import { LoginBox } from "~/components/user/login";
import { ValidateEmail } from "~/utils";
import { LoaderArgs, redirect } from "@remix-run/node";
import axios from "axios";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";
import UserStore from "~/state/user";


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
        console.log(cookie);
        return redirect("/home");
    }
    return null;
}



export const action = async ({ request }: any) => {

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
            if (value.check == "on") {
                console.log(data.data.data);
                return redirect("/home", {
                    headers: {
                        "Set-Cookie": await userPrefs.serialize({ user: data.data.data }),
                    },
                });
            } else {
                return redirect("/home");
            }
        }
    } catch (e) {
        return { message: e };
    }
}

export default login;
