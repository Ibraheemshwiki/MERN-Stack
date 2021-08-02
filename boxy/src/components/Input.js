import React, {useState} from 'react'

export const Input = () => {
    const [listColors, setListColors] = useState([]);
    const [color, setColor] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        setListColors(listColors.concat({color}));
}
    return (
        <>
        <div>
            <form onSubmit = {submitHandler}>
                <input onChange ={ (e) => setColor(e.target.value)} value={color}></input>
                <button>Add Whatever</button>
            </form>
        </div>
        <div className = "boxes">
       { listColors.map((box, i) => {
            return(
                <div key = {i} style = {{backgroundColor:box.color, width:200+"px", height:200+"px", margin:10+"px"}}></div>

                    )
    
                }
            )
        }
        </div>
    </>
    )
}
