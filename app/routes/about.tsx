import { Footer } from "~/components/home/footer/footer";
import AboutPage from "~/components/about/about";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import axios from "axios";
import { BaseUrl } from "~/const";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const team = await axios.post(`${BaseUrl}/api/get-team`);
    return json({ team: team.data.data });
}
const about = () => {
    let temadata = useLoaderData().team[0];
    console.log(temadata);
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <AboutPage teamdata={temadata}></AboutPage>
            <Footer></Footer>
        </>
    );
}
export default about;