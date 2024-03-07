import ProjectImage from "./ProjectImage";
import ProjectInformation from "./ProjectInformation";
import ProjectCommentForm from "./ProjectCommentForm";
import ProjectComments from "./ProjectComments";

import { useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_SINGLE_PROJECT } from '../../utils/queries';

const SingleProjectComponent = ({ isLoggedIn }) => {
    const { id } = useParams();
    const { loading, error, data, refetch } = useQuery(QUERY_SINGLE_PROJECT, {
        variables: { projectId: id }
    });


    const projectDetail = data?.projectDetails || []

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <>
            <h1 className="text-center text-8xl md:text-10xl">{projectDetail.name.toUpperCase()}</h1>
            <div className="pb-12 mb-12">
                <ProjectImage image={projectDetail.portrait} />
                <ProjectInformation tags={projectDetail.tags} description={projectDetail.description} deployment={projectDetail.deployment} />
                <ProjectCommentForm isLoggedIn={isLoggedIn} id={id} refetch={refetch} />
                <ProjectComments isLoggedIn={isLoggedIn} commentDetail={projectDetail.comments} refetch={refetch} />
            </div>
        </>
    )
}

export default SingleProjectComponent