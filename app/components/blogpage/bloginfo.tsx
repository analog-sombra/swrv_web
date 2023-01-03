import { BigBlogCard, BlogsCard } from "../utils/blogscard";

const BlogsInfo = () => {
    return (
        <>
            <div className="w-full px-6 sm:px-16">
                <div className="md:h-[550px] w-full relative">
                    <img src="./images/blogs/bloginfo.png" alt="error" className="h-full w-full rounded-lg inline-block relative" />

                    <div className="w-full mx-auto absolute bottom-0 hidden md:block">
                        <div className="w-full md:w-3/5 lg:w-4/6 mx-auto  pt-8 ">
                            <h1 className="text-white text-2xl font-semibold md:w-96">
                                Three AAPI founders building apps on the App Store that cultivate community
                            </h1>
                            <p className="text-md font-semibold text-white py-10">
                                Founders of Coffee Meets Bagel, HmongPhrases, and Weee! reflect on how their personal experiences shaped the vision for their apps, and look ahead to the next generation of app creators
                            </p>
                        </div>
                    </div>


                </div>
                <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8">
                    <h1 className="text-primary text-2xl font-semibold md:w-96 sm:hidden">
                        Three AAPI founders building apps on the App Store that cultivate community
                    </h1>
                    <p className="text-md font-semibold text-primary py-10 md:hidden">
                        Founders of Coffee Meets Bagel, HmongPhrases, and Weee! reflect on how their personal experiences shaped the vision for their apps, and look ahead to the next generation of app creators
                    </p>
                    <p className="text-md font-semibold text-primary">
                        App creators Dawoon Kang of Coffee Meets Bagel, Annie Vang of HmongPhrases, and Larry Liu of Weee! are bringing people together, finding innovative solutions, and forging their own paths.
                    </p>
                    <p className="text-md font-normal text-primary mt-10">
                        AppMany of today’s most impactful creators are combining the power of technology with their personal experiences to offer valuable spaces for users to learn, share, and connect on the App Store. When Larry Liu first immigrated to the U.S., he realised there wasn’t an easy way for the Asian community to buy the goods needed to make some of their favorite dishes. Wanting to provide a place to celebrate and bring widespread access to Asian and Hispanic food, he turned to the App Store to launch grocery delivery app Weee! People would no longer have to be limited to the small “ethnic” aisle at mainstream grocery stores. As big advocates for human connection, Dawoon Kang and her twin sister Arum teamed up to found Coffee Meets Bagel, a dating app with an intentionally “slower” approach. Their algorithm focuses not on getting users the most likes, but on guiding them toward meaningful conversations. As one of the most popular dating apps, Coffee Meets Bagel has facilitated over 150 million matches to date.
                    </p>
                    <p className="text-md font-normal text-primary mt-10">
                        Annie Vang, a participant of Apple Entrepreneur Camp in 2021, created HmongPhrases to help preserve the Hmong dialect for future generations. Though the Hmong population has been in the U.S. for over 40 years, it is widely considered one of the most marginalised Asian groups. Her app allows users to search for a phrase in Hmong, hear what it sounds like, and then practice saying it out loud. As a true labor of love, not only does Annie do the coding for the app herself — she even records the phrases in her own voice. Liu, Kang, and Vang discuss how they used technology to transform their ideas into powerful platforms, how their apps uplift their communities, and how they influence positive change.
                    </p>
                </div>
                <div className="bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6">
                    <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8">
                        <h3 className="text-primary text-3xl font-bold">Top picks</h3>
                        <div className="h-[1px] bg-gray-600 w-full my-2"></div>
                        <BigBlogCard title="Swupnil Sahai and his co‑founder serve an ace with AI‑powered SwingVision" time="May 26, 2022" imageUrl="./images/blogs/blog4.png" ></BigBlogCard>
                        <BigBlogCard title="App Store stopped nearly $1.5 billion in fraudulent transactions in 2021" time="May 26, 2022" imageUrl="./images/blogs/blog5.png" ></BigBlogCard>
                    </div>
                </div>

                <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8">
                    <h3 className="text-primary text-3xl font-bold">Related article</h3>
                    <div className="h-[1px] bg-gray-600 w-full my-2"></div>
                    <div className="grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center">

                        <BlogsCard title="Swupnil Sahai and his co‑founder serve an ace with AI‑powered SwingVision" time="June 1, 2022" imageUrl="./images/blogs/blog4.png"></BlogsCard>
                        <BlogsCard title="New report highlights global success of small businesses and entrepreneurs on the App Store" time="June 1, 2022" imageUrl="./images/blogs/blog3.png"></BlogsCard>
                        <BlogsCard title="Three AAPI founders building apps on the App Store that cultivate community" time="June 1, 2022" imageUrl="./images/blogs/blog10.png"></BlogsCard>

                    </div>
                </div>


            </div>

        </>
    );
}
export default BlogsInfo;