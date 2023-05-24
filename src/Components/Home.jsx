import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Bitro from "./Bitro/Bitro";
import CallUs from "./CallUs";
import Catagory from "./Catagory";
import Chef from "./Chef";
import Featureds from "./Featured/Featureds";

import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";

const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Home || Menu</title>
            </Helmet>

            <Banner></Banner>
            <Catagory></Catagory>
            <Bitro></Bitro>
            <CallUs></CallUs>
            <Chef></Chef>
            <PopularMenu></PopularMenu>
            <Featureds></Featureds>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;