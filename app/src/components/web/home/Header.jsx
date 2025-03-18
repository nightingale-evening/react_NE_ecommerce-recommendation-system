import { useState } from "react"
import { Link, useNavigate } from 'react-router'
import useGlobalContext from "../../../state_management/ContextAPI/GlobalContextProvider";
import { useEffect } from "react";
import { handleProductSearch } from "../../../util/cmnFunction/search";

const Header = () => {
    const navigate = useNavigate();
    const { recommendedProductsList, setSearchProductsList } = useGlobalContext();
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = () => {
        const returnValue = handleProductSearch(searchValue, navigate,
            recommendedProductsList,
            setSearchProductsList)
        !returnValue ? setSearchValue('') : "";
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (searchValue.trim()) {
                handleSearch();
            }
        }, 3000); // 1 1000 seconds interval (60000 for 1 minute)

        return () => clearInterval(interval);
    }, [searchValue]);

    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/home" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 text-xl">Alita Ecommerce</span>
                </Link>
                <div className="md:w-full xl:w-1/2 w-2/4 md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <input type="search" id="search-product" name="search-product" placeholder="Search Product!"
                        className="w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5 hover:text-white">First Link</a>
                    <a className="mr-5 hover:text-white">Second Link</a>
                    <a className="mr-5 hover:text-white">Third Link</a>
                    <a className="mr-5 hover:text-white">Fourth Link</a>
                </nav>
                <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button> */}
            </div>
        </header>
    )
}

export default Header