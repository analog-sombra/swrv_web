import { Footer } from "~/components/home/footer/footer";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import BlogsIntro from "~/components/blogpage/blogspage";
import NewsIntro from "~/components/newsevents/newsevents";
const blogs = () => {
  return (
    <>
      <IntroNavBar></IntroNavBar>
      <NewsIntro></NewsIntro>
      <Footer></Footer>
    </>
  );
}
export default blogs;