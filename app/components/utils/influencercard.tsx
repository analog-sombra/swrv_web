import { Link } from "@remix-run/react";
import { CusButton } from "./buttont";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


type InfluencerCardProps = {
    image: string
    name: string
}
const InfluencerCard = (props: InfluencerCardProps) => {
    return (
        <>
            <div className="bg-white rounded-xl shadow-xl w-64 my-2">
                <img src={props.image} alt="error" className="w-full h-40 object-cover rounded-t-md" />
                <div className="flex gap-1 -translate-y-5 pl-4">
                    <div className="border p-1 bg-white border-blue-500 rounded-full">
                        <img src="/images/media/instagram.png" alt="error" className="w-6 h-6 rounded-full" />
                    </div>
                    <div className="border p-1 border-blue-500 bg-white rounded-full">
                        <img src="/images/media/youtube.png" alt="error" className="w-6 h-6 rounded-full" />
                    </div>
                </div>
                <div className="px-4 pb-2">
                    <div className="flex items-start my-2 justify-between">
                        <div className="grow">
                            <p className="text-black font-semibold text-sm text-left">Salt bae</p>
                            <div className="flex">
                                <FontAwesomeIcon className="text-xs text-pink-500" icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="text-xs text-pink-500" icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="text-xs text-pink-500" icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="text-xs text-pink-500" icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className="text-xs text-pink-500" icon={faStar}></FontAwesomeIcon>
                            </div>

                        </div>
                        <div>
                            <p className="text-black font-bold  text-md text-right">3500 <br />USD / post</p>
                        </div>
                    </div>
                    <p className="text-black font-normal my-2 text-xs text-center">Status: Campaign draft pending</p>
                    <Link to={"/home/brand"}>
                        <CusButton text="View Campaign" textColor={"text-black"} background={"bg-[#01FFF4]"} width={"w-full"} margin={"my-2"} fontwidth={"font-bold"}></CusButton>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default InfluencerCard;