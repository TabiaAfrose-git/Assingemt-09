import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Banner from "./Banner";
import Footer from "./Footer";
import EstateSection from "./EstateSection";
import { useLoaderData } from "react-router-dom";
import ResidentialCard from "./ResidentialCard";


const Home = () => {
    const residentias = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(residentias);
    return (
        <div >
            <div className="w-3/4  mx-auto m-5 p-5 ">
               <Banner className="mx-auto"></Banner>
               <EstateSection
                    className ="m-5 p-5"
                    residentias = {residentias}
               ></EstateSection>
            </div>
            <Footer className = ""></Footer>
        </div>
    );
};

export default Home;