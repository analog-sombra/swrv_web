
type MarkatingCardProps = {
    imageUrl: string,
    title: string,
    description: string,
    leftBorder: boolean
}

export const MarkatingCard = (props: MarkatingCardProps) => {
    return (
        <>
            <div className={`h-full w-38 text-left text-gray-600 p-4 ${props.leftBorder ? "border-l-2 border-gray-400" : ""}`}>
                <img src={props.imageUrl} alt="err" />
                <h1 className="text-xl font-bold my-4">{props.title}</h1>
                <p className="text-md font-normal">{props.description}</p>
            </div>
        </>
    );
}