

import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {

    const allProducts = useLoaderData();
    const { name } = useParams();
    const products = allProducts.filter(product => product.brand == name);

    return (
        <div >
            <div>
                <div className="rounded-box grid grid-cols-3 ml-10">
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/nccrHCq/Galaxy-S21-ultra.jpg" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/R6RpJph/mockup-free-op-Ae-Flgy-Qqs-unsplash.jpg" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/BLPGx9W/oppo-f17-pro-featured.webp" alt="" />
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-3 container mx-auto my-12">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;