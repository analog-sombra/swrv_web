import { redirect } from "@remix-run/node";
import { MainFooter } from "~/components/home/footer/mainfooter";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import { NavBar } from "~/components/home/navbar/navbar";
import { LoginBox } from "~/components/user/login";
const login = () => {
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
export default login;

// export function loader() {
//     return redirect('/home')

// }