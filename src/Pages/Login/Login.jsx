import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { loginUser } = useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;

        // call the signInWithEmailAndPassword method
        loginUser(email, password)
            .then(res => toast("User Login Succesfully!"))
            .catch(err => toast(err.message))

    }


    return (

        <div className="my-20">
            <div className="card bg-base-100 max-w-md shrink-0 shadow mx-auto">

                <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                    <h2 className="text-center text-3xl font-extrabold">
                        <span className="border-b-2 border-black">Register</span>
                    </h2>

                    {/* -----email------ */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            {...register("email", { required: true })}
                        />
                    </div>
                    {/* -----password------ */}
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPass ? "text" : "password"}
                                name="password"
                                placeholder="password"
                                className="input input-bordered w-full"
                                {...register("password", { required: true })}
                            />
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
                {/* toastify */}
                <ToastContainer></ToastContainer>
                {/* social login */}
                <div className="p-8">
                    <h3 className="text-center text-xl font-semibold border-t pt-5">Login With Social Media</h3>
                    <div className="flex items-center justify-center gap-10 text-5xl border-b pb-5 my-5">
                        <Link>
                            <FcGoogle></FcGoogle>
                        </Link>
                        <Link>
                            <FaGithub></FaGithub>
                        </Link>
                    </div>
                    <h3 className="text-center text-base font-semibol">
                        Do not have an account?
                        <span>
                            <Link to={"/register"} className="text-primary"> Register</Link>
                        </span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Login;