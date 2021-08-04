import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductsList';
import axios from "axios";
export default () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/all-products')
            .then(res=>{
                setAllProducts(res.data);
                setLoaded(true);
            });
    },[])
    const removeFromDom = productId => {
        setAllProducts(allProducts.filter(product => product._id != productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
                    .then(res => {
                        setAllProducts([...allProducts, res.data]);
                    })
    }


    return (
        <div>
           <ProductForm onSubmitProp = {createProduct} initialTitle = "" initialPrice = "" initialDesc = ""/>
           <hr/>
           {loaded && <ProductList allProducts={allProducts} removeFromDom={removeFromDom}/>}
        </div>
    )
}