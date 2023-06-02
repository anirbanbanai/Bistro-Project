import { useQuery } from "@tanstack/react-query";
import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import { useAxiosSecure } from "../Hooks/useAxiosSecure";

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get(`/users`)
        return res.data;
    })
    console.log(users);

    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://bistro-boss-server-wine.vercel.app/users/${id}`, {
            method: "Delete",
        }).then(res=> res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                refetch()
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `User Deleted successfull`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    const handleMakeAdmin = (id) => {
        console.log(id);
        fetch(`https://bistro-boss-server-wine.vercel.app/users/admin/${id._id}`, {
            method: "PATCH",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(id)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top',
                        icon: 'success',
                        title: `${id.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className="my-4">
            <h3 className="text-3xl font-semibold text-center">AllUsers : {users.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((m, index) => <tr key={m._id}>
                                    <th>{index + 1}</th>
                                    <td>{m.name}</td>
                                    <td>{m.email}</td>
                                    <td>
                                        {
                                            m.role === "admin" ? 'admin' :
                                                <button onClick={() => handleMakeAdmin(m)} className="btn btn-ghost  text-black  btn-lg hover:bg-red-500 hover:text-white"><FaUserShield /></button>

                                        }
                                    </td>
                                    <td><button onClick={() => handleDelete(m._id)} className="btn btn-ghost  text-black  btn-lg hover:bg-red-500 hover:text-white"><FaRegTrashAlt /></button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;