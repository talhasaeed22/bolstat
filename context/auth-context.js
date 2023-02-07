import React, {
  useState,
  useEffect,
  createContext,
  useLayoutEffect,
} from "react";
import { getAuth } from "firebase/auth";

const AuthContext = createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: "null",
    currentUser: null,
  });
  const auth = getAuth();
  useLayoutEffect(() => {
    const token = localStorage.getItem("_token");
    if (token) setAuthState({ ...authState, token });
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuthState({ token: user?.refreshToken ?? "", currentUser: user });
      localStorage.setItem("_token", user?.refreshToken ?? "");
    });
  }, [auth]);

  return (
    <Provider
      value={{
        isLoggedIn: () => !!authState.token,
        currentUser: authState.currentUser,
      }}
    >
      {children}
    </Provider>
  );
};

export { AuthContext, AuthProvider };
