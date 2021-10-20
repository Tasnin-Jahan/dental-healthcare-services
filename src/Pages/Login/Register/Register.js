import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input className="mb-2" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="mb-2" type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input className="mb-2" type="password" name="" id="" placeholder="Re-enter Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div className="mb-2">      OR          </div>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;