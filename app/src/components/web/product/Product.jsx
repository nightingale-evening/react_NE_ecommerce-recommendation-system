import { Link, useNavigate } from 'react-router'
import { setLocalStorage } from '../../../util/cmnFunction/localStorage';

const Product = ({ item }) => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        setLocalStorage('ProductDetail', JSON.stringify(item));
        setLocalStorage('RecommendedProduct', JSON.stringify(item['Product Name']))
        navigate(`/product/${item['Product Id']}`, { replace: true });
    }
    return (
        <>
            <Link onClick={handleOnClick}>
                <div className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-fill object-center w-full h-full block" src={item['Product Image Url']?.split("|")[0]} />
                </div>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{item['Product Brand']}</h3>
                    <h2 className="text-white title-font text-lg font-medium">{item['Product Name']}</h2>
                    <p className="mt-1">${item['Product Price']}</p>
                </div>
            </Link>
        </>
    )
}

export default Product