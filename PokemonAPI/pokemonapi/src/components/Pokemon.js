import React, {useState} from 'react'


const Pokemon = (props) => {
    const [poke, setPoke] = useState([]);
    const bringIt = (e) =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
          return response.json();  
      })
      .then(response => {
        return setPoke(response.results);
        
    }).catch(err=>{
          console.log(err);
      });

    }
    
    return (
        <>
        <button onClick = {bringIt}>Gonna Catch-em All</button>
       <ul>{
        poke.map((pok,i) => {
            return <li key={i}> {pok.name}</li>
        }
         
)}
       </ul>
    
    </>
    )
}

export default Pokemon
