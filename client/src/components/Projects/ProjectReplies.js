
import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";

const ProjectReplies = () => {
    return (
        <div className="flex justify-start gap-x-4 mb-5 ms-12">
            <div className="flex flex-col justify-start items-center">
                <div className="bg-cyan-300 px-3 py-3 w-12 h-12 text-sm font-semibold rounded-full shadow-sm flex items-center justify-center">W</div>
            </div>

            <section className="flex flex-col justify-start  w-full">
                <div className="flex justify-between">
                    <div className="text-cyan-400 font-semibold">Agent W</div>
                    <div className="text-gray-600 font-semibold">1m ago</div>
                </div>
                <div className="pt-2 pb-4">This is an example of a possible comment for my area</div>
                <section className="flex justify-start gap-x-3">
                    <div className="cursor-pointer"><FaTrashAlt /></div>
                    <div className="cursor-pointer"><CiEdit /></div>
                </section>
            </section>
        </div>
    )
}

export default ProjectReplies