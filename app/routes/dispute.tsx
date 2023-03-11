import { Footer } from "~/components/home/footer/footer";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import DisputePage from "~/components/contact/dispute";
const contact = () => {
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <DisputePage></DisputePage>
            <Footer></Footer>
        </>
    );
}
export default contact;