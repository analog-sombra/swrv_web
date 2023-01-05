import { CusButton } from "./buttont";




export const PastBrandCard = () => {
    return (
        <>
            <div className="bg-white rounded-xl shadow-xl p-4 w-80 my-2">
                <div className="flex items-end gap-x-3">
                    <div>
                        <img src="/images/brand/adidas.jpg" alt="error" className="object-cover w-16 h-16 rounded" />
                    </div>
                    <p className="text-black font-semibold text-xl content-end text-left">Adidas Cases</p>
                </div>
                <p className="text-black font-semibold text-md text-left my-4">Lulu 50% off - SPORTS WEEK</p>
                <div className="flex justify-center items-center gap-x-2">
                    <div>
                        <img src="/images/media/facebook.png" alt="error" className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-black">POST</h1>
                        <p className="text-xs font-normal text-black">Category: Consumer Electronics</p>
                    </div>
                    <p className="text-black font-semibold text-sm text-left my-4">61K Reach</p>
                </div>
                <div className="flex justify-center items-center gap-x-2">
                    <div>
                        <img src="/images/media/instagram.png" alt="error" className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-sm font-bold text-black">POST</h1>
                        <p className="text-xs font-normal text-black">Category: Consumer Electronics</p>
                    </div>
                    <p className="text-black font-semibold text-sm text-left my-4">61K Reach</p>
                </div>
                <CusButton text="View" textColor={"text-black"} background={"bg-[#01FFF4]"} width={"w-full"} margin={"my-2"} fontwidth={"font-bold"}></CusButton>
            </div>
        </>
    );
}

export default PastBrandCard;