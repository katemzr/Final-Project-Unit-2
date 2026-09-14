import DeletePuzzle from "./DeletePuzzle";

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
    onDeletePuzzle
 }) => {
    
    /*const [ isVisible, setIsVisible ] = useState(true);
    
    const handleDelete = () => {
        setIsVisible(false);
    }
    
    if (!isVisible){ 
        return null;
    }
   */ 
    return (
        <div className="card">
            <div>
                <img src={imageURL} alt={alt} width={200} height={300}/>
            </div>
            <div>
                <p><b>{title}</b></p>
            </div>
            <div>
                <p>{id}</p>
                <p>Brand:{brand}</p>
                <p>Artist:{artist}</p>
                <p>Piece Count:{pieceCount}</p>
                <p>Height:{height}</p>
                <p>Width:{width}</p>
                <p>Location:{location}</p>
                <p>Purchase Date:{purchaseDate}</p>
                <p>Retailer:{retailer}</p>
                <p>Start Date:{startDate}</p>
                <p>Progress Percent:{progressPercent}</p>
                <p>Completion Date:{completionDate}</p>
                <p>Completion Time:{completionTime}</p>
                <p>On Loan:{onLoan ? "Yes" : "No"}</p>
                <p>Notes:{notes}</p>
            </div>
            <div>
                <DeletePuzzle onDelete={() => onDeletePuzzle(id)} />
            </div>
        </div>
    );
}

export default PuzzleCard;

