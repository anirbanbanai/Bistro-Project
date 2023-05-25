import { Helmet } from 'react-helmet-async';
import Cover from './Menu/Cover';
import menuimd1 from '../assets/menu/banner3.jpg'
import menuimd from '../assets/menu/dessert-bg.jpeg'
import menuimd2 from '../assets/menu/salad-bg.jpg'
import menuimd3 from '../assets/menu/soup-bg.jpg'
import menuimd4 from '../assets/menu/pizza-bg.jpg'
// import PopularMenu from './PopularMenu';
import { useMenu } from './Hooks/useMenu';
import SectionTitle from './SectionTitle';
import MenuCaragory from './Menu/MenuCaragory';



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(m => m.category === "dessert");
    const soup = menu.filter(m => m.category === "soup");
    const salad = menu.filter(m => m.category === "salad");
    const pizza = menu.filter(m => m.category === "pizza");
    const offered = menu.filter(m => m.category === "offered");
    return (
        <div>
            <Helmet>
                <title>Bistro boss || Menu</title>
            </Helmet>
            <Cover img={menuimd1} title={"Our Menu"}></Cover>

            <SectionTitle
                subHeading={"Dont't miss"}
                heading={"Todays Offered"}
            ></SectionTitle>
            <MenuCaragory img={menuimd2} title={"Offered"} item={offered}></MenuCaragory>
           
            <MenuCaragory img={menuimd4} title={"pizza"} item={pizza}></MenuCaragory>

            <MenuCaragory img={menuimd2} title={"salad"} item={salad}></MenuCaragory>

            <MenuCaragory img={menuimd3} title={"soup"} item={soup}></MenuCaragory>
            
            <MenuCaragory img={menuimd} title={"desert"} item={dessert}></MenuCaragory>
        </div>
    );
};

export default Menu;