import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import useAxiosUrl from "../../hooks/useAxiosUrl";

const Featured = () => {
    const axiosUrl=useAxiosUrl()

    const columns = [
        {
            name: 'Serial Number',
            selector: row => row._id,
        },
        {
            name: 'Profile',
            selector: row => row.name,
        },
        {
            name: 'Owner',
            selector: row => row.name,
        },
        {
            name: 'Title',
            selector: row => row.name,
        },
    ];

   

    const { data:blogs } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          axiosUrl.get('/blogs')
        .then(data=>data.data.sort((a,b)=>{
            const aLength=a.longDescription.length ;
            const bLength=b.longDescription.length ;
            return bLength - aLength 
        }))
        .catch(error=>console.log(error))
      })
      console.log(blogs)
     

    //   const sortedData = [...blogs].sort((a, b) => {
    //     const aPrice = parseInt(a.);
    //     const bPrice = parseInt(b.price);
    //     return bPrice - aPrice;
    //   });
      


    return (
        <div>
            <DataTable
                columns={columns}
                data={blogs}
            />
        </div>
    );
};

export default Featured;