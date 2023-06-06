import { useContext } from "react";
import { AuthContext } from "../AuthPrvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Hooks/useCart";

const FoodCard = ({ item }) => {
    console.log(item);
    const { user } = useContext(AuthContext)
    console.log(user);
    const [, refetch] = useCart();
    const navigate = useNavigate()
    const { name, image, price, recipe,_id } = item;

    const handleAddToCard = (i) => {
        console.log(i);
        if (user && user.email) {
            const orderItem = {menuItemId: _id, name, image, price, email: user?.email }
            fetch(`https://bistro-boss-server-wine.vercel.app/carts`, {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Food added on the Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    else {
                        Swal.fire({
                            title: 'Please login to order the food.',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Login Now!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/login')
                            }
                        })
                    }
                })
        }
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}!</h2>
                    <p>{recipe}</p>
                    <p className="text-yellow-600">${price}</p>

                    <div onClick={() => handleAddToCard(item._id)} className="card-actions">
                        <button className="btn btn-primary">Add to Card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;

