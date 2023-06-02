import kk from '../assets/tailwind-css-1.svg'
import dd from '../assets/default.jpg'
import bb from '../assets/bootstrap_plain_wordmark_logo_icon_146620.png'
import js from '../assets/javascript-logo.png'
import c4 from '../assets/1452px-CSS3_logo_and_wordmark.svg.png'
import html from '../assets/png-transparent-logo-html-html5.png'
import react from '../assets/gg/depositphotos_326469644-stock-illustration-glowing-neon-atom-icon-isolated.jpg'
import me from '../assets/gg/IMG_20230312_193407.jpg'

const Css = () => {
    return (
        <div className="bg-yellow-400 p-24 m-14 ">
            <div className=' mb-10' >

                <h3 className='text-5xl font-bold text-red-500 text-center'>Front End Development</h3>
                <h2 className='text-center text-2xl mt-2 font-semibold'>I provide all dynamic Custom website.</h2>
               <div className='mt-3 flex mx-auto'>
               <img className='w-60 mx-auto' src={dd} alt="" />
                <img className='w-48 mx-auto' src={kk} alt="" />
                <img className='w-48 h-36 mx-auto' src={bb} alt="" />
               </div>
            </div>
            <div className='grid grid-cols-2'>
                <div >
                    <img className='rounded-full' src={me} alt="" />
                </div>
                <div className='grid grid-cols-2 gap-2 p-10'>
                    <img className='w-52 mx-auto' src={js} alt="" />
                    <img className='w-52 mx-auto' src={html} alt="" />
                    <img className='w-52 mx-auto' src={c4} alt="" />
                    <img className='w-52 rounded-2xl mx-auto' src={react} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Css;