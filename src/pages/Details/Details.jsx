import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const Products = useLoaderData();
    const { id } = useParams();
    const product = Products.find(product => product._id == id);
    const {name, type, price, ratting , description, photo} = product;
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src= {photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold">{name}</h1> 
                    <p>{type}</p>
                    <p>{description}</p>
                    <p>Ratting : {ratting}</p>
                    <p className="text-lg font-medium">
                        {price} Tk
                    </p>
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Details;

//
// name
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