import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DownloadApp } from "../utils/downloadapp";
import { TeamCard } from "../utils/teamcard";
import { faLocation, faLocationDot, faLocationPin, faMailBulk, faMale, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";
import { CusButton } from "../utils/buttont";

const ContactPage = () => (
    <>
        <div className="w-full px-6 sm:px-16">

            <div className="bg-[#EFEFEF] rounded-2xl sm:p-0 p-4">


                <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-10 ">

                    <h1 className="text-5xl font-bold text-primary flex">
                        Love to hear from you
                    </h1>
                    <h1 className="text-5xl  font-bold text-primary flex">
                        Get in touch <img src="./images/icons/hand.png" alt="error" />
                    </h1>

                    <div className="flex gap-4 flex-col lg:flex-row items-center w-full">
                        <div className=" w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium"><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> 102 street 2712 Don</div>
                        <div className="w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 102 street 2712 Don</div>
                        <div className="w-60 py-2 px-4 rounded-md shadow-xl bg-white text-center text-primary font-medium"><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon> 102 street 2712 Don</div>
                    </div>

                    <div className="bg-white p-6 rounded-2xl my-10 shadow-xl">
                        <div className="flex">
                            <CusButton text="I'am a brand" textColor={"text-black"} borderColor={"b-gray-600"}></CusButton>
                            <div className="w-10"></div>
                            <CusButton text="I'am a Influencer" background="bg-secondary"></CusButton>
                        </div>
                        <div className="flex">
                            <div className="grow">
                                <h2 className="text-left text-md font-semibold text-primary py-2">
                                    Your Name
                                </h2>
                                <input type={"text"} className="outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md w-full p-2" placeholder="Enter your name" />
                            </div>
                            <div className="w-10"></div>
                            <div className="grow">
                                <h2 className="text-left text-md font-semibold text-primary py-2">
                                    Phone
                                </h2>
                                <input type={"text"} className="outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md w-full p-2" placeholder="Enter your phone number" />
                            </div>
                        </div>
                        <h2 className="text-left text-md font-semibold text-primary py-2">
                            Message
                        </h2>
                        <textarea className="p-4 w-full h-60 outline-none border-2 border-gray-300 focus:border-gray-300 rounded-md resize-none" placeholder="your message" ></textarea>

                        <CusButton text="Send Message" background="bg-primary"></CusButton>
                    </div>

                    <DownloadApp></DownloadApp>
                </div>


            </div>
        </div>

    </>
)
export default ContactPage;