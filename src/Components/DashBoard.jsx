import { Link, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaRegCalendarAlt, FaHome, FaUtensils, } from 'react-icons/fa';
import {HiMenuAlt1, HiOutlineMail } from 'react-icons/hi';

import {MdPreview,  } from 'react-icons/md';
import {GrMenu,  } from 'react-icons/gr';
import {AiOutlineUsergroupAdd,  } from 'react-icons/ai';
import {BsBookmarksFill, BsJournalBookmark,  } from 'react-icons/bs';
const DashBoard = () => {
    // TODO : 
    const isAdmin = true;
    return (
        <div className="grid md:grid-cols-3">
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
        </div>
    );
};

export default DashBoard;