const ProjectCommentForm = () => {
    return (
        <div className="container m-auto flex justify-center">
            <form>
                <label className="block text-center mt-3">
                    <span className="text-sm text-gray-500">What do you think about this project?</span>
                    <textarea
                        className="
                        mt-1
                        block
                        rounded-md
                        border-gray-300
                        shadow-sm
                        focus:border-cyan-300 focus:ring focus:ring-cyan-400 focus:ring-opacity-50
                        "
                        rows="3"
                        cols="33"
                    ></textarea>
                </label>
            </form>
        </div>)
}

export default ProjectCommentForm