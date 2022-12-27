import api from "../api";



export const login = async (user) => {
    return fetch(`http://localhost:8080/api/v1/users/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: user,
    })
};

export const getUser = async (id) => {
  return api.get(`/users/${id}`)
}

export const signup = async (newUser) => {
      return api.post(`/users`, newUser)
  }
export default {login, signup, getUser}