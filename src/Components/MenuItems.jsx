
const MenuItems = ({ item }) => {
    const { image, price, recipe, name } = item;

    return (
        <div className=" flex items-center justify-center m-2 gap-3 ">
            <img style={{borderRadius: "0 200px 200px 200px"}} className="w-[120px] rounded-xl" src={image} alt="" />

            <div className="px-3 gap-3">
                <p className="uppercase">{name}</p>
            <p>{recipe}----</p>
       
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItems;