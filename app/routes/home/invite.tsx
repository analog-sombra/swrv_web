import { CusButton } from "~/components/utils/buttont";

const Invite = () => {
    return (
        <>
            <div>
                <div className="grid place-items-center w-full bg-yellow-500 rounded-xl shadow-xl my-6">
                    <img src="/images/cashgirl.png" alt="error" className="h-72" />
                </div>
                <div className="flex gap-4 grow flex-col lg:flex-row">
                    <div className="bg-white rounded-lg shadow-xl p-4 lg:w-96">
                        <h1 className="text-black text-xl font-bold text-left">Refer an influencer or brand</h1>
                        <p className="text-black text-left font-normal text-md">Name</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-md mt-4">Email</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <p className="text-black text-left font-normal text-md mt-4">Contact Number</p>
                        <input type={"text"} className="bg-[#EEEEEE]  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" />
                        <div className=" my-2">
                            <CusButton text="Invite" background="bg-[#01FFF4]" fontwidth="font-bold" textColor={"text-primary"} width="w-full"></CusButton>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-4 grow w-full overflow-x-auto">
                        <h1 className="text-black text-xl font-bold text-left">Referral status</h1>
                        <table className="md:w-full md:table-auto border-separate border-spacing-y-3 w-[700px]">
                            <thead className="w-full bg-gray-100 rounded-xl p-2">
                                <tr>
                                    <th scope="col" className="mt-2 font-normal p-2 text-left w-20"></th>
                                    <th scope="col" className="mt-2 font-normal p-2 text-left w-40">Name</th>
                                    <th scope="col" className="mt-2 font-normal p-2 text-left">Email</th>
                                    <th scope="col" className="mt-2 font-normal p-2 text-left">Contact</th>
                                    <th scope="col" className="mt-2 font-normal p-2 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody className="gap-y-4">
                                <tr className="my-2">
                                    <td><img src="/images/inf/inf6.png" alt="error" className="w-12 h-12 rounded-md object-cover" /></td>
                                    <td>Sanjay Thomas</td>
                                    <td>Sanjaythomas@gmail.com</td>
                                    <td>+91 89988778</td>
                                    <td className="text-red-500 font-medium">Panding</td>

                                </tr>
                                <tr className="my-2">
                                    <td><img src="/images/inf/inf8.png" alt="error" className="w-12 h-12 rounded-md object-cover" /></td>
                                    <td>Sanjay Thomas</td>
                                    <td>Sanjaythomas@gmail.com</td>
                                    <td>+91 89988778</td>
                                    <td className="text-red-500 font-medium">Panding</td>

                                </tr>
                                <tr className="my-2">
                                    <td><img src="/images/inf/inf9.png" alt="error" className="w-12 h-12 rounded-md object-cover" /></td>
                                    <td>Sanjay Thomas</td>
                                    <td>Sanjaythomas@gmail.com</td>
                                    <td>+91 89988778</td>
                                    <td className="text-red-500 font-medium">Panding</td>

                                </tr>
                                <tr className="my-2">
                                    <td><img src="/images/inf/inf14.png" alt="error" className="w-12 h-12 rounded-md object-cover" /></td>
                                    <td>Sanjay Thomas</td>
                                    <td>Sanjaythomas@gmail.com</td>
                                    <td>+91 89988778</td>
                                    <td className="text-red-500 font-medium">Panding</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Invite;