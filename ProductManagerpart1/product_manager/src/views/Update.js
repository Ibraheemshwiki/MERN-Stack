import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import { navigate } from '@reach/router';


export default props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/all-products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
    const updateProduct = product => {
        // e.preventDefault();
        axios.put('http://localhost:8000/api/all-products/' + id, product)
            .then(res => console.log(res))
            .then(navigate("/all-products"))
    }
    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && 
            <ProductForm onSubmitProp={updateProduct} 
            initialTitle = {product.title} 
            initialPrice = {product.price} 
            initialDesc = {product.desc}/>}
        </div>
    )
}