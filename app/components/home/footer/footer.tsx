import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedinIn, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
export const Footer = () => {
    return (
        <>
            <footer className="w-full grid place-items-center  bg-primary py-8 md:py-20 px-6 sm:px-16">
                <div className="w-full md:w-4/5 lg:w-4/6 flex flex-col md:flex-row">
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
            </footer>
        </>
    );
};