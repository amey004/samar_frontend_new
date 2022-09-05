import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
axios.defaults.withCredentials = true;


function AuthContextProvider(props) {
  const [loggedIn, setloggedIn] = useState(undefined);
  const [role,setrole] = useState(undefined);

  async function getLoggedIn() {
    const loggedInres = await axios.get(
      "https://samarserver.herokuapp.com/user/loggedIn"
    );
    // const category = await axios.get(
    //   "https://samarserver.herokuapp.com/user/role"
    // );
    // setrole(category.data.role);
    setloggedIn(loggedInres.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, [loggedIn,role]);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn,setrole,role }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
