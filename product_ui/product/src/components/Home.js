import React, { useEffect, useState } from 'react';
import ProductService from '../service/product.service';
import { Link } from 'react-router-dom';


function Home() {
  const productServices = new ProductService();
  const [msg, setMsg] = useState("");
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    productServices.getAllProduct().then((res) => {
      console.log('API Response:', res.data); // Log entire response to inspect structure
      if (res.data._embedded && res.data._embedded.products) {
        setProductList(res.data._embedded.products);
      } else {
        console.log('No products found or wrong data structure');
      }
    }).catch((error) => {
      console.log("Error while fetching data: " + error);
    });
  };

  const handleDelete = (id) => {
    if (!id) {
      console.log("Product ID is undefined");
      return;
    }

    console.log("Id is " + id);
    
    productServices.deleteProduct(id).then((res) => {
      setMsg("Deleted Successfully");
      console.log("Deleted Successfully");
      init(); // Refresh the product list after deletion
    }).catch((e) => {
      console.log(e);
    });
  };

  return (
    <div className='container mt-3'>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header fs-3 text-center">
              All Product List
            </div>
            {msg && <p className='fs-4 text-center text-success'>{msg}</p>}
          </div>
        </div>
      </div>

      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Sl No.</th>
              <th scope="col">Product Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

          {
  productList.map((item, index) => {
    console.log("Product Item:", item);
    
    // Log the self link to inspect its structure
    console.log("Product Self Link:", item._links.self.href);
    
    // Extract product ID from _links
    const productId = item._links?.self?.href.split('/').pop(); // Get the last part of the URL as ID
    
    return (
      <tr key={productId ? productId : index}>
        <td>{index + 1}</td>
        <td>{item.productName}</td>
        <td>{item.description}</td>
        <td>{item.price}</td>
        <td>{item.status}</td>
        <td>
        <Link to={"/editProduct/" + productId} className="btn btn-sm btn-primary">Edit</Link>


          <button 
            onClick={() => handleDelete(productId)} 
            className="btn btn-sm btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  })
}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
