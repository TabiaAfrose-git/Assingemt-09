import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivetRouter = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    if(loading) return <span className="loading loading-dots loading-xl"></span>
    if(user) return children
    else return <Navigate to = '/Login'></Navigate>
};

export default PrivetRouter;
PrivetRouter.propTypes = {
    children:  PropTypes.node
}