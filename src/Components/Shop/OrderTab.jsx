import FoodCard from "./FoodCard";

const OrderTab = ({item}) => {
    return (
        <div>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9">
                            {
                                item.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                            }
                        </div>
        </div>
    );
};

export default OrderTab;