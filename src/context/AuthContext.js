import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
axios.defaults.withCredentials = true;


function AuthContextProvider(props) {
  const [loggedIn, setloggedIn] = useState(undefined);
  const [role,setrole] = useState(undefined);

  async function getLoggedIn() {
    const loggedInres = await axios.get("http://localhost:5000/user/loggedIn");
    setloggedIn(loggedInres.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn,setrole,role }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
