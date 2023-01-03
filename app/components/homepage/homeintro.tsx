import { CusButton } from "../utils/buttont";
import { MarkatingCard } from "../utils/markatingcard";
import { CategoryCard } from "../utils/categorycard";
import { BlogsCard } from "../utils/blogscard";
import { DownloadApp } from "../utils/downloadapp";
export const HomeIntro = () => (
    <>


        <div className="w-full px-6 sm:px-16">


            <HomeFirst></HomeFirst>

            <RelatatinoAndTrust></RelatatinoAndTrust>
            <Market></Market>

            <Marketing></Marketing>
            <PowerfullInf></PowerfullInf>
            <ExploreCategory></ExploreCategory>


            <JoinSwrv></JoinSwrv>

            <Blogs></Blogs>


        </div>

    </>
);

const RelatatinoAndTrust = () => {
    return (
        <>
            <div className="w-full md:w-3/5 lg:w-4/6 mx-auto lg:my-28">
                <h3 className="text-primary text-3xl font-bold">We strengthen relationships between</h3>
                <h3 className="text-secondary text-3xl font-bold">brands and creatives.</h3>
                <p className="text-black text-md font-normal">Our mission is to Make Waves, which stems from the fact that our creators tell stories that foster human relationships and generate waves of influence. These waves of influence create our data layers, and we use them to calculate the impact. Our clients and creators make a splash, and we track the results.</p>
            </div>

            <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-10">
                <h3 className="text-primary text-3xl font-bold">Trusted by</h3>
                <div className="h-[1px] bg-black w-full my-2"></div>
            </div>
            <div className="w-full grid palce-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 text-5xl text-center text-gray-600 gap-x-5 mb-10">
                <div>
                    <h1>OGILVY</h1>
                </div>
                <div>
                    <h1>McDonald's</h1>
                </div>
                <div>
                    <h1>Shelter</h1>
                </div>
                <div>
                    <h1>Playtika</h1>
                </div>
                <div>
                    <h1>Starbucks</h1>
                </div>
            </div>
        </>
    );
}

