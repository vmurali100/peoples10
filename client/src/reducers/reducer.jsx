let user = {
  email: "",
  password: ""
};
const reducer = (state = user, action) => {
  switch (action.type) {
    case "LOGIN":
      state = {
        ...state,
        message: action.payLoad.data.message
      };
    case "CHANGE":
      state = {
        ...state,
        email: action.payLoad.email,
        password: action.payLoad.password
      };
  }
  return state;
};

export default reducer;
