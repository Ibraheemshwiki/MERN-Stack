import React, {useState, useEffect} from 'react'
const Luke = (props) => {
    const [baytoon, setBaytoon] = useState({});
    
    return (
        <div>
           <h1>{props.info.name}</h1> 
        </div>
    )
}

export default Luke
