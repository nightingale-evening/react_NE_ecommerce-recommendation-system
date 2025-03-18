import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [searchProductsList, setSearchProductsList] = useState([]);
  const [recommendedProductsList, setRecommendedProductsList] = useState([]);

  return (
    <>
      <GlobalContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          productsList,
          setProductsList,
          searchProductsList,
          setSearchProductsList,
          recommendedProductsList,
          setRecommendedProductsList,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default useGlobalContext;
