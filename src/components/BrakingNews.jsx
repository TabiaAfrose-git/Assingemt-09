import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
    return (
        <div className="my-7 flex justify-center">
        <button className="btn btn-error text-white font-bold ">BrakingNews</button>
        <Marquee speed={100} pauseOnHover>
            <Link to = "/" className="mr-10"> <strong>Flat Frenzy!</strong> Get up to 15% off on monthly rent for selected flats this season! Limited-time offer!</Link>
            <Link to = "/" className="mr-10"><strong>Hot Deal:</strong>  Pay 6 months’ rent upfront and get 1 month FREE. For select premium properties only!</Link>
            <Link to = "/" className="mr-10"><strong>News Flash:</strong> Book your rental early and get 10% off your first 3 months' rent!</Link>
        </Marquee>
        </div>
    );
};

export default BrakingNews;