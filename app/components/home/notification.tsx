import NotificationStore from "~/state/home/notification";

const Notification = () => {
    const open = NotificationStore((state) => state.isOpen)
    return (
        <>
            <div className={`${open ? "block" : "hidden"} absolute w-72 h-80 top-0 right-0 translate-y-16 p-4 bg-white rounded-xl shadow-xl`}>
                <NotificationTab></NotificationTab>
            </div>
        </>
    );
}


export default Notification;

const NotificationTab = () => {
    return (
        <>
            <div className="w-full border-b-2 border-gray-400 flex py-4">
                <div className="mr-4">
                    <img src="/images/brand/adidas.jpg" alt="error" className="w-14 h-14 rounded-lg" />
                </div>
                <p className="text-gray-500 font-semibold text-sm leading-normal w-40">
                    Adidas have created a campaign for you would you like to accept?
                </p>
            </div>

        </>
    );
}