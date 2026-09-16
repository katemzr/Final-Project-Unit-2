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
                <p>Piece Count: {pieceCount}</p>
            </div>  
            
            {/* When button is clicked, toggle showDetails from false to true or true to false */}
            <button className="buttons"
                onClick={() => setShowDetails(!showDetails)} >  
                {showDetails ? "Hide Details" : "Show Details"}
            </button>

            {showDetails && (
                <div>
                    <p>Brand: {brand}</p>
                    <p>Artist: {artist}</p>
                    <p>Why we love it: {description}</p>
                </div>
            )}
            
        </div>
    );
};

export default SuggestionCard;