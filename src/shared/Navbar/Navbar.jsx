import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(()=> {
            toast.success('Log-out successful.')
        })
        .catch(() => {
            toast.error('Log-out unsuccessful.')
        })
    }

    const navLinks = <div className="flex justify-center items-center">
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#F9A51A]" : ""
            }
        >
            News
        </NavLink></li>
        <li><NavLink
            to="/destination"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#F9A51A] text-black" : ""
            }
        >
            Destination
        </NavLink></li>
        <li><NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#F9A51A] text-black" : ""
            }
        >
            Blog
        </NavLink></li>
        <li><NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#F9A51A] text-black" : ""
            }
        >
            Contact
        </NavLink></li>
        <li>{user ? <div>
            <h1>{user.displayName}</h1>
            <span><button onClick={handleLogOut} className="btn btn-neutral border-none bg-[#F9A51A]">LogOut</button></span>
        </div> : <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#F9A51A] text-black" : ""
            }
        >
            Login
        </NavLink>}</li>

    </div>

    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img className="bg-black" src="https://i.ibb.co/8gZmpFZ/Frame.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;