import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/actions/userActions";
import { setLoginStatus } from "../redux/actions/loginActions";
import { getOffersFromServer } from "../redux/actions/offersActions";
const LoginMain = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

  Axios.defaults.withCredentials = true;
  const onSubmitSignIn = async () => {
    try {
      const userData = await Axios.post("http://localhost:4000/login", {
        email: email,
        password: password,
      });

      if (userData.data.auth) {
        dispatch(setCurrentUser(userData.data));
        dispatch(setLoginStatus(true));
        dispatch(getOffersFromServer());
        history.push("/home");
      } else {
        setMessage(userData.data.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Login</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  required="required"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                  type="password"
                  name="password"
                  id="password"
                  required="required"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                className="f6 link dim black db pointer"
                onClick={() => history.push("/register")}
              >
                Register
              </p>
            </div>
          </div>
          <span>
            <h3>{message}</h3>
          </span>
        </main>
      </article>
    </div>
  );
};

export default LoginMain;
