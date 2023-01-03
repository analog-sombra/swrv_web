import { redirect } from "@remix-run/node";
import { MainFooter } from "~/components/home/footer/mainfooter";
import { NavBar } from "~/components/home/navbar/navbar";
import { LoginBox } from "~/components/user/login";
const login = () => {
    return (
        <>
            <div className="flex flex-col h-screen">
                <NavBar></NavBar>
                <LoginBox></LoginBox>
                <div className="grow"></div>
                <MainFooter></MainFooter>
            </div>
        </>
    );
}
export default login;

// export function loader() {
//     return redirect('/home')

// }