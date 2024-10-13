import React, { useState } from 'react'
import productService from '../service/product.service'


const AddProduct = () => {


    const [product, setProduct] = useState(
        {
            productName: "",
            description: "",
            price: "",
            status: ""

        });

    const handleChange = (e) => {
        const value = e.target.value
        setProduct({ ...product, [e.target.name]: value })

    }

   

    const productServices=new productService();

    const ProductRegister = (e) => {
        e.preventDefault()
        productServices.insertProduct(product).then(
            (res)=>{
                console.log("Product added successfully");
            }).catch(
                (err)=>{
                    console.log(err);
                    
                }
            )


            setProduct(
                {
                    productName: "",
                    description: "",
                    price: "",
                    status: ""   
                }
            )
        
    }



  
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-header fs-3 text-center">
                                Add Product
                            </div>
                            <div className="card-body">
                                <form onSubmit={(e) => ProductRegister(e)}>
                                    <div className='mb-3'>
                                        <label> Enter Poduct Name </label>
                                        <input type='text' name='productName' value={product.productName} className='form-control' onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className='mb-3'>
                                        <label> Enter description </label>
                                        <input type='text' name='description' value={product.description} className='form-control' onChange={(e) => handleChange(e)} />
                                    </div>

                                    <div className='mb-3'>
                                        <label> Enter Price </label>
                                        <input type='text' name='price' value={product.price} className='form-control' onChange={(e) => handleChange(e)} />
                                    </div>


                                    <div className='mb-3'>
                                        <label> Enter Status </label>
                                        <input type='text' name='status' value={product.status} className='form-control' onChange={(e) => handleChange(e)}
                                        />
                                    </div>
                                    <button className='btn btn-primary col-md-12 '>
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }


export default AddProduct
