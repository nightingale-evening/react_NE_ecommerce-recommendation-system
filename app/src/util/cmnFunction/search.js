export const handleProductSearch = (
    searchValue,
    navigate,
    recommendedProductsList,
    setSearchProductsList
) => {
    if (searchValue.length === 0) {
        alert("Expecting search products!");
        return false;
    }
    const searchWords = searchValue.toLowerCase().split(" "); // Split input by spaces
    const matchedProducts = recommendedProductsList.filter((product) => {
        const products = product["Product Tags"].toLowerCase();
        return searchWords.every((word) => products.includes(word));
    });

    if (matchedProducts.length > 0) {
        setSearchProductsList(matchedProducts);
        navigate(`/productSearch`, { replace: true });
    } else {
        alert("Sorry we did not found anything related to your search!!");
        return false;
    }
};
