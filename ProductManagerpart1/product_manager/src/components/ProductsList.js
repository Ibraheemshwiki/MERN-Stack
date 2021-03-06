import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';
export default props => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/all-products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })}
    return (
        <div>
            {props.allProducts.map((product, idx)=>{
                return <div> <Link to={"/all-products/" + product._id}><p key={idx}>{product.title}</p></Link>
                <DeleteButton productId = {product._id} successCallback = {() => removeFromDom(product._id)}/>
            </div>
            })}
        </div>
    )
}