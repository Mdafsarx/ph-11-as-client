import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import CommentCard from "./CommentCard";
import { useQuery } from "@tanstack/react-query";
import No from "./No";
import { useState } from "react";

const Comment = ({ blogId, ownerEmail }) => {
    const axiosUrl = useAxiosUrl();
    const [reload, setReload] = useState(false)
    const { User } = useAuth()
    // console.log(ownerEmail,User?.email)

    function handleSubmit(e) {
        e.preventDefault();
        if (ownerEmail == User?.email) {
            document.getElementById('btn').setAttribute('disabled', true)
            e.target.reset()
            return toast.error('Can not comment on own blog')
        }

        const text = e.target.text.value;
        const commentData = { email: User?.email, name: User?.displayName, photo: User?.photoURL, com: text, ID: blogId }
        axiosUrl.post('/comment', commentData)
            .then(data => {
                if (data.data.insertedId) toast.success('Thankyou for your feedback')
                e.target.reset();
                setReload(!reload)
            })
            .catch(error => console.log(error))
    }

    const { data } = useQuery({
        queryKey: ['comment', reload],
        queryFn: () =>
            axiosUrl.get(`/comment/${blogId}`,{withCredentials:true})
                .then((data) => data.data)
                .catch(error => console.log(error))
    })



    return (
        <div>

            <section className="py-6">

                <div className="grid max-w-7xl grid-cols-1 lg:px-8 md:grid-cols-2 md:divide-x space-y-3">


                    <div>
                        {/* comments */}
                        <div className=" px-3 p-2">
                            {
                                data?.length === 0 ? <No /> :
                                    <div className="grid md:grid-cols-3 gap-6 md:gap-3">
                                        {data?.map(Data => <CommentCard key={Data._id} Com={Data} />)}
                                    </div>
                            }
                        </div>
                    </div>



                    <div>
                        {/* text area */}
                        <div className="flex flex-col max-w-xl p-8 lg:p-12 ">
                            <div className="flex flex-col items-center w-full">

                                <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                                <div className="flex flex-col items-center py-6 space-y-3">
                                    <span className="text-center">How was this blog</span>
                                    <div className="flex space-x-3">
                                        <button type="button" title="Rate 1 stars" aria-label="Rate 1 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 ">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 2 stars" aria-label="Rate 2 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 ">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 3 stars" aria-label="Rate 3 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 ">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 4 stars" aria-label="Rate 4 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 ">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                        <button type="button" title="Rate 5 stars" aria-label="Rate 5 stars">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-10 h-10 ">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                <form className="flex flex-col w-full gap-3" onSubmit={handleSubmit}>
                                    <textarea rows="3" name="text" placeholder="Message..." className="p-4 rounded-md resize-none border-2 border-black"></textarea>
                                    <button type="submit" id="btn" className="btn bg-black text-white" >Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>



                </div>
            </section>

        </div>
    );
};

export default Comment;