const initialState = {
  token: localStorage.getItem("token") || null,
  users: [],
  totalPages: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LoginSuccess":
      return { ...state, token: action.payload };

    case "FetchUser":
      return {
        ...state,
        users: action.payload.data,
        totalPages: action.payload.total_pages,
      };
    case "Edit":
      const updatedUsers = state.users.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );

      return {
        ...state,
        users: updatedUsers,
      };
    case "Delete":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
