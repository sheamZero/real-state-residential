import { useState } from "react";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";


const Register = () => {
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit } = useForm();
    const {createUser} = useAuth();

    const onSubmit = (data) => {
        const { name, email, password } = data;
        console.log(name, email, password,);

        // validation
        // setError("");
        if (password.length < 6) {
            toast("Password length must be 6 or more");
            return
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
            toast("Password have at least one upper and lowercse letter");
            return;
        }

        // call createUser method
        createUser(email, password)
            .then(result => toast("User Create Succefully!"))
            .catch(err => toast(err.message))

    }



    return (
        <div className="my-20">
            <Helmet>
                <title>EstateTrace | Register</title>
            </Helmet>
            <div className="card bg-base-100 max-w-md shrink-0 shadow mx-auto">


                <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                    <h2 className="text-center text-3xl font-extrabold">
                        <span className="border-b-2 border-black">Register</span>
                    </h2>

                    {/* -----name------ */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered"
                            {...register("name", { required: true })} 
                        />
                    </div>
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
                    {/* -----Photo url------ */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="https://i.ibb.co.com/ZhLGfky/ppp.jpg"
                            className="input input-bordered"
                            {...register("photo", { required: true })}
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
                {/* toastify------ */}
                <ToastContainer></ToastContainer>
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