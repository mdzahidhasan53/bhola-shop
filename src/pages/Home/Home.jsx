import AddProducts from "../AddProducts/AddProducts";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Explore from "../Explore/Explore";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Explore></Explore>
            <AddProducts></AddProducts>
        </div>
    );
};

export default Home;