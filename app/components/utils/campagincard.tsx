import { Link } from "@remix-run/react";
import { CusButton } from "./buttont";


type CampaginCardProps = {
    image: string
    name: string
    category: string
}

export const CampaginCard = (props: CampaginCardProps) => {
    return (
        <>
            <div className="bg-white rounded-xl shadow-xl p-4 w-72 my-2">
                <div className="flex items-end gap-x-3">
                    <div>
                        <img src={props.image} alt="error" className="object-cover w-16 h-16 rounded" />
                    </div>
                    <p className="text-black font-semibold text-xl content-end text-left">{props.name}</p>
                </div>
                <p className="text-black font-semibold text-md text-left my-4">Lulu 50% off - SPORTS WEEK</p>
                <p className="text-black font-semibold text-xs text-left">Category : {props.category}</p>
                <p className="text-black font-semibold text-xs text-left">www.adidas.co.in</p>
                <div className="w-full h-[1px] bg-black my-2"></div>
                <div className="flex">
                    <p className="text-black font-semibold text-xs text-left">Platform</p>
                    <div className="grow"></div>
                    <p className="text-black font-semibold text-xs text-left">Platform</p>
                </div>
                <div className="flex">
                    <div className="grow flex items-center">
                        <div className="mx-1">
                            <div className="p-1 border-2 border-blue-500 rounded-full">
                                <img src="/images/media/youtube.png" alt="error" className="rounded-full w-8 h-8" />
                            </div>
                        </div>
                        <div className="mx-1">
                            <div className="p-1 border-2 border-blue-500 rounded-full">
                                <img src="/images/media/instagram.png" alt="error" className="rounded-full w-8 h-8" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-black font-bold  text-md text-right my-4">3500 <br />USD / post</p>
                    </div>
                </div>
                <Link to={"/home/campaigns"}>
                    <CusButton text="Learn more & apply" textColor={"text-black"} background={"bg-[#fbca8e]"} width={"w-full"} margin={"my-0"} fontwidth={"font-bold"}></CusButton>
                </Link>
            </div>
        </>
    );
}