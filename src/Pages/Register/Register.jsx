import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPass, setShowPass] = useState(false);
    return (

        <div className="my-20">
            <div className="card bg-base-100 max-w-md shrink-0 shadow mx-auto">


                <form className="card-body w-full">
                    <h2 className="text-center text-3xl font-extrabold">
                        <span className="border-b-2 border-black">Register</span>
                    </h2>

                    {/* -----name------ */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    {/* -----email------ */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    {/* -----Photo url------ */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="https://i.ibb.co.com/ZhLGfky/ppp.jpg" className="input input-bordered" required />
                    </div>

                    {/* -----password------ */}
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <div className="relative">
                            <input type={showPass ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full" required />
                            <span className="absolute top-4 right-4 text-xl" onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ?
                                        <FaEyeSlash></FaEyeSlash>
                                        : <FaEye></FaEye>
                                }
                            </span>
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-xl font-semibold">Login</button>
                    </div>
                </form>
                {/* social login */}
                <h3 className="text-center text-base font-semibol my-5">
                    Already have an account?
                    <span>
                        <Link to={"/login"} className="text-primary"> Login</Link>
                    </span>
                </h3>

            </div>
        </div>
    );
};

export default Register;