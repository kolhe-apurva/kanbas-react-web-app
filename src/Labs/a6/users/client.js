import axios from "axios";

export const BASE_API = "http://localhost:4000";
export const USERS_API = `${BASE_API}/api/users`;

const request = axios.create({
  withCredentials: true,
});
export const account = async () => {
  try {
    const response = await request.post(`${USERS_API}/account`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const signin = async (credentials) => {
  try {
    const response = await request.post(`${USERS_API}/signin`, credentials);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (user) => {
  try {
    const response = await request.put(`${USERS_API}/${user._id}`, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const findAllUsers = async () => {
  try {
    const response = await request.get(`${BASE_API}/api/admin/users`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (user) => {
  try {
    const response = await request.post(`${USERS_API}`, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const findUserById = async (id) => {
  try {
    const response = await request.get(`${USERS_API}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (user) => {
  try {
    const response = await request.delete(`${USERS_API}/${user._id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signup = async (credentials) => {
  try {
    const response = await request.post(`${USERS_API}/signup`, credentials);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const signout = async () => {
  try {
    const response = await request.post(`${USERS_API}/signout`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
