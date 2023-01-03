import { CusButton } from "./buttont";


type CampaginCardProps = {
    image: string
    name: string
}

export const BrandCard = (props: CampaginCardProps) => {
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
                <p className="text-black font-semibold text-xs text-left">Category : Consumer Electronics</p>
                <p className="text-black font-semibold text-xs text-left">www.adidas.co.in</p>

                <CusButton text="View" textColor={"text-black"} background={"bg-[#01FFF4]"} width={"w-full"} margin={"my-2"} fontwidth={"font-bold"}></CusButton>
            </div>
        </>
    );
}