import { useEffect, useState } from "react";

const Form = ({ onAddPuzzle, onUpdatePuzzle, puzzleToEdit }) => {
    const [imageURL, setImageURL] = useState("");
    const [puzzleTitle,  setPuzzleTitle] = useState("");
    const [puzzleBrand, setPuzzleBrand] = useState("");
    const [puzzleArtist, setPuzzleArtist] = useState("");
    const [pieceCount, setPieceCount] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [purchaseDate, setPurchaseDate] = useState("");
    const [retailer, setRetailer] = useState("");
    const [startDate, setStartDate] = useState("");
    const [progressPercent, setProgressPercent] = useState("");
    const [completionDate, setCompletionDate] = useState("");
    const [completionTime, setCompletionTime] = useState("");
    const [notes, setNotes] = useState("");
    const [location, setLocation] = useState("");
    const [onLoan, setOnLoan] = useState(false);
    

    const handleReset = () => {
        setImageURL("");
        setPuzzleTitle("");
        setPuzzleBrand("");
        setPuzzleArtist("");
        setPieceCount("");
        setHeight("");
        setWidth("");
        setPurchaseDate("");
        setRetailer("");
        setStartDate("");
        setProgressPercent("");
        setCompletionDate("");
        setCompletionTime("");
        setLocation("");
        setOnLoan(false);
        setNotes("");
    };

    const handleAddCard = (e) => {
        e.preventDefault();
        const puzzleData = {   
            imageURL: imageURL || "/images/Placeholder.jpg",
            title: puzzleTitle,
            brand: puzzleBrand,
            artist: puzzleArtist,
            pieceCount: Number(pieceCount),
            height: Number(height),
            width: Number(width),
            location: location,
            purchaseDate: purchaseDate,
            retailer: retailer,
            startDate: startDate,
            progressPercent: Number(progressPercent),
            completionDate: completionDate,
            completionTime: Number(completionTime),
            onLoan: onLoan,
            notes: notes,
        };

        if (puzzleToEdit) {
            onUpdatePuzzle(puzzleToEdit.id, puzzleData);
        } else {
            onAddPuzzle(puzzleData);
        }

       handleReset(); 
    };

useEffect(() => {
    if (puzzleToEdit) {
        setImageURL(puzzleToEdit.imageURL || "");
        setPuzzleTitle(puzzleToEdit.title || "");
        setPuzzleBrand(puzzleToEdit.brand || "");
        setPuzzleArtist(puzzleToEdit.artist || "");
        setPieceCount(puzzleToEdit.pieceCount || "");
        setHeight(puzzleToEdit.height || "");
        setWidth(puzzleToEdit.width || "");
        setLocation(puzzleToEdit.location || "");
        setPurchaseDate(puzzleToEdit.purchaseDate || "");
        setRetailer(puzzleToEdit.retailer || "");
        setStartDate(puzzleToEdit.startDate || "");
        setProgressPercent(puzzleToEdit.progressPercent || "");
        setCompletionDate(puzzleToEdit.completionDate || "");
        setCompletionTime(puzzleToEdit.completionTime || "");
        setOnLoan(puzzleToEdit.onLoan || false);
        setNotes(puzzleToEdit.notes || "");
    }
}, [puzzleToEdit]);

    return (
        <div className="form">
            <h1>{puzzleToEdit ? "Edit Puzzle" : "Add a New Puzzle"}</h1>
            <fieldset>
                <form onSubmit={handleAddCard}>
                    <div className="form-group full-width">
                        <label htmlFor="imageURL">Puzzle Image:</label>
                        <input
                            type="text" 
                            name="imageURL" 
                            id="imageURL" 
                            value={imageURL}
                            onChange={ (e) =>
                                setImageURL(e.target.value)
                            }
                            placeholder="Enter Image URL"
                         />
                    </div>
                    <div className="form-group">                      
                        <label htmlFor="puzzletitle">Puzzle Title:</label>
                        <input 
                            type="text" 
                            name="puzzletitle" 
                            id="puzzletitle" 
                            value={puzzleTitle}
                            onChange={ (e) =>
                                setPuzzleTitle(e.target.value)
                            }
                            placeholder="Enter Puzzle Title"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="puzzlebrand">Puzzle Brand:</label>
                        <input 
                            type="text" 
                            name="puzzlebrand" 
                            id="puzzlebrand" 
                            value={puzzleBrand}
                            onChange={ (e) =>
                                setPuzzleBrand(e.target.value)
                            }
                            placeholder="Enter Puzzle Brand"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="puzzleartist">Puzzle Artist:</label>
                        <input 
                            type="text" 
                            name="puzzleartist" 
                            id="puzzleartist" 
                            value={puzzleArtist}
                            onChange={ (e) =>
                                setPuzzleArtist(e.target.value)
                            }
                            placeholder="Enter Puzzle Artist"
                        /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="piececount">Piece Count:</label>
                        <input 
                            type="number" 
                            name="piececount" 
                            id="piececount" 
                            value={pieceCount}
                            onChange={ (e) =>
                                setPieceCount(e.target.value)
                            }
                            placeholder="Enter Piece Count"
                            min="1"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="height">Height:</label>
                        <input 
                            type="number" 
                            name="height" 
                            id="height" 
                            value={height}
                            onChange={ (e) =>
                                setHeight(e.target.value)
                            }
                            placeholder="Enter Puzzle Height"
                            min="1"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="width">Width:</label>
                        <input 
                            type="number" 
                            name="width" 
                            id="width" 
                            value={width}
                            onChange={ (e) =>
                                setWidth(e.target.value)
                            }
                            placeholder="Enter Puzzle Width"
                            min="1"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location:</label>
                        <input 
                            type="text" 
                            name="location" 
                            id="location" 
                            value={location}
                            onChange={ (e) =>
                                setLocation(e.target.value)
                            }
                            placeholder="Enter Puzzle's Storage Location"
                        />   
                    </div>
                    <div className="form-group">
                        <label htmlFor="purchasedate">Purchase Date:</label>
                        <input 
                            type="date" 
                            name="purchasedate" 
                            id="purchasedate" 
                            value={purchaseDate}
                            onChange={ (e) =>
                                setPurchaseDate(e.target.value)
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="retailer">Retailer:</label>
                        <input 
                            type="text" 
                            name="retailer" 
                            id="retailer" 
                            value={retailer}
                            onChange={ (e) =>
                                setRetailer(e.target.value)
                            }
                            placeholder="Enter Name of Retailer"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="startdate">Start Date:</label>
                        <input 
                            type="date" 
                            name="startdate" 
                            id="startdate" 
                            value={startDate}
                            max={completionDate}
                            onChange={ (e) =>
                                setStartDate(e.target.value)
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="progresspercent">Progress Percent:</label>
                        <input 
                            type="number" 
                            name="progresspercent" 
                            id="progresspercent" 
                            value={progressPercent}
                            onChange={ (e) =>
                                setProgressPercent(e.target.value)
                            }
                            placeholder="Enter Progress Percent (e.g.0,50,100)"
                        />
                    </div>    
                    <div className="form-group">
                        <label htmlFor="completiondate">Completion Date:</label>
                        <input 
                            type="date" 
                            name="completiondate" 
                            id="completiondate" 
                            value={completionDate}
                            min={startDate}
                            onChange={ (e) =>
                                setCompletionDate(e.target.value)
                            }                          
                        /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="completiontime">Completion Time:</label>
                        <input 
                            type="number" 
                            name="completiontime" 
                            id="completiontime" 
                            value={completionTime}
                            onChange={ (e) =>
                                setCompletionTime(e.target.value)
                            }
                            placeholder="Enter Completion Time (mins)"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="onLoan">On Loan:</label> 
                            <input
                                type="checkbox"
                                name="onLoan"
                                id="onLoan"
                                checked={onLoan}
                                onChange={(e) => 
                                    setOnLoan(e.target.checked)
                                }
                                placeholder="On Loan"
                            />   
                    </div>        
                    <div className="form-group full-width">
                        <label htmlFor="notes">Notes:</label>
                        <textarea
                            value={notes}
                            name="notes"
                            id="notes"
                            cols="30"
                            rows="4"
                            onChange={ (e) =>
                                setNotes(e.target.value)
                            }
                            placeholder="Enter Notes about your Puzzle">
                        </textarea>
                    </div>    
                <div className="form-buttons">
                    <button className="buttons"
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                        >Reset
                    </button>

                    <button className="buttons"
                        type="submit" 
                        >Add
                    </button>
                </div> 
                </form>
            </fieldset>

        </div>

    );
}  

export default Form;
