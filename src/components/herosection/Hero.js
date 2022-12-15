import page1 from '../images/Page1.jpg'


import page2 from '../images/Page2.jpg'
import page3 from '../images/Page3.jpg'

import './hero.css';



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";










const Hero = () => {


    return (
        <>

            <section className="hero ">
                <h1 className="text-light hero_title">    Digital Card Details</h1>

                <div className="image_title">


                    <div className="container">

                        <div className="mx-auto row">




                            <div className="mx-auto col-md-8 col-10 col-xxl-8 offset-md-1">


                                <Swiper
                                    effect={"coverflow"}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={2}
                                    spaceBetween={20}
                                    coverflowEffect={{
                                        rotate: 20,
                                        stretch: 0,
                                        depth: 700,
                                        modifier: 1,
                                        // slideShadows: true,
                                    }}
                                    // pagination={true}
                                    pagination={{
                                        dynamicBullets: true,
                                    }}


                                    modules={[EffectCoverflow, Pagination]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <img src={page1} className="img-thumbnail img-fluid" alt="page1" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={page2} className="img-thumbnail img-fluid" alt="page1" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src={page3} className="img-thumbnail img-fluid" alt="page1" />
                                    </SwiperSlide>


                                </Swiper>

















                            </div>






                            <div className="mx-auto text-center col-md-4 col-10 col-xxl-8 d-flex justify-content-center align-items-start flex-column ">



                                <h1 className="mx-auto text-center card_title"> Card Title </h1>


                                <div  className=" d-flex justify-content-between align-items-start">


                                    <div  className="mx-auto herooff">   <span className="mx-auto fs-4 four">$499   </span> <span className="mx-auto text-decoration-line-through twoone "> $2000</span> </div>
                                    
                                    <div ><span className="mx-auto fs-5 text-success"><sub> 75%Off </sub> </span></div>
                                </div>






                                <p className="about_text fs-4 text-sm-start lh-base text-break fd_title feature_text text-wrap text-muted align-item-start">Donec eu ornare mi. Sed finibus
                                    condimentum mauris, ut dictum eros
                                    maximus vitae. Nullam
                                    condimentum tortor ac elit feugiat
                                    iaculis. Aenean mauris nisl, blandit
                                </p>






                                <button class="button mx-auto text-center    button3">  Try this Card</button>
                            </div>

                        </div>
                    </div>






                </div>






            </section>







        </>

    )




}

export default Hero;