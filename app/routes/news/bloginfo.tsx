import { Footer } from "~/components/home/footer/footer";
import { IntroNavBar } from "~/components/home/navbar/intronavbar";
import BlogsInfo from "~/components/blogpage/bloginfo";
const blogs = () => {
    return (
        <>
            <IntroNavBar></IntroNavBar>
            <BlogsInfo></BlogsInfo>
            <Footer></Footer>
        </>
    );
}
export default blogs;