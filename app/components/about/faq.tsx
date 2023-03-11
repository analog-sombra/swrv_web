import { BigBlogCard, BlogsCard } from "../utils/blogscard";
import { TeamCard } from "../utils/teamcard";

const FAQ = () => {
    return (
        <>
            <div className="w-full px-6 sm:px-16">
                <div className="w-full md:w-3/5 lg:w-4/6 mx-auto mb-10  py-8">
                    <h3 className="text-primary text-3xl font-bold text-center">Frequently Asked Questions</h3>
                    <div className="p-4 bg-white rounded-md shadow-lg my-4">
                        <div className="flex gap-x-4">
                            <div className="grid place-items-center w-10 h-10 rounded-full bg-slate-300 text-white font-bold text-md">1</div>
                            <div className="grow m-auto text-black font-semibold text-lg">How should I develop my workflow over time?</div>
                        </div>
                        <div className="border-l-4 pl-4 ml-12 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec magna eu purus eleifend semper laoreet varius metus. Donec in ultricies justo. Maecenas dictum id erat sed condimentum. Aliquam eu rutrum mi. In vel sollicitudin magna.
                        </div>
                    </div>
                    <div className="p-4 bg-white rounded-md shadow-lg my-4">
                        <div className="flex gap-x-4">
                            <div className="grid place-items-center w-10 h-10 rounded-full bg-slate-300 text-white font-bold text-md">2</div>
                            <div className="grow m-auto text-black font-semibold text-lg">How often should the app be updated?</div>
                        </div>
                        <div className="border-l-4 pl-4 ml-12 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec magna eu purus eleifend semper laoreet varius metus. Donec in ultricies justo. Maecenas dictum id erat sed condimentum. Aliquam eu rutrum mi. In vel sollicitudin magna.
                        </div>
                    </div>
                    <div className="p-4 bg-white rounded-md shadow-lg my-4">
                        <div className="flex gap-x-4">
                            <div className="grid place-items-center w-10 h-10 rounded-full bg-slate-300 text-white font-bold text-md">3</div>
                            <div className="grow m-auto text-black font-semibold text-lg">Can I pay by card?</div>
                        </div>
                        <div className="border-l-4 pl-4 ml-12 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec magna eu purus eleifend semper laoreet varius metus. Donec in ultricies justo. Maecenas dictum id erat sed condimentum. Aliquam eu rutrum mi. In vel sollicitudin magna.
                        </div>
                    </div>
                    <div className="p-4 bg-white rounded-md shadow-lg my-4">
                        <div className="flex gap-x-4">
                            <div className="grid place-items-center w-10 h-10 rounded-full bg-slate-300 text-white font-bold text-md">4</div>
                            <div className="grow m-auto text-black font-semibold text-lg">Are Zospace apps free?</div>
                        </div>
                        <div className="border-l-4 pl-4 ml-12 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec magna eu purus eleifend semper laoreet varius metus. Donec in ultricies justo. Maecenas dictum id erat sed condimentum. Aliquam eu rutrum mi. In vel sollicitudin magna.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FAQ;