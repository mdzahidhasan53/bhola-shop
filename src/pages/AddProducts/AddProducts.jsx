

const AddProducts = () => {
    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const product = form.product.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const newProduct = {product, brand,type, price, ratting, description, photo};
        console.log(newProduct);
        form.reset();
        



    }
    return (
        <div className="">
            <div className="w-9/12 mx-auto">
                <div className=" lg:text-left">
                    <h1 className="text-4xl font-semibold text-center">Add Product</h1>
                </div>
                <div className="card bg-base-100">
                    <form onSubmit={handleAddProduct} className="card-body">
                       <div className="grid md:grid-cols-2 gap-2">
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="product" placeholder="Product Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered" required />
                        </div>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <input type="text" name="type" placeholder="Type your product" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Enter Price" className="input input-bordered" required />
                        </div>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratting</span>
                            </label>
                            <input type="text" name="ratting" placeholder="Enter Ratting" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name="description" placeholder="Type short description" className="input input-bordered" required />
                        </div>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered" required />
                        </div>
                       </div>
                        <div className="form-control mt-6 w-2/4 mx-auto">
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;