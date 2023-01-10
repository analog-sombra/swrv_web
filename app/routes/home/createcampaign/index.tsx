import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { json } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import axios from "axios";
import { useState } from "react";
import { CusButton } from "~/components/utils/buttont";
import { BaseUrl } from "~/const";

export const loader = async () => {
    
    const data = await axios.post(`${BaseUrl}/api/get-campaign-type`);
    return json({ data: data.data.data });
}

const Step1 = () => {
    const navigate = useNavigate();
    const [error, setError] = useState<boolean>(false);
    const data = useLoaderData();
    const catdata = data.data;

    const [camptype, setCamptype] = useState<string>("0");

    // const setcamptype = CreateCampaignStore((state) => state.addProperty);
    // const getcamptype = CreateCampaignStore((state) => state.campaign)


    const nextpage = () => {
        if (camptype === "0") {
            setError(true);
        } else {
            return navigate("/home/createcampaign/step2");
        }
    }

    return (
        <>
            <div className="bg-white shadow-xl rounded-xl px-8 py-4 mt-4">
                {
                    error ?
                        <div className="bg-red-500 bg-opacity-10 p-2 border-red-500 border rounded-xl flex items-center">
                            <div className="pr-4"><FontAwesomeIcon className="text-red-500" icon={faInfoCircle}></FontAwesomeIcon></div>
                            <h1 className="text-red-500 text-lg font-normal text-center">Please select at least one image</h1>
                        </div>
                        :
                        null
                }
                <div className="flex items-center">
                    <h1 className="text-black font-normal text-lg text-center">Select one below</h1>
                    <div className="grow"></div>
                    <div onClick={() => nextpage()}> <CusButton text="Next" textColor={"text-white"} background={"bg-primary"} fontwidth={"font-bold"}></CusButton></div>
                </div>
                <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start gap-4">
                    {catdata.map((val: unknown, i: number) => {
                        return (
                            <div key={i} className={`shadow-xl rounded-xl w-72 bg-white my-4 ${camptype == catdata[i]["id"] ? "border-2 border-gray-400" : ""}`} onClick={() => setCamptype(catdata[i]["id"])}>
                                <img src={catdata[i]["categoryPicUrl"]} alt="error" className="rounded-t-xl w-full h-40" />
                                <div className="p-6">
                                    <h1 className="text-black text-left font-medium text-lg">{catdata[i]["categoryName"]}</h1>
                                    <p className="text-sm text-gray-400 font-normal text-left">{catdata[i]["categoryDescription"]}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
export default Step1;
