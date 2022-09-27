import React, { createContext, useContext } from "react";
import { useUserReducer } from "./reducers";

const UserContext = createContext<any>({ defaultValue: {} });
const { Provider } = UserContext;

const UserProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useUserReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: "",
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
