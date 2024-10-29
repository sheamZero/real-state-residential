import 'animate.css';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { toast, ToastContainer } from 'react-toastify';


const UpdateProfile = () => {
    const { handleSubmit, register } = useForm();
    const { user, updateProfilee } = useAuth();
    const { displayName, email, photoURL } = user;

    const onSubmit = (data) => {
        const { name, photo } = data;

        // 
        updateProfilee(name, photo)
            .then(() => toast("Succesfully Update Your Profile"))
            .catch(err => toast(err.message))
    }


    return (
        <div>
            <Helmet>
                <title>EstateTrace | Update Profile</title>
            </Helmet>
            <ToastContainer position='top-center'></ToastContainer>
            <div className='max-w-screen-xl mx-auto my-16'>
                <h2 className="animate-pulse text-3xl font-bold text-center">User Information</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Photo URL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr className="bg-base-200">
                                <th>1</th>
                                <td>{user ? displayName : "empty"}</td>
                                <td>{user ? email : "empty"}</td>
                                <td>{user ? photoURL : "empty"}</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>


            <div className="card my-16 p-5 bg-base-100 max-w-md shrink-0 shadow mx-auto">
                <h2 className="text-3xl text-center my-5">Update Profile</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
                    {/* -----name------ */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input
                            type="name"
                            placeholder="name"
                            className="input input-bordered"
                            {...register("name")}
                        />
                    </div>
                    {/* -----Photo url------ */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <input
                            type="photo"
                            placeholder="photoURL"
                            className="input input-bordered"
                            {...register("photo")}
                        />
                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary text-xl font-semibold">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;