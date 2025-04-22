import { Link, useLoaderData, useParams } from "react-router-dom";

const PropertyDetails = () => {
    const residentias = useLoaderData();
    const {id} = useParams();

    //console.log(residentias);

       //console.log(id);
       const Int_id = parseInt(id);
       const residentia =  residentias.find(residentia =>residentia.id === Int_id)
       console.log(residentia);
       const {estate_title,segment_name,description,price,status,area,location,facilities,view_property} = residentia;
    return (
        <div className="hero p-5">
        <div className="hero-content flex-col lg:flex-row h-svh">
          <div className="w-3/4  bg-base-200 p-5">
            <h1 className="text-3xl font-bold my-5">{estate_title}</h1>
            <p className="py-2 my-3">{description} </p>
            <p className="py-2 font-semibold text-indigo-700"> {segment_name} </p>
            <p className="py-2"><strong>For: </strong>{status} </p>
            <p className="py-2"><strong>Area: </strong> {area} </p>
            <p className="py-2"><strong>Location: </strong> {location} </p>
            <div className="py-2"><strong>Facilities: </strong>
                 {
                  facilities.map((facility,idx) =><p
                  className='text-indigo-700 p-2 rounded-lg'
                  key={idx}
                  >#{facility}</p>)
                }
             </div>
            <p className=" font-black font-bold mb-6 "> Price: <strong className="text-emerald-700">{price}</strong> </p>
            <button className="btn btn-primary"><Link to = '/'>Go to Home</Link></button>
          </div>
        </div>
      </div>
    );
};

export default PropertyDetails;