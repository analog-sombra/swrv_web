import { CusButton } from "~/components/utils/buttont";

const BrandPage = () => {
    return (
        <>
            <div className="w-full mt-4 shadow-xl bg-white rounded-xl">
                <div className="w-full">
                    <img src="/images/products/shoe1.jpg" alt="error" className="w-full h-60 object-cover rounded-t-xl" />
                </div>
                <div className="flex items-center">
                    <div className="p-8">
                        <img src="/images/brand/adidas.jpg" alt="error" className="w-32 h-32 rounded-md" />
                        <h1 className="text-primary text-lg font-medium my-2">Adidas Cases</h1>
                        <p className="text-primary text-md font-normal">Category: Consumer Electronics</p>
                        <p className="text-primary text-md font-normal">www.adidas.co.in</p>
                        <CusButton text="Connect" background="bg-secondary" fontwidth="font-bold"></CusButton>
                    </div>
                    <div className="h-72 w-[2px] bg-gray-300"></div>
                    <div className="p-8">
                        <h1 className="text-primary text-lg font-medium my-2">Brand info</h1>
                        <p className="text-black text-sm font-normal">Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas® Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas® Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas® Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas® Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants.Don't miss out on Early Access sale of EOSS for members only. Become a Adi club member and get Early access to EOSS from 21st to 23rd June. adidas® Official Shop. Free Shipping. Types: Running Shoes, Running Shorts & Tights, Running Jackets, Tracksuits & Track Pants..</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BrandPage;