import axios from "axios";

const API_URL="http://localhost:8080";



class ProductService
{
    //post mapping
    insertProduct(product)
    {
        return axios.post(API_URL+"/products",product)
    }


    //get all getmapping
    getAllProduct()
    {
        return axios.get(API_URL+"/products")
    }
// @getmapping
    getProductById(id)
    {
        return axios.get(API_URL+"/products/"+id)
    }
//  delete mapping
    deleteProduct(id)
    {
        return axios.delete(API_URL+"/products/"+id)

    }

    // put mapping
    editProduct(product,id)
    {
        return axios.put(API_URL+"/products/"+id,product)
    }


}
export default ProductService;