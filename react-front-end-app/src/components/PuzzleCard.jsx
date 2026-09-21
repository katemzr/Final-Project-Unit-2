import DeletePuzzle from "./DeletePuzzle";
import EditPuzzle from "./EditPuzzle";
import { useState } from "react";

const PuzzleCard = ({ 
    id, 
    imageURL, 
    title, 
    alt, 
    brand, 
    artist, 
    pieceCount, 
    height, 
    width, 
    location, 
    purchaseDate, 
    retailer, 
    startDate, 
    progressPercent, 
    completionDate, 
    completionTime,
    onLoan, 
    notes,
    onEditPuzzle,
    onDeletePuzzle
 }) => {
    
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className="card">
            <div>
                <img 
                    src={imageURL || "/images/Placeholder.jpg"} 
                    alt={alt} 
                />
            </div>

            <div className="puzzle-summary">
                <h3>{title}</h3>
                <p>{brand} · {pieceCount} pieces</p>
            </div>

            <button 
                className="details-button"
                onClick={() => setShowDetails(!showDetails)}
            >
                {showDetails ? "Hide Details" : "Show Details"}
            </button>

            {showDetails && (
                <div className="puzzle-details">
                    <p><b>Artist:</b> {artist}</p>
                    <p><b>Height:</b> {height}</p>
                    <p><b>Width:</b> {width}</p>
                    <p><b>Location:</b> {location}</p>
                    <p><b>Purchase Date:</b> {purchaseDate}</p>
                    <p><b>Retailer:</b> {retailer}</p>
                    <p><b>Start Date:</b> {startDate}</p>
                    <p><b>Progress Percent:</b> {progressPercent}</p>
                    <p><b>Completion Date:</b> {completionDate}</p>
                    <p><b>Completion Time:</b> {completionTime}</p>
                    <p><b>On Loan:</b> {onLoan ? "Yes" : "No"}</p>
                    <p><b>Notes:</b> {notes}</p>
                </div>
            )}

            <div className="card-buttons">
                <EditPuzzle onEdit={() => onEditPuzzle(id)} />
                <DeletePuzzle onDelete={() => onDeletePuzzle(id)} />
            </div>

        </div>
    );
}

export default PuzzleCard;

