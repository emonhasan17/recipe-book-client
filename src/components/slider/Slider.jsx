import './Slider.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Link } from 'react-router';
// import vibecreative from '../../assets/thumbnail for Vibe Creative Suite a online school (1).jpg'
// import gamebox from '../../assets/gamebox unlimited.jpg'
// import edu from '../../assets/EduSphere Plusr.jpg'

export default function Slider() {
    const id1 = '68309497f42722a6220ff243'
    const id2 = '683096d8f42722a6220ff245'
    const id3 = '68309717f42722a6220ff246'

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><div className='h-full bg-cover bg-center bg-[url("https://i.ibb.co/TDtK707q/Stock-Cake-Delicious-Margherita-Pizza-1748027015.jpg")] '>
                    <div className='backdrop-blur-[3px]'>
                        <div className=' w-10/12 mx-auto h-full pt-10 md:pt-28'>
                            <h1 className='md:text-7xl text-3xl text-[#60fc58]'>Pizza Margherita</h1>
                            <p className='md:text-3xl text-[16px] text-gray-300'>A timeless Italian classic with fresh basil, creamy mozzarella, and sun-ripened tomatoes.</p>
                            <p className='md:text-3xl text-[16px] text-white'>Experience the essence of Naples in every bite. Our Pizza Margherita brings together simple, fresh ingredients on a crisp, wood-fired crust. It's the perfect harmony of flavor and tradition — ready in under 30 minutes!</p>
                            <Link to={`/recipedetails/${id1}`}>
                                <button className='bg-green-600 text-xl px-4 py-3 rounded-xl text-white mt-6'>View Details</button>
                            </Link>

                        </div>
                    </div>
                    {/* <div><img src={butterChicken} alt="" /></div> */}
                </div>
                </SwiperSlide>

                <SwiperSlide><div className='h-full bg-cover bg-center  bg-[url("https://i.ibb.co/qY7M237X/Stock-Cake-Golden-seared-chicken-1748027442.jpg")]'>
                    <div className='backdrop-blur-[3px]'>
                        <div className=' w-10/12 mx-auto h-full pt-10  md:pt-28'>
                            <h1 className='md:text-7xl text-3xl  text-[#fc9a58]'> Butter Chicken</h1>
                            <p className='md:text-3xl text-[16px] text-white'>Dive into the irresistible flavors of Butter Chicken — tender pieces of chicken simmered in a velvety tomato and butter-based sauce, infused with aromatic spices and a hint of sweetness. This North Indian classic is a global favorite for a reason — comforting, indulgent, and absolutely delicious..</p>
                            <Link to={`/recipedetails/${id2}`}>
                                <button className='bg-green-600 text-xl px-4 py-3 rounded-xl text-white mt-6'>View Details</button>
                            </Link>


                        </div>
                    </div>
                    {/* <div><img src={butterChicken} alt="" /></div> */}
                </div>
                </SwiperSlide>



                <SwiperSlide><div className='h-full bg-cover bg-center bg-[url("https://i.ibb.co/3YVBF5Py/Stock-Cake-Tasty-Taco-Trio-1748027800.jpg")]'>
                    <div className='backdrop-blur-[3px]'>
                        <div className=' w-10/12 mx-auto h-full pt-10 md:pt-28 '>
                            <h1 className='md:text-7xl text-3xl  text-[#fc9a58]'>Tacos al Pastor</h1>
                            <p className='md:text-3xl text-[16px] text-white'>Experience the vibrant taste of Mexico with Tacos al Pastor — marinated pork slow-cooked on a vertical spit, sliced thin, and served on warm corn tortillas with juicy pineapple, fresh cilantro, and onion. A perfect harmony of savory, sweet, and spicy, these iconic street tacos are a fiesta of flavor in every bite.</p>
                            <Link to={`/recipedetails/${id3}`}>
                                <button className='bg-green-600 text-xl px-4 py-3 rounded-xl text-white mt-6'>View Details</button>
                            </Link>

                        </div>
                    </div>
                    {/* <div><img src={butterChicken} alt="" /></div> */}
                </div>
                </SwiperSlide>
                {/* <SwiperSlide><img src={vibecreative} alt="" /></SwiperSlide>
        <SwiperSlide><img src={gamebox} alt="" /></SwiperSlide>
        <SwiperSlide><img src={edu} alt="" /></SwiperSlide> */}

            </Swiper>
        </>
    );
}