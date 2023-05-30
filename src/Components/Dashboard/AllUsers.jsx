import { useQuery } from "@tanstack/react-query";
import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`http://localhost:5000/users`)
        return res.json()
    })
    console.log(users);

    const handleDelete = (user) => {
        console.log(user);
    }
    const handleMakeAdmin = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/admin/${id._id}`, {
            method:"PATCH",
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
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