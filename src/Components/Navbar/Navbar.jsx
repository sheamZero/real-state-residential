
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    const { user } = useAuth();


    return (
        <div className="navbar bg-base-100 my-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  text-lg font-semibold">
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
                        {
                            user && <li><NavLink to={"/update"}>Update Profile</NavLink></li>
                        }

                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <Link className='text-2xl font-semibold text-primary btn' to={"/"}>
                    Estate
                    <span className='text-black font-bold text-3xl'>Trace</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact Us</NavLink></li>
                    {
                        user && <li><NavLink to={"/update"}>Update Profile</NavLink></li>
                    }

                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex items-center gap-2'>
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="User Image"
                                            src={user.photoURL} />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="text-center font-bold menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>{user.email}</li>
                                </ul>
                            </div>
                            <Link to={"/"} className="btn text-lg font-medium">Logout</Link>
                        </div>
                        :
                        <Link to={"/login"} className="btn text-lg font-medium">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;

{/* <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
            <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>
    <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
            <a className="justify-between">
                Profile
                <span className="badge">New</span>
            </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
    </ul>
</div> */}