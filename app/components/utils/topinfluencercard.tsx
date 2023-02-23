import { Link } from "@remix-run/react";
import { CusButton } from "./buttont";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


type TopInfluencerCardProps = {
    image: string
    name: string
    star: number
}
const TopInfluencerCard = (props: TopInfluencerCardProps) => {
    const Star = () => {
        const fullStars = Math.floor(props.star);
        const fractionalStar = props.star - fullStars;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <FontAwesomeIcon key={i} className="text-xs text-pink-500" icon={faStar} />
            );
        }

        if (fractionalStar > 0) {
            stars.push(
                <FontAwesomeIcon
                    key={fullStars}
                    className="text-xs text-pink-500"
                    icon={faStar}
                    style={{ width: `${fractionalStar * 100}%` }}
                />
            );
        }

        for (let i = 0; i < 5 - fullStars; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={5 + i}
                    className="text-xs text-gray-300"
                    icon={faStar}
                />
            );
        }

        return <>{stars}</>;
    };
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
                            <p className="text-black font-semibold text-sm text-left">{props.name.split("@")[0]}</p>
                            <div className="flex">
                                <Star></Star>
                            </div>
                        </div>
                        <div>
                            <p className="text-black font-bold  text-md text-right">3500 <br />USD / post</p>
                        </div>
                    </div>
                    <div className="my-4">
                        <div className="bg-gray-200  rounded-md py-2 flex justify-around">
                            <div>
                                <p className="text-center text-sm font-semibold">2 00 5887</p>
                                <p className="text-center text-xs font-normal">Reach</p>
                            </div>
                            <div className="h-10 w-[1px] bg-slate-900"></div>
                            <div>
                                <p className="text-center text-sm font-semibold">1 34 9887</p>
                                <p className="text-center text-xs font-normal">Impression</p>
                            </div>
                        </div>
                        
                        <div className="bg-gray-200 text-center text-sm font-semibold rounded-md py-2 mt-2">
                            <p>SWRV score :  <span className="font-normal">2005887</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopInfluencerCard;