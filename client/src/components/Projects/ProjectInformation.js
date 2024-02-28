import { AiFillGithub } from "react-icons/ai";
import { GrDeploy } from "react-icons/gr";

const ProjectInformation = ({ tags, description, deployment }) => {
    const tagsElems = tags.map(t => {
        return (
            <p key={t} className="me-7 shadow-lg border border-black font-semibold px-4 py-1 bg-gradient-to-r from-gray-200 to-gray-300 text-black rounded-md text-xs">
                {t}
            </p>)
    })
    return (
        <>
            <div className="container m-auto flex justify-between w-full">
                <section className="flex justify-between items-center mt-2 w-8/12 m-auto">
                    <div className="flex flex-grow">
                        {tagsElems}
                    </div>
                    <div className="flex">
                        <a href={deployment} target="_blank" rel="noopener noreferrer">
                            <AiFillGithub className="text-3xl mr-1" />
                        </a>
                        <a href={deployment} target="_blank" rel="noopener noreferrer">
                            <GrDeploy className="text-3xl ml-1" />
                        </a>
                    </div>
                </section>
            </div>
            <div className="container m-auto flex justify-center">
                <section className="w-8/12 mt-2 text-center">
                    {description}
                </section>
            </div>
        </>)
}

export default ProjectInformation