import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`https://bistro-boss-server-wine.vercel.app/review`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data)
            })
    }, [])


    return (
        <div className="my-20">
            <SectionTitle
                subHeading={"What our client say."}
                heading={"Testimonial"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    data.map(m => <SwiperSlide key={m._id}>
                        <div className="flex flex-col items-center mx-20">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={m.rating}
                                readOnly
                            />
                            <p>{m.details}</p>
                            <p className="text-2xl text-orange-500">{m.name}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;