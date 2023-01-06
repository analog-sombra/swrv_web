import { BrandCard } from "~/components/utils/brandcard";

const Favourite = () => {
    return (
        <>
            <div>
                <div className="flex my-6 md:flex-row flex-col">
                    <div>
                        <h1 className="text-2xl font-bold text-black text-left mt-4">Favourite brands</h1>
                        <p className="text-md font-normal text-black text-left">Here you can manage all the campaigns that you are participating in.</p>
                    </div>

                </div>
                <div className="bg-white rounded-xl shadow-xl p-10 grid grid-cols-1 place-items-center md:place-items-start md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <BrandCard image="/images/brand/adidas.jpg" name="Adidas"></BrandCard>
                    <BrandCard image="/images/brand/furinicom.jpg" name="Furinicom"></BrandCard>
                    <BrandCard image="/images/brand/lucent.jpg" name="Lucent"></BrandCard>
                    <BrandCard image="/images/brand/tronicsfix.jpg" name="Tronicsfix"></BrandCard>
                </div>
            </div>
        </>
    );
}

export default Favourite;