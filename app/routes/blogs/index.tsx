import { Footer } from "~/components/home/footer/footer";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import BlogsIntro from "~/components/blogpage/blogspage";
const blogs = () => {
  return (
    <>
      <IntroNavBar></IntroNavBar>
      <BlogsIntro></BlogsIntro>
      <Footer></Footer>
    </>
  );
}
export default blogs;