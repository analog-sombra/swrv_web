type CusButtonProps = {
    text: string
    textColor?: String
    textSize?: String
    width?: String
    background?: string
    border?: string
    borderColor?: String
    extra?: string
    fontwidth?: string
    margin?: string
    height?: string
    func?: () => void
}

export const CusButton = (props: CusButtonProps) => {

    const clickfunc = () => {
        if (props.func != undefined) {
            props.func();
        }
    }
    return (

        <button onClick={clickfunc} className={`text-center py-2 ${props.margin ?? "my-3"} rounded-lg font-normal ${props.background ?? "bg-primary"} ${props.textColor ?? "text-white"} ${props.textSize ?? "text-md"} ${props.width ?? "w-44"} ${props.background ?? "bg-transparent"} ${props.border ?? "border-2"} ${props.borderColor ?? "border-transparent"}  ${props.height ?? ""} ${props.extra ?? ""}`}>
            <p className={`${props.fontwidth ?? "font-normal"}`}>
                {props.text}
            </p>
        </ button >
    );
}