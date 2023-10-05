import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../shared/Navbar/AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import toast from "react-hot-toast";
import Navbar from "../shared/Navbar/Navbar";


const Register = () => {

    const { createUser, profileUpdate, googleLogIn } = useContext(AuthContext);

    const [successHandle, setSuccessHandle] = useState(null);
    const [errorHandle, setErrorHandle] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        console.log( photo , name, email, password);
        setErrorHandle('');
        setSuccessHandle('');

        if (password.length < 6) {
            setErrorHandle('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorHandle('Your Password Should Have a capital letter');
            return;
        }
        else if (!email) {
            toast.error('Invalid email address')
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            toast.error('Invalid email address')
        }


        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                profileUpdate(loggedUser, name, photo)
                    .then(() => {
                        toast.success('Profile Updated')
                    })
                setSuccessHandle('Successfully created an account')
                console.log(loggedUser);
            })
            .catch(error => {
                const message = error.message;
                setErrorHandle(message)
                console.error(message);
            })
    }

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                const loggedUser = result.user;
                setSuccessHandle('Successfully log in with google');
                console.log(loggedUser);
            })
            .catch(error => {
                const message = error.message;
                console.error(message);
            })
    }

    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="text-start">
                                <h1 className="text-2xl font-bold">Register</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input name="name" type="text" placeholder="First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Username or Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"}
                                        name="password" placeholder="Password" className="input input-bordered w-full" required /> <span className="absolute top-4 right-2" onClick={() => setShowPassword(!showPassword)}>{
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }</span>
                                </div>
                            </div>
                            {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="password2" placeholder="Confirm Password" className="input input-bordered" required />
                        </div> */}
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral border-none bg-[#F9A51A]">Register</button>
                            </div>
                            <p className="px-12 text-center">
                                Already have an account?<Link className="text-[#F9A51A]" to='/login'>Login</Link>
                            </p>
                            {
                                errorHandle && <p className="text-red-500">{errorHandle}</p>
                            }
                            {
                                successHandle && <p className="text-green-500">{successHandle}</p>
                            }
                        </form>
                        <div className="flex justify-center items-center gap-2">
                            <div className="w-[150px] h-0.5 bg-[#AAA]"></div>
                            <p>Or</p>
                            <div className="w-[150px] h-0.5 bg-[#AAA]"></div>
                        </div>
                        <Link className="flex justify-center"><button onClick={handleGoogleLogIn} className="btn my-4 py-2 border rounded-full font-medium text-[#000] flex gap-16 justify-center items-center"><FaGoogle ></FaGoogle> Continue With Google</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;