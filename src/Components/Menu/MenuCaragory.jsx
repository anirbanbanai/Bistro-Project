import MenuItems from "../MenuItems";
import Cover from "./Cover";

const MenuCaragory = ({ item, title, img }) => {
    return (
        <div className="pt-10">
            <h3 className="text-3xl mt-5 font-semibold text-center">ORDER YOUR FAVOURITE FOOD</h3>
            <hr className="border-4 w-2/4 mx-auto mb-10" />
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 pb-5 my-16">
                {
                    item.map(m => <MenuItems key={m._id} item={m}>
                    </MenuItems>)
                }
            </div>
        </div>
    );
};

export default MenuCaragory;