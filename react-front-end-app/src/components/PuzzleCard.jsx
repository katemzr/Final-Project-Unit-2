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
                    width={200} 
                    height={300}
                />
            </div>

            <div>
                <p><b>{title}</b></p>
            </div>

            <div>
                <p>Brand: {brand}</p>              
                <p>Piece Count: {pieceCount}</p>
            </div>

            {showDetails && (
                <div>
                    <p>Artist: {artist}</p>
                    <p>Height: {height}</p>
                    <p>Width: {width}</p>
                    <p>Location: {location}</p>
                    <p>Purchase Date: {purchaseDate}</p>
                    <p>Retailer: {retailer}</p>
                    <p>Start Date: {startDate}</p>
                    <p>Progress Percent: {progressPercent}</p>
                    <p>Completion Date: {completionDate}</p>
                    <p>Completion Time: {completionTime}</p>
                    <p>On Loan: {onLoan ? "Yes" : "No"}</p>
                    <p>Notes: {notes}</p>
                </div>
            )}

            <button onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? "Hide Details" : "Show Details"}
            </button>

            <div>
                <EditPuzzle onEdit={() => onEditPuzzle(id)} />
                <DeletePuzzle onDelete={() => onDeletePuzzle(id)} />
            </div>

        </div>
    );
}

export default PuzzleCard;

