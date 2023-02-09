const Help = () => {
    return (
        <>
            <div>
                <div className="w-full rounded-xl shadow-xl bg-[#10BCE2] flex my-4 p-10 md:flex-row flex-col">
                    <div className="text-5xl text-primary font-bold">Hi <span className="text-white"> @ivankbfc,</span><br /> How can we help?</div>
                    <div className="grow grid place-items-center md:p-10 my-4">
                        <input type={"text"} className="placeholder:text-black bg-white opacity-30  outline-none border-none focus:border-gray-300 rounded-md w-full p-2" placeholder="search" />
                    </div>
                </div>
                <div className="w-full rounded-xl shadow-xl bg-white flex my-4 p-10 md:flex-row flex-col md:gap-x-10 gap-y-6 md:gap-y-0">
                    <div>
                        <p className="text-xl text-black font-bold">Using SWRV</p>
                        <p className="text-xl text-gray-400 font-bold mt-2">Manage your account</p>
                        <p className="text-xl text-gray-400 font-bold mt-2">Campaigns</p>
                        <p className="text-xl text-gray-400 font-bold mt-2">Safety and security</p>
                        <p className="text-xl text-gray-400 font-bold mt-2">Rules and policies</p>
                    </div>
                    <div>
                        <p className="text-xl text-black font-medium">Everything you need to know so you can use SWRV like a pro</p>
                        <div className="flex md:gap-x-16 gap-x-8">
                            <div>
                                <h2 className="text-cyan-500 mt-2">Registration</h2>
                                <h2 className="text-cyan-500 mt-2">Verification</h2>
                                <h2 className="text-cyan-500 mt-2">Social Media accounts</h2>
                                <h2 className="text-cyan-500 mt-2">Analytics</h2>
                                <h2 className="text-cyan-500 mt-2">Brands</h2>
                            </div>
                            <div>
                                <h2 className="text-cyan-500 mt-2">Campaign</h2>
                                <h2 className="text-cyan-500 mt-2">Payments</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Help;