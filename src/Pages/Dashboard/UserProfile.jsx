/* eslint-disable react/no-unescaped-entities */
import { updateProfile } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import auth from "../../../firebase.config";
import axios from "axios";
import toast from "react-hot-toast";

const UserProfile = () => {

    const { User ,reload ,setReload } = useAuth();
    console.log(User.emailVerified)

    const handleUpdate = async(e) => {
        e.preventDefault();
        const image = e.target.url.files[0];
        const name = e.target.name.value;
        const formData = new FormData()
        formData.append('image',image);
        const {data}=await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`,formData)
        console.log(data,'a')
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: data.data.display_url,
        })
        .then(()=>{
            toast.success('Profile updated successful')
            e.target.reset()
            setReload(!reload)
        })
        .catch(error=>console.log(error))

    }


    return (
        <div className="flex justify-center items-center min-h-[80vh] max-w-5xl mx-auto px-2 md:px-0">

            <div className="max-w-screen-xl w-full p-8 flex bg-white shadow-md border rounded-xl">

                <div className="hidden md:block w-1/2">

                    <div className="w-1/3">
                        <img src={User?.photoURL} alt="" className="object-cover object-center size-40 rounded bg-gray-500" />
                    </div>

                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-2xl font-semibold *:text-white">{User?.displayName}</h2>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="">{User?.email}</span>
                            </span>
                            <span className="flex items-center space-x-2">
                                <span className="">Email verified: {User?.emailVerified ? 'True' : 'False'}</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-52 md:w-1/2 md:border-l-2 md:border-black pl-5 space-y-7 flex flex-col  justify-center ">
                    <h1 className="text-2xl font-mono text-center">Let's update your profile</h1>
                    <form className="space-y-4 mx-10" onSubmit={handleUpdate}>
                        <div className="flex flex-col text-black">
                            <input id="name" type="text" placeholder="Name" className="rounded-t-md border-black border-2 p-0.5 pl-1" required />

                            <input id="url" type="file" placeholder="Photo" className="-mt-1 pt-2  border-x-2 border-b-2 border-black p-1.5 pl-1 rounded-b-md" required />
                        </div>
                        <button type="submit" className="btn border-0 text-white btn-block bg-[#E21818]">Update</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default UserProfile;