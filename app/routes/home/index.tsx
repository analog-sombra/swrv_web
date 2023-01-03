import { faHeart, faIdBadge, faStar, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";
import { BrandCard } from "~/components/utils/brandcard";
import { CusButton } from "~/components/utils/buttont";
import { CampaginCard } from "~/components/utils/campagincard";

const HomePage = () => {
    return (
        <>
            <ProfileComplete></ProfileComplete>
            <Intro></Intro>
            <EarnSection></EarnSection>
            <SponsoredPosts></SponsoredPosts>
            <NewCampaign></NewCampaign>
            <TopBrands></TopBrands>
        </>
    );
}

export default HomePage;


const ProfileComplete = () => {
    return (
        <>
            <div className="w-full bg-secondary rounded-xl p-2 my-4 flex">
                <div className="flex grow flex-col md:flex-row">
                    <div className="grow grid place-items-center">
                        <div className="py-10 md:w-[500px]">
                            <h1 className="text-2xl text-white font-bold">Please Complete Your Profile</h1>
                            <h1 className="text-md text-white font-normal">Your linked social media accounts are under verification. You'll be notified within 24 hours.</h1>
                        </div>
                    </div>
                    <div className="lg:w-96 grid place-items-center">
                        <Link to="./profilecomplete" >
                            <CusButton text="Click here to complete" textColor={"text-white"} background={"bg-primary"}></CusButton>
                        </Link>
                    </div>
                </div>
                <div> <FontAwesomeIcon className="text-white text-2xl font-bold" icon={faXmark}></FontAwesomeIcon> </div>
            </div>
        </>
    );
}

const Intro = () => {
    return (
        <>
            <div className="grid place-items-center w-full mt-10">
                <h1 className="text-4xl text-primary font-bold text-center">Welcome to SWRV</h1>
                <h1 className="text-xl text-primary font-normal text-center">Reach the next billion</h1>
            </div>
            <div className="flex gap-4 items-center">
                <div className="hidden lg:block">
                    <img src="./images/inf/inf1.png" alt="error" />
                </div>
                <div className="hidden sm:block">
                    <img src="./images/inf/inf3.png" alt="error" />
                </div>
                <div className="hidden sm:block">
                    <img src="./images/inf/inf4.png" alt="error" />
                </div>
                <div className="hidden xl:block">
                    <img src="./images/inf/inf5.png" alt="error" />
                </div>
                <div>
                    <img src="./images/inf/inf6.png" alt="error" />
                </div>
                <div className="hidden xl:block">
                    <img src="./images/inf/inf7.png" alt="error" />
                </div>
                <div>
                    <img src="./images/inf/inf8.png" alt="error" />
                </div>
                <div className="hidden sm:block">
                    <img src="./images/inf/inf9.png" alt="error" />
                </div>
                <div className="hidden md:block">
                    <img src="./images/inf/inf13.png" alt="error" />
                </div>
                <div>
                    <img src="./images/inf/inf14.png" alt="error" />
                </div>

            </div>
        </>
    );
}

const EarnSection = () => {
    return (
        <>
            <div className="w-full rounded-xl flex flex-col md:flex-row bg-yellow-500 mt-12">
                <div className="grow grid place-items-center">
                    <img src="./images/cashgirl.png" alt="error" className="md:h-80" />
                </div>
                <div className="p-4 md:p-12 bg-[#F7941D] rounded-r-xl grid place-items-center">
                    <div>
                        <h1 className="text-2xl text-black font-bold text-left">To earn more money?</h1>
                        <h1 className="text-md text-black font-normal text-left md:w-80">Search, apply for brands campaigns and create more great content.</h1>
                    </div>
                </div>

            </div>
        </>
    );
}

const SponsoredPosts = () => {
    return (
        <>
            <div className="bg-white rounded-2xl my-3 shadow-xl p-4">
                <div className="w-60 shadow-xl   rounded-xl text-xl font-bold text-black p-2 my-4"> <FontAwesomeIcon icon={faHeart} className="text-md text-secondary"></FontAwesomeIcon> Sponsored Posts </div>
                <div className="grid place-items-center md:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <CampaginCard image="./images/brand/adidas.jpg" name="Adidas"></CampaginCard>
                    <CampaginCard image="./images/brand/furinicom.jpg" name="Furinicom"></CampaginCard>
                    <CampaginCard image="./images/brand/hilton.jpg" name="Hilton"></CampaginCard>
                    <CampaginCard image="./images/brand/lucent.jpg" name="Lucent"></CampaginCard>
                </div>
            </div>
        </>
    );
}

const NewCampaign = () => {
    return (
        <>
            <div className="bg-white rounded-2xl my-3 shadow-xl p-4">
                <div className="w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4"> <FontAwesomeIcon icon={faIdBadge} className="text-md text-secondary"></FontAwesomeIcon> New Campaign </div>
                <div className="grid grid-cols-1  place-items-center md:place-items-start  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <CampaginCard image="./images/brand/powerfitgym.jpg" name="Power Fit Gym"></CampaginCard>
                    <CampaginCard image="./images/brand/szechuan_restaurant.jpg" name="Szechuan Restaurant"></CampaginCard>
                    <CampaginCard image="./images/brand/theburgershop.jpg" name="Theburgershop"></CampaginCard>
                    <CampaginCard image="./images/brand/tronicsfix.jpg" name="Tronicsfix"></CampaginCard>
                </div>
            </div>
        </>
    );
}
const TopBrands = () => {
    return (
        <>
            <div className="bg-white rounded-2xl my-3 shadow-xl p-4">
                <div className="w-60 shadow-xl rounded-xl text-xl font-bold text-black p-2 my-4"> <FontAwesomeIcon icon={faStar} className="text-md text-secondary"></FontAwesomeIcon> Top brands </div>
                <div className="grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <BrandCard image="./images/brand/adidas.jpg" name="Adidas"></BrandCard>
                    <BrandCard image="./images/brand/furinicom.jpg" name="Furinicom"></BrandCard>
                    <BrandCard image="./images/brand/lucent.jpg" name="Lucent"></BrandCard>
                    <BrandCard image="./images/brand/tronicsfix.jpg" name="Tronicsfix"></BrandCard>
                </div>
            </div>
        </>
    );
}