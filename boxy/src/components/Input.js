import React, {useState} from 'react'

export const Input = () => {
    const [listColors, setListColors] = useState([]);
    const [color, setColor] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        setListColors([...listColors,color]);
}
    return (
        <div>
            <form onSubmit = {submitHandler}>
                <input onChange ={ (e) => setColor(e.target.value)}></input>
                <button>Add Whatever</button>
            </form>
        </div>
    )
}
