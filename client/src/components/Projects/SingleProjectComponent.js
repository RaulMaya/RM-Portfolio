import { AiFillGithub } from "react-icons/ai";
import { GrDeploy } from "react-icons/gr";

const SingleProjectComponent = () => {
    return (
        <div className="pb-7">
            <container className="flex justify-center">
                <img className="w-6/12" src="https://www.artandobject.com/sites/default/files/styles/gallery_item/public/english-f-champenois-imprimeur-editeur-alphonse-mucha-lithography-colors-67-x-49-cm.jpg?h=58e36504&itok=6HR_v-xi" alt="Art" />
            </container>
            <container className="m-auto flex justify-center w-6/12">
                <section className="m-auto flex justify-start w-6/12 mt-2">
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
                <section className="m-auto flex justify-end w-6/12 mt-2">
                    <div className="text-3xl me-1"><AiFillGithub /></div>
                    <div className="text-3xl ms-1"><GrDeploy /></div>
                </section>
            </container>
            <container className="flex justify-center">

                <section className="w-6/12 mt-2 mb-12 text-center">
                    <p>
                        Art Nouveau is a distinctive art style that emerged at the end of the 19th century and continued into the early 20th century. It is characterized by its use of long, sinuous lines and curves, inspired by natural forms and structures. This style is evident across various mediums, including architecture, painting, sculpture, and decorative arts.

                        In architecture, Art Nouveau buildings are recognizable by their ornate facades, with intricate patterns and embellishments that often incorporate floral motifs and asymmetrical shapes. Architects like Antoni Gaudí in Spain and Victor Horta in Belgium are famed for their contributions to this style, creating structures that seem to defy conventional architectural norms with their flowing lines and organic forms.
                    </p>
                </section>
            </container>
        </div >
    )
}

export default SingleProjectComponent