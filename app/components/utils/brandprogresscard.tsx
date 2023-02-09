import { CusButton } from "./buttont";



export const BrandProgressCard = () => {
    return (
        <>
            <div className="bg-white rounded-xl shadow-xl p-4 w-64 my-2">
                <div className="flex items-start gap-x-3">
                    <div>
                        <img src="/images/brand/adidas.jpg" alt="error" className="object-cover w-14 h-14 rounded-md" />
                    </div>
                    <div>
                        <p className="text-black font-semibold text-md content-end text-left">Thanawan Chadee</p>
                        <div className="flex items-center">
                            <img src="/images/media/instagram.png" alt="instagram" className="w-4 h-4" />
                            <p className="px-2 text-blue-500 font-normal text-sm content-end text-left">Chiris_Or</p>
                        </div>
                    </div>
                </div>
                <div className="my-6">
                    <div className="flex">
                        <div className="w-[50%] text-right text-xs font-normal text-gray-400">Status:</div>
                        <div className="w-2"></div>
                        <div className="w-[50%] text-left text-xs font-normal text-gray-400">Darft accepted publication pending</div>
                    </div>
                    <div className="flex">
                        <div className="w-[50%] text-right text-xs font-normal text-gray-400">Publication Date</div>
                        <div className="w-2"></div>
                        <div className="w-[50%] text-left text-xs font-normal text-gray-800">Jan 20 at 15:00</div>
                    </div>
                    <div className="flex">
                        <div className="w-[50%] text-right text-xs font-normal text-gray-400">Cost:</div>
                        <div className="w-2"></div>
                        <div className="w-[50%] text-left text-xs font-normal text-gray-800">150 GBP</div>
                    </div>
                </div>
                <CusButton text="Sent message" textColor={"text-black"} background={"bg-[#01FFF4]"} width={"w-full"} margin={"my-2"} fontwidth={"font-bold"}></CusButton>
            </div>
        </>
    );
}

export default BrandProgressCard;