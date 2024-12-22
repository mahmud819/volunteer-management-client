
import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const {user,loading,setLoading} = useContext(AuthContext);
    const naviGate = useNavigate();
    // console.log(user);
    if(user){
        return children;
    }
    return (
        naviGate('/login')
    );
};

export default PrivateRouter;