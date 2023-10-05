import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../shared/Navbar/AuthProvider/AuthProvider";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast from "react-hot-toast";
import { FaGoogle } from 'react-icons/fa';
import Navbar from "../shared/Navbar/Navbar";

const Login = () => {

    const { signIn, forgotPassword, googleLogIn } = useContext(AuthContext);
    const emailRef = useRef('');
    const [successHandle, setSuccessHandle] = useState(null);
    const [errorHandle, setErrorHandle] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const condition = e.target.checkbox.checked;
        console.log(condition, email, password);
        setErrorHandle('');
        setSuccessHandle('');

        if (password.length < 6) {
            setErrorHandle('Password should be at least 6 characters or longer');
            return;
        }
        else if (!condition) {
            setErrorHandle('Click Remember Me');
            return;
        }

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                    setSuccessHandle('Successfully SignIn')
                    navigate(location?.state ? location.state : '/')
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

    const handleForgotPassword = () => {
        const email = emailRef.current.value;
        console.log(email);
        if (!email) {
            toast.error('Invalid email address')
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            toast.error('Invalid email address')
        }
        forgotPassword(email)
            .then(() => {
                toast.success('Password reset email sent!')
            })
    }


    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="text-start">
                                <h1 className="text-2xl font-bold">Login</h1>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} name="email" type="email" placeholder="Username or Email" className="input input-bordered" required />
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
                                <div className="flex gap-20 my-2 justify-center items-center">
                                    <div className="flex gap-3">
                                        <input type="checkbox" name="checkbox" id="checkbox" />
                                        <label htmlFor="checkbox">Remember me</label>
                                    </div>
                                    <label className="label">
                                        <a onClick={handleForgotPassword} href="#" className="label-text-alt link underline text-[#F9A51A]">Forgot password?</a>
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral border-none bg-[#F9A51A]">Login</button>
                            </div>
                            <p>
                                Do not have an account? <Link className="text-[#F9A51A]" to='/register'>Create an account</Link>
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

export default Login;