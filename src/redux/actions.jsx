import axios from "axios";

export const loginUser = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    dispatch({ type: "LoginSuccess", payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    navigate("/users");
  } catch (e) {
    alert("Login failed! Check your credentials.");
  }
};

export const fetchUsers = (page) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://reqres.in/api/users?page=${page}`
    );
    dispatch({ type: "FetchUser", payload: response.data });
  } catch (e) {
    alert("Error Showing");
  }
};

export const editUser = (id, userData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `https://reqres.in/api/users/${id}`,
      userData
    );
    const updatedUser = { ...userData, id: parseInt(id) };

    dispatch({
      type: "Edit",
      payload: updatedUser,
    });

    return Promise.resolve();
  } catch (e) {
    console.error("Edit request failed:", e);
    alert("Failed to edit user");
    return Promise.reject(e);
  }
};

export const deleteUser = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://reqres.in/api/users/${id}`);
    dispatch({ type: "Delete", payload: id });
  } catch (error) {
    alert("Failed to delete user.");
  }
};
