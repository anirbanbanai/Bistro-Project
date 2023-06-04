import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaRegCalendarAlt, FaHome, FaUtensils, } from 'react-icons/fa';
import { HiMenuAlt1, HiOutlineMail } from 'react-icons/hi';
import { MdPreview, } from 'react-icons/md';
import { GrMenu, } from 'react-icons/gr';
import { AiOutlineUsergroupAdd, } from 'react-icons/ai';
import { BsBookmarksFill, BsJournalBookmark, } from 'react-icons/bs';
import useAdmin from "./Hooks/useAdmin";
// import { useCart } from "./Hooks/useCart";

const DashBoard = () => {
    // const [cart] = useCart();
    // TODO : 
    // const isAdmin = true;

    const [isAdmin] = useAdmin();
console.log(isAdmin);
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <label htmlFor="my-drawer-2" className="btn btn-outline btn-warning drawer-button lg:hidden"><GrMenu /></label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-yellow-300  text-base-content">
                        {
                            isAdmin ? <>
                                <li><Link to='/dash/adminhome'><FaHome />Admin Home</Link></li>
                                <li><Link to='/dash/additem'><FaUtensils /> Add Items</Link></li>
                                <li><Link to='/dash/manageitem'><GrMenu />Manage Item</Link></li>
                                <li><Link to='/dash/managebooking'><BsJournalBookmark /> Manage Booking</Link></li>
                                <li><Link to='/dash/alluser'><AiOutlineUsergroupAdd /> All User</Link></li>

                            </> : <>
                                <li><Link to='/dash/userhome'><FaHome />User Home</Link></li>
                                <li><Link to='reservartion'><FaRegCalendarAlt /> Reservation</Link></li>
                                <li><Link to='payment'><FaWallet />Payment Histry</Link></li>
                                <li><Link to='/dash/mycart'><FaShoppingCart /> MyCart</Link></li>
                                <li><Link to='addriview'><MdPreview /> Add Review</Link></li>
                                <li><Link to='mybooking'><BsBookmarksFill /> My Booking</Link></li>
                            </>
                        }

                        <div className="divider bg-white"></div>

                        <li><Link to='/'><FaHome />Home</Link></li>
                        <li><Link to='/menu'><HiMenuAlt1 />Menu</Link></li>
                        <li><Link to='/order/salad'><FaShoppingCart />Shop</Link></li>
                        <li><Link to='/contact'><HiOutlineMail />Contact</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashBoard;



{/* <div className="grid md:grid-cols-3">
<div>
<ul className="menu p-4 w-80 bg-yellow-300 text-base-content md:fixed">

    {
        isAdmin ? <>
        <li><Link ><FaHome/>Admin Home</Link></li>
            <li><Link><FaUtensils/> Add Items</Link></li>
            <li><Link to='/dash/history'><GrMenu/>Manage Item</Link></li>
            <li><Link to='/dash/booking'><BsJournalBookmark/> Manage Booking</Link></li>
            <li><Link to='alluser'><AiOutlineUsergroupAdd/> All User</Link></li>
           
        </> : <>
        <li><Link ><FaHome/>User Home</Link></li>
            <li><Link><FaRegCalendarAlt/> Reservation</Link></li>
            <li><Link to='/dash/history'><FaWallet/>Payment Histry</Link></li>
            <li><Link to='/dash/mycart'><FaShoppingCart/> MyCart</Link></li>
            <li><Link to='/dash/review'><MdPreview/> Add Review</Link></li>
            <li><Link to='/dash/booking'><BsBookmarksFill/> My Booking</Link></li>
        </>
    }
            
            <div className="divider bg-white"></div>

            <li><Link to='/'><FaHome/>Home</Link></li>
            <li><Link to='/menu'><HiMenuAlt1/>Menu</Link></li>
            <li><Link to='/order/salad'><FaShoppingCart/>Shop</Link></li>
            <li><Link  to='/contact'><HiOutlineMail/>Contact</Link></li>
        </ul>

</div>
<div className="col-span-2 w-[100%]">
    <Outlet></Outlet>
</div>
</div> */}