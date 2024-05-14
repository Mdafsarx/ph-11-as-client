/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import Comment from "./Comment";
import { useEffect } from "react";

const Details = () => {
    const { id } = useParams();
    const axiosUrl = useAxiosUrl();
    const {User}=useAuth();
    const nav=useNavigate()

    const { data } = useQuery({
        queryKey: ['details'],
        queryFn: () =>
            axiosUrl.get(`/blogs/${id}`,{withCredentials:true})
                .then((data) => data.data)
                .catch(error => console.log(error))        
    })
    const { title, image, description, category, longDescription ,email } = data || {};

    // if(User?.email===email)document.getElementById('update')?.removeAttribute('disabled')
    // console.log(User?.email,email)

    return (
        <div className="max-w-7xl mx-auto md:py-5 space-y-5 px-5 md:px-0">

            <div className="my-20 md:grid md:grid-cols-6 gap-10">


                <div className="col-span-3 bg-[#1313130D]  p-6 md:p-2 flex justify-center items-center  md:rounded-2xl md:shadow-xl">

                    <img src={image} alt="" className="w-[500px] h-80 rounded-2xl" />

                </div>



                <div className="col-span-3  p-3 space-y-3 bg-white md:shadow-2xl md:rounded-xl">

                    <p className="text-2xl ">title: <span className="font-serif font-bold">{title}</span></p>
                    <h1 className="text-4xl font-serif">{ }</h1>
                    <h3 className="text-lg border-t-2 py-1  font-medium text-[#E21818]">{category}</h3>
                    <p><span className="font-bold">Short Description:</span> {description}</p>
                    <p className="border-b-2 pb-2"><span className="font-bold">Long Description:</span> {longDescription}...</p>

                        <button className="btn btn-block bg-[#4CCD99] text-white" id="update" disabled={User?.email !== email} onClick={()=>{
                           nav(`/update/${id}`)
                        }}>Update</button>

                </div>

            </div>

            <Comment blogId={id} ownerEmail={email}/>
        </div>
    );
};

export default Details;