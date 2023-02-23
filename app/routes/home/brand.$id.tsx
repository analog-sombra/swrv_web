import { faHandshake, faHeart, faNetworkWired, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { CusButton } from "~/components/utils/buttont";
import ExtraBrandCard from "~/components/utils/extrabrandcard";
import PastBrandCard from "~/components/utils/pastbrandcard";
import { BaseUrl } from "~/const";
export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const id = props.params.id;
    const branddata = await axios.post(`${BaseUrl}/api/get-brand`, { "id": id, });
    return json({ brand: branddata.data.data });
}

const BrandPage = () => {
    const brand = useLoaderData().brand;
    const [isPast, setPast] = useState(false);
    const logo = brand.logo == "" || brand.logo == undefined || brand.logo == null || brand.logo == "0" ? "images/avatar.png" : brand.logo;
    const [fav, setFav] = useState<boolean>(false);

    const [myfavBrand, setMyfavBrand] = useLocalStorageState<brandData[]>('favbrand', {
        defaultValue: []
    });

    type brandData = {
        id: string
        logo: string
        name: string
    }

    const setFavBrand = (brand: brandData) => {
        setMyfavBrand([...myfavBrand, brand])
        setFav(true);
    }

    const revmoceFavBrand = (brand: brandData) => {
        let savebrand: brandData[] = [];
        for (let i: number = 0; i < myfavBrand.length; i++) {
            if (myfavBrand[i]["id"] != brand["id"]) {
                savebrand.push(myfavBrand[i]);
            }
        }
        setMyfavBrand(savebrand);
        setFav(false);
    }
    useEffect(() => {
        let res: boolean = false;
        myfavBrand.map((val: brandData, index: number) => {
            if (val.id == brand.id) res = true;
        });
        if (res) { setFav(true) }
        else { setFav(false) }
    }, []);

    return (
        <>
            <div className="w-full mt-4 shadow-xl bg-white rounded-xl">
                <div className="w-full relative">
                    <div className="absolute top-5 right-5">
                        <FontAwesomeIcon onClick={() => {
                            let brandval: brandData = { id: brand.id, logo: logo, name: brand.name };
                            if (fav) return revmoceFavBrand(brandval);
                            return setFavBrand(brandval);
                        }} icon={faHeart} className={`${fav ? "text-red-500" : "text-gray-500"} h-12 w-12`}></FontAwesomeIcon>
                    </div>
                    <img src="/images/products/shoe1.jpg" alt="error" className="w-full h-60 object-cover rounded-t-xl" />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <div className="p-8 flex flex-row gap-x-3 lg:flex-col">
                        <div>
                            <img src={logo} alt="brand logo" className="w-32 h-32 rounded-md" />
                        </div>
                        <div>
                            <h1 className="text-primary text-lg font-medium my-2">{brand.name}</h1>
                            <p className="text-primary text-md font-normal">Category: Consumer Electronics</p>
                            <p className="text-primary text-md font-normal">www.adidas.co.in</p>
                            <CusButton text="Connect" background="bg-secondary" fontwidth="font-bold"></CusButton>
                        </div>
                    </div>
                    <div className="h-72 w-[2px] bg-gray-300 hidden lg:block mt-8"></div>
                    <div className="p-8">
                        <div className="flex gap-x-4 flex-col md:flex-row gap-y-2">
                            <Rating></Rating>
                            <Completed></Completed>
                            <Connection></Connection>
                        </div>
                        <h1 className="text-primary text-lg font-medium mt-4 mb-2">Brand info</h1>
                        <p className="text-black text-sm font-normal">{brand.info}</p>
                    </div>
                </div>
            </div>
            <div className="w-full mt-4 shadow-xl bg-white rounded-xl">
                <div className="flex mx-4 gap-4">
                    <div onClick={() => { setPast(false) }}>
                        <CusButton text="Available Campaigns" background={`${isPast ? "bg-gray-100" : "bg-[#01FFF4]"}`} fontwidth="font-bold" textColor={`${isPast ? "text-gray-600" : "text-black"}`}></CusButton>
                    </div>
                    <div onClick={() => { setPast(true) }}>
                        <CusButton text="Past associations" background={`${isPast ? "bg-[#01FFF4]" : "bg-gray-100"}`} fontwidth="font-bold" textColor={`${isPast ? "text-black" : "text-gray-600"}`}></CusButton>
                    </div>
                </div>
                {isPast
                    ?
                    <PastBrandAssociation></PastBrandAssociation>
                    :
                    <AvailableCampaigns></AvailableCampaigns>
                }

            </div>
        </>
    );
}

export default BrandPage;



const Rating = () => {
    return (
        <>
            <div className="bg-gray-100 flex rounded-lg gap-x-4">
                <div className="bg-gray-200 p-2 rounded-md grid place-items-center">
                    <FontAwesomeIcon className="text-black text-3xl" icon={faStar}></FontAwesomeIcon>
                </div>
                <div className="p-2">
                    <h1 className="text-black text-lg font-bold">4.2</h1>
                    <p className="text-black text-sm font-normal">Rating</p>
                </div>
            </div>
        </>
    );
}
const Connection = () => {
    return (
        <>
            <div className="bg-gray-100 flex rounded-lg gap-x-4">
                <div className="bg-gray-200 p-2 rounded-md grid place-items-center">
                    <FontAwesomeIcon className="text-black text-3xl" icon={faHandshake}></FontAwesomeIcon>
                </div>
                <div className="p-2">
                    <h1 className="text-black text-lg font-bold">21</h1>
                    <p className="text-black text-sm font-normal">Connections</p>
                </div>
            </div>
        </>
    );
}
const Completed = () => {
    return (
        <>
            <div className="bg-gray-100 flex rounded-lg gap-x-4">
                <div className="bg-gray-200 p-2 rounded-md grid place-items-center">
                    <FontAwesomeIcon className="text-black text-3xl" icon={faNetworkWired}></FontAwesomeIcon>
                </div>
                <div className="p-2">
                    <h1 className="text-black text-lg font-bold">48</h1>
                    <p className="text-black text-sm font-normal">Completed Campaigns</p>
                </div>
            </div>
        </>
    );
}



const AvailableCampaigns = () => {
    return (
        <>
            <div className="grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center">
                <ExtraBrandCard></ExtraBrandCard>
                <ExtraBrandCard></ExtraBrandCard>
                <ExtraBrandCard></ExtraBrandCard>
                <ExtraBrandCard></ExtraBrandCard>
            </div>
        </>
    );
}

const PastBrandAssociation = () => {
    return (
        <>
            <div className="grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center">
                <PastBrandCard></PastBrandCard>
                <PastBrandCard></PastBrandCard>
            </div>
        </>
    );
}

export { Rating, Connection, Completed };