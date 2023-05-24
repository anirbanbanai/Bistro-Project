import Cover from "../Menu/Cover";
import pic from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import { useMenu } from "../Hooks/useMenu";
import FoodCard from "./FoodCard";

const ShopCover = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const dessert = menu.filter(m => m.category === "dessert");
    const soup = menu.filter(m => m.category === "soup");
    const salad = menu.filter(m => m.category === "salad");
    const pizza = menu.filter(m => m.category === "pizza");
    const drinks = menu.filter(m => m.category === "drinks");

    return (
        <div >
            <Cover img={pic} title={"Order now"}></Cover>
            <div className="mt-12">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="text-center font-semibold">
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Desert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel className="mt-10 ">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
                            {
                                salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-9">
                            {
                                pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-9">
                            {
                                soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto gap-9">
                            {
                                dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto">
                            {
                                drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopCover;