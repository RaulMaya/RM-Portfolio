const UDProjectCard = () => {
    return (
        <div className="w-1/6 mx-auto text-center border border-gray-200 rounded-lg shadow-lg overflow-hidden my-5">
            <img src="https://wallpapercave.com/wp/wp1983163.jpg" alt="Project Image" className="w-full" />
            <div className="p-5">
                <h2 className="mb-2 text-xl font-semibold">Project Title</h2>
                <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                    Dislike
                </button>
            </div>
        </div>
    );
};

export default UDProjectCard;
