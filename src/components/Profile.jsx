import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from "prop-types";


const Profile = ({children}) => {
     const {user} = useContext(AuthContext);
     console.log(user);
    return (
        <div>

            <div className="flex justify-center">
                {
                    user && <>
                    <div className="card  ">
                        <figure className="px-10 pt-10">
                            <img
                            src={user.photoURL ? user.photoURL :
                            <>
                                <div className="avatar online">
                                    <div className="w-24 rounded-full">
                                        <img src="/public/img/a.png"/>
                                    </div>
                                </div>
                            </> }
                            alt="img"
                            className="rounded-xl w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{user.email}</h2>
                            <p>{user.displayName}</p>
                        </div>
                        </div>

                    </>
                }
            </div>
        </div>
    );
};

export default Profile;

Profile.propTypes = {
    children:  PropTypes.node
}