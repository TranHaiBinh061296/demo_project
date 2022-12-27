import api from "../api";

export const getAllCategories = () => {
    return api.get('/categories');
}

export const getOneCategory = (id) => {
    return api.get(`categories/${id}`);
}

export const updateCategory = (id, category) => {
    return api.put(`/categories/${id}`, category);
}

export const deleteCategory = (id) => {
    return api.delete(`/categories/${id}`);
}

export const addCategory = (newCategory) => {
    return api.post(`/categories/`, newCategory);
}

export default {getAllCategories,getOneCategory, updateCategory, deleteCategory, addCategory};