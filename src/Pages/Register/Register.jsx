/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import auth from "../../../firebase.config";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Register = () => {
    const { google, github, registerUser , reload , setReload } = useAuth();

    function handleGoogle() {
        google()
            .then(result => {
                if (result.user) {
                    toast.success('Register successful 💖')
                }
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    function handleGithub() {
        github()
            .then(result => {
                if (result.user) {
                    toast.success('Register successful 💖')
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
            <div className="bg-[url('3.gif')] bg-no-repeat bg-cover min-h-[90vh] flex justify-center items-center">

                <div className="flex flex-col w-full max-w-md p-12 space-y-4 text-center bg-white rounded-2xl shadow-2xl  text-black">
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
                        <button className="p-3 rounded-sm" onClick={handleGoogle}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                        <button className="p-3 rounded-sm" onClick={handleGithub}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
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