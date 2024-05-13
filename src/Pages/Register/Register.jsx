/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import auth from "../../../firebase.config";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
    const { google, registerUser, reload, setReload } = useAuth();
    const nav = useNavigate()


    function handleGoogle() {
        google()
            .then(result => {
                if (result.user) {
                    toast.success('Register successful 💖')
                    nav('/')
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    // register user
    function handleSubmit(e) {
        e.preventDefault();
        const name = e.target.name.value;
        const url = e.target.url.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length <= 5) return toast.warning('Password must be at least six characters long')
        if (!/^(?=.*[A-Z]).+$/.test(password)) return toast.warning('Password must have an uppercase letter')
        if (!/^(?=.*@).+$/.test(password)) return toast.warning('Password must contain special character at @')
        if (!/^(?=.*\d).+$/.test(password)) return toast.warning('Password must contain at least one number')
        registerUser(email, password)
            .then(result => {
                if (result.user) {
                    updateProfile(auth.currentUser, {
                        displayName: name, photoURL: url,
                    }).then(() => {
                        toast.success("Register successful 🎉")
                        e.target.reset()
                        setReload(!reload)
                        nav('/')
                    }).catch((error) => {
                        toast.error(error.message)
                    });
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div>
            <div className="md:bg-[url('3.gif')] bg-no-repeat bg-cover md:min-h-[90vh] flex justify-center items-center">

                <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center bg-white md:rounded-2xl md:shadow-2xl  text-black">
                    <h1 className="text-2xl font-bold text-blue-600 uppercase">let's  Register</h1>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col text-black">
                            <input id="name" type="text" placeholder="Name" className="rounded-t-md border-black border-2 p-0.5 pl-1" required />

                            <input id="url" type="url" placeholder="Photo" className="-mt-1 border-black  border-2 p-0.5 pl-1" required />

                            <input id="email" type="email" placeholder="Email" className="-mt-1  border-black border-2 p-0.5 pl-1" required />

                            <input id="password" type="Password" placeholder="Password" className="-mt-1 rounded-b-md border-black border-2 p-0.5 pl-1" required />

                        </div>
                        {/* <div className="flex justify-between">
                            <div className="flex items-center">
                                <input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ring-violet-400 focus:border-violet-400 focus:ring-2 accent-violet-400" />
                                <label htmlFor="remember" className="text-sm text-gray-400">Remember me</label>
                            </div>
                            <a className="text-sm text-gray-400" href="/">Forgot your password?</a>
                        </div> */}
                        <button type="submit" className="btn bg-black text-white btn-block">Register</button>
                    </form>

                    <div className="flex items-center pt-4 space-x-1 font-bold">
                        <div className="flex-1 h-px sm:w-16 bg-black"></div>
                        <p className="px-3 text-sm">Register with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-black"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border border-black rounded-md focus:ring-2 focus:ring-offset-1" onClick={handleGoogle}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                            <p>Login with Google</p>
                        </button>
                    </div>
                    <p className="text-base text-center ">Already have a account?
                        <Link className="underline text-blue-600" to={'/login'}>Login</Link>
                    </p>
                </div>


            </div>
        </div>
    );
};

export default Register;