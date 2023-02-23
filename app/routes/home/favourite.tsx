import { Link } from "@remix-run/react";
import useLocalStorageState from "use-local-storage-state";
import { BrandCard } from "~/components/utils/brandcard";
import { CusButton } from "~/components/utils/buttont";

const Favourite = () => {
    const [myfavBrand, setMyfavBrand] = useLocalStorageState<any[]>('favbrand', {
        defaultValue: []
    });
    return (
        <>
            <div>
                <div className="flex my-6 md:flex-row flex-col">
                    <div>
                        <h1 className="text-2xl font-bold text-black text-left mt-4">Favourite brands</h1>
                        <p className="text-md font-normal text-black text-left">Here you can manage all the campaigns that you are participating in.</p>
                    </div>
                </div>
                {myfavBrand.length == 0 ?
                    <div className="bg-white rounded-xl shadow-xl p-10 grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center">
                        <p className="text-xl font-slate-900">You have no favorite brands.</p>
                    </div>
                    :
                    <>
                        <div className="flex bg-white rounded-xl shadow-xl p-6 my-4 items-center">
                            <p className="text-xl font-slate-900">Found : {myfavBrand.length}</p>
                            <div className="grow"></div>
                            <div>
                                <button className="text-lg text-center bg-red-500 py-1 px-2 text-white font-bold rounded-md" onClick={() => { setMyfavBrand([]); }}>Clear All</button>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-xl p-10 grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {
                                myfavBrand.map((val: any, index: number) => {
                                    return (
                                        <div key={index}>
                                            <FavBrandCard id={val.id} name={val.name} image={val.logo}></FavBrandCard>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </>
                }
            </div>
        </>
    );
}

export default Favourite;


type FavBrandCardProps = {
    image: string
    name: string
    id: string
}

export const FavBrandCard = (props: FavBrandCardProps) => {
    return (
        <>
            <div className="bg-white rounded-xl shadow-xl p-4 w-64 my-2">
                <div className="flex items-end gap-x-3">
                    <div>
                        <img src={props.image} alt="error" className="object-cover w-16 h-16 rounded" />
                    </div>
                    <p className="text-black font-semibold text-xl content-end text-left">{props.name}</p>
                </div>
                <Link to={`/home/brand/${props.id}`}>
                    <CusButton text="View" textColor={"text-black"} background={"bg-[#01FFF4]"} width={"w-full"} margin={"my-2"} fontwidth={"font-bold"}></CusButton>
                </Link>
            </div>
        </>
    );
}