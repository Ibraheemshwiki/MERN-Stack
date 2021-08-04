import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

export default props => {
    const [product, setProduct] = useState({})

    
    useEffect(() => {
        axios.get("http://localhost:8000/api/all-products/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.desc}</p>
            <Link to={"/all-products/" + product._id + "/edit"}>
            Edit
            </Link>
            
            <DeleteButton productId = {product._id} successCallback = {() => navigate("/all-products")}/>
                    
        </div>
    )
}