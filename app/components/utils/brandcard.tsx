import { Link } from "@remix-run/react";
import { CusButton } from "./buttont";


type BrandCardProps = {
    image: string
    name: string
    email: string
    id: string
    website: string
}

export const BrandCard = (props: BrandCardProps) => {
    return (
        <>
            <div className="bg-white rounded-xl shadow-xl p-4 w-64 my-2">
                <div className="flex items-end gap-x-3">
                    <div>
                        <img src={props.image} alt="error" className="object-cover w-16 h-16 rounded" />
                    </div>
                    <p className="text-black font-semibold text-xl content-end text-left">{props.name}</p>
                </div>
                <p className="text-black font-semibold text-xs text-left mt-2">email : {props.email}</p>
                <p className="text-black font-semibold text-xs text-left mt-2">Website : {props.website}</p>
                <Link to={`/home/brand/${props.id}`}>
                    <CusButton text="View" textColor={"text-black"} background={"bg-[#01FFF4]"} width={"w-full"} margin={"my-2"} fontwidth={"font-bold"}></CusButton>
                </Link>
            </div>
        </>
    );
}