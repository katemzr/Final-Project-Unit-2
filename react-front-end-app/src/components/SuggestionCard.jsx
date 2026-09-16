import { useState } from "react";


const SuggestionCard = ( {
    imageURL,
    title,
    alt,
    brand,
    artist,
    pieceCount,
    description
}) => { 

    const [showDetails, setShowDetails] = useState(false); //extra puzzle details on suggestion cards are initially hidden

    return (
        <div className="suggestion-card">
            
            <div>
                <img 
                    src={imageURL} 
                    alt={alt} 
                    width={200}
                    height={300}
                />
            </div>  

            <div>
                <p><b>{title}</b></p>
                <p>Brand: {brand}</p>
            </div>  

            <button onClick={() => setShowDetails(!showDetails)}> //when button is clicked, change showDetails from false to true or true to false
                {showDetails ? "Hide Details" : "Show Details"}
            </button>

            {showDetails && (
                <div>
                    <p>Artist: {artist}</p>
                    <p>PieceCount: {pieceCount}</p>
                    <p>Why we love it: {description}</p>
                </div>
            )}
            
        </div>
    );
};

export default SuggestionCard;