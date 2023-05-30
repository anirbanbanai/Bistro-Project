import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaRegCalendarAlt, FaHome, } from 'react-icons/fa';
import {HiMenuAlt1, HiOutlineMail } from 'react-icons/hi';

import {MdPreview,  } from 'react-icons/md';
import {BsBookmarksFill,  } from 'react-icons/bs';
const DashBoard = () => {
    return (
        <div className="grid md:grid-cols-3">
            <div>
            <ul className="menu p-4 w-80 bg-slate-300 text-base-content md:fixed">
                        <li><Link ><FaHome/>User Home</Link></li>
                        <li><Link><FaRegCalendarAlt/> Reservation</Link></li>
                        <li><Link to='/dash/history'><FaWallet/>Payment Histry</Link></li>
                        <li><Link to='/dash/mycart'><FaShoppingCart/> MyCart</Link></li>
                        <li><Link to='/dash/review'><MdPreview/> Add Review</Link></li>
                        <li><Link to='/dash/booking'><BsBookmarksFill/> My Booking</Link></li>
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
        </div>
    );
};

export default DashBoard;