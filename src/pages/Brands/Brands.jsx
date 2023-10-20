import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";


const Brands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(()=>{
        fetch('brands.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
    return (
        <div className="my-12">
            <h2 className="text-4xl text-center font-medium">Our featured brand</h2>
            <div className="grid md:grid-cols-3 gap-2 ml-20 mt-11">
                {
                    brands.map(brand => <Brand
                    key={brand.id}
                    brand={brand}
                    ></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;