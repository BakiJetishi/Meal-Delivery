import React from 'react'
import axios from 'axios';

function RemoveProduct(props) {

    const handleRemove = (e) => {
        const productId = props.id;
        const imageUrl = props.name
        console.log(imageUrl)
        if (window.confirm('Are you sure you want to remove product')) {
            axios.delete(`http://localhost/React-PHP/PHP/api/products/delete.php?id=${productId}&img_url=${imageUrl}`)
                .then(response => {
                    props.onRemove(productId)
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    return (
        <button onClick={handleRemove} id={props.id}> Remove</button >
    )
}

export default RemoveProduct