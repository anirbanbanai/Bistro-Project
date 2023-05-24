import { Parallax } from 'react-parallax';

const Cover = ({img, title}) => {
    return (
        <div>
             <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
         <div className="hero h-[400px] md:h-[500px]">
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md bg-white bg-opacity-40 p-5 text-black">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        
                    </div>
                </div>
            </div>
    </Parallax>
    
          
        </div>
    );
};

export default Cover;