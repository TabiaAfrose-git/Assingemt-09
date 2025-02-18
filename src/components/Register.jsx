import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Register = () => {

    const [registerError, SetRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassWord, setShowPassWord] = useState(false);

    const {createUser} = useContext(AuthContext);
    //const Navigate = useNavigate();
    console.log(createUser);

    const handRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name,email,password,accepted)
        //clean registerError
        SetRegisterError('');

        //clean Success
        setSuccess('');

        if(password.length < 6 ){
            return SetRegisterError('❌ Password must be between 6 and 16 characters long.')
        }
        else if (!/[A-Z]/.test(password)){
            return SetRegisterError('❌ Password must contain at least one uppercase letter (A-Z).')
        }
        else if (!/[@$!%*?&]/.test(password)){
            return SetRegisterError("❌ Password must contain at least one special character (@$!%*?&).")
        }
        else if(!accepted){
            return SetRegisterError("Please accept our terms and condition")
        }


        //create User
        createUser(email,password)
        .then(result =>{
            setSuccess('Create User Successfully')
            console.log(result.user)
            e.target.reset();
            //Navigate('/Login')

        })
        .catch(error =>{
            console.log(error.message)
            SetRegisterError(error.message)

        })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register Here..</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handRegister}>
                            <fieldset className="fieldset">
                            <label className="fieldset-label">Name</label>
                            <input type="text" name="name" required className="input" placeholder="Your name" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" required className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <div className="relative">
                                <input
                                type={showPassWord ? "text" : "password"}
                                name="password"
                                required className="input"
                                placeholder="Password" />
                                <span className="absolute top-3.5 right-2.5" onClick={()=> setShowPassWord(!showPassWord)}>
                                    {
                                        showPassWord ? <BsFillEyeFill/> : <BsFillEyeSlashFill/>
                                    }
                                </span>
                                </div>
                                <div className="mt-2">
                                    <input type="checkbox" name="terms" className="terms" />
                                    <label htmlFor="terms"> Accept our terms and condition</label>
                                </div>
                                <button className="btn btn-neutral mt-2">Register</button>
                            </fieldset>
                        </form>
                        {
                            success && <p className="text-emerald-600 font-bold">{success}</p>
                        }
                        {
                            registerError && <p className="text-red-400 font-semibold text-sm">{registerError}</p>
                        }
                        <p> Already Have a account? Please <Link to = '/Login' className="text-blue-700/75 font-bold">Login</Link></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;