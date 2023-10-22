import { Link } from "react-router-dom";


const Brand = ({ brand }) => {
    const { brand_name, img } = brand;
    return (
        <div className="">
            <Link to={`/brand/${brand_name}`}>
                <div className="hero-content flex-col lg:flex-row w-1/2">
                    <img src={img} className="w-[280px] h-[150px] rounded-lg" />
                    <div>
                        <h1 className="text-3xl font-semibold">{brand_name}</h1>

                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Brand;