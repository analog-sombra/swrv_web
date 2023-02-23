import { faAdd, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionArgs, ActionFunction, LoaderArgs, LoaderFunction, json, redirect } from "@remix-run/node";
import { Form, useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import he from "he";
import { useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";
import UserInputStore from "~/state/user/firstinput";


export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);

    const accountRes = await axios({
        method: 'post',
        url: `${BaseUrl}/api/getcurrency`,
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


    const categoryRes = await axios({
        method: 'post',
        url: `${BaseUrl}/api/getcategory`,
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
    const languagesRes = await axios({
        method: 'post',
        url: `${BaseUrl}/api/getlanguage`,
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

    const mainmarketRes = await axios({
        method: 'post',
        url: `${BaseUrl}/api/get-market`,
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
    return json({ user: cookie.user, currency: accountRes.data.data, category: categoryRes.data.data, languages: languagesRes.data.data, market: mainmarketRes.data.data });
}


const SecondPage = () => {


    const loaderData = useLoaderData();
    const userID: String = loaderData.user.id;

    const currency = loaderData.currency;
    const category = loaderData.category;
    const languages = loaderData.languages;
    const market = loaderData.market;



    const setIndex = UserInputStore((state) => state.setIndex);
    const navigator = useNavigate();
    const [error, setError] = useState<String | null>(null);



    const [selcurrency, setSelcurrency] = useState<any[]>([]);
    const [selcategory, setSelcategory] = useState<any[]>([]);
    const [sellanguages, setSellanguages] = useState<any[]>([]);
    const [selmarket, setSelmarket] = useState<any[]>([]);
    const [selorthermarket, setSelorthermarket] = useState<any[]>([]);

    const [cur, setcur] = useState<boolean>(false);
    const [cat, setcat] = useState<boolean>(false);
    const [lan, setlan] = useState<boolean>(false);
    const [mar, setmar] = useState<boolean>(false);
    const [ort, setort] = useState<boolean>(false);

    const nextButton = useRef<HTMLButtonElement>(null);


    return (
        <>
            <div className="p-8 w-full mx-auto">
                <div className="w-full max-w-[400px] mx-auto">
                    {/* main market start here */}
                    <p className="text-black text-left font-normal text-lg mt-4">Main market</p>
                    <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full">
                        <div className="flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar">
                            {selmarket.map((value: any, i: number) => {
                                return (
                                    <div key={i} className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4">
                                        <h1 className=" text-black font-semibold text-center w-40">
                                            {`${value["name"]} - [${value["code"]}]`}
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg" onClick={() => {
                            setmar(true);
                        }}>
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className={`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${mar ? "" : "hidden"} grid place-items-center`}>
                        <div className="bg-white p-10 cursor-pointer">
                            <div className="min-h-80 overflow-y-scroll no-scrollbar w-80">
                                {market.map((val: any, i: number) => {
                                    return (
                                        <h1 onClick={() => {
                                            if (selmarket.includes(val)) {
                                                let addcur = selmarket.filter((data) => data != val);
                                                setSelmarket(addcur);
                                            } else {
                                                setSelmarket([val]);
                                            }
                                        }} key={i} className={`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selmarket.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`}>{val["code"]} - {val["name"]}</h1>
                                    );
                                })}
                            </div>
                            <div onClick={() => {
                                setmar(false);
                            }} className="my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center">Close</div>
                        </div>
                    </div>
                    {/* main market end here */}

                    {/* other market start here */}
                    <p className="text-black text-left font-normal text-lg  mt-4">Other markets</p>
                    <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full">
                        <div className="flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar">
                            {selorthermarket.map((value: any, i: number) => {

                                return (
                                    <div key={i} className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4">
                                        <h1 className=" text-black font-semibold text-center w-40">
                                            {`${value["name"]} - [${value["code"]}]`}
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg" onClick={() => {
                            setort(true);
                        }}>
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className={`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${ort ? "" : "hidden"} grid place-items-center`}>
                        <div className="bg-white p-10 cursor-pointer">
                            <div className="min-h-80 w-80 overflow-y-scroll no-scrollbar">
                                {market.map((val: any, i: number) => {
                                    return (
                                        <h1 onClick={() => {
                                            if (selorthermarket.includes(val)) {
                                                let addcur = selorthermarket.filter((data) => data != val);
                                                setSelorthermarket(addcur);
                                            } else {
                                                setSelorthermarket([...selorthermarket, val]);
                                            }
                                        }} key={i} className={`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selorthermarket.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`}>{val["code"]} - {val["name"]} </h1>
                                    );
                                })}
                            </div>
                            <div onClick={() => {
                                setort(false);
                            }} className="my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center">Close</div>
                        </div>
                    </div>
                    {/* other market end here */}

                    {/* category start here */}
                    <p className="text-black text-left font-normal text-lg  mt-4">Category</p>
                    <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full">
                        <div className="flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar">
                            {selcategory.map((value: any, i: number) => {
                                return (
                                    <div key={i} className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4">
                                        <h1 className=" text-black font-semibold text-center w-40">
                                            {`${value["categoryName"]} - [${value["categoryCode"]}]`}
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg" onClick={() => {
                            setcat(true);
                        }}>
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className={`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${cat ? "" : "hidden"} grid place-items-center`}>
                        <div className="bg-white p-10 cursor-pointer">
                            <div className="min-h-80 w-80 overflow-y-scroll no-scrollbar">
                                {category.map((val: any, i: number) => {
                                    return (
                                        <h1 onClick={() => {
                                            if (selcategory.includes(val)) {
                                                let addcur = selcategory.filter((data) => data != val);
                                                setSelcategory(addcur);
                                            } else {
                                                setSelcategory([...selcategory, val]);
                                            }
                                        }} key={i} className={`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selcategory.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`}>{val["categoryCode"]} - {val["categoryName"]}   </h1>
                                    );
                                })}
                            </div>
                            <div onClick={() => {
                                setcat(false);
                            }} className="my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center">Close</div>
                        </div>
                    </div>
                    {/* category end here */}
                    {/* currency start here */}
                    <p className="text-black text-left font-normal text-lg  mt-4">Account currency</p>
                    <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full">
                        <div className="flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar">
                            {selcurrency.map((value: any, i: number) => {

                                return (
                                    <div key={i} className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4">
                                        <h1 className=" text-black font-semibold text-center w-32">
                                            {`${value["currencyName"]} - [${value["currencyCode"]}]`}
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg" onClick={() => {
                            setcur(true);
                        }}>
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className={`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${cur ? "" : "hidden"} grid place-items-center`}>
                        <div className="bg-white p-10 cursor-pointer">
                            <div className="min-h-80 overflow-y-scroll no-scrollbar">
                                {currency.map((val: any, i: number) => {
                                    return (
                                        <h1 onClick={() => {
                                            if (selcurrency.includes(val)) {
                                                let addcur = selcurrency.filter((data) => data != val);
                                                setSelcurrency(addcur);
                                            } else {
                                                setSelcurrency([val]);
                                            }
                                        }} key={i} className={`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selcurrency.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`}>{val["currencyCode"]} - {val["currencyName"]}  {he.decode(val["currencyAsciiSymbol"])} </h1>
                                    );
                                })}
                            </div>
                            <div onClick={() => {
                                setcur(false);
                            }} className="my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center">Close</div>
                        </div>
                    </div>
                    {/* currency end here */}
                    {/* languages start here */}
                    <p className="text-black text-left font-normal text-lg  mt-4">Languages</p>
                    <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full">
                        <div className="flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar">
                            {sellanguages.map((value: any, i: number) => {
                                return (
                                    <div key={i} className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4">
                                        <h1 className=" text-black font-semibold text-center w-32">
                                            {`${value["languageName"]} - [${value["languageCode"]}]`}
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg" onClick={() => {
                            setlan(true);
                        }}>
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className={`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${lan ? "" : "hidden"} grid place-items-center`}>
                        <div className="bg-white p-10 cursor-pointer">
                            <div className="h-80 overflow-y-scroll no-scrollbar">
                                {languages.map((val: any, i: number) => {
                                    return (
                                        <h1 onClick={() => {
                                            if (sellanguages.includes(val)) {
                                                let addcur = sellanguages.filter((data) => data != val);
                                                setSellanguages(addcur);
                                            } else {
                                                setSellanguages([...sellanguages, val]);
                                            }
                                        }} key={i} className={`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${sellanguages.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`}>{val["languageCode"]} - {val["languageName"]}  {he.decode(val["languageAsciiSymbol"])} </h1>
                                    );
                                })}
                            </div>
                            <div onClick={() => {
                                setlan(false);
                            }} className="my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center">Close</div>
                        </div>
                    </div>
                    {/* languages end here */}
                    {(error == "" || error == null || error == undefined) ? null :
                        <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                    }
                    <div onClick={async () => {

                        const ids = (myobj: any[]): String => {
                            let res: String = "";
                            for (let i = 0; i < myobj.length; i++) {
                                if (i == myobj.length - 1) {
                                    res += myobj[i]["id"];
                                } else {
                                    res += myobj[i]["id"] + ",";
                                }
                            }
                            return res;
                        }
                        if (selcurrency.length == 0) {
                            setError("Select the currecny.");
                        } else if (selcategory.length == 0) {
                            setError("Select the category.")
                        } else if (sellanguages.length == 0) {
                            setError("Select the languages.")
                        } else if (selmarket.length == 0) {
                            setError("Select the main market.")
                        } else if (selorthermarket.length == 0) {
                            setError("Select the other markder");
                        } else {
                            let req = {
                                "id": userID,
                                "currencyId": selcurrency[0]["id"],
                                "languages": ids(sellanguages),
                                "categories": ids(selcategory),
                                "marketId": selmarket[0]["id"],
                                "markets": ids(selorthermarket)
                            };

                            const data = await axios({
                                method: 'post',
                                url: `${BaseUrl}/api/updateuser`,
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
                            if (data.data.status == false) {
                                return setError(data.data.message);
                            }
                            setIndex(3);
                            nextButton.current!.click();
                        }
                    }}>
                        <CusButton text="Next" textColor={"text-white"} width={'w-full'} background={"bg-primary"} fontwidth={"font-bold"}></CusButton>
                    </div>
                    <Form method="post" className="hidden">
                        <input type="hidden" name="id" value={userID.toString()} />
                        <button ref={nextButton} name="submit">Submit</button>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default SecondPage;

export const action: ActionFunction = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const value = Object.fromEntries(formData);

    const userdata = await axios({
        method: 'post',
        url: `${BaseUrl}/api/getuser`,
        data: { "id": value.id },
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
    if (userdata.data.status == false) {
        return { message: userdata.data.message };
    } else {
        return redirect("/home/profilecomplete/thirdpage", {
            headers: {
                "Set-Cookie": await userPrefs.serialize({ user: userdata.data.data[0], isLogin: true }),
            },
        });
    }
}
