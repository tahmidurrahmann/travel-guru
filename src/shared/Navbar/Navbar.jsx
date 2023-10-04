import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navLinks = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#F9A51A] text-black" : ""
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
        <li><NavLink
            to="/login"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "bg-[#F9A51A] text-black" : ""
            }
        >
            Login
        </NavLink></li>
    </>

    return (
        <div>

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="bg-[black]" src="https://i.ibb.co/8gZmpFZ/Frame.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;