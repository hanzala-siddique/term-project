import React from "react";
import userService from "./../../services/UserService";
import { useNavigate } from "react-router-dom";
const Auth = (props) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!userService.isLoggedIn()) {
      navigate("/login");
    }
  }, []);
  return <>{props.children}</>;
};

export default Auth;
