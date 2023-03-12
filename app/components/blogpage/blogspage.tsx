import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BigBlogCard, BlogsCard } from "../utils/blogscard";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link, useLoaderData } from "@remix-run/react";

type BlogsIntroProps = {
    blogdata: any[]
}
const BlogsIntro = (props: BlogsIntroProps) => {
    return (
        <>
            <div className="w-full px-6 sm:px-16 relative">
                <div className=" absolute w-full h-screen box-border left-0 px-6 sm:px-16">
                    <div className=" bg-[#EFEFEF] box-border w-full h-screen rounded-xl"></div>
                </div>
                <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10 relative pt-8 px-6 mdLpx-0">
                    <BigBlogCard title="Swupnil Sahai and his co‑founder serve an ace with AI‑powered SwingVision" time="May 26, 2022" imageUrl="./images/blogs/blog4.png" ></BigBlogCard>
                    <BigBlogCard title="App Store stopped nearly $1.5 billion in fraudulent transactions in 2021" time="May 26, 2022" imageUrl="./images/blogs/blog5.png" ></BigBlogCard>

                    <div className="grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center mt-32">
                        {
                            props.blogdata.map((val: any, index: number) => {
                                return (
                                    index < 6 ?
                                        <Link key={index} to={`/blogs/bloginfo/${val.id}`}>
                                            <BlogsCard title={`${val.shortDesc.toString().substring(0, 50)}...`} time={val.dateTime} imageUrl={val.imageUrl}></BlogsCard>
                                        </Link> :
                                        <div key={index}></div>
                                );
                            })
                        }
                    </div>

                    <BigBlogCard title="Swupnil Sahai and his co‑founder serve an ace with AI‑powered SwingVision" background="bg-[#ADADAD]" time="May 26, 2022" imageUrl="./images/blogs/blog6.png" textColor="text-white"></BigBlogCard>
                    <BigBlogCard title="App Store stopped nearly $1.5 billion in fraudulent transactions in 2021" background="bg-[#ADADAD]" time="May 26, 2022" imageUrl="./images/blogs/blog7.png" textColor="text-white"></BigBlogCard>


                    <div className="grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center my-10">
                        {
                            props.blogdata.map((val: any, index: number) => {
                                return (
                                    index < 6 ?
                                        <Link key={index} to={`/blogs/bloginfo/${val.id}`}>
                                            <BlogsCard title={`${val.shortDesc.toString().substring(0, 50)}...`} time={val.dateTime} imageUrl={val.imageUrl}></BlogsCard>
                                        </Link> :
                                        <div key={index}></div>
                                );
                            })
                        }
                    </div>

                    {/* <div className="grid place-items-center my-10">
                        <div className="flex">
                            <div className="w-12 h-12 text-xl font-bold bg-primary rounded-full text-white grid place-items-center"> <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon> </div>
                            <div className="text-primary text-md font-normal grid place-items-center mx-10">1  of 20</div>
                            <div className="w-12 h-12 text-xl font-bold bg-primary rounded-full text-white grid place-items-center"> <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon> </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
export default BlogsIntro;