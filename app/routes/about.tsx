import { Footer } from "~/components/home/footer/footer";
import AboutPage from "~/components/about/about";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
const about = () => {
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <AboutPage></AboutPage>
            <Footer></Footer>
        </>
    );
}
export default about;