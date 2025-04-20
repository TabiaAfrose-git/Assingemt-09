import PropTypes from "prop-types";
import ResidentialCard from "./ResidentialCard";

const EstateSection = ({residentias}) => {
    console.log(residentias);
    return (
        <div className="m-10 p-2">
            <h1>Hello I am Estate Secetion!!!</h1>
            <div className="grid grid-cols-2 gap-5">
                {
                    residentias.map(residentia => <ResidentialCard
                        key={residentia.id}
                        residentia = {residentia}
                    ></ResidentialCard>)
                }
            </div>

        </div>
    );
};

export default EstateSection;
EstateSection.propTypes = {
    residentias:  PropTypes.object
}