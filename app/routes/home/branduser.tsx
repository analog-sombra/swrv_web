import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet } from "@remix-run/react";

const BarndUser = () => {
    return (
        <>
            <div className="my-4 p-8 bg-white rounded-lg flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="w-60">
                        <img src="/images/brand/adidas.jpg" alt="adidas" className="w-20 h-20 rounded-md" />
                        <h2 className="text-black font-bold text-2xl mt-2">Lulu 50% of SPORT WEEK</h2>
                        <p className="text-black text-left text-md font-medium mt-2">Platforms</p>
                        <div className="flex gap-x-4">
                            <div>
                                <img src="/images/media/apple.png" alt="" className="h-8 w-8 rounded-md" />
                            </div>
                            <div>
                                <img src="/images/media/youtube.png" alt="" className="h-8 w-8 rounded-md" />
                            </div>
                            <div>
                                <img src="/images/media/instagram.png" alt="" className="h-8 w-8 rounded-md" />
                            </div>
                            <div>
                                <img src="/images/media/facebook.png" alt="" className="h-8 w-8 rounded-md" />
                            </div>
                        </div>
                    </div>
                    <div className="w-80">
                        <p className="text-left font-semibold text-primary text-md">Info</p>
                        <p className="text-left font-semibold text-black text-sm">
                            Hirschi's social media presence allows automotive brands like Bugatti and Ferrari to advertise their products through her. Instead of being an automotive journalist, she states that she provides "insight into the supercar culture and what it’s like to drive these incredible cars in a light, fun way."[4] Being one of the few women in supercar culture, she also opens up the demographic for these vehicles. In March 2018, Arabian Business listed her as one of the 50 Most Influential Women In The Arab World,[8] and it nominated her in 2019 as one of Top 30 most influential women in the Arab world.[9] Also in March 2018, Esquire Magazine Middle East named her Influencer of the Year.[10] She appeared on Germany's free to air TV RTL II on the car show GRIP Das Automagazin on 10 June 2018, co-presenting the one-off Bugatti L'Or Blanc and the La Ferrari Aperta.[11] In January 2019, Broadcasting & Cable announced Hirschi will be hosting their new car TV show Car Crews.[12] The show is released on Insight TV and focuses on uncovering different car cultures across the United States.[13] She drove the official Batmobile from the feature film Batman (1989).[4] In 2020 Hirschi won a Shorty Award for Breakout YouTuber.[14]
                        </p>
                        <div className="bg-gray-200 rounded-md p-4 mt-4">
                            <p className="text-black font-bold text-md">Do's : <span className="text-sm font-normal">Energetic face | Spotiy | Action</span></p>
                            <div className="bg-gray-400 h-[1px] w-full my-2"></div>
                            <p className="text-black font-bold text-md">Dont's :<span className="text-sm font-normal">Low quality</span></p>
                        </div>
                    </div>
                </div>

                <div className="grow">
                    <div className="flex w-full gap-2 flex-col sm:flex-row lg:flex-col xl:flex-row">
                        <div className="grow">
                            <p className="text-black text-left text-md font-medium mt-2">Moodboard</p>
                            <div className="flex gap-x-4">
                                <div>
                                    <img src="/images/brand/adidas.jpg" alt="error" className="h-14 w-14 rounded-md" />
                                </div>
                                <div>
                                    <img src="/images/brand/hilton.jpg" alt="error" className="h-14 w-14 rounded-md" />
                                </div>
                                <div>
                                    <img src="/images/brand/lucent.jpg" alt="error" className="h-14 w-14 rounded-md" />
                                </div>
                            </div>
                        </div>
                        <div className="grow">
                            <p className="text-black text-left text-md font-medium mt-2">Attachments</p>
                            <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4">
                                <h3 className="text-black font-semibold  text-md">some text</h3>
                                <div className="grow"></div>
                                <div className="grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full" >
                                    <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 w-200">
                        <p className="text-black text-left text-md font-medium mt-2">Hashtags</p>
                        <div className="flex gap-4 flex-wrap">
                            <div className="bg-gray-300 py-1 px-2 rounded-md">#Adidasoriginals</div>
                            <div className="bg-gray-300 py-1 px-2 rounded-md">#impossibleisNothing</div>
                            <div className="bg-gray-300 py-1 px-2 rounded-md">#Sporty</div>
                            <div className="bg-gray-300 py-1 px-2 rounded-md">#Yesadidas</div>
                            <div className="bg-gray-300 py-1 px-2 rounded-md">#impossibleisNothing</div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet></Outlet>
        </>
    );
}
export default BarndUser;
