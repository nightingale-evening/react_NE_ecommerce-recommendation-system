import React, { useEffect, useState } from 'react'
import { useGetProducts } from '../../util/hooks/products';
import useGlobalContext from '../../state_management/ContextAPI/GlobalContextProvider';
import Product from '../../components/web/product/Product';
import { getLocalStorage } from '../../util/cmnFunction/localStorage';

const RecommendedProduct = () => {
    useGetProducts();
    const { recommendedProductsList } = useGlobalContext();
    const [productsList, setProductsList] = useState([]);
    const [isData, setIsData] = useState(false);

    useEffect(() => {
        const ProductName = getLocalStorage('RecommendedProduct');
        setProductsList(recommendedProductsList.filter((x) => x['Source Product'] === ProductName));
        ProductName.length > 0 && productsList.length > 0 ? setIsData(true) : setIsData(false);

    }, [getLocalStorage('RecommendedProduct')]);

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="text-4xl mt-2 text-white mb-8 w-full">You may like recommended products</h2>
                <div className="flex flex-wrap m-4">
                    {isData === true ?
                        productsList?.slice(0, 10).map((item, index) => (
                            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <Product item={item} />
                            </div>)
                        )
                        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                            <div key={index}
                                className="p-2 gap-2 lg:w-1/4 md:w-1/2 w-full h-50 bg-slate-200 animate-pulse rounded-lg transition-all"
                            >
                            </div>
                        ))}
                </div>
            </div>
        </section>
    )
}


export default RecommendedProduct