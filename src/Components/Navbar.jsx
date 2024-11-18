import { Link } from "react-router-dom";
import userIcon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    return (
        <div className="flex justify-between items-center">
            <div className="">{user && user.email}</div>
            <div className="nav space-x-5">
                <Link to='/category/01'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>

            </div>

            <div className="login flex">


                <div className="flex gap-3">
                    <img className="" src={userIcon} alt="" />

                </div>


                {
                    user && user?.email ? (

                        <button onClick={logOut} className="btn btn-neutral rounded-none">LogOut</button>

                    ):(

                        <Link to='/auth/login' className="btn btn-neutral rounded-none">Login</Link>

                    )

                  
                }

       





            </div>

            

        </div>
    );
};

export default Navbar;