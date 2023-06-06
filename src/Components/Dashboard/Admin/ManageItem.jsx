import Swal from "sweetalert2";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { useMenu } from "../../Hooks/useMenu";
import SectionTitle from "../../SectionTitle";
import { RiDeleteBinLine } from 'react-icons/ri';

const ManageItem = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();
    // console.log(menu);

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/menu/${id}`)
                    .then(res => {
                        console.log('deleted res',res.data);
                        refetch()
                        if(res.data.deletedCount > 0){
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full mx-auto">
            <SectionTitle heading="Manage all item" subHeading="Hurry up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table mx-auto">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>#</th>
                                <th>Item image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu.map((item, index) => <tr key={item._id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img className="w-[100px] rounded-2xl" src={item.image} alt="" />
                                    </td>
                                    <td>
                                        <h2>{item.name}</h2>
                                    </td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button className="btn btn-warning btn-outline btn-md">Edit</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className="btn  btn-outline btn-md"><RiDeleteBinLine /></button>
                                    </td>

                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;