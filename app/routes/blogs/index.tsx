import { Footer } from "~/components/home/footer/footer";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import BlogsIntro from "~/components/blogpage/blogspage";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { BaseUrl } from "~/const";
import axios from "axios";
import { useLoaderData } from "@remix-run/react";
export const loader: LoaderFunction = async (props: LoaderArgs) => {
  const blog = await axios.post(`${BaseUrl}/api/get-neb-bytype`, { "type": 1 });
  return json({ blog: blog.data.data });
}
const blogs = () => {
  let blogdata = useLoaderData().blog[0];
  return (
    <>
      <IntroNavBar></IntroNavBar>
      <BlogsIntro blogdata={blogdata}></BlogsIntro>
      <Footer></Footer>
    </>
  );
}
export default blogs;