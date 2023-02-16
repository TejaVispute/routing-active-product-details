import { createContext, useContext, useState } from "react";

const Logincontext = createContext();

function LogincontextProvider({ children }) {
  let [loginLogout, setLoginLogout] = useState("Login");
  return (
    <Logincontext.Provider value={{ loginLogout, setLoginLogout }}>
      {children}
    </Logincontext.Provider>
  );
}

let useLogincontext = () => useContext(Logincontext);

export { LogincontextProvider, useLogincontext };
