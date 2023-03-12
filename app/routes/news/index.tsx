import { Footer } from "~/components/home/footer/footer";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import BlogsIntro from "~/components/blogpage/blogspage";
import NewsIntro from "~/components/newsevents/newsevents";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { BaseUrl } from "~/const";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";
export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const news = await axios.post(`${BaseUrl}/api/get-neb-bytype`, { "type": 2 });
  const event = await axios.post(`${BaseUrl}/api/get-neb-bytype`, { "type": 3 });
  const newsevent = [...(news.data.data), ...(event.data.data)];
  return json({ newsevent: newsevent });
}
const blogs = () => {
  let newsevent = useLoaderData().newsevent[0];
  return (
    <>
      <IntroNavBar></IntroNavBar>
      <NewsIntro newsevent={newsevent}></NewsIntro>
      <Footer></Footer>
    </>
  );
}
export default blogs;