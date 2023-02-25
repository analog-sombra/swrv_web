import { faHandshake, faHeart, faNetworkWired, faRemove, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import { CusButton } from "~/components/utils/buttont";
import ExtraBrandCard from "~/components/utils/extrabrandcard";
import PastBrandCard from "~/components/utils/pastbrandcard";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";
export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const id = props.params.id;
    const branddata = await axios.post(`${BaseUrl}/api/get-brand`, { "id": id, });
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    return json({ brand: branddata.data.data, user: cookie.user });
}

const BrandPage = () => {
    const brand = useLoaderData().brand;
    const user = useLoaderData().user;
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

    const [error, setError] = useState<string | null>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const [connectBox, setConnectBox] = useState<boolean>(false);

    return (
        <>
            <div className={`w-full h-screen bg-gray-500 fixed top-0 left-0 bg-opacity-30 grid place-items-center ${connectBox ? "fixed" : "hidden"}`} style={{ zIndex: 100 }}>
                <div className="p-6 bg-white rounded-xl shadow-xl w-96">
                    <div className="flex">
                        <div className="grow"></div>
                        <div onClick={() => {
                            setConnectBox(false);
                        }}>
                            <FontAwesomeIcon icon={faRemove} className="font-bold text-2xl text-center text-primary"></FontAwesomeIcon>
                        </div>
                    </div>
                    <h1 className="text-primary text-lg font-bold text-left">Connect</h1>
                    <textarea ref={messageRef} className="p-4 w-full h-40 outline-none border-2 bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none mt-4" placeholder="message" ></textarea>
                    {(error == "" || error == null || error == undefined) ? null :
                        <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                    }
                    <div className="flex">
                        <div className="grow"></div>
                        <div onClick={async () => {
                            if (messageRef.current?.value == null || messageRef.current?.value == undefined || messageRef.current?.value == "") return setError("Message can't be blank");

                            let req = {
                                "campaignDraftId": "0",
                                "fromUserId": user.id,
                                "toUserId": "89",
                                "comment": messageRef.current?.value
                            };

                            const data = await axios({
                                method: 'post',
                                url: `${BaseUrl}/api/add-chat`,
                                data: req,
                                headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Access-Control-Allow-Headers': '*',
                                    'Access-Control-Allow-Options': '*',
                                    'Access-Control-Allow-Methods': '*',
                                    'X-Content-Type-Options': '*',
                                    'Content-Type': 'application/json',
                                    'Accept': '*'
                                }
                            });

                            if (!data.data.status) return setError(data.data.message);
                            return setConnectBox(false);


                        }}>
                            <CusButton text="send" background="bg-primary" textColor={"text-white"} />
                        </div>
                    </div>
                </div>
            </div>
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
                            <p className="text-primary text-md font-normal">website: {brand.webUrl}</p>
                            <div onClick={() => {
                                setConnectBox(true);
                            }}>
                                <CusButton text="Connect" background="bg-secondary" fontwidth="font-bold"></CusButton>
                            </div>
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