import { DISLIKE_PROJECT } from "../../utils/mutations";
import { useMutation } from '@apollo/client';
import { Link as RouterLink } from 'react-router-dom';

const UDProjectCard = ({ title, img, userId, refetch, projectId }) => {
    const [dislikeProject, { error: dislikeProjectError }] = useMutation(DISLIKE_PROJECT);

    const handleDislikeProject = async (projectId) => {
        try {
            if (userId) {
                await dislikeProject({
                    variables: {
                        userId: userId._id, // Use userData._id here
                        projectId,
                    },
                });

                refetch();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w-1/6 mx-auto text-center border border-gray-200 rounded-lg shadow-lg overflow-hidden my-5">
            <RouterLink to={`/project/${projectId}`}>
                <img src={img} alt="Project" className="w-full" />
            </RouterLink>
            <div className="p-5">
                <h2 className="mb-2 text-xl font-semibold">{title}</h2>
                <button onClick={() => { handleDislikeProject(projectId) }} className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                    Dislike
                </button>
            </div>
             {dislikeProjectError && <p>Error disliking project: {dislikeProjectError.message}</p>}
        </div>
    );
};

export default UDProjectCard;
