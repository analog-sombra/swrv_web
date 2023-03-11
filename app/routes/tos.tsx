import { Footer } from "~/components/home/footer/footer";
import AboutPage from "~/components/about/about";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import Tos from "~/components/about/tos";
const tos = () => {
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <Tos></Tos>
            <Footer></Footer>
        </>
    );
}
export default tos;