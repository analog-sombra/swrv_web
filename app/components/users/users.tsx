import { TeamCard } from "../utils/teamcard";


type UserPageProps = {
    userdata: any[]
}
const UsersPage = (props: UserPageProps) => {
    return (
        <>
            <div className="w-full px-6 sm:px-16">
                <div className="bg-[#EFEFEF] w-full my-10 rounded-xl md:p-0 p-6">
                    <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  md:py-20">
                        <h3 className="text-primary text-3xl font-bold">About SWRV influencer platform</h3>
                        <p className="text-md font-semibold text-primary mt-6">
                            Founded in 2016, SWRV is a private media company based in Copenhagen, Denmark. The company specializes in producing how-to guides, courses and research reports in the social media and influencer marketing industry. The firm is home to one of the world's largest community of influencers and works with leading brands to leverage the power of influencer marketing with over 5 million monthly unique users.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8">
                    <h3 className="text-primary text-3xl font-bold">Some popular faces</h3>
                    <div className="h-[1px] bg-gray-600 w-full my-2"></div>
                    <div className="grid xl:grid-cols-3 grid-cols-1 lg:grid-cols-2 justify-center place-items-center">
                        {
                            props.userdata.map((val: any, index: number) => {
                                let image = (val.pic == null || val.pic == undefined || val.pic == "" || val.pic == "0") ? "/images/avatar/user.png" : val.pic

                                return (
                                    index < 6 ?
                                        <div key={index}>
                                            <UserCard name={val.userName.toString().split("@")[0]} description={val.bio} imageUrl={image}></UserCard>
                                        </div> :
                                        <div key={index}></div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
export default UsersPage;

type UserCardProps = {
    imageUrl: string
    name: string
    description: string
}

export const UserCard = (props: UserCardProps) => {
    return (
        <>
            <div className={`w-64 text-left shadow-xl rounded-xl pb-4 m-4`}>
                <img src={props.imageUrl} alt="err" className="w-full h-56 object-cover object-top" />
                <h1 className="text-xl font-bold text-primary text-center mt-2">{props.name}</h1>
                <h1 className="text-xs font-semibold text-primary text-left px-4">{props.description}</h1>
            </div>
        </>
    );
}
