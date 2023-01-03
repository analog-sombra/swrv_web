
type CategoryCardProps = {
    imageUrl: string,
    title: string,
    description: string,
}

export const CategoryCard = (props: CategoryCardProps) => {
    return (
        <>
            <div className={`w-40 text-left text-gray-600 p-3 border-2 border-gray-400 shadow-md rounded-xl my-4`}>
                <img src={props.imageUrl} alt="err" />
                <h1 className="text-xl font-bold my-2 text-primary">{props.title}</h1>
                <p className="text-sm font-normal">{props.description}</p>
            </div>
        </>
    );
}