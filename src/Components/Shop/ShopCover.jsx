import Cover from "../Menu/Cover";
import pic from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import { useMenu } from "../Hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ShopCover = () => {
    const catagories  = ['salad', 'pizza','soup', 'dessert', 'drinks']
    const {catagory} = useParams();
    const initialIndex = catagories.indexOf(catagory)
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menu] = useMenu();
    const dessert = menu.filter(m => m.category === "dessert");
    const soup = menu.filter(m => m.category === "soup");
    const salad = menu.filter(m => m.category === "salad");
    const pizza = menu.filter(m => m.category === "pizza");
    const drinks = menu.filter(m => m.category === "drinks");

    return ( 
        <div >
              <Helmet>
                <title>Bistro boss || Order Food</title>
            </Helmet>
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
                       <OrderTab item={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab item={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab item={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab item={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                    <OrderTab item={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ShopCover;