import { faAdd, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { Link, useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";
import UserInputStore from "~/state/user/firstinput";

export const loader: LoaderFunction = async (props: LoaderArgs) => {

    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    const country = await axios({
        method: 'post',
        url: `${BaseUrl}/api/getcountry`,
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


    return json({ user: cookie.user, country: country.data.data });
}



const ForthPage = () => {

    const userdata = useLoaderData();
    const userId: string = userdata.user.id
    const country = userdata.country;
    const gender: String[] = ["MALE", "FEMALE", "TRANSGENDER"];

    const [selCountry, setSelCountry] = useState<any[]>([]);
    const [con, setcon] = useState<boolean>(false);

    const [selGender, setSelGender] = useState<any[]>([]);
    const [gen, setgen] = useState<boolean>(false);


    const [error, setError] = useState<String>("");
    const [cityerror, setCityerror] = useState<string | null>(null);
    const [citybox, setCitybox] = useState<boolean>(false);
    const [searchcity, setSearchcity] = useState<any[]>([]);
    const [selectedcity, setSelectedctiy] = useState<any>(null);


    const [contactnumber, setContactnumber] = useState<number>()
    const handelcontent = (e: any) => {
        setContactnumber(e.target.value.replace(/\D/g, ''));
    }

    let cityref = useRef<HTMLInputElement | null>(null);
    const getCity = async (city: String) => {
        const data = await axios.post(`${BaseUrl}/api/get-city`, { "search": city });
        setSearchcity(data.data.data);
    }

    const setIndex = UserInputStore((state) => state.setIndex);
    const navigate = useNavigate();
    const [check, setCheck] = useState<boolean>(false);
    const handleOnChange = () => {
        setCheck(!check);
    };

    return (
        <>
            <div className={`w-full h-screen bg-black bg-opacity-25 fixed top-0 left-0  place-items-center ${citybox ? "grid" : "hidden"}`}>
                <div className="bg-white shadow-md w-80 rounded-lg p-4">
                    {
                        searchcity.length == 0 ?
                            <div className="min-h-96">
                                <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">No city found with this name</div>
                                <button className="px-2 mx-auto bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4" onClick={() => {
                                    setCitybox(false)
                                }}>Close</button>
                            </div>
                            :
                            <div className="h-72 overflow-y-scroll no-scrollbar">
                                {
                                    searchcity.map((value: any, index: number) => {
                                        return (
                                            <>
                                                <div onClick={() => {
                                                    setSelectedctiy(value);
                                                    setCitybox(false);
                                                    cityref!.current!.value = "";
                                                }} key={index} className="my-6 cursor-pointer bg-white rounded-md py-1 border-2 text-center font-normal text-md hover:border-emerald-500">{value["name"]} - {value["code"]}</div>
                                            </>
                                        );
                                    })
                                }
                            </div>
                    }
                </div>
            </div>
            <div className="p-8 w-full">
                <div className="flex w-full">
                    <div className="w-full">
                        {/* country start here */}
                        <p className="text-black text-left font-normal text-lg mt-4">Country</p>
                        <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full">
                            <div className="flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar">
                                {selCountry.map((value: any, i: number) => {
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
                                setcon(true);
                            }}>
                                <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className={`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${con ? "" : "hidden"} grid place-items-center`}>
                            <div className="bg-white p-10 cursor-pointer">
                                <div className="min-h-80 overflow-y-scroll no-scrollbar w-80">
                                    {country.map((val: any, i: number) => {
                                        return (
                                            <h1 onClick={() => {
                                                if (selCountry.includes(val)) {
                                                    let addcur = selCountry.filter((data) => data != val);
                                                    setSelCountry(addcur);
                                                } else {
                                                    setSelCountry([val]);
                                                }
                                            }} key={i} className={`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selCountry.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`}>{val["code"]} - {val["name"]}</h1>
                                        );
                                    })}
                                </div>
                                <div onClick={() => {
                                    setcon(false);
                                }} className="my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center">Close</div>
                            </div>
                        </div>
                        {/* country end here */}

                        {/* Gender start here */}
                        <p className="text-black text-left font-normal text-lg  mt-4">Gender</p>
                        <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 w-full">
                            <div className="flex gap-x-2 overflow-x-scroll flex-nowrap no-scrollbar">
                                {selGender.map((value: any, i: number) => {
                                    return (
                                        <div key={i} className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4">
                                            <h1 className=" text-black font-semibold text-center w-40">
                                                {value}
                                            </h1>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="grow"></div>
                            <div className="grid place-items-center px-4 bg-gray-300 rounded-lg" onClick={() => {
                                setgen(true);
                            }}>
                                <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div className={`w-full h-screen bg-gray-300 bg-opacity-20 fixed top-0 left-0 ${gen ? "" : "hidden"} grid place-items-center`}>
                            <div className="bg-white p-10 cursor-pointer">
                                <div className="min-h-80 overflow-y-scroll no-scrollbar w-80">
                                    {gender.map((val: any, i: number) => {
                                        return (
                                            <h1 onClick={() => {
                                                if (selGender.includes(val)) {
                                                    let addcur = selGender.filter((data) => data != val);
                                                    setSelGender(addcur);
                                                } else {
                                                    setSelGender([val]);
                                                }
                                            }} key={i} className={`text-lg text-center font-normal rounded-md w-full my-2 border-2 ${selGender.includes(val) ? "border-green-500 text-green-500" : "border-gray-800 text-black"}  no-scrollbar`}>{val}</h1>
                                        );
                                    })}
                                </div>
                                <div onClick={() => {
                                    setgen(false);
                                }} className="my-4 bg-red-500 bg-opacity-10 b-2 border-red-500 px-4 py-1 text-red-500 font-medium text-center">Close</div>
                            </div>
                        </div>

                        {/* Gender end here */}
                        <p className="text-black text-left font-normal text-lg  mt-4">City</p>
                        <div className="w-full bg-[#EEEEEE] rounded-md flex p-2">
                            <div className="grow">
                                <input ref={cityref} className="h-full w-full outline-none focus:border-gray-300 bg-transparent" />
                            </div>
                            <div className="bg-white text-bold p-2 rounded-md grid place-items-center w-8 h-8 cursor-pointer" onClick={() => {
                                if (cityref.current?.value == null || cityref.current?.value == undefined || cityref.current?.value == "") {
                                    setCityerror("Enter the city name");
                                } else {
                                    setCitybox(true);
                                    setCityerror(null);
                                    getCity(cityref.current?.value ?? "");
                                }
                            }}>
                                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
                            </div>
                        </div>
                        {(cityerror == "" || cityerror == null || cityerror == undefined) ? null :
                            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{cityerror}</div>
                        }
                        {(selectedcity == "" || selectedcity == null || selectedcity == undefined) ? null :
                            <div className="bg-white bg-opacity-10 border-2 text-center border-black rounded-md text-black text-md font-normal text-md my-4">{selectedcity["name"]} - {selectedcity["code"]}</div>
                        }
                        <p className="text-black text-left font-normal text-lg  mt-4">Phone number</p>
                        <div className="p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md flex">
                            <div className="text-center text-black font-normal text-md mr-4">{selectedcity == null ? 0 : selectedcity["country"]["isd"]}</div>
                            <input onChange={handelcontent} value={contactnumber} type={"text"} maxLength={10} className="w-full outline-none bg-transparent focus:border-gray-300 rounded-md resize-none" />
                        </div>
                        <div className="flex gap-2 mt-4 items-center">
                            <div>
                                <input checked={check}
                                    onChange={handleOnChange} type={"checkbox"} name="check2" />
                            </div>
                            <p className="text-left text-[10px] text-black font-normal">The above details are true and correct</p>
                        </div>
                        {(error == "" || error == null || error == undefined) ? null :
                            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                        }
                        <div className="w-full" onClick={async () => {
                            if (selCountry.length == 0) {
                                setError("Select the country");
                            }
                            else if (gender.length == 0) {
                                setError("Select your gender");
                            }
                            else if (selectedcity == null || selCountry == undefined) {
                                setError("Select the city")
                            }
                            else if (contactnumber == null || contactnumber == undefined || contactnumber == 0) {
                                setError("Fill the contact number");
                            }
                            else if (contactnumber.toString().length != 10) {
                                setError("Enter a 10 degit valid contact number");
                            } else if (!check) {
                                setError("Check the box in order to procide");
                            } else {
                                let req = {
                                    "id": userId,
                                    "cityId": selectedcity["id"],
                                    "userContact": contactnumber,
                                    "userGender": (selGender[0] == "MALE")
                                        ? "1"
                                        : (selGender[0] == "FEMALE")
                                            ? "2"
                                            : "3"
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
                                setIndex(4);
                                navigate("/home");
                            }
                        }}>
                            <CusButton text="Next" textColor={"text-white"} width={'w-full'} background={"bg-primary"} fontwidth={"font-bold"}></CusButton>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ForthPage;