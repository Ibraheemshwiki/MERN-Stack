import React, { useState } from 'react'
import axios from 'axios';
export default (props) => {
    const {initialTitle, initialPrice, initialDesc, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [desc, setDesc] = useState(initialDesc);

    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({title, price, desc});

    //    
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" 
                onChange={(e)=>setTitle(e.target.value)} 
                value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" min="1" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <textarea type="text" onChange={(e)=>setDesc(e.target.value)} value={desc}/>
            </p>
            <input type="submit" value = "Create Product"/>
        </form>
    )
}