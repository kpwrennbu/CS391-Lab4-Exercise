import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

// TODO: Step 1 - (DONE FOR YOU - NO WORK NEEDED) Build a Pokedex component that renders 151 Pokémon AFTER pressing a button
export default function Pokedex() {
  // TODO: Step 2 - State: started flag, list of pokemon, loading, and error
  //TODO NOTE: call states started, pokemon, loading and error accordingly
  
  // TODO: Step 2a - State: started flag - boolean, set to false. This will help to signal to start the api call when we press the button

  // TODO: Step 2b - State: pokemon array - empty array to hold pokemon

  // TODO: Step 2c - State: loading state - set to false
 
  // TODO: Step 2d - State: error state - set to "" to hold the error message if any
 

  
  useEffect(() => {
    // TODO: Step 3 - if started is false, immedietly return as we are not ready to call the api yet
   

    async function loadKanto151() {
      // TODO: Step 4 - set states accordingly, error = "", loading to true, pokemon to []
      

      try {
        // TODO: Step 5 - call the api using this url: https://pokeapi.co/api/v2/pokemon?limit=151&offset=0, get the response and the data
        //TODO: call your data variable data so the next lines work in your favor
       

        // TODO: jk, this is too complicated, move on to the next state. Just getting the pokemon data you need, such as the id, name and sprite
        const list = data.results.map((p) => {
          const id = Number(p.url.split("/").filter(Boolean).pop());
          const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          return { id, name: p.name, sprite };
        });
        // TODO: Step 6 - set the pokemon to variable list

    } catch (err) {
        //TODO Step 7: set the error to err
        console.error(err);
       
      } finally {
        //TODO Step 8: stop loading
       
      }
    }

    //TODO Step 9: call the Kanto Function
   


  }, 
    //TODO STEP 10: fill in the dependency array with started (But Why? (I'm gonna ask this in class, so be ready))
    [/*something goes here */]
);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}>🧰 Lab Exercise: Kanto Pokédex (151)</h1>

      {/* TODO STEP 11: FILL IN THE onClick to start the api call (with setStarted) */}
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <button
          onClick={/* Fill this in, look at README for help */}
          disabled={started || loading}
          style={{
            padding: "0.8rem 1.2rem",
            borderRadius: 8,
            border: "1px solid #ddd",
            background: "#f5f5f5",
            fontWeight: 600,
            cursor: started ? "not-allowed" : "pointer",
          }}
        >
         {/* TODO STEP 12: Conditionally render text based off started stated*/}
         {/* Note syntax is {boolean_var ? if true this renders : if false this renders} */}

        </button>
      </div>

      {/* TODO: Step 12 Show error state, I gave you the loading part to help */}
      {loading && <p style={{ textAlign: "center" }}>Loading Pokémon…</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
          gap: 16,
        }}
      >
       {/* TODO: Step 13 - map over pokeman with pokecard component - ALSO GO TO POKECARD.jsx to complete this */}
        
      </div>
    </div>
  );
}
