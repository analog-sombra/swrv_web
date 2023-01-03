import { Footer } from "~/components/home/footer/footer";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import ContactPage from "~/components/contact/contact";
const contact = () => {
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <ContactPage></ContactPage>
            <Footer></Footer>
        </>
    );
}
export default contact;