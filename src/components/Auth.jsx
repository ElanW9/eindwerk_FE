import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState({ loggedin: false });

  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (token) {
      const decodedToken = jwt_decode(token);
      setLogin({ loggedin: true, id: decodedToken.sub });
    } else {
      setLogin(undefined);
    }
  }, []);

  return <Auth.Provider value={[login, setLogin]}>{children}</Auth.Provider>;
};
