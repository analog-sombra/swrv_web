import { ActionArgs, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { useActionData, useLoaderData } from "@remix-run/react";
import axios from "axios";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import { RegisterBox } from "~/components/user/register";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {


    const isBrand = new URL(request.url).searchParams.get("isBrand");
    const isInf = new URL(request.url).searchParams.get("isInf");
    let brand = isBrand == "1" ? true : false;
    let inf = isInf == "1" ? true : false;
    const cookieHeader = request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    if (cookie) {
        if (cookie.isLogin) {
            return redirect("/home");
        }
    }
    return json({ brand: brand, inf: inf });
}

const register = () => {
    const loaderData = useLoaderData();

    const data = useActionData();

    return (
        <>
            <IntroNavBar></IntroNavBar>
            <RegisterBox isBrand={loaderData.brand ? true : false} message={data?.message}></RegisterBox>
        </>
    );
}


export default register;

export const action = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const value = Object.fromEntries(formData);

    if (value.email == "" || value.email == null || value.email == undefined) {
        return { message: "Enter the email" };
    }
    if (value.password == "" || value.password == null || value.password == undefined) {
        return { message: "Enter the password" };
    }
    if (value.repassword == "" || value.repassword == null || value.repassword == undefined) {
        return { message: "Enter the repassword" };
    }
    if (value.check1 != "on" || value.check2 != "on") {
        return { message: "Check the all checkbox" };
    }
    if (value.password != value.repassword) {
        return { message: "Password and Re-password should be same" };
    }



    let req: { [key: string]: string; } = {};

    if (value.cat == "inf") {
        req = {
            "email": value.email.toString(),
            "password": value.password.toString(),
            "confirm-password": value.repassword.toString(),
            "isBrand": "0",
            "isInfluencer": "1"
        };
    }
    if (value.cat == "brand") {
        req = {
            "email": value.email.toString(),
            "password": value.password.toString(),
            "confirm-password": value.repassword.toString(),
            "isBrand": "1",
            "isInfluencer": "0"
        };
    }
    try {
        const apidata = await axios({
            method: 'post',
            url: `${BaseUrl}/api/register`,
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

        if (apidata.data.status == false) {
            return { message: apidata.data.message };
        } else {
            const userdata = await axios({
                method: 'post',
                url: `${BaseUrl}/api/getuser`,
                data: { "id": apidata.data.data.id },
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
                return redirect("/createbrand", {
                    headers: {
                        "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: true }),
                    },
                });
            }

        }

    } catch (e) {
        return { message: e };
    }



}

