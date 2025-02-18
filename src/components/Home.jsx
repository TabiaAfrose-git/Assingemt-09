import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Home = () => {
    const {user} = useContext(AuthContext);
    //console.log(user.currentUser)
    return (
        <div>
            <h1>{user.displayName}</h1>
            <img src={user.photoURL} alt="" />

        </div>
    );
};

export default Home;