import mongo from '../assets/gg/mongodb_original_logo_icon_146424.png'
import express from '../assets/gg/express-js.png'
import node from '../assets/gg/919825.png'
import react from '../assets/gg/depositphotos_326469644-stock-illustration-glowing-neon-atom-icon-isolated.jpg'
import me from '../assets/gg/IMG_20230312_193407.jpg'

const Css = () => {
    return (
        <div className="bg-blue-200 p-24 m-14 ">
            <div className=' mb-10' >

            <h3 className='text-5xl font-bold text-red-500 text-center'>MERN Stack Development</h3>
 <h2 className='text-center text-2xl mt-2 font-semibold'>I provide all dynamic Custom website.</h2>
            </div>
            <div className='grid grid-cols-2'>
            <div >
                <img className='rounded-full' src={me} alt="" />
            </div>
            <div className='grid grid-cols-2 gap-2 p-10'>
                <img className='w-52 mx-auto' src={mongo} alt="" />
                <img className='w-52 mx-auto' src={express} alt="" />
                <img className='w-52 mx-auto' src={node} alt="" />
                <img className='w-52 rounded-2xl mx-auto' src={react} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Css;