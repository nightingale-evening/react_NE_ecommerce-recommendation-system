import { useEffect } from "react";
import useGlobalContext from "../../state_management/ContextAPI/GlobalContextProvider";
//import { useNavigate } from "react-router";

export const useHandleProductSearch = (searchValues) => {
  //const navigate = useNavigate();
  const { productsList, setSearchProductsList } = useGlobalContext();

  //useEffect(() => {
  //if (!searchValues) return false;
  if (searchValues === "Search Product") return false;
  if (searchValues.trim().length === 0) {
    alert("Expecting search products!");
    return;
  }

  const searchWords = searchValues.toString().toLowerCase().split(" ");
  const matchedProducts = productsList.filter((product) => {
    const productTags = product["Product Tags"].toLowerCase();
    return searchWords.every((word) => productTags.includes(word));
  });

  console.log(matchedProducts);

  if (matchedProducts.length > 0) {
    setSearchProductsList(matchedProducts);
    // navigate(`/productSearch`, { replace: true });
    return searchValues;
  }
  //}, [searchValues, productsList, setSearchProductsList]);
};
