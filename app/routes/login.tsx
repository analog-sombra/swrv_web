import { useActionData } from "@remix-run/react";
import { MainFooter } from "~/components/home/footer/mainfooter";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import { LoginBox } from "~/components/user/login";
import { z } from "zod";
import { ValidateEmail, validationAction } from "~/utils";
import { json, redirect } from "@remix-run/node";

const schema = z.object({
    email: z.string({
        required_error: "Email is required!"
    }).email("Invalid email"),
    password: z.string().min(8, "Password must be 8 charlactor long")
});

const login = () => {
    const data = useActionData();
    return (
        <>
            <div className="flex flex-col h-screen">
                <IntroNavBar></IntroNavBar>
                <LoginBox></LoginBox>
                <div className="grow"></div>
                <MainFooter></MainFooter>
            </div>
        </>
    );
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
    if (value.password.length <= 8) {
        return { message: "Password length shuld be gretter then 8" };
    }

    
    return redirect("/home");
}

export default login;
