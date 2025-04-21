import { useContext } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const NavBar = () => {

    const {user, LogOut} = useContext(AuthContext);
    const Navigate = useNavigate();

    const handelLogIn = () => {
        Navigate("/Login")
        console.log("Hello handelLogIn is Working..")
    }
    const handelLogOut = () => {
        LogOut()
        .then(() => console.log('user logged out successfully!'))
        .catch(error => console.log(error))
    }

    const NavLinks = <>
        {
            user ?
            <>  <li><NavLink to = "/">Home</NavLink></li>
                <li><NavLink to = '/about'>About</NavLink></li>
                <li><NavLink to = '/profile'>Profile</NavLink></li>
                <li><NavLink to = '/dashboard'>DashBoard</NavLink></li>

            </> :
            <>
              <li><NavLink to = "/">Home</NavLink></li>
              <li><NavLink to = '/about'>About</NavLink></li>
              <li><NavLink to = '/Register'>Register</NavLink></li>
            </>
        }

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {NavLinks}
            </ul>
          </div>
          <a className=" text-xl font-bold ml-2">TripNest</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {NavLinks}
          </ul>
        </div>


        <div className="navbar-end">
            {
                user ? <>
                        <span className="text-sm font-semibold mr-4">{user.email ? user.email : user.displayName }</span>
                        {
                          user.photoURL ?
                          <div className="avatar">
                            <div className="ring-primary  w-[50px] h-[50px] rounded-full ring ring-offset-2">

                              <img src= {user.photoURL}/>
                            </div>
                          </div>
                          : ' '
                        }
                        <a onClick={handelLogOut} className="btn ml-5">LogOut</a>
                    </>
                    // eslint-disable-next-line react/jsx-no-undef
                    : <>
                        <button onClick={handelLogIn} className="btn">LogIn</button>
                      </>

            }
        </div>

      </div>
    );
};
export default NavBar;
