import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
const RegisterMain = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmitRegister = async (e) => {
    e.preventDefault();

    try {
      const dataToRegister = await Axios.post(
        "http://localhost:4000/register",
        {
          name: name,
          email: email,
          password: password,
        }
      );
      if (dataToRegister.data.userExiset) {
        throw new Error(dataToRegister.data.message);
      }
    } catch (e) {
      alert(e);
    }
    history.push("/login");
  };
  return (
    <div>
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black  w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
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
                onClick={onSubmitRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3"></div>
          </div>
        </main>
      </article>
    </div>
  );
};

export default RegisterMain;
