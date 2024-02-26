const ProjectCommentForm = ({ isLoggedIn }) => {
    return (
        <div className="container mx-auto flex flex-col justify-center mb-10 mt-5">
            {isLoggedIn ? (<>
                <h1 className="text-3xl mb-3">Comment Section</h1>
                <form className="w-full">
                    <textarea
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
                    ></textarea>

                </form>
            </>
            ) : (
                <div className="bg-cyan-400 border-black border rounded text-white w-full p-12 md:p-24">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">What do you think about his project?</h1>
                        <p className="text-xl md:text-2xl mb-8">Sign in or create an account to leave your comment!</p>
                        <div className="space-x-4">
                            <a href="/signin" className="bg-cyan-400 border border-black text-white font-bold py-3 px-8 rounded hover:bg-cyan-500 transition duration-150 ease-in-out">Sign In</a>
                            <a href="/signup" className="bg-gray-200 text-black font-bold py-3 px-8 rounded hover:bg-gray-300 transition duration-150 ease-in-out">Create Account</a>
                        </div>
                    </div>
                </div>

            )
            }

        </div >)
}

export default ProjectCommentForm