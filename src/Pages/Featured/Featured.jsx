import { useQuery } from "@tanstack/react-query";
import DataTable from "react-data-table-component";
import useAxiosUrl from "../../hooks/useAxiosUrl";

const Featured = () => {
    const axiosUrl = useAxiosUrl()

    const columns = [
        {
            name: '',
            cell: (row, index) => index + 1,
            sortable: true,
        },
        {
            name: 'Profile',
            selector: row => <img src={row?.profile} alt="Profile" className="rounded-full size-16 " />,
            sortable: true,
        },
        {
            name: 'Owner',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
    ];



    const { data: blogs } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            axiosUrl.get('/blogs')
                .then(data => data.data.sort((a, b) => {
                    const aLength = a.longDescription.length;
                    const bLength = b.longDescription.length;
                    return bLength - aLength
                }))
                .catch(error => console.log(error))
    })
    console.log(blogs)

    const customStyles = {
        rows: {
            style: { padding: '10px' }
        },
        cells: {
            style: { padding: '5px', }
        },
    };


    return (
        <div className="max-w-7xl mx-auto my-14">
            <DataTable 
                columns={columns}
                data={blogs?.slice(0, 10)}
                customStyles={customStyles}
            />
        </div>
    );
};

export default Featured;