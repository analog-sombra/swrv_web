import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from '@remix-run/react';
export const Footer = () => {
    return (
        <>
            <footer className="w-full grid place-items-center  bg-primary py-8 md:py-20 px-6 sm:px-16">
                <div className="w-full md:w-4/5 lg:w-4/6 flex flex-col md:flex-row border-b-2 border-gray-200 pb-4 mb-4">
                    <div className="grow">
                        <h1 className="text-white text-3xl font-semibold text-center md:text-left">SWRV</h1>
                        <h3 className="text-white text-md font-normal text-center md:text-left">© 2020 SWRV Licensing AB - All rights reserved.</h3>
                    </div>
                    <div className="grow flex justify-center">
                        <div className="text-white text-3xl p-4">
                            <FontAwesomeIcon icon={faFacebookSquare}></FontAwesomeIcon>
                        </div>
                        <div className="text-white text-3xl p-4">
                            <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                        </div>
                        <div className="text-white text-3xl p-4">
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </div>
                        <div className="text-white text-3xl p-4">
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="grow flex md:justify-end justify-center">
                        <div >
                            <h3 className="text-white text-md font-normal text-center md:text-left">Head Office</h3>
                            <h3 className="text-white text-md font-normal text-center md:text-left">Dockplatsen 1, 211 19 Malmö, Sweden</h3>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-center content-center text-white text-md font-semibold '>
                    <Link to={"/pp"} className='text-center'>Privacy Policy</Link>
                    <div className='w-10'></div>
                    <Link to={"/tos"} className='text-center'>Term of service</Link>
                    <div className='w-10'></div>
                    <Link to={"/dispute"} className='text-center'>Manage Dispute</Link>
                    <div className='w-10'></div>
                    <Link to={"/faq"} className='text-center'>FAQ</Link>
                    <div className='w-10'></div>
                    <Link to={"/news"} className='text-center'>Event & News</Link>
                </div>
            </footer>
        </>
    );
};