import { Link } from "@remix-run/react";
import BrandActionCard, { CardType } from "~/components/utils/brandactioncard";
import BrandProgressCard from "~/components/utils/brandprogresscard";

const Snapshot = () => {
    return (
        <>
            <div className="flex gap-x-4">
                <Link to="./" className="rounded-md py-1 w-48 text-lg font-medium text-center text-white bg-primary cursor-pointer">Snapshot</Link>
                <Link to="./influencers" className="rounded-md py-1 w-48 text-lg font-medium text-center text-black bg-white cursor-pointer">Influencers</Link>
                <Link to="./payments" className="rounded-md py-1 w-48 text-lg font-medium text-center text-black bg-white cursor-pointer">Payments</Link>
            </div>
            <div className="bg-white m-4 rounded-md p-4">
                <p className="text-black text-md font-normal">Action required</p>
                <div className="grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-start">
                    <BrandActionCard cardtype={CardType.Normal}></BrandActionCard>
                    <BrandActionCard cardtype={CardType.Panding}></BrandActionCard>
                    <BrandActionCard cardtype={CardType.Accept}></BrandActionCard>
                    <BrandActionCard cardtype={CardType.Normal}></BrandActionCard>
                </div>
            </div>
            <div className="bg-white m-4 rounded-md p-4">
                <p className="text-black text-md font-normal">In progress</p>
                <div className="grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-3 place-items-center">
                    <BrandProgressCard></BrandProgressCard>
                    <BrandProgressCard></BrandProgressCard>
                </div>
            </div>

        </>
    );
}
export default Snapshot;