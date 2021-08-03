import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Pokemon = (props) => {
    const [poke, setPoke] = useState([]);
    const fetchIt = (e) => {
        
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(res=> {setPoke(res.data.results);
})
        .catch(err=> console.log(err))
};


    return (
        <div>
            <button onClick = {fetchIt}>Gonna Catch-em All</button>
            <ul>{
                poke.map((pok,i) => {
            return <li key={i}> {pok.name}</li>
               }        
)}
       </ul>
        </div>
    )
}

export default Pokemon
