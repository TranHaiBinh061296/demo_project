import api from "../api";

export const getAllUser = () => {
  return api.get("/users");
};
