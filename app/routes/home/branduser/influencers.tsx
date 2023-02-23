import { Link } from "@remix-run/react";
import InfluencerCard from "~/components/utils/influencercard";

const Influencers = () => {
    return (
        <>
            <div className="flex gap-x-4">
                <Link to="/home/branduser" className="rounded-md py-1 w-48 text-lg font-medium text-center text-black bg-white cursor-pointer">Snapshot</Link>
                <Link to="/home/branduser/influencers" className="rounded-md py-1 w-48 text-lg font-medium text-center text-white bg-primary cursor-pointer">Influencers</Link>
                <Link to="/home/branduser/payments" className="rounded-md py-1 w-48 text-lg font-medium text-center text-black bg-white cursor-pointer">Payments</Link>
            </div>
           
            <div className="grid gap-4 grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4 place-items-center bg-white rounded-lg p-6 shadow-xl">
                <InfluencerCard star={3} image="/images/inf/inf6.png" name="Adidas"></InfluencerCard>
                <InfluencerCard star={5} image="/images/inf/inf2.png" name="Adidas"></InfluencerCard>
                <InfluencerCard star={3} image="/images/inf/inf3.png" name="Adidas"></InfluencerCard>
                <InfluencerCard star={4} image="/images/inf/inf14.png" name="Adidas"></InfluencerCard>
            </div>

        </>
    );
}
export default Influencers;