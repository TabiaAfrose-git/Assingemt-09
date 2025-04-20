import PropTypes from "prop-types";

const ResidentialCard = ({residentia}) => {
    const {estate_title,image,segment_name} = residentia;
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{estate_title}</h2>
          <p>{segment_name}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ResidentialCard;
ResidentialCard.propTypes = {
    residentia:  PropTypes.object
}