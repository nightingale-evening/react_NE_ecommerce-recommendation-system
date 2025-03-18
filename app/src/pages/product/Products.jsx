import { useEffect, useState } from 'react'
import useGlobalContext from '../../state_management/ContextAPI/GlobalContextProvider';
import { useGetPickleProducts, useGetProducts } from '../../util/hooks/products';
import Product from '../../components/web/product/Product';

const Products = () => {
    useGetProducts();
    useGetPickleProducts();
    const { productsList } = useGlobalContext();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        productsList?.length > 0 ? setIsLoading(true) : setIsLoading(false);
    }, [productsList]);

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="text-4xl mt-2 text-white mb-8 w-full">Top rated products</h2>
                <div className="flex flex-wrap m-4">
                    {isLoading ?
                        productsList?.map((item, index) => (
                            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <Product item={item} />
                            </div>))
                        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                            <div key={index}
                                className="lg:w-1/4 md:w-1/2 p-4 m-2 w-full h-50 bg-slate-200 animate-pulse rounded-sm transition-all"
                            ></div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Products