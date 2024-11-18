import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const FindUs = () => {
    return (
        <div>
            <h2>Find Us on</h2>
            <div className="join join-vertical  flex *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
                <button className="btn join-item justify-start"> <FaTwitter></FaTwitter> Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;