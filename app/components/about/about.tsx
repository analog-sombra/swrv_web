import { BigBlogCard, BlogsCard } from "../utils/blogscard";
import { TeamCard } from "../utils/teamcard";

const AboutPage = () => {
    return (
        <>
            <div className="w-full px-6 sm:px-16">
                <div className="bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6">
                    <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  md:py-20">
                        <h3 className="text-primary text-3xl font-bold">About SWRV influencer platform</h3>
                        <p className="text-md font-semibold text-primary mt-6">
                            Founded in 2016, SWRV is a private media company based in Copenhagen, Denmark. The company specializes in producing how-to guides, courses and research reports in the social media and influencer marketing industry. The firm is home to one of the world's largest community of influencers and works with leading brands to leverage the power of influencer marketing with over 5 million monthly unique users.
                        </p>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <div>
                        <img src="./images/inf/inf8.png" alt="error" />
                    </div>
                    <div className="flex gap-2 flex-col">
                        <div>
                            <img src="./images/inf/inf14.png" alt="error" />
                        </div>  <div>
                            <img src="./images/inf/inf13.png" alt="error" />
                        </div>
                    </div>
                    <div>
                        <img src="./images/inf/inf12.png" alt="error" />

                    </div>
                    <div className="flex gap-2 flex-col">
                        <div>
                            <img src="./images/inf/inf11.png" alt="error" />
                        </div>  <div>
                            <img src="./images/inf/inf10.png" alt="error" />
                        </div>
                    </div>
                    <div>
                        <img src="./images/inf/inf9.png" alt="error" />

                    </div>
                </div>

                <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8">
                    <h3 className="text-primary text-3xl font-bold">We assist the influencer marketing sector in</h3>
                    <h3 className="text-secondary text-3xl font-bold">becoming more efficient.</h3>

                    <p className="text-md font-normal text-gray-600 mt-10">
                        SWRV is a Danir AB project. Sigma, a major IT consulting organisation with 6,000 workers in 13 countries, is our sibling company. SWRV AB began as a celebrity app in 2011. The company expanded abroad, attracting hundreds of celebrities, bloggers, and users every day.<br /><br />United Influencers, the largest influencer marketing agency in Scandinavia, was launched in 2014. United Influencers, which has operations in Sweden and Norway, has run over 2,000 campaigns to date.<br /><br />SWRV has worked with dedicated developers for the past six years to create a full IT platform for influencer marketing. The goal was to assist United Influencers in lowering expenses, increasing income, and working more efficiently.<br /><br />We learned in September 2015 that numerous firms may utilise the same IT platform and save a lot of money. Furthermore, unified IT development is a critical business enabler for the industry's expansion. SWRV was conceived as an idea.<br /><br /> SWRV has grown to include members from Europe, Asia, Australia, and the United States since its inception in March 2018.
                    </p>

                </div>

                <div className="bg-[#0000004C] w-full my-10 rounded-xl md:p-0 p-6">
                    <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-10">

                        <h3 className="text-white text-3xl font-bold">Mission Statement:</h3>

                        <p className="text-md font-semibold text-white mt-4">
                            SWRV aims to provide the most comprehensive reviews of marketing software and services globally, enabling brands and marketing decision makers to make smarter decisions around their marketing stack.
                        </p>
                    </div>
                </div>


                <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8">
                    <h3 className="text-primary text-3xl font-bold">The Core Team</h3>
                    <div className="h-[1px] bg-gray-600 w-full my-2"></div>
                    <div className="grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center place-items-center">
                        <TeamCard name="Werner Geyser" position="Founder" imageUrl="./images/team/team1.png"></TeamCard>
                        <TeamCard name="Yaroslav Siryk" position="CTO" imageUrl="./images/team/team2.png"></TeamCard>
                        <TeamCard name="Anne Vest" position="COO" imageUrl="./images/team/team6.png"></TeamCard>
                        <TeamCard name="Sasha Bondarenko" position="Growth Marketing" imageUrl="./images/team/team5.png"></TeamCard>
                        <TeamCard name="Djordje Pajkanovic" position="UX/UI Designer" imageUrl="./images/team/team4.png"></TeamCard>
                        <TeamCard name="Sasha Bondarenko" position="General Manager" imageUrl="./images/team/team3.png"></TeamCard>


                    </div>
                </div>


            </div>

        </>
    );
}
export default AboutPage;