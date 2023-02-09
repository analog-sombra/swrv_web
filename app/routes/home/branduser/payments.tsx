import { faCalculator, faCalendar, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";

const Payments = () => {

    const payment_data = [
        {
            name: "San Joe",
            camppaign: ["/images/inf/inf1.png"],
            details: ["puma", "Dec 31, 2021"],
            target: "3 M",
            amount: "7500 USD",
            amountres: "1200 USD"
        },
        {
            name: "San Joe",
            camppaign: ["/images/inf/inf2.png"],
            details: ["puma", "Dec 31, 2021"],
            target: "3 M",
            amount: "7500 USD",
            amountres: "1200 USD"
        },
        {
            name: "San Joe",
            camppaign: ["/images/inf/inf3.png"],
            details: ["puma", "Dec 31, 2021"],
            target: "3 M",
            amount: "7500 USD",
            amountres: "1200 USD"
        },
        {
            name: "San Joe",
            camppaign: ["/images/inf/inf4.png"],
            details: ["puma", "Dec 31, 2021"],
            target: "3 M",
            amount: "7500 USD",
            amountres: "1200 USD"
        },
        {
            name: "San Joe",
            camppaign: ["/images/inf/inf5.png"],
            details: ["puma", "Dec 31, 2021"],
            target: "3 M",
            amount: "7500 USD",
            amountres: "1200 USD"
        },
        {
            name: "San Joe",
            camppaign: ["/images/inf/inf6.png"],
            details: ["puma", "Dec 31, 2021"],
            target: "3 M",
            amount: "7500 USD",
            amountres: "1200 USD"
        },
    ];
    return (
        <>
            <div className="flex gap-x-4">
                <Link to="/home/branduser" className="rounded-md py-1 w-48 text-lg font-medium text-center text-black bg-white cursor-pointer">Snapshot</Link>
                <Link to="/home/branduser/influencers" className="rounded-md py-1 w-48 text-lg font-medium text-center text-black bg-white cursor-pointer">Influencers</Link>
                <Link to="/home/branduser/payments" className="rounded-md py-1 w-48 text-lg font-medium text-center text-white bg-primary cursor-pointer">Payments</Link>
            </div>
            <div className="overflow-x-scroll no-scrollbar my-4 rounded-md p-4 block bg-white">
                <div className="flex">
                    <div className="flex bg-gray-200 p-2 rounded-lg px-4">
                        <div className="flex gap-2 w-90 rounded-md">
                            <div>
                                <FontAwesomeIcon className="text-gray-600" icon={faSearch}></FontAwesomeIcon>
                            </div>
                            <input type="text" placeholder="Search" className="placeholder:text-gray-600 bg-transparent" />
                        </div>
                    </div>
                    <div className="grow"></div>
                    <div className="flex bg-gray-200 rounded-lg py-2 px-4">
                        <p className="text-black">Jun 30 - Jul 06, 2022</p>
                        <div className="w-4"></div>
                        <div>
                            <FontAwesomeIcon className="text-primary" icon={faCalendar}></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
                <table className="table-auto w-full min-w-[800px]" style={{
                    "borderCollapse": "separate", "borderSpacing": "0 1em"
                }}>
                    <thead>
                        <tr style={{ padding: "10px" }}>
                            <th className="bg-gray-200 py-4 rounded-l-lg min-w-44 text-primary text-md font-semibold">Influencer</th>
                            <th className="bg-gray-200 min-w-44 text-primary text-md font-semibold">Campaign</th>
                            <th className="bg-gray-200 min-w-44 text-primary text-md font-semibold">Campaign details</th>
                            <th className="bg-gray-200 min-w-44 text-primary text-md font-semibold">Target</th>
                            <th className="bg-gray-200 min-w-44 text-primary text-md font-semibold">Amount</th>
                            <th className="bg-gray-200 rounded-r-lg min-w-44 text-primary text-md font-semibold">Amount Released</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payment_data.map((val: any, index: number) => {
                                return (
                                    <>
                                        <tr key={index} style={{ border: "2px solid black !important" }}>
                                            <td className="text-primary text-md font-semibold text-center">{val.name}</td>
                                            <td className="text-center gird place-items-center">
                                                <div className="grid place-content-center">
                                                    <img src={val.camppaign[0]} alt="error" className="w-20 h-20 rounded-lg object-cover" />
                                                </div>
                                            </td>
                                            <td className=" text-center grid place-items-center">
                                                <div>
                                                    <p className="text-left font-semibold text-md">{val.details[0]}</p>
                                                    <p className="text-left font-normal text-sm">{val.details[1]}</p>
                                                </div>
                                            </td>
                                            <td className=" text-center text-primary text-md font-semibold">{val.target}</td>
                                            <td className=" text-center text-primary text-md font-semibold">{val.amount}</td>
                                            <td className=" text-center text-primary text-md font-semibold">{val.amountres}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={6}>
                                                <div className="bg-gray-300 w-full h-[1px] "></div>
                                            </td>
                                        </tr>
                                    </>
                                );
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    );
}
export default Payments;