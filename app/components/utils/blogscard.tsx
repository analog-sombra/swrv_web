
type BlogsCardProps = {
    imageUrl: string
    title: string
    time: string
}

export const BlogsCard = (props: BlogsCardProps) => {
    return (
        <>
            <div className="mx-4 my-4 grid place-items-center">
                <div className="w-64 text-primary text-left font-semibold text-md my-2">
                    <p>UPDATE</p>
                    <p>{props.time}</p>
                </div>
                <div className={`w-64 text-left shadow-xl rounded-xl h-72`}>
                    <img src={props.imageUrl} alt="err" className="w-full" />
                    <h1 className="text-md font-bold my-2 text-black p-4">{props.title}</h1>
                </div>
            </div>
        </>
    );
}

type BigBlogsCardProps = {
    imageUrl: string
    title: string
    time: string
    background?: string
    textColor?: string
}

export const BigBlogCard = (props: BigBlogsCardProps) => {
    return (
        <>
            <div className={`w-full rounded-2xl grid grid-cols-1 lg:grid-cols-2 ${props.background ?? "bg-white"} shadow-xl my-10 lg:h-80`}>
                <div>
                    <img src={props.imageUrl} alt="err" className="h-80 w-full inline-block rounded-2xl" />
                </div>
                <div className={`${props.textColor ?? "text-black"} text-left font-semibold text-md my-2 p-4 md:p-12 grow`}>
                    <p>UPDAYE</p>
                    <p>{props.time}</p>
                    <h1 className="text-xl font-bold my-2">{props.title}</h1>
                </div>
            </div>

        </>
    );
}