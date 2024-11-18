import { FaGithub } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";



const SocialLogin = () => {
    return (
        <div >
            <h2 className="font-semibold mb-3">Login With</h2>
            <div >
                <button className="btn w-full">
                    <FaGoogle></FaGoogle> Login
                </button>
                <button className="btn w-full">
                    <FaGithub></FaGithub> Login
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;