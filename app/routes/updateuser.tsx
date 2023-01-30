import { LoaderArgs, redirect } from "@remix-run/node";
import { userPrefs } from "~/cookies";

export async function loader({ request }: LoaderArgs) {
    return redirect("./", {
        headers: {
            "Set-Cookie": await userPrefs.serialize({ isLogin: false }),
        },
    });
}



const UpdateUser = () => {
    console.log("great");
    return (
        <>
        </>
    );
}

export default UpdateUser;

