import { FaReply } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";

const ProjectComments = () => {
    return (
        <div className="container m-auto p-5 rounded-md shadow-lg ">
            <section className="flex justify-between">
                <div className="text-cyan-400 font-semibold">Raul Maya Salazar</div>
                <div className="text-gray-400 font-semibold">3 minutes ago</div>
            </section>

            <div className="pt-2 pb-4">This an example of a possible comment for my area</div>
            <section className="flex justify-start gap-x-3">
                <div className="cursor-pointer"><FaReply /></div>
                <div className="cursor-pointer"><AiOutlineLike /></div>
            </section>
        </div>
    )
}

export default ProjectComments