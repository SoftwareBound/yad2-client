import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoginStatus } from "../redux/actions/loginActions";
import { setCurrentUser } from "../redux/actions/userActions";
import "../style.css";
const NavbarMain = () => {
  const isLogged = useSelector((state) => state.loginReducer);
  const userDetails = useSelector((state) => state.userReducer.userDetails);

  const history = useHistory();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(setCurrentUser({}));
    dispatch(setLoginStatus(false));
    history.push("/");
  };
  return (
    <div>
      {isLogged ? (
        <nav className="navbarStyle">
          <div
            onClick={logoutUser}
            className="f3 link dim black underline pa3 pointer"
          >
            Logout
          </div>
          <br />
          <div className="f3  black  pa3 ">
            {`Hello ${userDetails.userName ?? "Guest"}`}
          </div>
        </nav>
      ) : (
        <nav className="navbarStyle">
          <p
            onClick={() => history.push("/login")}
            className="f3 link dim black underline pa3 pointer"
          >
            Login
          </p>
          <p
            onClick={() => history.push("/register")}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </p>
          <div className="f3  black  pa3 ">
            {`Hello ${userDetails ?? "Guest"}`}
          </div>
        </nav>
      )}
    </div>
  );
};

export default NavbarMain;