const HomeFirst = () => {
    return (
        <>
            <div className="relative">
                <div className="absolute h-[450px] md:h-[550px] lg:h-[700px] w-full inline-block mx-auto">
                    <div className="h-full w-full bg-primary rounded-xl">
                    </div>
                </div>
                <div className="w-full px-5 md:p-0 md:w-3/5 lg:w-4/6 relative mx-auto">
                    <div className="pt-10 md:pt-24">
                        <h3 className="text-white text-5xl font-bold">Reach the next billion</h3>
                        <h3 className="text-white text-md font-normal mt-4">We connect brands with targeted audience through nano influencer marketing. Save time and improve performance. Take the guesswork out of Influencer analysis with data-driven audience insights, managed in one easy to use platform.</h3>
                        <div className="flex">
                            <CusButton text="I'am a brand" borderColor={"border-white"}></CusButton>
                            <div className="w-10"></div>
                            <CusButton text="I'am a Influencer" background="bg-secondary"></CusButton>
                        </div>
                    </div>
                </div>

                <div className="w-full relative">
                    <div className="absolute w-full">
                        <div className="px-2 sm:px-20 mx-auto grid place-items-center">
                            <img src="./images/mast_group.svg" alt="error" className="w-[1200px] mx-auto" />
                        </div>
                    </div>
                    <div className="w-full md:w-3/5 lg:w-4/6 py-20 relative mx-auto grid place-content-center ">
                        <div className="flex  gap-4 px-6 md:p-0">
                            <div>
                                <img src="./images/inf/inf4.png" alt="error" />
                            </div>
                            <div className="flex flex-col  gap-4">
                                <div className="flex  gap-4 items-end">
                                    <div>
                                        <img src="./images/inf/inf2.png" alt="error" />
                                    </div>
                                    <div>
                                        <img src="./images/inf/inf6.png" alt="error" />
                                    </div>
                                    <div>
                                        <img src="./images/inf/inf5.png" alt="error" />
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div>
                                        <img src="./images/inf/inf7.png" alt="error" />
                                    </div>
                                    <div>
                                        <img src="./images/inf/inf3.png" alt="error" />
                                    </div>
                                    <div>
                                        <img src="./images/inf/inf1.png" alt="error" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


const Market = () => {
    return (
        <>
            <div className="w-full bg-[#EFEFEF]  rounded-xl md:p-0 p-6">
                <div className="mx-auto py-4 w-full md:w-3/5 lg:w-4/6">
                    <div className="w-full  mx-auto my-6">
                        <h3 className="text-primary text-3xl font-bold">An entire <span className="text-secondary">marketing platform</span><br /> for influencers</h3>
                        <p className="text-black text-md font-normal">All of the campaign's steps are smoothly integrated into a single user experience.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:place-items-center my-10 ">
                        <MarkatingCard imageUrl="./images/icons/icon1.png" title="Make a campaign" description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease." leftBorder={true}></MarkatingCard>
                        <MarkatingCard imageUrl="./images/icons/icon5.png" title="Look for influencers." description="Access a vast influencer database. It's simple to locate influencers thanks to advanced search criteria." leftBorder={true}></MarkatingCard>
                        <MarkatingCard imageUrl="./images/icons/icon4.png" title="Statistics" description="Real-time campaign performance analysis and sharing" leftBorder={true}></MarkatingCard>
                        <MarkatingCard imageUrl="./images/icons/icon3.png" title="Communication" description="For quick and easy connection with your influencers, there's an integrated chat option and a notification centre." leftBorder={true}></MarkatingCard>
                        <MarkatingCard imageUrl="./images/icons/icon2.png" title="Payments" description="Easily and securely manage payments from buyers to influencers." leftBorder={true}></MarkatingCard>
                    </div>
                </div>
            </div>
        </>
    );
}

const PowerfullInf = () => {
    return (
        <>
            <div className="w-full my-10 bg-[#0000004C] py-4 rounded-xl">
                <div className=" w-full md:w-3/5 lg:w-4/6 mx-auto md:p-0 p-6">
                    <h3 className="text-white text-4xl font-bold">ARE YOU A POWERFUL<br /> INFLUENCER?</h3>
                    <h3 className="text-white text-md font-normal mt-4">Stop looking for the ideal marketplace to join and simply join all of them.</h3>
                    <div className="flex">
                        <CusButton text="Join Now" background={"bg-secondary"} ></CusButton>
                        <div className="w-10"></div>
                        <CusButton text="Read More" borderColor={"border-white"}></CusButton>
                    </div>
                </div>
            </div>
        </>
    );
}


const Marketing = () => {
    return (
        <>
            <div className="bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6">
                <div className=" py-4 w-full md:w-3/5 lg:w-4/6   mx-auto">
                    <h3 className="text-primary text-4xl font-bold">We assist the influencer marketing sector in</h3>
                    <h3 className="text-secondary text-4xl font-bold">becoming more efficient.</h3>
                    <h3 className="text-gray-500 text-md font-normal mt-4">SWRV is a Danir AB project. Sigma, a major IT consulting organisation with 6,000 workers in 13 countries, is our sibling company. SWRV AB began as a celebrity app in 2011. The company expanded abroad, attracting hundreds of celebrities, bloggers, and users every day.<br /><br />United Influencers, the largest influencer marketing agency in Scandinavia, was launched in 2014. United Influencers, which has operations in Sweden and Norway, has run over 2,000 campaigns to date. <br /><br />SWRV has worked with dedicated developers for the past six years to create a full IT platform for influencer marketing. The goal was to assist United Influencers in lowering expenses, increasing income, and working more efficiently.<br /><br />We learned in September 2015 that numerous firms may utilise the same IT platform and save a lot of money. Furthermore, unified IT development is a critical business enabler for the industry's expansion. SWRV was conceived as an idea. SWRV has grown to include members from Europe, Asia, Australia, and the United States since its inception in March 2018.</h3>

                    <DownloadApp></DownloadApp>
                </div>
            </div>
        </>
    );
}

const ExploreCategory = () => {
    return (
        <>
            <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4">
                <h3 className="text-primary text-3xl font-bold">Explore by category</h3>
            </div>

            <div className="grid place-items-center grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 my-6 ">
                <CategoryCard imageUrl="./images/icons/education.png" title="Education" description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."></CategoryCard>
                <CategoryCard imageUrl="./images/icons/food.png" title="Food" description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."></CategoryCard>
                <CategoryCard imageUrl="./images/icons/photography.png" title="Photography" description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."></CategoryCard>
                <CategoryCard imageUrl="./images/icons/travel.png" title="Travel" description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."></CategoryCard>
                <CategoryCard imageUrl="./images/icons/motivation.png" title="Motivation" description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."></CategoryCard>
                <CategoryCard imageUrl="./images/icons/beauty.png" title="Beauty" description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."></CategoryCard>
                <CategoryCard imageUrl="./images/icons/automotive.png" title="Automotive" description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."></CategoryCard>
                <CategoryCard imageUrl="./images/icons/health.png" title="Health" description="Make briefs, invite influencers, negotiate, and manage your campaigns with ease."></CategoryCard>
            </div>
        </>
    );
}

const JoinSwrv = () => {
    return (
        <>
            <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4">
                <h3 className="text-primary text-3xl font-bold">Join SWRV</h3>
                <h3 className="text-gray-600 text-md font-normal">There are no commissions or membership costs for brands or buyer agencies.</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center my-6">
                    <div className="w-60 h-40 m-4">
                        <img src="./images/inf/inf2.png" className="w-full h-full" />
                    </div>
                    <div className="w-60 h-40  m-4">
                        <img src="./images/inf/inf3.png" className="w-full h-full" />
                    </div>
                    <div className="w-60 h-40 hidden lg:block  m-4">
                        <img src="./images/inf/inf4.png" className="w-full h-full" />
                    </div>
                </div>
                <h3 className="text-gray-600 text-lg font-semibold">SWRV market</h3>
                <h3 className="text-gray-500 text-md font-normal">SWRV Market is SWRV's entire influencer marketing soluction. The whole campaign flow - discorvery. activation, tracking, payouts, and more - is supported by our influencer marketing platform. Users have access to complete automation and a transaction-base business model that is avaliable to any brand or purchasing agency for free.<br />
                    SWRV is a free assistance programme that may help you grow faster and get a competitver advantage.</h3>
            </div>
        </>
    );
}


const Blogs = () => {
    return (
        <>
            <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mt-28 mb-4">
                <div className="flex">
                    <h3 className="text-primary text-3xl font-bold grid place-items-center">Blogs</h3>
                    <div className="grow"></div>
                    <CusButton text={"Read More"} textColor="text-primary" borderColor={"border-secondary"}></CusButton>
                </div>
                <div className="h-[1px] bg-black w-full my-2"></div>
            </div>

            <div className="grid place-items-center gird-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6 items-start">
                <BlogsCard title="App Store stopped nearly $1.5 billion in fraudulent transactions in 2021" time="June 1, 2022" imageUrl="./images/blogs/blog5.png"></BlogsCard>
                <BlogsCard title="Swupnil Sahai and his co‑founder serve an ace with AI‑powered SwingVision" time="June 1, 2022" imageUrl="./images/blogs/blog4.png"></BlogsCard>
                <BlogsCard title="New report highlights global success of small businesses and entrepreneurs on the App Store" time="June 1, 2022" imageUrl="./images/blogs/blog3.png"></BlogsCard>
                <BlogsCard title="Three AAPI founders building apps on the App Store that cultivate community" time="June 1, 2022" imageUrl="./images/blogs/blog2.png"></BlogsCard>
                <BlogsCard title="From farm to sea: Conserving mangroves to protect local livelihoods and the planet" time="June 1, 2022" imageUrl="./images/blogs/blog1.png"></BlogsCard>
            </div>
        </>
    );
}