import axios from "axios";
export function loginUser(user) {
  return dispatch => {
    axios.post("http://localhost:3001/login", user).then(res => {
      console.log(res);
      dispatch({
        type: "LOGIN",
        payLoad: res
      });
    });
  };
}

export function changeUser(user) {
  return dispatch => {
    dispatch({
      type: "CHANGE",
      payLoad: user
    });
  };
}
