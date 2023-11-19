import { AiFillGithub } from "react-icons/ai";
import { GrDeploy } from "react-icons/gr";

const ProjectInformation = () => {
    return (
        <>
            <div className="container m-auto flex justify-between w-10/12">
                <section className="m-auto flex justify-start mt-2">
                    <p className="me-7 px-4 py-1 bg-gradient-to-r from-gray-200 to-gray-300 text-black rounded-md text-xs">
                        Tag
                    </p>
                    <p className="me-7 px-4 py-1 bg-gradient-to-r from-gray-200 to-gray-300 text-black rounded-md text-xs">
                        Tag
                    </p>
                    <p className="me-7 px-4 py-1 bg-gradient-to-r from-gray-200 to-gray-300 text-black rounded-md text-xs">
                        Tag
                    </p>
                    <p className="me-7 px-4 py-1 bg-gradient-to-r from-gray-200 to-gray-300 text-black rounded-md text-xs">
                        Tag
                    </p>
                    <p className="me-7 px-4 py-1 bg-gradient-to-r from-gray-200 to-gray-300 text-black rounded-md text-xs">
                        Tag
                    </p>
                </section>
                <section className="m-auto flex justify-end mt-2">
                    <div className="text-3xl me-1"><AiFillGithub /></div>
                    <div className="text-3xl ms-1"><GrDeploy /></div>
                </section>
            </div>
            <div className="container m-auto flex justify-center">
                <section className="w-8/12 mt-2 text-center">
                    <p>
                        Art Nouveau is a distinctive art style that emerged at the end of the 19th century and continued into the early 20th century. It is characterized by its use of long, sinuous lines and curves, inspired by natural forms and structures. This style is evident across various mediums, including architecture, painting, sculpture, and decorative arts.

                        In architecture, Art Nouveau buildings are recognizable by their ornate facades, with intricate patterns and embellishments that often incorporate floral motifs and asymmetrical shapes. Architects like Antoni Gaudí in Spain and Victor Horta in Belgium are famed for their contributions to this style, creating structures that seem to defy conventional architectural norms with their flowing lines and organic forms.
                    </p>
                </section>
            </div>
        </>)
}

export default ProjectInformation