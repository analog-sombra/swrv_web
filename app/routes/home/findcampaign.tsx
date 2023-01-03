import { CusButton } from "~/components/utils/buttont";

const FindCampaign = () => {
    return (
        <>
            <div>
                <div className="flex">
                    <div>
                        <h1 className="text-2xl font-bold text-black text-left mt-4">Find campaign</h1>
                        <p className="text-md font-normal text-black text-left">Here you can manage all the campaigns that you are participating in.</p>
                    </div>

                    <CusButton text="Campaign" fontwidth="font-bold" background="bg-rose-500" textColor="text-black"></CusButton>
                </div>
            </div>
        </>
    );
}

export default FindCampaign;