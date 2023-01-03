import { Footer } from "~/components/home/footer/footer";
import { HomeIntro } from "~/components/homepage/homeintro";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
const index = () => {
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <HomeIntro></HomeIntro>
            <Footer></Footer>
        </>
    );
}
export default index;