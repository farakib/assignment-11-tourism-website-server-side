import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Sign In With Google</button>
        </div>
    );
};

export default Login;