/* eslint-disable no-unused-vars */
import { BiLogoBlogger, BiUser } from "react-icons/bi";
import useAuth from "../../../hooks/useAuth";
import useUsers from "../../../hooks/useUsers";
import { useQuery } from "@tanstack/react-query";
import useAxiosUrl from "../../../hooks/useAxiosUrl";
import { FcUp } from "react-icons/fc";
import { GrUserAdmin } from "react-icons/gr";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';


const AdminHome = () => {
    const axiosUrl = useAxiosUrl()
    const { User } = useAuth();
    const { Data } = useUsers();
    const { data: allBlogs = [] } = useQuery({
        queryKey: ['all-blogs'],
        queryFn: async () => {
            const res = await axiosUrl('/blogs')
            return res.data
        }
    })
    console.log(allBlogs)
    const Featured = 10;
    const totalAdmin = Data.filter(data => data?.role === 'admin');

    const data = allBlogs.map(data => {
        return { name: data.category, value: data.Date }
    })

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };



    // custom degine



    return (
        <div>
            <h1 className="text-center mt-6 md:text-3xl text-[#E21818] font-bold">Welcome to admin home</h1>

            <div className="max-w-5xl mx-auto flex flex-col items-center md:flex-row gap-10 mt-10 md:mt-20">

                <div className="md:w-1/2">

                    <section>

                        <div className="container gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 space-y-3 flex flex-col ">

                            <div className="flex  space-x-4 rounded-lg md:space-x-6">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                                    <BiUser className="text-4xl" />
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <p className="text-3xl font-semibold leading-none">{Data?.length}</p>
                                    <p className="capitalize">Users</p>
                                </div>
                            </div>

                            <div className="flex  space-x-4 rounded-lg md:space-x-6">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                                    <BiLogoBlogger className="text-4xl" />
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <p className="text-3xl font-semibold leading-none">{allBlogs?.length}</p>
                                    <p className="capitalize">Blogs</p>
                                </div>
                            </div>

                            <div className="flex  space-x-4 rounded-lg md:space-x-6">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                                    <FcUp className="text-4xl" />
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <p className="text-3xl font-semibold leading-none">{Featured}</p>
                                    <p className="capitalize">Featured</p>
                                </div>
                            </div>

                            <div className="flex space-x-4 rounded-lg md:space-x-6 pl-1.5 md:pl-0">
                                <div className="flex justify-center ml-3 align-middle rounded-lg sm:p-4">
                                    <GrUserAdmin className="text-3xl" />
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <p className="text-3xl font-semibold leading-none">{totalAdmin?.length}</p>
                                    <p className="capitalize">Admin</p>
                                </div>
                            </div>

                        </div>

                    </section>


                </div>

                <div className="hidden md:flex">
                    <ResponsiveContainer width="100%" height="100%">
                        <div>
                            <BarChart
                                width={800}
                                height={400}
                                data={allBlogs}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="category" />
                                <YAxis />
                                <Bar dataKey="Date" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                                    ))}
                                </Bar>
                                <Legend />
                                <Tooltip />
                            </BarChart>
                        </div>
                    </ResponsiveContainer>
                </div>



            </div>


        </div>
    );
};

export default AdminHome;