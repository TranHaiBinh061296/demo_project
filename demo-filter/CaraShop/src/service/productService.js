import api from "../api";

const getAllProducts = () => {
    return api.get('/products');
}

const searchProductByCateAndName = (cateId, name) => {
    return api.get(`/products/${cateId}/search_name?name=${name}`)
}

const getProductByType = (typeId) => {
    return api.get(`/products/category/${typeId}`)
}

const getOneProduct = (id) =>{
    return api.get(`/products/${id}`)
}

const deleteProduct = (id) => {
    return api.delete(`/products/${id}`);
}


const updateProduct = (id, product) => {
    return api.put(`/products/${id}`, product);
}


const addProduct = (productType, newProduct) => {
    return api.post(`/products/categories/${productType}/products`, newProduct);
}

const addImgFile = (data) => {
    return api.post('/image', data)
}


export default {getAllProducts, getProductByType, getOneProduct,deleteProduct, updateProduct, addProduct, addImgFile, searchProductByCateAndName}