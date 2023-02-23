import { LoaderArgs, LoaderFunction, redirect } from "@remix-run/node";
import axios from "axios";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const id = props.params.id;
    const userdata = await axios({
        method: 'post',
        url: `${BaseUrl}/api/getuser`,
        data: { "id": id },
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
    }
    else {
        return redirect("/home", {
            headers: {
                "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: true }),
            },
        });
    }
}
const SocialLogin = () => {
    return (
        <>
        </>
    );
}
export default SocialLogin;