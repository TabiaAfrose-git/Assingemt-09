import { useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
    const residentias = useLoaderData();
    const {id} = useParams();

    console.log(residentias);

       //console.log(id);
       const Int_id = parseInt(id);
       const residentia =  residentias.find(residentia =>residentia.id === Int_id)
       console.log(residentia);
       const {estate_title,segment_name,description,price,image} = residentia;
    return (
        <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row h-svh">
          <img
            src={image}
            className=" rounded-lg shadow-2xl h-[400px] w-[650px]" />
          <div>
            <h1 className="text-5xl font-bold">{estate_title}</h1>
            <p className="py-2">{description} </p>
            <p className="py-2">{segment_name} </p>
            <p className="py-2"><strong className="text-cyan-700">{price}</strong> </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default PropertyDetails;