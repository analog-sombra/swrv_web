import { ActionArgs } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import { RegisterBox } from "~/components/user/register";

const register = () => {
    const data = useActionData();
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <RegisterBox message={data?.message}></RegisterBox>
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
    return null;
}

