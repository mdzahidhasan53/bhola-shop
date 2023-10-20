

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[550px]">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/Dz2N4ws6/slider-1.jpg)' }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold"></h1>
                        </div>
                    </div>
                </div>
                {/* <img src="https://i.postimg.cc/Dz2N4ws6/slider-1.jpg" className="w-full" /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[550px]">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/tgrt2hv1/slider-3.jpg)' }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold"></h1>
                        </div>
                    </div>
                </div>
                {/* <img src="https://i.postimg.cc/tgrt2hv1/slider-3.jpg" className="w-full" /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[550px]">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/ZKVR9VWy/slider-4.jpg)' }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold"></h1>
                        </div>
                    </div>
                </div>
                {/* <img src="https://i.postimg.cc/ZKVR9VWy/slider-4.jpg" className="w-full" /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[550px]">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/02sv8mZK/slider-5.jpg)' }}>
                    <div className="hero-overlay bg-opacity-40"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold"></h1>
                        </div>
                    </div>
                </div>
                {/* <img src="https://i.postimg.cc/02sv8mZK/slider-5.jpg" className="w-full" /> */}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;