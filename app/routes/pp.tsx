import { Footer } from "~/components/home/footer/footer";
import AboutPage from "~/components/about/about";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import PP from "~/components/about/pp";
const pp = () => {
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <PP></PP>
            <Footer></Footer>
        </>
    );
}
export default pp;