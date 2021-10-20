import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsingGoogle } = useAuth();

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input className="mb-2" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input className="mb-2" type="password" name="" id="" placeholder="Your password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to dental-healthcare-services? <Link to="/register"><button>Register</button></Link></p>
                <div className="mb-2">        OR        </div>
                <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign In</button>
            </div>
        </div>
    );

};

export default Login;