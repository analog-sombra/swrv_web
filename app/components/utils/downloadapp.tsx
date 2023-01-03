import { CusButton } from "./buttont";

export const DownloadApp = () => {
    return (
        <>
            <div className="bg-[#0000004C]  rounded-xl flex mt-8 p-6 flex-col md:flex-row">
                <div>
                    <h3 className="text-white text-4xl font-bold">Join the largest <br /> influencer network</h3>
                    <h3 className="text-white text-md font-normal mt-4">Instant access to top influencers</h3>
                </div>
                <div className="grow"></div>
                <div className="flex">
                    <div>
                        <CusButton text="Download Our app" background={"bg-secondary"} ></CusButton>
                    </div>
                </div>
            </div>
        </>
    );
}