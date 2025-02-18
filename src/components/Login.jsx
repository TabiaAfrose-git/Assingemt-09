import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";


const Login = () => {

    const [showPassWord,setShowPassword] = useState(false);
    const [logInError, setLogInError] = useState('');


    const {singInUser, LogInWithGoogle, logInWithGithub} = useContext(AuthContext);
    const Navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        //reset
        setLogInError('');

        // singIn
        singInUser(email,password)
        .then(result => {
            console.log(result.user)
            e.target.reset();
            Navigate('/')


        })
        .catch(error => {
            setLogInError(error.message)
            console.log(error.message)})
    }
    const handelLogInWithGoogle = () =>{
        console.log("handelLogInWithGoogle...")
        LogInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {console.log(error)})

    }
    const handelLogInWithGithub = () => {
        console.log("handelLogInWithFacebook...")
        logInWithGithub()
        .then(result =>{
            console.log(result.user)
        } )
        .catch(error => {console.log(error.message)})
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" name="email" required className="input" placeholder="Email" />
                                    <label className="fieldset-label">Password</label>
                                    <div className="relative">
                                        <input
                                        type={showPassWord ? "password" :"test" }
                                        name="password"
                                        required
                                        className="input"
                                        placeholder="Password"/>
                                        <span className="absolute top-3.5 right-2.5" onClick={()=> setShowPassword(!showPassWord)}>
                                            {
                                                showPassWord ? <BsFillEyeSlashFill/> : <BsFillEyeFill />
                                            }
                                        </span>
                                    </div>
                                    {
                                        logInError && <p className="text-red-400 font-semibold text-sm">Invalid Password</p>
                                    }
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                            <div className="flex items-center justify-center ">
                                        <p className="text-center">Login with</p>
                                    </div>
                                    <div className="flex  justify-center justify-items-center">
                                        <button onClick={handelLogInWithGoogle} className="btn ">Google</button>
                                        <button onClick={handelLogInWithGithub} className="btn ">GitHub</button>
                                    </div>
                            <p> New to this website? Please <Link to = '/Register' className="text-green-700/75 font-bold">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;