import { useEffect, useState } from "react";
import Product from "./Product";

const items = [
    {
        name: 'drone',
        price: 299.99,
        description: 'High-performance drone with advanced stabilization',
        imgUrl: '/images/drone.png',
        rating: Math.floor(Math.random() * 5) + 1
    },
    {
        name: 'e-mind',
        price: 199.99,
        description: 'Smart e-mind device with AI capabilities',
        imgUrl: '/images/e-mind.png',
        rating: Math.floor(Math.random() * 5) + 1
    },
    {
        name: 'flying-robot',
        price: 349.99,
        description: 'Autonomous flying robot for aerial tasks',
        imgUrl: '/images/flying-robot.png',
        rating: Math.floor(Math.random() * 5) + 1
    },
    {
        name: 'robot',
        price: 249.99,
        description: 'Intelligent robot assistant for everyday use',
        imgUrl: '/images/robot.png',
        rating: Math.floor(Math.random() * 5) + 1
    },
    {
        name: 'screen',
        price: 449.99,
        description: 'High-resolution interactive display screen',
        imgUrl: '/images/screen.png',
        rating: Math.floor(Math.random() * 5) + 1
    }
];
const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        // connect to an external server and fetch products
        setProducts(items)
    }, [])
    return (
        <div>

            {

                products.map((product) => <Product product={product} />)
            }


        </div>
    )
}

export default ProductList