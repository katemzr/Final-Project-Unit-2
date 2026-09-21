/*
const DeletePuzzle = ({ onDelete }) => {
   
    return (
        <button className="buttons" onClick={onDelete}>Delete</button>
        
    );
}

export default DeletePuzzle;
*/


import { useState } from "react";

const DeletePuzzle = ({ onDelete }) => {

    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        onDelete();
        setShowModal(false);
    };

    return (
        <>
            <button
                className="buttons"
                onClick={() => setShowModal(true)}
            >
                Delete
            </button>

            {showModal && (
                <div className="modal-overlay">

                    <div className="modal">
                        <h3>Delete Puzzle?</h3>

                        <p>
                            Are you sure you want to delete this puzzle?
                        </p>

                        <div className="modal-buttons">
                            <button
                                className="buttons"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>

                            <button
                                className="buttons"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </>
    );
};

export default DeletePuzzle;