import { Footer } from "~/components/home/footer/footer";
import AboutPage from "~/components/about/about";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import UsersPage from "~/components/users/users";
const users = () => {
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <UsersPage></UsersPage>
            <Footer></Footer>
        </>
    );
}
export default users;