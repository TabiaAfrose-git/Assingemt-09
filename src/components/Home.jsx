import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Banner from "./Banner";
import Footer from "./Footer";


const Home = () => {
    const {user} = useContext(AuthContext);
    //console.log(user.currentUser)
    return (
        <div>
            <div className="w-3/4 mx-auto">
               <Banner className="w-3/4 mx-auto"></Banner>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;