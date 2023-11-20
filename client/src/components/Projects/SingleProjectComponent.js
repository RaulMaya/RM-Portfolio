import ProjectImage from "./ProjectImage";
import ProjectInformation from "./ProjectInformation";
import ProjectCommentForm from "./ProjectCommentForm";
import ProjectComments from "./ProjectComments";

const SingleProjectComponent = () => {
    return (
        <div className="pb-12 mb-12">
            <ProjectImage />
            <ProjectInformation />
            <ProjectCommentForm />
            <ProjectComments />
            <ProjectComments />
        </div >
    )
}

export default SingleProjectComponent