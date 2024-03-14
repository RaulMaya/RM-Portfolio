import { useState } from "react"
import LoginModal from "../LogInSignUp/LogInModal"
import SignUpModal from "../LogInSignUp/SignUpModal"

import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from "../../utils/mutations"
import Auth from "../../utils/auth"

const ProjectCommentForm = ({ isLoggedIn, id, refetch }) => {
    const [commentText, setCommentText] = useState('');
    const [createComment, { error: createCommentError }] = useMutation(CREATE_COMMENT);

    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const openLoginModal = () => setIsLoginOpen(true);
    const closeLoginModal = () => setIsLoginOpen(false);

    const openSignUpModal = () => setIsSignUpOpen(true);
    const closeSignUpModal = () => setIsSignUpOpen(false);

    const handleCommentSubmit = async (event) => {
        event.preventDefault();
        await createComment({
            variables: {
                projectId: id,
                userId: Auth.getUser().data._id, // use the logged in user's id
                comment: commentText,
            },
        });
        setCommentText('');
        refetch();
    }

    return (
        <div className="container mx-auto flex flex-col justify-center mb-10 mt-5">
            {isLoggedIn ? (<>
                <h1 className="text-3xl mb-3">Comment Section</h1>
                <form onSubmit={handleCommentSubmit} className="w-full flex gap-x-8">
                    <textarea
                        type="text"
                        name="commentText"
                        className="
                        mt-1
                        w-full
                        block
                        rounded-md
                        border-black
                        shadow-sm
                        focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50
                        "
                        placeholder="What do you think about this project?"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit" className="mt-1 w-36 bg-cyan-400 hover:bg-cyan-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-out hover:ease-in">
                        Send
                    </button>
                </form>
            </>
            ) : (
                <>
                    <div className="bg-cyan-400 border-black border rounded text-white w-full p-12 md:p-24">
                        <div className="max-w-6xl mx-auto text-center">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6">What do you think about his project?</h1>
                            <p className="text-xl md:text-2xl mb-8">Sign in or create an account to leave your comment!</p>
                            <div className="space-x-4">
                                <button onClick={openLoginModal} className="bg-cyan-400 border border-black text-white font-bold py-3 px-8 rounded hover:bg-cyan-500 transition duration-150 ease-in-out">Sign In</button>
                                <button onClick={openSignUpModal} className="bg-gray-200 text-black font-bold py-3 px-8 rounded hover:bg-gray-300 transition duration-150 ease-in-out">Create Account</button>
                            </div>
                        </div>
                    </div>
                    <LoginModal openSign={openSignUpModal} isOpen={isLoginOpen} onClose={closeLoginModal} />
                    <SignUpModal openLog={openLoginModal} isOpen={isSignUpOpen} onClose={closeSignUpModal} />
                </>
            )
            }

        </div >)
}

export default ProjectCommentForm