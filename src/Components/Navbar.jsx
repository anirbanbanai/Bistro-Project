import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "./AuthPrvider";
import { useCart } from "./Hooks/useCart";

const Navbar = () => {
    const [cart] = useCart();
    console.log(cart);
    const {user ,LogOut} = useContext(AuthContext);
    const Out = ()=>{
        LogOut()
    }
    const Navoption = <>
        <li><Link to='/'>Home</Link></li>
        <li ><Link to='/menu'>Our Menu</Link> </li>
        <li><Link to='/order/salad'>Order Shop</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/dash'>
            <button className="btn gap-2">
                <FaShoppingCart/>
                <div className="badge badge-secondary">{cart?.length || 0}</div>
            </button>
        </Link></li>
        <li><Link to='/css'>Css</Link></li>
    </>
    return (
        <div >
            <div className=" navbar max-w-screen-xl  fixed z-10 bg-opacity-80 bg-black text-white ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            {Navoption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navoption}
                    </ul>
                </div>
              {!user &&  <div className="navbar-end">
                    <Link to='/login' className="btn btn-outline btn-warning">Login</Link>
                    </div> }

                {user && <div onClick={Out} className="navbar-end ">
                    <Link className="btn btn-outline btn-warning">LogOut</Link>
                    </div>}
                  
                    <Link to='/register' className="btn btn-outline bg-white hover:bg-red-500">register</Link>
                    

            </div>
        </div>
    );
};

export default Navbar;