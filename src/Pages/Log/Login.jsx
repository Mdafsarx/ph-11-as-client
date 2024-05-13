/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {

    const { google, loginUser, reload, setReload } = useAuth();
    const location = useLocation();
    const nav = useNavigate()
    // console.log(location)

    function handleGoogle() {
        google()
            .then(result => {
                if (result.user) {
                    toast.success('Login successful 💖')
                    nav(location.state || '/')
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    

    // login user
    function handleSubmit(e) {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then(() => {
                toast.success('Login successful 🎉')
                e.target.reset();
                setReload(!reload)
                nav(location.state || '/')
            })
            .catch(error => {
                toast.error(error.message)
            })

    }

    return (
        <div>
            <div className="md:bg-[url('3.gif')] bg-no-repeat bg-cover md:min-h-[90vh] flex justify-center items-center">

                <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center  bg-white md:rounded-2xl shadow-2xl  text-black">
                    <h1 className="text-2xl font-bold text-blue-600 uppercase">Login your account</h1>

                    <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                        <label className="self-start text-xs font-semibold">Email</label>
                        <input id="email" type="email" className="flex items-center h-12 px-4 mt-2 rounded border-black border " required />
                        <label className="self-start mt-3 text-xs font-semibold">Password</label>
                        <input id="password" type="password" className="flex items-center h-12 px-4 mt-2 rounded border-black border" required />
                        <button type="submit" className="btn btn-block bg-black text-white mt-3">Login</button>
                    </form>

                    <div className="flex items-center pt-4 space-x-1 font-bold">
                        <div className="flex-1 h-px sm:w-16 bg-black"></div>
                        <p className="px-3 text-sm">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-black"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border border-black rounded-md focus:ring-2 focus:ring-offset-1"  onClick={handleGoogle}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>

                    </div>
                    <p className="text-base text-center ">Don't have an account?
                        <Link className="underline text-blue-600" to={'/register'}>Register</Link>
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Login;