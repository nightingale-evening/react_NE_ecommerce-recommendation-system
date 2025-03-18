import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'
import { getLocalStorage, setLocalStorage } from '../../../util/cmnFunction/localStorage';
import RecommendedProduct from '../../../pages/product/RecommendedProduct';
import { Header } from '../home';

const ProductDetails = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const productDetail = getLocalStorage('ProductDetail');
        setLocalStorage('RecommendedProduct', JSON.stringify(productDetail['Product Name']))
        setProduct(productDetail);
        if (typeof productId !== 'string' && productDetail['Product Id'] !== productId) {
            navigate(`/home`, { replace: true });
        }
    }, [productId]);

    return (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <Header />
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{product['Product Brand']}</h2>
                        <h1 className="text-white text-3xl title-font font-medium mb-4">{product['Product Name']}</h1>
                        <div className="flex mb-4">
                            <a className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                            <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">Reviews</a>
                            <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">Details</a>
                        </div>
                        <p className="leading-relaxed mb-4">{product['Product Description']}</p>
                        <div className="flex border-t border-gray-800 py-2">
                            <span className="text-gray-500">Category</span>
                            <span className="ml-auto text-white">{product['Product Category']}</span>
                        </div>
                        <div className="flex border-t border-gray-800 py-2">
                            <span className="text-gray-500">Rating</span>
                            <span className="ml-auto text-white">{product['Product Rating']}</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                            <span className="text-gray-500">Reviews Count</span>
                            <span className="ml-auto text-white">{product['Product Reviews Count']}</span>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-white">${product['Product Price']}</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={() => navigate(`/home`, { replace: true })}>Button</button>
                            <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-150 object-fill object-center h-full block rounded overflow-hidden" src={product['Product Image Url']?.split("|")[0]} />
                </div>
            </div>
            <RecommendedProduct />
        </section>
    )
}

export default ProductDetails