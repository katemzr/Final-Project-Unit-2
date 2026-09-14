import Form from "../Form";
import PuzzleCard from "../PuzzleCard";
import { useEffect, useState } from "react";
import apiClient from "../../config/api-client";


const MyPuzzlesPage = () => {
  
    const [ puzzles, setPuzzles ] = useState([]);

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
            onDeletePuzzle={handleDeletePuzzle}/> );


    const handleAddPuzzle = async (newPuzzle) => {
        try {
            const response = await apiClient.post("/puzzles",newPuzzle); //POST new puzzles to the database
        
            setPuzzles((prevPuzzles) => [...prevPuzzles, response.data]);

        } catch (error) {
            console.error("Error adding puzzle:", error)
        }
    };


    return (
        <main >
            <h1 className="my-puzzle-h1">My Puzzles Page</h1>

              <div className="card-container"> 
                {puzzleItems}                
              </div> 

            <Form onAddPuzzle={handleAddPuzzle}/>
        </main>
       
    );
};



export default MyPuzzlesPage;

