

const Explore = () => {
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center py-12">Explore #DoWhatYouCant</h2>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.postimg.cc/x14f8YKh/explore.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-xl font-medium">
                            Become the ultimate photographer with Samsung AI
                            </div>
                            <div className="collapse-content">
                                <p>Learn more</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                            Improve your next Pickleball game
                            </div>
                            <div className="collapse-content">
                                <p>Learn more</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                            6 smart home hacks for a calm fall
                            </div>
                            <div className="collapse-content">
                                <p>Learn more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-12">
                <img className="w-full" src="https://i.postimg.cc/2S6HTNPz/Screenshot.png" alt="" />
            </div>
        </div>
    );
};

export default Explore;