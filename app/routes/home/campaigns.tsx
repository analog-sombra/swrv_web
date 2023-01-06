import { faCoins, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Completed, Connection, Rating } from "./brand";
import { useState } from "react";
import { CusButton } from "~/components/utils/buttont";
const Campaigns = () => {
    return (
        <>
            <div className="grid gap-y-4 lg:gap-4 grid-cols-1 lg:grid-cols-7 mt-4 justify-start align-top content-start place-items-start place-content-start">
                <BrandInfo></BrandInfo>
                <CampaignsInfo></CampaignsInfo>
                <div className="lg:col-start-6 lg:col-end-8 grid gap-y-4 w-full">
                    <Target></Target>
                    <Budget></Budget>
                    <Apply></Apply>
                </div>

            </div>

        </>
    );
}

export default Campaigns;



const BrandInfo = () => {
    return (
        <>
            <div className="col-span-2 rounded-xl shadow-xl bg-white p-4">
                <div className="flex items-end gap-x-3">
                    <div>
                        <img src="/images/brand/adidas.jpg" alt="error" className="object-cover w-16 h-16 rounded" />
                    </div>
                    <p className="text-black font-semibold text-xl content-end text-left">Puma</p>
                </div>
                <p className="text-black font-semibold text-xs text-left">Category : Consumer Electronics</p>
                <p className="text-black font-semibold text-xs text-left">www.adidas.co.in</p>
                <h3 className="text-black font-bold text-md text-left">Brand info</h3>
                <p className="text-black font-semibold text-xs text-left">Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas® Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas® Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas® Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas® Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas® Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants..</p>
                <div className="h-4"></div>
                <Rating />
                <div className="h-4"></div>
                <Connection />
                <div className="h-4"></div>
                <Completed />
            </div>

        </>
    );
}

const CampaignsInfo = () => {
    return (
        <>
            <div className="col-span-3 rounded-xl shadow-xl bg-white p-4">
                <div className="flex items-end gap-x-3">
                    <div>
                        <img src="/images/brand/adidas.jpg" alt="error" className="object-cover w-16 h-16 rounded" />
                    </div>
                    <p className="text-black font-semibold text-xl content-end text-left">Puma</p>
                </div>
                <p className="text-black font-semibold text-md text-left my-4">Lulu 50% off - SPORTS WEEK</p>
                <p className="text-black font-semibold text-xs text-left">Category : Consumer Electronics</p>
                <p className="text-black font-semibold text-xs text-left">www.adidas.co.in</p>
                <h3 className="text-black font-bold text-md text-left">Info</h3>
                <p className="text-black font-semibold text-xs text-left">
                    Hirschi's social media presence allows automotive brands like Bugatti and Ferrari to advertise their products through her. Instead of being an automotive journalist, she states that she provides "insight into the supercar culture and what it’s like to drive these incredible cars in a light, fun way."[4] Being one of the few women in supercar culture, she also opens up the demographic for these vehicles.<br /><br /> In March 2018, Arabian Business listed her as one of the 50 Most Influential Women In The Arab World,[8] and it nominated her in 2019 as one of Top 30 most influential women in the Arab world.[9] Also in March 2018, Esquire Magazine Middle East named her Influencer of the Year.[10] She appeared on Germany's free to air TV RTL II on the car show GRIP Das Automagazin on 10 June 2018, co-presenting the one-off Bugatti L'Or Blanc and the La Ferrari Aperta.[11] In January 2019, Broadcasting & Cable announced Hirschi will be hosting their new car TV show Car Crews.[12] The show is released on Insight TV and focuses on uncovering different car cultures across the United States.[13] She drove the official Batmobile from the feature film Batman (1989).[4] In 2020 Hirschi won a Shorty Award for Breakout YouTuber.[14]
                </p>
            </div>
        </>
    );
}

const Target = () => {
    return (
        <>
            <div className="rounded-xl shadow-xl bg-white p-4 w-full">
                <div className="flex">
                    <FontAwesomeIcon icon={faCoins} className="text-xl text-primary"></FontAwesomeIcon>
                    <h2 className="text-xl text-primary font-medium px-4">Target</h2>
                </div>
                <div className="h-[1px] bg-gray-500 w-full my-2"></div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        Audience loaction
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-primary">
                        London
                    </p>
                </div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        Min Reach
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-black">
                        10000 K
                    </p>
                </div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        End date
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-black">
                        10-12-2022
                    </p>
                </div>
            </div>
        </>
    );
}

const Apply = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <>
            <div className="p-4 rounded-xl shadow-xl bg-primary">
                <h1 className="text-white text-xl text-left font-normal">
                    Would you like to participate in this campaign?
                </h1>
                <div className="w-full grid place-items-center" onClick={onOpenModal}>
                    <CusButton text="Apply" textColor={"text-white"} background={"bg-secondary"}></CusButton>
                </div>
            </div>

            <div className={`w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${open ? "fixed" : "hidden"} `}>

                <div className="p-6 bg-white rounded-xl shadow-xl">
                    <div className="flex">
                        <div className="grow"></div>
                        <div onClick={onCloseModal}>
                            <FontAwesomeIcon icon={faRemove} className="font-bold text-2xl text-center text-primary"></FontAwesomeIcon>
                        </div>
                    </div>
                    <h1 className="text-primary text-lg font-bold text-left">Connect</h1>
                    <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2 mt-4" placeholder="subject" />
                    <textarea className="p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4" placeholder="message" ></textarea>
                    <div className="flex">
                        <div className="grow"></div>
                        <div>
                            <CusButton text="send" background="bg-primary" textColor={"text-white"} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

const Budget = () => {
    return (
        <>
            <div className="rounded-xl shadow-xl bg-white p-4 w-full">
                <div className="flex">
                    <FontAwesomeIcon icon={faCoins} className="text-xl text-primary"></FontAwesomeIcon>
                    <h2 className="text-xl text-primary font-medium px-4">Budget</h2>
                </div>
                <div className="h-[1px] bg-gray-500 w-full my-2 "></div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        Audience loaction
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-primary">
                        London
                    </p>
                </div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        Min Reach
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-black">
                        10000 K
                    </p>
                </div>
                <div className="flex my-2">
                    <p className="text-md text-primary">
                        End date
                    </p>
                    <div className="grow"></div>
                    <p className="text-md font-bold text-black">
                        10-12-2022
                    </p>
                </div>
            </div>
        </>
    );
}