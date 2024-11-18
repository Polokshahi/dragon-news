import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";



const Register = () => {

    const {createNewUser, user, setUser} = useContext(AuthContext);


    const handleRegister = e => {
        e.preventDefault();

       const form = new FormData(e.target);
       const name = form.get('name');
       const password  = form.get('password');
       const photo = form.get('photo');
       const email = form.get('email');

       console.log(name, password, email);

       createNewUser(email, password)
       .then(result => {
        setUser(result.user)
        console.log(result);
       })
       .catch(err => console.log(err));

        


    }


    return (
        <div className="flex justify-center items-center -mt-8 h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-center text-2xl font-bold mb-6">Register your account</h2>
                <form onSubmit={handleRegister}>
                    {/* Name Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Photo URL Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Photo URL</label>
                        <input
                            type="url"
                            name="photo"
                            placeholder="Enter your photo URL"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            // required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            required
                        />
                        <label className="ml-2 text-sm text-gray-700">
                            Accept <span className="font-semibold">Terms & Conditions</span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;