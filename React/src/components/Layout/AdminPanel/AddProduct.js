import { useState, useRef, useEffect } from "react";
import useToggle from '../../../custom-hooks/use-toggle'
import { AuthModal } from '../../UI/Modal'
import { useNavigate } from "react-router-dom";
import axios from "axios";

import classes from './AddProduct.module.css'

const AddProduct = () => {
    const [imageUpload, setImageUpload] = useState();
    const [imageUrl, setImageUrl] = useState();
    const [imageDeployed, setImageDeployed] = useToggle(false)

    const navigate = useNavigate()

    const nameInputRef = useRef();
    const descInputRef = useRef();
    const priceInputRef = useRef();
    const typeInputRef = useRef();


    const uploadImage = (e) => {
        setImageUpload(e.target.files[0]);
    }

    useEffect(() => {
        if (imageUpload === null) return
        const formData = new FormData();
        formData.append('image', imageUpload);

        axios.post('http://localhost/react-PHP/PHP/images/upload-image.php', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            setImageUrl(response.data.url);
        });
    }, [imageUpload])

    /**
     * It takes the values from the inputs and sends them to the database
     * @param e - event
     */
    async function addProductHandler(e) {
        e.preventDefault()

        const data = {
            title: nameInputRef.current.value,
            img_url: imageUrl,
            body: descInputRef.current.value,
            price: priceInputRef.current.value,
            meal_type: typeInputRef.current.value,
        }

        await axios.post('http://localhost/react-PHP/PHP/api/products/create.php', data)
            /* Clearing the input fields and redirecting to the home page after 2 seconds. */
            .then((res) => {
                nameInputRef.current.value = ''
                descInputRef.current.value = ''
                priceInputRef.current.value = ''
                setImageDeployed(true)
                setImageUpload(null)
                setTimeout(() => {
                    setImageDeployed(false)
                    navigate('/')
                }, 2000)
            })
    }

    return (
        <>
            <div className={classes.header}>
                <h2>Add new</h2>
                <h1>Product</h1>
            </div>
            <form className={classes.content} onSubmit={addProductHandler}>
                <div>
                    <label htmlFor='img'>Image</label>
                    <input type='file' placeholder='Product Image' id='img' required onChange={uploadImage} />
                </div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' placeholder='Enter product name' required id='name' ref={nameInputRef} />
                </div>
                <div>
                    <label htmlFor='desc'>Description</label>
                    <input type='text' placeholder='Enter product description' required id='desc' ref={descInputRef} />
                </div>

                <div>
                    <label htmlFor='price'>Price</label>
                    <input type='text' placeholder='Enter price' id='price' required ref={priceInputRef} />
                </div>
                <div>
                    <label >Product Type</label>
                    <select ref={typeInputRef}>
                        <option value='All'>All</option>
                        <option value='Pizza'>Pizza</option>
                        <option value='Chicken'>Chicken</option>
                        <option value='Drinks'>Drinks</option>
                        <option value='Burgers'>Burgers</option>
                        <option value='Desserts'>Desserts</option>
                        <option value='Fish'>Fish</option>
                        <option value='Fruits'>Fruits</option>
                    </select>
                </div>

                <button type='submit'>Add!</button>
            </form>
            {imageDeployed && <AuthModal><p className={classes.deployed}>Product successfully added</p></AuthModal>}
        </>
    )
}

export default AddProduct