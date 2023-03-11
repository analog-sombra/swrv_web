import { Footer } from "~/components/home/footer/footer";
import AboutPage from "~/components/about/about";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import WhatYouGet from "~/components/about/whatyouget";
const about = () => {
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <WhatYouGet></WhatYouGet>
            <Footer></Footer>
        </>
    );
}
export default about;