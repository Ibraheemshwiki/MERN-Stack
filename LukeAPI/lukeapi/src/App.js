
import './App.css';
import axios from 'axios';
import React, {useState} from 'react';

function App() {
    const [info, setInfo] = useState({});
    const [selection, setSelection] = useState("people");
    const [id, setId] = useState(0);
    const submitHandler = (e) =>{
      e.preventDefault();
      console.log(selection,id);
      axios.get('https://swapi.dev/api/'+selection+'/'+id+'/').then(res => {setInfo(res.data)})
      .then(res => {console.log(info)})
      .catch(err=>console.log(err)) 
    }

  return (
    <div className="App"><div>
      <form onSubmit={submitHandler}>
      <h1>Search for: </h1>
      <select onChange={(e) => setSelection(e.target.value)}>
        <option value = "people">People</option>
        <option value = "planets">Planets</option>
        </select>
        <h1>ID: </h1>
        <input type="number" onChange={(e) => setId(e.target.value)}/>
        <input type="submit" value="Submit"/>
        </form>
        </div>
        {
          selection === "people" 
        ? <div><h1>{info.name}</h1>
        <p>Height: {info.height} cm</p>
        <p>Mass: {info.mass} kg</p>
        <p>Hair Color: {info.hair_color}</p>
        <p>Skin Color: {info.skin_color}</p>
        </div>
        
        : <div>
          <h1>{info.name}</h1>
        <p>Climate: {info.climate}</p>
        <p>Terrain: {info.terrain}</p>
        <p>Surface water: {info.surface_water === "1"? "True" : "False"}</p>
        <p>Population: {info.population}</p>

        </div>
        }
    </div>
  );
}

export default App;
