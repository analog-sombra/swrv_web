import { LoaderArgs, redirect } from "@remix-run/node";
import { userPrefs } from "~/cookies";

export async function loader({ request }: LoaderArgs) {
    return redirect("/login", {
        headers: {
            "Set-Cookie": await userPrefs.serialize({ isLogin: false }),
        },
    });
}

const Logout = () => {
    return (
        <>
            <h1>This is logout page</h1>
        </>
    );
}
export default Logout;