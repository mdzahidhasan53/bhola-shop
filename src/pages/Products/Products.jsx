

import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
    
    const allProducts = useLoaderData();
    const {name} = useParams();
    const products = allProducts.filter(product=> product.brand == name);
    
    return (
        <div >
            {
                products.map(product => <Product
                key={product._id}
                product={product}
                ></Product>)
            }
        </div>
    );
};

export default Products;