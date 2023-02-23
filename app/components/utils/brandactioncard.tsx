import { CusButton } from "./buttont";

enum CardType {
    Normal,
    Panding,
    Accept
}
export { CardType };

type CusButtonProps = {
    cardtype: CardType,
}


export const BrandActionCard = (props: CusButtonProps) => {
    return (
        <>
            <div className="bg-white rounded-xl shadow-xl p-4 w-64 my-2 h-full flex flex-col">
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
                {
                    props.cardtype == CardType.Normal ?

                        <div className="my-4">
                            <p className="text-xs font-normal text-gray-400">Status: Draft submitted</p>
                            <p className="text-black text-left text-md font-medium mt-2">Moodboard</p>
                            <div className="flex gap-x-4 my-2">
                                <div>
                                    <img src="/images/brand/adidas.jpg" alt="error" className="h-14 w-14 rounded-md" />
                                </div>
                                <div>
                                    <img src="/images/brand/hilton.jpg" alt="error" className="h-14 w-14 rounded-md" />
                                </div>
                                <div>
                                    <img src="/images/brand/lucent.jpg" alt="error" className="h-14 w-14 rounded-md" />
                                </div>
                            </div>
                            <p className="text-xs font-normal text-gray-400">Pubicatio date: <span>June 20 at 15:00</span></p>
                        </div>
                        : null
                }
                {
                    props.cardtype == CardType.Panding ?
                        <div className="my-4">
                            <p className="text-xs font-normal text-gray-400 mt-2">Status: Campaign Live</p>
                            <p className="text-xs font-normal text-gray-400 mt-2">Publication date: <span className="text-black">June 20 at 15:00</span></p>
                            <p className="text-xs font-normal text-gray-400 mt-2">Cost: <span className="text-pink-500 font-semibold">Receipt</span><span className="text-black font-semibold px-2">(150 GBP)</span></p>
                        </div>
                        : null
                }
                {
                    props.cardtype == CardType.Accept ?
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
                                <p>USD 400 <span className="font-normal">per post</span></p>
                            </div>
                        </div>
                        : null
                }
                <div className="grow"></div>
                <CusButton text="preview publication draft" textColor={"text-black"} background={"bg-[#01FFF4]"} width={"w-full"} margin={"my-1"} fontwidth={"font-normal"} textSize={"text-sm"}></CusButton>
            </div>
        </>
    );
}

export default BrandActionCard;