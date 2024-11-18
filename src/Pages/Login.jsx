import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn, setUser} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    const navigate =useNavigate();
   
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
        .then(result => {
            console.log(result)
            setUser(result)
            navigate(location?.state ? location.state  : "/")
        
        })
        .catch(err => {
            console.log('Error', err);
        })

       



        
    }
    return (
        <div className='min-h-screen flex justify-center items-center'>

            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0">
                        <h2 className='text-xl py-3 font-semibold text-center'>Login Your Account</h2>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    name='email'
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    name='password'
                                    required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral rounded-none btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center p-3'>Don't Have a Account ? <Link to='/auth/register' className='text-red-500 underline'>Register</Link></p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;