import SectionTitle from "./SectionTitle";
import MenuItems from "./MenuItems";
import { useMenu } from "./Hooks/useMenu";

const PopularMenu = () => {
    // const [menu, setMenu ] = useState([])
    // useEffect(()=>{
    //     fetch("menu.json")
    //     .then(res=>res.json())
    //     .then(data =>{
    //         // console.log(data);
    //         const popular = data.filter(item=> item.category === "popular");

    //         setMenu(popular)
    //     })
    // },[])
    // console.log(menu)

    const [menu] = useMenu();
    const popular = menu.filter(m=> m.category === "popular");

    return (
        <div className="mb-5">
            <section>
                <SectionTitle
                heading={"From our Menu"}
                subHeading={"Popul;ar items"}
                ></SectionTitle>
                <div className="grid md:grid-cols-2 pb-5">
                    {
                        popular.map(m=><MenuItems key={m._id} item={m}>
                        </MenuItems>)
                    }
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;