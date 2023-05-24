import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'

const Chef = () => {
    return (
        <div className="bg-slate-200">
            <section>
                <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
                ></SectionTitle>

<Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                   <h2 className="text-2xl">Salad</h2>
                   <h2>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</h2>
                   <button className="btn btn-warning">Add to card</button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className="text-2xl">Salad</h2>
                   <h2>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</h2>
                   <button className="btn btn-warning">Add to card</button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className="text-2xl">Salad</h2>
                   <h2>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</h2>
                   <button className="btn btn-warning">Add to card</button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className="text-2xl">Salad</h2>
                   <h2>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</h2>
                   <button className="btn btn-warning">Add to card</button>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className="text-2xl">Salad</h2>
                   <h2>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</h2>
                   <button className="btn btn-outline btn-warning shadow-xl">Add to card</button>
                </SwiperSlide>

            </Swiper>
            </section>
        </div>
    );
};

export default Chef;