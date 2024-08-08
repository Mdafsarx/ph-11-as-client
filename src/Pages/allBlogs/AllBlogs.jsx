import { useQuery } from "@tanstack/react-query";
import useAxiosUrl from "../../hooks/useAxiosUrl";
import AllBlogCard from "./AllBlogCard";
import { useState } from "react";

const AllBlogs = () => {

    const axiosUrl = useAxiosUrl()
    const [searchText, setSearchText] = useState('')
    const [search, setSearch] = useState('');
    const [category,setCategory]=useState('');
    const [removeSearch,setRemoveSearch]=useState(false);

    const { data } = useQuery({
        queryKey: ['all-blog',removeSearch || searchText , category ],
        queryFn: () =>
            axiosUrl.get(`/blogs?search=${removeSearch?'':searchText}&category=${category}`)
                .then((data) => data.data
                ),
    })

    const handleSearch = () => {
        setRemoveSearch(false)
        setCategory('')
        setSearchText(search);
        document.getElementById('search').value=''
    }
    const handleFilter=(e)=>{
       setRemoveSearch(true)
       setCategory(e.target.value)
    }
    
    


    return (
        <div className={`max-w-7xl mx-auto px-4 lg:px-0 ${data?.length===1||data?.length===2 ? 'my-10  md:pb-44 md:mt-20':'my-10 md:my-20'}`}>

            <div className="flex flex-col md:flex-row items-center justify-between px-2 pb-5 gap-5">
                {/* search */}
                <fieldset className="md:w-full space-y-1" data-aos="fade-right"  data-aos-duration="1500" data-aos-delay="300">
                    <label htmlFor="Search" className="hidden">Search</label>
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button type="button" title="search" className="p-1 focus:outline-none focus:ring-1" onClick={handleSearch}>
                                <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 ">
                                    <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                </svg>
                            </button>
                        </span>
                        <input type="search" name="Search" id="search" onChange={(e) => {
                            setSearch(e.target.value)
                        }} placeholder="Search..." className="w-36 md:w-72 lg:w-96 py-2 pl-10 pr-2 bg-[#100F0F0D] text-sm rounded-md border  focus:outline-none " />
                    </div>
                </fieldset>

                <select className="select-sm w-full max-w-40 md:max-w-56 border border-black rounded-md" onChange={handleFilter} data-aos="fade-left"  data-aos-duration="1500" data-aos-delay="500">
                    <option disabled selected>Filter By Category</option>
                    <option value={'Science'}>Science</option>
                    <option value="Food">Food</option>
                    <option value="History">History</option>
                    <option value="Travel">Travel</option>
                    <option value="Self-Improvement">Self-Improvement</option>
                    <option value="Wellness">Wellness</option>
                </select>

            </div>

            <div className="grid md:grid-cols-2 gap-4 px-2 md:px-0">
                {
                    data?.map((blog, i) => <AllBlogCard key={i} data={blog} />)
                }
            </div>
        </div>
    );
};

export default AllBlogs;