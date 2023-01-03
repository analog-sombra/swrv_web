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
                    <div className="grow"></div>

                    <CusButton text="Campaign" fontwidth="font-bold" background="bg-cyan-300" textColor="text-black"></CusButton>
                    <div className="w-8"></div>
                    <CusButton text="Brand" fontwidth="font-bold" background="bg-gray-300" textColor="text-gray-600"></CusButton>
                </div>
            </div>
        </>
    );
}

export default FindCampaign;