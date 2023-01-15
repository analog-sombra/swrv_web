import { faAdd, faCheck, faCircleXmark, faPaperclip, faRemove, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";
import CreateCampaignStore from "~/state/campaign/createcampaign";
import { useEffect, useRef, useState } from "react";
import { Rating } from 'react-simple-star-rating'

export const loader = async () => {
    const platform = await axios.post(`${BaseUrl}/api/getplatform`);
    return json({ platform: platform.data.data });
}
const Step2 = () => {

    const mediatype = ["Post", "Story", "Reel", "Video", "Audio"];

    const data = useLoaderData();
    const navigator = useNavigate();

    const campaginType = CreateCampaignStore((state) => state.campaignTypeId);
    const [error, setError] = useState<string | null>(null);

    const mendtionText = useRef<HTMLInputElement>(null);
    const [menerror, setMenError] = useState<string | null>(null);
    const [addmendtion, setAddMendtion] = useState<boolean>(false);
    const mendtion = CreateCampaignStore((state) => state.mendtion);
    const removeMendtion = CreateCampaignStore((state) => state.removeMeddtion);
    const clearMendtion = CreateCampaignStore((state) => state.clearMendtion);
    const addMendtion = CreateCampaignStore((state) => state.addMendtion);


    const hashtagText = useRef<HTMLInputElement>(null);
    const [hasherror, setHashError] = useState<string | null>(null);
    const [addhashtag, setAddHashtag] = useState<boolean>(false);
    const hashtag = CreateCampaignStore((state) => state.hashtag);
    const removeHashtag = CreateCampaignStore((state) => state.removeHashtag);
    const clearHashtag = CreateCampaignStore((state) => state.clearHashtag);
    const addHashtag = CreateCampaignStore((state) => state.addHashtag);


    const dosText = useRef<HTMLInputElement>(null);
    const [doserror, setDosError] = useState<string | null>(null);
    const [adddos, setAddDos] = useState<boolean>(false);
    const dos = CreateCampaignStore((state) => state.dos);
    const removeDos = CreateCampaignStore((state) => state.removeDos);
    const addDos = CreateCampaignStore((state) => state.addDos);


    const dontsText = useRef<HTMLInputElement>(null);
    const [dontserror, setDontsError] = useState<string | null>(null);
    const [adddonts, setAddDonts] = useState<boolean>(false);
    const donts = CreateCampaignStore((state) => state.donts);
    const removeDonts = CreateCampaignStore((state) => state.removeDonts);
    const addDonts = CreateCampaignStore((state) => state.addDonts);


    const inputFile = useRef<HTMLInputElement | null>(null);
    const [pdferror, setPdferror] = useState<string | null>(null);
    const pdfFile = CreateCampaignStore((state) => state.pdffile);
    const addPdfFile = CreateCampaignStore((state) => state.addPdfFile);

    const platform = CreateCampaignStore((state) => state.platform);
    const setPlatform = CreateCampaignStore((state) => state.setPlatform);

    const media = CreateCampaignStore((state) => state.media);
    const setMedia = CreateCampaignStore((state) => state.setMedia);


    const campinfo = useRef<HTMLTextAreaElement | null>(null);
    const campaignInfo = CreateCampaignStore((state) => state.campaignInfo);
    const setCampaignInfo = CreateCampaignStore((state) => state.setCampaignInfo);



    const affLink = useRef<HTMLInputElement | null>(null);
    const affiliatedLinks = CreateCampaignStore((state) => state.affiliatedLinks);
    const setAffiliatedLinks = CreateCampaignStore((state) => state.setAffiliatedLinks);

    const discCopon = useRef<HTMLInputElement | null>(null);
    const discoutCoupon = CreateCampaignStore((state) => state.discoutCoupon);
    const setDiscoutCoupon = CreateCampaignStore((state) => state.setDiscoutCoupon);


    const tar = useRef<HTMLInputElement | null>(null);
    const target = CreateCampaignStore((state) => state.target);
    const setTarget = CreateCampaignStore((state) => state.setTarget);

    const mintar = useRef<HTMLInputElement | null>(null);
    const mintarget = CreateCampaignStore((state) => state.minTarget);
    const setMintarget = CreateCampaignStore((state) => state.setMinTarget);




    const [rating, setRating] = useState<number>(0)
    const getrating = CreateCampaignStore((state) => state.rating);
    const setrating = CreateCampaignStore((state) => state.setRating);

    const handleRating = (rate: number) => {
        setRating(rate);
    }

    const [approval, setApproval] = useState<boolean | null>(null);

    const getapproval = CreateCampaignStore((state) => state.approval);
    const setapproval = CreateCampaignStore((state) => state.setApproval);

    useEffect(() => {
        campinfo!.current!.value = campaignInfo;
        setApproval(getapproval);
        setRating(getrating);
        if (affLink.current?.value != null) {
            affLink!.current!.value = affiliatedLinks;
        }
        if (discCopon.current?.value != null) {
            discCopon!.current!.value = discoutCoupon;
        }
        if (tar.current?.value != null) {
            tar!.current!.value = target.toString();
        }
        if (mintar.current?.value != null) {
            mintar!.current!.value = mintarget.toString();
        }
    }, []);


    return (
        <>
            <div className="bg-white shadow-xl rounded-xl px-8 py-4 mt-4">
                <h2 className="text-black tect-xl font-medium text-left">
                    {(campaginType == "1") ? "Sponsored post" : (campaginType == "2") ? "Review post" : (campaginType == "3") ? "Discount and Affiliated post" : "Contest post"}
                </h2>
                <div className="md:flex gap-2 mt-2 grid place-items-center grid-cols-4">
                    {data.platform.map((val: any, i: number) => {
                        return (
                            <div key={i} className={` p-2 rounded-lg ${platform.includes(val.id) ? "bg-white shadow-xl " : "bg-gray-200"} `} onClick={() => {
                                setPlatform(val.id);
                            }}>
                                <img src={data.platform[i]["platformLogoUrl"]} alt="error" className="w-10 h-10" />
                            </div>
                        );
                    })}
                </div>
                <div className="lg:flex gap-4 mt-4 grid place-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                    {mediatype.map((val: string, i: number) => {
                        return (
                            <div key={i} className={`cursor-pointer text-primary text-lg text-center font-normal w-28 py-1  rounded-xl ${val == media ? "bg-white shadow-xl" : "bg-gray-100"}`} onClick={() => {
                                setMedia(val);
                            }}>
                                {val}
                            </div>
                        )
                    })}
                </div>
                {/* mendtion start here */}
                <h2 className="text-primary tect-xl font-medium text-left my-1">Mentions</h2>
                <div className="flex">
                    <div className="bg-[#EEEEEE]  h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72">
                        <div className="flex gap-x-2 overflow-x-scroll no-scrollbar">
                            {mendtion.map((value: string, i: number) => {
                                return (
                                    <div key={i} className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4">
                                        <div className=" text-black font-semibold ">
                                            {`@${value}`}
                                        </div>
                                        <div className="grid place-items-center cursor-pointer" onClick={() => removeMendtion(value)}>
                                            <FontAwesomeIcon icon={faCircleXmark} className="text-lg font-bold text-red-500"></FontAwesomeIcon>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg" onClick={() => setAddMendtion(true)}>
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div>
                        <p className="text-primary text-center text-md font-normal my-2 w-20 cursor-pointer" onClick={clearMendtion}>clear all</p>
                    </div>
                </div>
                {
                    addmendtion ?
                        <div className="mt-4 flex">
                            <div className="grid place-items-center">
                                <input ref={mendtionText} type="text" className="bg-gray-200 w-full outline-none rounded-lg px-4 py-2" placeholder="Mendtion" />
                            </div>
                            <div className="w-6"></div>
                            <div onClick={() => {
                                if (mendtionText!.current!.value == "" || mendtionText!.current!.value == null || mendtionText!.current!.value == undefined) {
                                    setMenError("Mendtion can't be empty!")
                                } else if (mendtion.includes(mendtionText!.current!.value)) {
                                    setMenError("Mendtion already exist add a diffrent one");
                                } else if (mendtionText!.current!.value.indexOf(" ") >= 0) {

                                    setMenError("Mendtion cannot containt space");
                                }
                                else {
                                    addMendtion(mendtionText!.current!.value);
                                    mendtionText!.current!.value = "";
                                    setAddMendtion(false);
                                    setMenError(null);
                                }
                            }}>
                                <CusButton text="ADD" background="bg-primary" width={"w-20"}></CusButton>
                            </div>
                        </div>
                        : null
                }
                {(menerror == "" || menerror == null || menerror == undefined) ? null :
                    <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md">{menerror}</div>
                }
                {/* mendtion end here */}
                {/* hashtag start here */}
                <h2 className="text-primary tect-xl font-medium text-left my-1">Hashtag</h2>
                <div className="flex">
                    <div className="bg-[#EEEEEE] h-10 rounded-lg  flex gap-1 pl-2 sm:w-96 w-72">
                        <div className="flex gap-x-2 overflow-x-scroll no-scrollbar">
                            {hashtag.map((value: string, i: number) => {
                                return (
                                    <div key={i} className="flex bg-white my-1 rounded-md py-1 px-2 items-center gap-x-4">
                                        <div className=" text-black font-semibold ">
                                            {`#${value}`}
                                        </div>
                                        <div className="grid place-items-center cursor-pointer" onClick={() => removeHashtag(value)}>
                                            <FontAwesomeIcon icon={faCircleXmark} className="text-lg font-bold text-red-500"></FontAwesomeIcon>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="grow"></div>
                        <div className="grid place-items-center px-4 bg-gray-300 rounded-lg" onClick={() => setAddHashtag(true)}>
                            <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div>
                        <p className="text-primary text-center text-md font-normal my-2 w-20 cursor-pointer" onClick={clearHashtag}>clear all</p>
                    </div>
                </div>
                {
                    addhashtag ?
                        <div className="mt-4 flex">
                            <div className="grid place-items-center">
                                <input ref={hashtagText} type="text" className="bg-gray-200 w-full outline-none rounded-lg px-4 py-2" placeholder="Hashtag" />
                            </div>
                            <div className="w-6"></div>
                            <div onClick={() => {
                                if (hashtagText!.current!.value == "" || hashtagText!.current!.value == null || hashtagText!.current!.value == undefined) {
                                    setHashError("Hashtag can't be empty!")
                                } else if (hashtag.includes(hashtagText!.current!.value)) {
                                    setHashError("Hashtag already exist add a diffrent one");
                                } else if (hashtagText!.current!.value.indexOf(" ") >= 0) {
                                    setHashError("Hashtag cannot containt space");
                                }
                                else {
                                    addHashtag(hashtagText!.current!.value);
                                    hashtagText!.current!.value = "";
                                    setAddHashtag(false);
                                    setHashError(null);
                                }
                            }}>
                                <CusButton text="ADD" background="bg-primary" width={"w-20"}></CusButton>
                            </div>
                        </div>
                        : null
                }
                {(hasherror == "" || hasherror == null || hasherror == undefined) ? null :
                    <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md">{hasherror}</div>
                }
                {/* hashtag end here */}
                {
                    campaginType == "2" ?
                        <>
                            <h2 className="text-primary tect-xl font-medium text-left my-1">Minimum rating required</h2>
                            <div className="w-60">
                                <Rating
                                    initialValue={rating}
                                    onClick={handleRating}
                                />
                            </div>
                        </> : null
                }
                {
                    campaginType == "3" ?
                        <>
                            <h2 className="text-primary tect-xl font-medium text-left my-1">Affiliated links (optional)</h2>
                            <input ref={affLink} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                            <h2 className="text-primary tect-xl font-medium text-left my-1">Discount coupons</h2>
                            <input ref={discCopon} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        </>
                        : null
                }
                {
                    campaginType == "4" ?
                        <>
                            <div className="flex flex-col lg:flex-row">
                                <div>
                                    <h2 className="text-primary tect-xl font-medium text-left my-1">Target</h2>
                                    <input ref={tar} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                                </div>
                                <div className="w-8"></div>
                                <div>
                                    <h2 className="text-primary tect-xl font-medium text-left my-1">Min target</h2>
                                    <input ref={mintar} type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                                </div>
                            </div>
                        </>
                        : null
                }
                <h2 className="text-primary tect-xl font-medium text-left my-1">Campaign info</h2>
                <textarea ref={campinfo} className="p-4 w-full h-40 outline-none bg-[#EEEEEE] focus:border-gray-300 rounded-md resize-none"  ></textarea>
                <h2 className="text-primary tect-xl font-medium text-left my-1">Optional attachments</h2>
                <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex items-center pl-4">
                    <h3 className="text-black font-semibold  text-md">{pdfFile.length == 0 ? "" : pdfFile[0].name}</h3>
                    <div className="grow"></div>
                    <div className="grid place-items-center px-4 bg-gray-300 rounded-lg cursor-pointer h-full" onClick={() => { inputFile!.current!.click() }}>
                        <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
                    </div>
                </div>
                <div className="hidden">
                    <input ref={inputFile} type="file" accept="application/pdf" onChange={(value) => {
                        let file_size = parseInt(((value!.target.files![0].size / 1024) / 1024).toString());
                        if (file_size < 4) {
                            setPdferror(null);
                            addPdfFile(value!.target.files![0]);
                        } else {
                            setPdferror("Pdf file size must be less then 4 mb");
                        }
                    }} />
                </div>
                {(pdferror == "" || pdferror == null || pdferror == undefined) ? null :
                    <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{pdferror}</div>
                }

                <h2 className="text-primary tect-xl font-medium text-left my-1">You should</h2>
                <div className="flex flex-col lg:flex-row gap-2">
                    {/* dos start here */}
                    <div className="w-full">
                        <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex">
                            <div className="grid place-items-center px-4 rounded-lg font-bold text-green-500">
                                <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                            </div>
                            <div className="grid place-items-center">
                                <h2 className="text-primary text-lg text-left font-medium">Do</h2>
                            </div>
                            <div className="grow"></div>
                            <div className="grid place-items-center px-4 bg-gray-300 rounded-lg" onClick={() => setAddDos(true)}>
                                <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                            </div>
                        </div>
                        <div>
                            {dos.map((value: string, i: number) => {
                                return (
                                    <div key={i}>
                                        <div className="bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex">
                                            {value}
                                            <div className="grow"> </div>
                                            <div className="grid place-items-center ml-2 cursor-pointer" onClick={() => removeDos(value)}>
                                                <FontAwesomeIcon icon={faCircleXmark} className="text-lg font-bold text-red-500"></FontAwesomeIcon>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {
                            adddos ?
                                <div className="mt-4 flex">
                                    <div className="grid place-items-center">
                                        <input ref={dosText} type="text" className="bg-gray-200 w-full outline-none rounded-lg px-4 py-2" placeholder="Do's" />
                                    </div>
                                    <div className="w-6"></div>
                                    <div onClick={() => {
                                        if (dosText!.current!.value == "" || dosText!.current!.value == null || dosText!.current!.value == undefined) {
                                            setDosError("Dos can't be empty!")
                                        } else if (dos.includes(dosText!.current!.value)) {
                                            setDosError("Dos already exist add a diffrent one");
                                        }
                                        else {
                                            addDos(dosText!.current!.value);
                                            dosText!.current!.value = "";
                                            setAddDos(false);
                                            setDosError(null);
                                        }
                                    }}>
                                        <CusButton text="ADD" background="bg-primary" width={"w-20"}></CusButton>
                                    </div>
                                </div>
                                : null
                        }
                        {(doserror == "" || doserror == null || doserror == undefined) ? null :
                            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md">{doserror}</div>
                        }
                    </div>
                    {/* dos end here */}
                    <div className="w-10"></div>
                    {/* donts start here */}
                    <div className="w-full">
                        <div className="bg-[#EEEEEE] w-full h-10 rounded-lg flex">
                            <div className="grid place-items-center px-4 rounded-lg font-bold text-red-500">
                                <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                            </div>
                            <div className="grid place-items-center">
                                <h2 className="text-primary text-lg text-left font-medium">Don't</h2>
                            </div>
                            <div className="grow"></div>
                            <div className="grid place-items-center px-4 bg-gray-300 rounded-lg" onClick={() => setAddDonts(true)}>
                                <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                            </div>
                        </div>

                        <div>
                            {donts.map((value: string, i: number) => {
                                return (
                                    <div key={i}>
                                        <div className="bg-white shadow-lg py-1 px-2 rounded-lg text-xl my-2 text-black flex">
                                            {value}
                                            <div className="grow"> </div>
                                            <div className="grid place-items-center ml-2 cursor-pointer" onClick={() => removeDonts(value)}>
                                                <FontAwesomeIcon icon={faCircleXmark} className="text-lg font-bold text-red-500"></FontAwesomeIcon>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {
                            adddonts ?
                                <div className="mt-4 flex">
                                    <div className="grid place-items-center">
                                        <input ref={dontsText} type="text" className="bg-gray-200 w-full outline-none rounded-lg px-4 py-2" placeholder="Dont's" />
                                    </div>
                                    <div className="w-6"></div>
                                    <div onClick={() => {
                                        if (dontsText!.current!.value == "" || dontsText!.current!.value == null || dontsText!.current!.value == undefined) {
                                            setDontsError("Donts can't be empty!")
                                        } else if (donts.includes(dontsText!.current!.value)) {
                                            setDontsError("Donts already exist add a diffrent one");
                                        }
                                        else {
                                            addDonts(dontsText!.current!.value);
                                            dontsText!.current!.value = "";
                                            setAddDonts(false);
                                            setDontsError(null);
                                        }
                                    }}>
                                        <CusButton text="ADD" background="bg-primary" width={"w-20"}></CusButton>
                                    </div>
                                </div>
                                : null
                        }
                        {(dontserror == "" || dontserror == null || dontserror == undefined) ? null :
                            <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-xl text-red-500 text-md font-normal text-md">{dontserror}</div>
                        }
                    </div>
                    {/* donts end here */}
                </div>
                <div className="flex flex-col lg:flex-row items-center mt-4">
                    <h2 className="text-primary tect-xl font-medium text-left my-1">
                        Does the influencer need to seek an approval of the post before posting
                    </h2>
                    <div className="grow"></div>
                    <div className={"flex items-center"}>
                        <div onClick={() => { setApproval(true) }}>
                            <CusButton text="Yes" textColor={approval ? "text-white" : "text-primary"} background={approval ? "bg-primary" : "bg-gray-100"} width={"w-20"}></CusButton>
                        </div>
                        <div className="w-10"></div>
                        <div onClick={() => { setApproval(false) }}>
                            <CusButton text="No" textColor={approval == false ? "text-white" : "text-primary"} background={approval == false ? "bg-primary" : "bg-gray-100"} width={"w-20"}></CusButton>
                        </div>
                    </div>
                </div>
                {(error == "" || error == null || error == undefined) ? null :
                    <div className="bg-red-500 bg-opacity-10 border-2 text-center border-red-500 rounded-md text-red-500 text-md font-normal text-md my-4">{error}</div>
                }

                <div className="flex w-full">
                    <div onClick={() => { navigator(-1) }} className="w-full">
                        <CusButton text="Back" textColor={"text-black"} background="bg-gray-100" width={"w-full"}></CusButton>
                    </div>
                    <div className="w-10"></div>
                    <div className="w-full" onClick={() => {
                        if (platform == null || platform.length == 0 || platform == undefined) {
                            setError("Select a platform");
                        } else if (media == null || media == "" || media == undefined) {
                            setError("Select a media");
                        }
                        else if (mendtion.length == 0) {
                            setError("please add at least one mendtion");
                        } else if (hashtag.length == 0) {
                            setError("please add at least one hashtag");
                        }
                        else if (campinfo.current?.value == null || campinfo.current?.value == undefined || campinfo.current?.value == "") {
                            setError("Add campaign info");
                        }
                        else if (dos.length == 0) {
                            setError("please add at least one dos");
                        }
                        else if (donts.length == 0) {
                            setError("please add at least one don't");
                        } else if (pdfFile.length == 0) {
                            setError("please add your attachment");
                        } else if (approval == null) {
                            setError("Dose influencer need to seek an approval of the post before posting?");
                        }
                        else {
                            setCampaignInfo(campinfo.current?.value);
                            setapproval(approval);

                            if (campaginType == "2") {
                                if (rating == 0) {
                                    setError("Seleect minimun rating");
                                } else {
                                    setrating(rating)
                                    navigator("/home/createcampaign/step3");

                                }
                            }
                            else if (campaginType == "3") {
                                if (discCopon.current?.value == null || discCopon.current?.value == undefined || discCopon.current?.value == "") {
                                    setError("Add Discount coupons");
                                } else {
                                    setDiscoutCoupon(discCopon.current?.value);
                                    setAffiliatedLinks(affLink.current?.value ?? "")
                                    navigator("/home/createcampaign/step3");
                                }
                            } else if (campaginType == "4") {
                                if (tar.current?.value == null || tar.current?.value == undefined || parseInt(tar.current?.value) == 0 || tar.current?.value == "") {
                                    setError("Enter target");
                                }
                                else if (mintar.current?.value == null || mintar.current?.value == undefined || parseInt(mintar.current?.value) == 0 || mintar.current?.value == "") {
                                    setError("Enter min target");
                                }
                                else if (parseInt(mintar.current?.value) > parseInt(tar.current?.value)) {
                                    setError("Target must be gretter then min target.");
                                }
                                else {
                                    setMintarget(parseInt(mintar.current?.value));
                                    setTarget(parseInt(tar.current?.value));
                                    navigator("/home/createcampaign/step3");
                                }
                            } else {
                                navigator("/home/createcampaign/step3");
                            }
                        }
                    }}>
                        <CusButton text="Next" textColor={"text-white"} background="bg-primary" width={"w-full"}></CusButton>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Step2;