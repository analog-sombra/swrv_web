import { Footer } from "~/components/home/footer/footer";
import AboutPage from "~/components/about/about";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import PP from "~/components/about/pp";
import FAQ from "~/components/about/faq";
const pp = () => {
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <FAQ></FAQ>
            <Footer></Footer>
        </>
    );
}
export default pp;