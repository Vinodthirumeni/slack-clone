import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider"; // CONTEXT API
import { actionTypes } from "./reducer"; // CONTEXT API
function Login() {
  const [{user},dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to check this app</h1>
        <p>www.google.com</p>
        <Button onClick={signIn}> Sign IN with google </Button>
      </div>
    </div>
  );
}
export default Login;
