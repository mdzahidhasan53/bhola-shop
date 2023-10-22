import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to={`/product/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>
                    <button className="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Product;

