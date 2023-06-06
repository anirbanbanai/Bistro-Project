// import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
// console.log(img_hosting_token);


const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const { register, handleSubmit, reset  } = useForm();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(imgResponse =>{
            console.log(imgResponse);
            if(imgResponse.success){
                const imgUrl = imgResponse.data.display_url;
                const {name, price, catagory, recipe} = data;
                const newItem  = {name, price: parseFloat(price), catagory, recipe, image:imgUrl};
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                .then(data=>{
                    console.log('after posting new item', data.data);
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'New data has been added',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    };
    // console.log(data);
    return (
        <div>
            <div className="text-4xl text-center">Add a new Item</div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] mx-auto">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Recipe Name</span>
                    </label>

                    <input type="text" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered input-primary w-full " />

                </div>

                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Selected*</span>
                        </label>
                        <select  {...register("catagory", { required: true })} className="select select-bordered">
                           
                            <option>Pizza</option>
                            <option>Soup Potter</option>
                            <option>Salad</option>
                            <option>Drink</option>
                            <option>Desert</option>
                        </select>

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Price</span>

                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />

                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="text"></textarea>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Item image</span>
                    </label>
                    <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />

                </div>
                <div className="mt-5">
                    <button className="btn btn-warning">Add item <FaUtensils className="ml-2" /></button>
                </div>
            </form>
        </div>
    );
};

export default AddItem;