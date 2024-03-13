const DeleteConfirmationModal = ({ confirmDeleteComment, cancelDelete }) => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white pt-6 w-1/2 md:w-1/4 rounded-lg shadow-lg sborder border-black p-6">
                <h2 className='text-2xl mb-5'>Are you sure you want to delete this comment?</h2>
                <div className="flex justify-around">
                    <button className="cancel-button bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-out hover:ease-in" onClick={cancelDelete}>Keep It</button>
                    <button className="delete-button bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-out hover:ease-in" onClick={confirmDeleteComment}>Delete</button>
                </div>
            </div>
        </div>)
}

export default DeleteConfirmationModal