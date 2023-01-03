import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const ConAlert = () => {
    return (
        <>
            <div className="rounded-2xl bg-primary flex p-4 w-[500px]">
                <div className="p-4">
                    <img src="./images/icons/confetti.png" alt="errro" className="w-40" />
                </div>
                <div className="py-6 grow">
                    <h1 className="text-white font-semibold text-md text-left">Congratulations!</h1>
                    <p className="text-white font-normal text-xs text-left">Your account has been created and confirmation link was sent to an <span className="font-semibold">email ivankbfc@gmail.com</span> </p>
                    <p className="text-white font-normal text-xs text-left">Can't find a confirmation email.<span className="font-semibold">Please resend the link</span> </p>
                </div>
                <div> <FontAwesomeIcon className="text-white text-2xl font-bold" icon={faXmark}></FontAwesomeIcon> </div>
            </div>
        </>
    );
}