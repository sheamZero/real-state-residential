import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAuth from '../../Hooks/useAuth';


const UpdateProfile = () => {
    const { data } = useAuth();
    // console.log(data);
    return (
        <div>
            upadta
        </div>
    );
};

export default UpdateProfile;