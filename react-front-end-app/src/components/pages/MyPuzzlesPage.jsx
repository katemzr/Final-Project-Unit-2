import Form from "../Form";
import PuzzleCard from "../PuzzleCard";
import { useEffect, useState } from "react";
import apiClient from "../../config/api-client";

/*
const initialPuzzles = [  //puzzles to appear on My Puzzles page to simulate a user's saved puzzle cards.
    {
        id: "1", 
        title: "My Cup Runneth Over",
        link: '/images/MyCupRunnethOver.jpg',
        alt: "image of My Cup Runneth Over puzzle"

    },{
        id: "2",
        title: "Worship of Trees",
        link: '/images/WorshipOfTrees.jpg',
        alt: "image of Worship of Trees puzzle"

    },{
        id: "3",
        title: "The Exploded Beetle",
        link: '/images/TheExplodedBeetle.jpg',
        alt: "image of the Exploded Beetle puzzle"

    },{
        id: "4",
        title: "Bottle Caps",
        link: '/images/BottleCaps.jpg',
        alt: "image of Bottle Caps puzzle"

    },{
        id: "5",
        title: "Turbo 3000",
        link: '/images/Turbo3000.jpg',
        alt: "image of Turbo 3000 puzzle"

    },{
        id: "6",
        title: "Tree of Life Tapestry",
        link: '/images/TreeOfLifeTapestry.jpg',
        alt: "image of Tree of Life Tapestry puzzle"
    }


];
*/

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

/*
    const puzzleItems = puzzles.map(puzzle => 
        <PuzzleCard 
            key={puzzle.id} 
            link={puzzle.link} 
            alt={puzzle.alt} 
            image={puzzle.image}
            title={puzzle.title} 
            puzzlebrand={puzzle.puzzlebrand} 
            puzzleartist={puzzle.puzzleartist} 
            piececount={puzzle.piececount} 
            height={puzzle.height}
            width={puzzle.width}
            location={puzzle.location} 
            purchasedate={puzzle.purchasedate} 
            retailer={puzzle.retailer} 
            startdate={puzzle.startdate} 
            progresspercent={puzzle.progresspercent}
            completiondate={puzzle.completiondate}
            completiontime={puzzle.completiontime}
            onloan={puzzle.onloan}
            notes={puzzle.notes} /> );
*/

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

