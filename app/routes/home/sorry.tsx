const Sorry = () => {
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg p-10 mt-6 relative">
                <div className=" text-center text-[100px] font-black text-stroke text-white  absolute translate-y-40 grid place-items-center top-0 left-0 translate-x-72">
                    <div>
                        Sorry !!
                    </div>
                </div>
                <div className="w-full grid place-content-center relative">
                    <img src="/images/avatar/sorry.png" alt="error" className="h-[300px]" />
                </div>
                <div className="w-full grid place-items-center relative">

                    <p className="text-sm font-normal text-gray-500 text-left w-96">
                        Thank you for expressing interest in SWRV. While we were impressed with your profile, unfortunately, your profile dosent meet the minimum criteria which we need in this platform <br /><br />We sincerely appreciate your interest and hope that you’ll stay in touch. Please don’t hesitate to reach out if you disagree with our decision.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Sorry;