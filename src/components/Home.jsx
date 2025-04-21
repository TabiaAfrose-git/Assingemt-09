import Banner from "./Banner";
import Footer from "./Footer";
import EstateSection from "./EstateSection";
import { useLoaderData } from "react-router-dom";
import BrakingNews from "./BrakingNews";


const Home = () => {
    const residentias = useLoaderData();
    console.log(residentias);
    return (
        <div >
            <div className="w-3/4  mx-auto ">
                <BrakingNews ></BrakingNews>
               <Banner className="mx-auto"></Banner>
               <EstateSection
                    className ="m-5 p-5"
                    residentias = {residentias}
               ></EstateSection>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;