import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Empty = () => {
    return (
        <>
            <div className="p-10 rounded-xl shadow-xl w-72 pt-28 bg-white">
                <FontAwesomeIcon className="text-black font-bold text-4xl" icon={faSearch}></FontAwesomeIcon>
                <h1 className="font-semibold text-lg text-black">To earn more money?</h1>
                <p className="font-normal text-sm text-black">Search, apply for public campaigns and create more great content</p>
            </div>
        </>
    );
}
export default Empty;