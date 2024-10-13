import React, { useEffect, useState } from 'react';
import productService from '../service/product.service';
import { useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const [product, setProduct] = useState({
        productName: "",
        description: "",
        price: "",
        status: ""
    });
    
    const navigate = useNavigate();
    const productServices = new productService();

    // Define id here to be accessible in the whole component
   const[id,setId]=useState("")

    useEffect(() => {
        // Get the current URL
        const url = window.location.href;
        // Extract the ID from the URL
        const pid = url.substring(url.lastIndexOf('/') + 1); // Assumes ID is the last segment of the URL
        setId(pid)
        console.log("Extracted ID:", pid); // Log the extracted ID

        // Fetch product details using the ID
        productServices.getProductById(pid).then((res) => {
            // Assuming res.data contains the product information
            setProduct({
                productName: res.data.productName, // Adjust according to the structure of the response
                description: res.data.description,
                price: res.data.price,
                status: res.data.status
            });
        }).catch((e) => {
            console.log("Error: " + e);
        });
    }, []);

    const handleChange = (e) => {
        const value = e.target.value;
        setProduct({ ...product, [e.target.name]: value });
    };

    const ProductRegister = (e) => {
        e.preventDefault();
        productServices.editProduct(product, id).then(
            (res) => {
                navigate("/");
                console.log("Product Edited successfully");
            }).catch(
                (err) => {
                    console.log(err);
                }
            );

        setProduct({
            productName: "",
            description: "",
            price: "",
            status: ""   
        });
    };

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">
                            Edit Product
                        </div>
                        <div className="card-body">
                            <form onSubmit={ProductRegister}>
                                <div className='mb-3'>
                                    <label>Enter Product Name</label>
                                    <input type='text' name='productName' value={product.productName} className='form-control' onChange={handleChange} />
                                </div>
                                <div className='mb-3'>
                                    <label>Enter Description</label>
                                    <input type='text' name='description' value={product.description} className='form-control' onChange={handleChange} />
                                </div>
                                <div className='mb-3'>
                                    <label>Enter Price</label>
                                    <input type='text' name='price' value={product.price} className='form-control' onChange={handleChange} />
                                </div>
                                <div className='mb-3'>
                                    <label>Enter Status</label>
                                    <input type='text' name='status' value={product.status} className='form-control' onChange={handleChange} />
                                </div>
                                <button className='btn btn-primary col-md-12'>
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
