const ProjectCommentForm = () => {
    return (
        <div className="container mx-auto flex flex-col justify-center mb-10 mt-5">
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
        </div>)
}

export default ProjectCommentForm