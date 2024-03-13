const DeleteConfirmationModal = ({ confirmDeleteComment, cancelDelete }) => {
    <div className="modal-background">
        <div className="modal">
            <h2>Are you sure you want to delete this comment?</h2>
            <div className="flex justify-around">
                <button className="delete-button" onClick={confirmDeleteComment}>Yes, Delete</button>
                <button className="cancel-button" onClick={cancelDelete}>No, Keep It</button>
            </div>
        </div>
    </div>
}

export default DeleteConfirmationModal