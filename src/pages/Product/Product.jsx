import React from 'react';

const Product = ({product}) => {
    const {brand} = product;
    return (
        <div>
            <h3 className='text-3xl font-semibold'>{brand}</h3>
        </div>
    );
};

export default Product;