import { Helmet } from "react-helmet-async";
import { useCart } from "../Hooks/useCart";
import { FaRegTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const handleDelete = i => {
        console.log(i);
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
             fetch(`https://bistro-boss-server-wine.vercel.app/carts/${i}`,{
                method:"DELETE"
             })
             .then(res=>res.json())
             .then(data =>{
                if(data.deletedCount > 0){
refetch()
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
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div className="font-bold flex justify-evenly gap-5">
                <h3 className="text-3xl">Total item : {cart.length} </h3>
                <h3 className="text-3xl">Total price : ${total} </h3>
                <button className="btn btn-warning btn-sm">Pay</button>
            </div>
            <div className="overflow-x-auto w-full ">
                <table className="table w-full table-compact">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Food</th>
                            <th>Item name</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            cart.map((item, index) => <tr className="" key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2>{item.name}</h2>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.email}
                                </td>
                                <td>${item.price}</td>
                                <th onClick={() => handleDelete(item._id)}>
                                    <button className="btn btn-ghost  text-black  btn-lg hover:bg-red-600 hover:text-white"><FaRegTrashAlt /></button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyCart;