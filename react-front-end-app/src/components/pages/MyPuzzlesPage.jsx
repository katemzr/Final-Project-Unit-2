import Form from "../Form";
import PuzzleCard from "../PuzzleCard";
import { useEffect, useState } from "react";
import apiClient from "../../config/api-client";


const MyPuzzlesPage = () => {
  
    const [ puzzles, setPuzzles ] = useState([]);
    const [ puzzleToEdit, setPuzzleToEdit ] = useState(null);

    useEffect(() => {

        const fetchPuzzles = async () => {
            try {
                const response = await apiClient.get("/puzzles"); //GET saved puzzles from the database

                setPuzzles(response.data); 

            } catch (error) {
                console.error("Error fetching puzzles:", error);
            }
        };

        fetchPuzzles();

    }, []);

    
    const handleDeletePuzzle = async (id) => {
        try {
            await apiClient.delete(`/puzzles/${id}`); //DELETE puzzle from database

            setPuzzles((prevPuzzles) => prevPuzzles.filter((puzzle) => puzzle.id !== id));

        } catch (error) {
            console.error("Error deleting puzzle:", error);
        }
    };

    const handleEditPuzzle = (id) => {
        const selectedPuzzle = puzzles.find( //EDIT an existing puzzle card
            (puzzle) => puzzle.id === id
        );

        setPuzzleToEdit(selectedPuzzle);
    };

   const handleUpdatePuzzle = async (id, updatedPuzzle) => { 
        try {
            const response = await apiClient.put(  //After editing, UPDATE an existing puzzle
                `/puzzles/${id}`,
                updatedPuzzle
            );

            setPuzzles((prevPuzzles)  =>
                prevPuzzles.map((puzzle) =>
                    puzzle.id === id ? response.data : puzzle
                )
            );

            setPuzzleToEdit(null);

        } catch (error) {
            console.error("Error updating puzzle:", error);
        }
    };

    const handleAddPuzzle = async (newPuzzle) => {
        try {
            const response = await apiClient.post("/puzzles",newPuzzle); //POST new puzzles to the database
        
            setPuzzles((prevPuzzles) => [...prevPuzzles, response.data]);

        } catch (error) {
            console.error("Error adding puzzle:", error)
        }
    };

    const puzzleItems = puzzles.map(puzzle => 
        <PuzzleCard 
            key={puzzle.id}
            id={puzzle.id} 
            imageURL={puzzle.imageURL}
            title={puzzle.title} 
            brand={puzzle.brand} 
            artist={puzzle.artist} 
            pieceCount={puzzle.pieceCount} 
            height={puzzle.height}
            width={puzzle.width}
            location={puzzle.location} 
            purchaseDate={puzzle.purchaseDate} 
            retailer={puzzle.retailer} 
            startDate={puzzle.startDate} 
            progressPercent={puzzle.progressPercent}
            completionDate={puzzle.completionDate}
            completionTime={puzzle.completionTime}
            onLoan={puzzle.onLoan}
            notes={puzzle.notes} 
            onEditPuzzle={handleEditPuzzle}
            onDeletePuzzle={handleDeletePuzzle} /> 
        );


    return (
        <main >
            <h1 className="my-puzzle-h1">My Puzzles Page</h1>

              <div className="card-container"> 
                {puzzleItems}                
              </div> 

            <Form 
                onAddPuzzle={handleAddPuzzle}
                onUpdatePuzzle={handleUpdatePuzzle}
                puzzleToEdit={puzzleToEdit}
            />
        </main>
       
    );
};



export default MyPuzzlesPage;

