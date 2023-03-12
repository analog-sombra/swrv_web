import { BigBlogCard, BlogsCard } from "../utils/blogscard";

type BlogInfoProps = {
    image: string
    title: string
    shorttitle: string
    date: string
    description: string
    type: number
    error: boolean
}

const BlogsInfo = (props: BlogInfoProps) => {
    console.log(props.error)
    return (
        <>

            <div className="w-full px-6 sm:px-16">

                {
                    props.error ?
                        <h1 className="border-2 border-rose-500 border-l-4 w-full text-center rounded-md text-2xl font-semibold  bg-rose-500 bg-opacity-10 text-rose-500">
                            Error 404 Post not found
                        </h1>
                        :
                        <>
                            <div className="md:h-[550px] w-full relative">
                                <img src={props.image} alt="error" className="h-full w-full rounded-lg inline-block relative object-cover object-top" />
                                <div className="w-full mx-auto absolute bottom-0 hidden md:block">
                                    <div className="w-full md:w-3/5 lg:w-4/6 mx-auto  pt-8 ">
                                        <h1 className="text-white text-2xl font-semibold md:w-96">
                                            {props.title}
                                        </h1>
                                        <h1 className="text-white text-lg font-semibold md:w-96">
                                            {props.date.toString().split(" ")[0]}
                                        </h1>
                                        <p className="text-md font-semibold text-white py-10">
                                            {props.shorttitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8">
                                <p className="text-md font-semibold text-primary py-10">
                                    {props.description}
                                </p>
                            </div>
                        </>
                }
                <div className="bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6">
                    <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8">
                        <h3 className="text-primary text-3xl font-bold">Top picks</h3>
                        <div className="h-[1px] bg-gray-600 w-full my-2"></div>
                        <BigBlogCard title="Swupnil Sahai and his co‑founder serve an ace with AI‑powered SwingVision" time="May 26, 2022" imageUrl="/images/blogs/blog4.png" ></BigBlogCard>
                        <BigBlogCard title="App Store stopped nearly $1.5 billion in fraudulent transactions in 2021" time="May 26, 2022" imageUrl="/images/blogs/blog5.png" ></BigBlogCard>
                    </div>
                </div>
                <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8">
                    <h3 className="text-primary text-3xl font-bold">Related article</h3>
                    <div className="h-[1px] bg-gray-600 w-full my-2"></div>
                    <div className="grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center">
                        <BlogsCard title="Swupnil Sahai and his co‑founder serve an ace with AI‑powered SwingVision" time="June 1, 2022" imageUrl="/images/blogs/blog4.png"></BlogsCard>
                        <BlogsCard title="New report highlights global success of small businesses and entrepreneurs on the App Store" time="June 1, 2022" imageUrl="/images/blogs/blog3.png"></BlogsCard>
                        <BlogsCard title="Three AAPI founders building apps on the App Store that cultivate community" time="June 1, 2022" imageUrl="/images/blogs/blog10.png"></BlogsCard>
                    </div>
                </div>
            </div>

        </>
    );
}
export default BlogsInfo;