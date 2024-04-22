const UDHeaderComponent = ({name, company, likes, comments}) => {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center bg-black text-white rounded-lg py-10">
            {/* <img src="path_to_profile_picture.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-4" /> */}
            <p className="bg-cyan-400 px-6 py-3 text-2xl rounded-full mb-4">{name[0]}</p>
            <p className="text-xl mb-2">{name}</p>
            <p className="mb-2">{company}</p>
            <div className="flex space-x-4">
                <p><span className="font-bold">Likes:</span> {likes}</p>
                <p><span className="font-bold">Comments:</span> {comments}</p>
            </div>
        </div>
    )
}

export default UDHeaderComponent