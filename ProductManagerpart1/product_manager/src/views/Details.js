import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default props => {
    const [product, setProduct] = useState({})

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/all-products/' + productId)
            .then(res => {
                
            })}
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
            <Link to={"/all-products/"}>
            <button onClick={(e)=>{deleteProduct(product._id)}}>
                        Delete
                    </button>
                    </Link>
        </div>
    )
}