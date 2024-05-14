/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useQuery } from "@tanstack/react-query";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import { useParams } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const Update = () => {
    const { id } = useParams()
    const axiosUrl = useAxiosUrl();
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [categoryS, setCategory] = useState('');


    const { data: Data } = useQuery({
        queryKey: ['update'],
        queryFn: () =>
            axiosUrl.get(`/blogs/${id}`, { withCredentials: true })
                .then((data) => {
                    setData(data.data);
                    setLoading(false)
                })
                .catch(error => console.log(error))
    })


    const { title, image, description, category, longDescription , email } = data || {};
    console.log(data)

    function handleSubmit(e) {
        e.preventDefault()
        const title = e.target.title.value;
        const image = e.target.url.value;
        const description = e.target.short.value;
        const longDescription = e.target.long.value;
        const blog = { title, image, description, longDescription, category: (categoryS || category) ,email }
        axiosUrl.put(`/blog/${id}`,blog , {withCredentials:true})
        .then(data=>{
            if(data.data.modifiedCount==1)toast.success('Successfully updated')
        })
        .catch(error=>console.log(error))

    }

    return (
        <div>
            {
                loading ? <div className="min-h-[60vh]  flex justify-center items-center">
                    <span className="loading loading-bars loading-lg size-16"></span>
                </div> :
                    <div className="max-w-7xl mx-auto md:my-20 md:px-5 lg:px-0">
                        <section className="p-6 bg-[#F4F3F0] md:rounded-2xl" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500">
                            <div className="text-center space-y-2 pb-3">
                                <h1 className="text-3xl font-bold">Update Your Blog</h1>
                                <p className="text-balance">Don't focus on having a great <br /> blog. Focus on producing a blog that's <br /> great for your readers.</p>
                            </div>
                            <form className="container flex flex-col mx-auto space-y-12" onSubmit={handleSubmit}>
                                <fieldset className="grid grid-cols-4 gap-4 rounded-md p-2">
                                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-full">
                                        <div className="col-span-full sm:col-span-3">
                                            <label className="text-sm uppercase">Title</label>
                                            <input id="title" type="text" placeholder="Title" className="w-full rounded-md p-1 pl-2" defaultValue={title} required />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label className="text-sm uppercase">Image url</label>
                                            <input id="url" type="url" placeholder="Image URL" className="w-full rounded-md  p-1 pl-2" defaultValue={image} required />
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label className="text-sm uppercase">category</label>
                                            <select className="select-sm rounded-[8px] select-bordered w-full max-w-[583px] block" defaultValue={category} required onChange={(e) => setCategory(e.target.value)}>
                                                <option value={'Science'}>Science</option>
                                                <option value="Food">Food</option>
                                                <option value="History">History</option>
                                                <option value="Travel">Travel</option>
                                                <option value="Self-Improvement">Self-Improvement</option>
                                                <option value="Wellness">Wellness</option>
                                            </select>
                                        </div>
                                        <div className="col-span-full sm:col-span-3">
                                            <label className="text-sm uppercase">short description</label>
                                            <input id="short" type="text" placeholder="Short description" className="w-full rounded-md p-1 pl-2" required defaultValue={description} />
                                        </div>

                                        <div className="col-span-full sm:col-span-full">
                                            <label className="text-sm uppercase">long description</label>
                                            <input id="long" type="text" placeholder="Long description" className="w-full rounded-md p-1 pl-2" required defaultValue={longDescription} />
                                        </div>

                                    </div>
                                </fieldset>
                                <button className="btn btn-block bg-[#E21818] text-white">Update</button>
                            </form>
                        </section>
                    </div>
            }
        </div>
    );
};

export default Update;