import React from 'react';

const Product = ({ product }) => {
    const { _id, name, brand, type, photo } = product;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='font-medium'>{brand}</p>
                <p>{type}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                    <button className="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;

// 
// product
// "Mac note book"
// brand
// "Apple"
// type
// "Note book"
// price
// "23000"
// ratting
// "4"
// description
// "Big screen, longlife bettery"
// photo
