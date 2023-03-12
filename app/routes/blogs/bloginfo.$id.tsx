import { Footer } from "~/components/home/footer/footer";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import BlogsInfo from "~/components/blogpage/bloginfo";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import axios from "axios";
import { BaseUrl } from "~/const";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const id = props.params.id;
    const nebdata = await axios.post(`${BaseUrl}/api/get-neb-byid`, { "id": id, });
    if (nebdata.data.data[0].title == undefined) {
        return json({ nebdata: nebdata.data.data[0], error: true });
    } else {
        return json({ nebdata: nebdata.data.data[0], error: false });
    }
}

const blogs = () => {
    let data = useLoaderData();
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <BlogsInfo error={data.error} image={data.nebdata.imageUrl} title={data.nebdata.title} shorttitle={data.nebdata.titleDesc} description={data.nebdata.description} date={data.nebdata.dateTime} type={data.nebdata.type}></BlogsInfo>
            <Footer></Footer>
        </>
    );
}
export default blogs;