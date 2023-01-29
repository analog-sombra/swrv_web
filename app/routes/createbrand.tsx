import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LoaderArgs, LoaderFunction, json } from "@remix-run/node";
import { NavLink, useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useRef, useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import { userPrefs } from "~/cookies";
import { UploadFile } from "~/utils";
import * as EmailValidator from 'email-validator';
export const loader: LoaderFunction = async (props: LoaderArgs) => {
    const cookieHeader = props.request.headers.get("Cookie");
    const cookie = await userPrefs.parse(cookieHeader);
    return json({ user: cookie.user });
}

const createBarnd = () => {
    const navigator = useNavigate();

    const userdata = useLoaderData();
    const userId: string = userdata.user.id
    const [error, setError] = useState<String>("");
    const [img, setImale] = useState<File | null>(null);
    let imgref = useRef<HTMLInputElement | null>(null);
    const [imgerror, setImgerror] = useState<string | null>(null);
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

    const nameRef = useRef<HTMLInputElement | null>(null);
    const codeRef = useRef<HTMLInputElement | null>(null);
    const addressRef = useRef<HTMLInputElement | null>(null);
    const websiteRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const binfoRef = useRef<HTMLTextAreaElement | null>(null);
    const cinfoRef = useRef<HTMLTextAreaElement | null>(null);


    return (
        <>
            <div className={`w-full h-screen bg-black bg-opacity-25 fixed top-0 left-0  place-items-center ${citybox ? "grid" : "hidden"}`}>
                <div className="bg-white shadow-md w-80 rounded-lg p-4">
                    {
                        searchcity.length == 0 ?
                            <div className="w-80 h-96">
                                <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">No city found with this name</div>
                                <button className="px-5 mx-auto bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4" onClick={() => {
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
            <div className="w-full pt-4 px-4 bg-background pb-10">
                <div className="w-full rounded-lg bg-white grid place-items-center shadow-lg py-2 sm:w-96 mx-auto">
                    <NavLink to={"/"} className={"cursor-pointer"}>
                        <img src="./images/swrvlogo.png" className="w-28 lg:w-32" />
                    </NavLink>
                </div>
                <div className="bg-white w-full shadow-xl p-4 mt-4 rounded-lg mx-auto sm:w-96">
                    <div className="hidden">
                        <input type="file" accept="image/*" ref={imgref} onChange={(value) => {
                            let file_size = parseInt(((value!.target.files![0].size / 1024) / 1024).toString());
                            if (file_size < 4) {
                                setImgerror(null);
                                setImale(value!.target.files![0]);
                            } else {
                                setImgerror("Image file size must be less then 4 mb");
                            }
                        }} />
                    </div>
                    <div className="bg-gray-200 rounded-lg my-6 mr-6 p-4 text-gray-400 flex w-full items-center justify-center">
                        <div className="grid place-items-center w-40 mr-4 h-40 object-cover">
                            {img == null ? <img src="/images/icons/gallery.png" alt="error" className="w-40 object-cover inline-block" /> : <img src={URL.createObjectURL(img)} alt="error" className="w-20 h-20 inline-block object-cover rounded-md" />}
                        </div>
                        <div>
                            <p className="mt-4">
                                Drop profile photo here.
                            </p>
                            <p className="mt-4">
                                The image should either be jpg
                                jped or png format and be a maximum size of 4 MB
                            </p>
                            <div className="mt-4">
                                {(imgerror == "" || imgerror == null || imgerror == undefined) ? null :
                                    <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{imgerror}</div>
                                }
                                <div onClick={() => { imgref.current?.click(); }}>
                                    <CusButton text="Upload" textColor={"text-white"} width={'w-full'} background={"bg-gray-400"}></CusButton>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Barnd Name</h2>
                    <input ref={nameRef} className="p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" />
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Barnd code</h2>
                    <input ref={codeRef} className="p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" />
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Barnd website</h2>
                    <input ref={websiteRef} className="p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" />
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Barnd address</h2>
                    <input ref={addressRef} className="p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" />
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Brand city</h2>
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
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Support Contact</h2>
                    <div className="p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md flex">
                        <div className="text-center text-black font-normal text-md mr-4">{selectedcity == null ? 0 : selectedcity["country"]["isd"]}</div>
                        <input onChange={handelcontent} value={contactnumber} type={"text"} maxLength={10} className="w-full outline-none bg-transparent focus:border-gray-300 rounded-md resize-none" />
                    </div>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Support Email</h2>
                    <input ref={emailRef} className="p-2 w-full outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none" />
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Brand info</h2>
                    <textarea ref={binfoRef} className="p-2 w-full h-32 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"  ></textarea>
                    <h2 className="text-primary tect-xl font-medium text-left my-1">Campany info</h2>
                    <textarea ref={cinfoRef} className="p-2 w-full h-32 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"></textarea>
                    {(error == "" || error == null || error == undefined) ? null :
                        <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                    }
                    <div onClick={async () => {
                        if (img == null || img == undefined) {
                            setError("Select the image");
                        } else if (nameRef.current?.value == null || nameRef.current?.value == undefined || nameRef.current?.value == "") {
                            setError("Fill the Brand name");
                        }
                        else if (codeRef.current?.value == null || codeRef.current?.value == undefined || codeRef.current?.value == "") {
                            setError("Fill the Brand code");
                        }
                        else if (websiteRef.current?.value == null || websiteRef.current?.value == undefined || websiteRef.current?.value == "") {
                            setError("Fill the Brand website");
                        }

                        else if (addressRef.current?.value == null || addressRef.current?.value == undefined || addressRef.current?.value == "") {
                            setError("Fill the Brand address");
                        }
                        else if (selectedcity == null) {
                            setError("Fill the city");
                        }
                        else if (contactnumber == null || contactnumber == undefined || contactnumber == 0) {
                            setError("Fill the contact number");
                        }
                        else if (emailRef.current?.value == null || emailRef.current?.value == undefined || emailRef.current?.value == "") {
                            setError("Fill the Brand info");
                        }
                        else if (!EmailValidator.validate(emailRef.current?.value)) {
                            setError("Enter valid email");

                        }
                        else if (contactnumber.toString().length != 10) {
                            setError("Enter a 10 degit valid contact number");
                        }
                        else if (binfoRef.current?.value == null || binfoRef.current?.value == undefined || binfoRef.current?.value == "") {
                            setError("Fill the Brand info");
                        }
                        else if (cinfoRef.current?.value == null || cinfoRef.current?.value == undefined || cinfoRef.current?.value == "") {
                            setError("Fill the Campany info");
                        } else {
                            const imageurl = await UploadFile(img);
                            let req = {
                                "userId": userId,
                                "brandLogoUrl": imageurl,
                                "brandName": nameRef.current?.value,
                                "brandCode": codeRef.current?.value,
                                "brandWebUrl": websiteRef.current?.value,
                                "brandFullRegisteredAddress": addressRef.current?.value,
                                "brandSupportEmail": emailRef.current?.value,
                                "brandSupportContact": contactnumber,
                                "brandBioInfo": binfoRef.current?.value,
                                "comapnyBio": cinfoRef.current?.value,
                                "cityId": selectedcity["id"],
                            };

                            const data = await axios({
                                method: 'post',
                                url: `${BaseUrl}/api/add-brand`,
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
                            return navigator("/home");
                        }
                    }}>
                        <CusButton text="Create Brand" background="bg-secondary" textColor={"text-white"} width={"w-full"}></CusButton>
                    </div>
                </div>
            </div>
        </>
    );
};


export default createBarnd;