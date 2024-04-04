const UDHeaderComponent = () => {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center bg-black text-white rounded-lg py-10">
            {/* <img src="path_to_profile_picture.jpg" alt="Profile" className="w-24 h-24 rounded-full mb-4" /> */}
            <p className="bg-cyan-400 px-6 py-3 text-2xl rounded-full mb-4">R</p>
            <p className="text-xl mb-2">Raul Maya</p>
            <p className="mb-2">Ford Motor Company</p>
            <div className="flex space-x-4">
                <p><span className="font-bold">Likes:</span> 123</p>
                <p><span className="font-bold">Comments:</span> 456</p>
            </div>
        </div>
    )
}

export default UDHeaderComponent