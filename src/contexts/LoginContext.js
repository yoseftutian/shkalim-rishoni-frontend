import { createContext, useContext, useState } from "react";

const LoginContext = createContext();

export function useLoginContext() {
  return useContext(LoginContext);
}

export default function LoginProvider({ children }) {
  const [token, setToken] = useState(null);
  return (
    <LoginContext.Provider value={{ token, setToken }}>
      {children}
    </LoginContext.Provider>
  );
}
