import { Footer } from "~/components/home/footer/footer";
import AboutPage from "~/components/about/about";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import HowItWorks from "~/components/about/howitworks";
const howitworks = () => {
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <HowItWorks></HowItWorks>
            <Footer></Footer>
        </>
    );
}
export default howitworks;