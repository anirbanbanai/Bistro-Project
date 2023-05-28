import { Outlet} from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = () => {
    // const location = useLocation();
    // console.log(location)
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;