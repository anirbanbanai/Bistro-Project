import SectionTitle from '../SectionTitle';
import fe from '../../assets/home/featured.jpg'
import './ff.css'
import { Link } from 'react-router-dom';

const Featureds = () => {
    return (
        <div>
            <div className="feature_item py-5 px-24 text-white my-20 bg-fixed">
            <SectionTitle
             subHeading={"Cheak it Out"}
             heading={"Featured item"}
            ></SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-600 p-5 bg-opacity-50">
                <div>
                    <img src={fe} alt="" />
                </div>
                <div className="px-8">
                    <p>Aug 20 2023</p>
                    <p>Where can i get?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus excepturi magnam earum facere eum eveniet recusandae explicabo vitae sit asperiores eius, reprehenderit, expedita, non temporibus animi autem minima! Quo quas perferendis modi blanditiis quae voluptatum mollitia dolore eaque aspernatur deleniti?</p>
                    <Link to='/order/salad'>
                    <button className="btn btn-outline  btn-primary border-b-4">Order Now</button>
                    </Link>
                   

                </div>
            </div>
        </div>
        </div>
    );
};

export default Featureds;