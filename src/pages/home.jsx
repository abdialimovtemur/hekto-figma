import React from 'react'
import heroSofa from '../assets/hero-sofa.png'
import lamp from '../assets/lamp.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from '../data/data';

export const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  return (
    <div>
      <div>
        <Slider {...settings}>
          <div className='bg-[#F2F0FF]'>
            <div className='flex justify-between items-center py-20 bg-[#F2F0FF] container relative z-20'>
              <div className='flex flex-col gap-5'>
                <p className='text-[#FB2E86] text-[16px] font-[700] z-20'>Best Furniture For Your Castle....</p>
                <h1 className='text-[40px] w-[524px] font-[700] z-10'>New Furniture Collection Trends in 2020</h1>
                <p className='text-[#FB2E86] text-[16px] font-[700]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                <div>
                  <button className='bg-[#FB2E86] text-white w-[163px] h-[50px]'>Shop Now</button>
                </div>
              </div>

              <div className='absolute top-0 right-[1134px] z-0'>
                <img src={lamp} alt="img" />
              </div>

              <div>
                <img src={heroSofa} alt="img" />
              </div>
            </div>
          </div>

          <div>
            <div className='flex justify-between items-center py-20 bg-[#F2F0FF] container relative z-20'>
              <div className='flex flex-col gap-5'>
                <p className='text-[#FB2E86] text-[16px] font-[700] z-20'>Best Furniture For Your Castle....</p>
                <h1 className='text-[40px] w-[524px] font-[700] z-10'>New Furniture Collection Trends in 2020</h1>
                <p className='text-[#FB2E86] text-[16px] font-[700]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                <div>
                  <button className='bg-[#FB2E86] text-white w-[163px] h-[50px]'>Shop Now</button>
                </div>
              </div>

              <div className='absolute top-0 right-[1134px] z-0'>
                <img src={lamp} alt="img" />
              </div>

              <div>
                <img src={heroSofa} alt="img" />
              </div>
            </div>
          </div>


          <div>
            <div className='flex justify-between items-center py-20 bg-[#F2F0FF] container relative z-20'>
              <div className='flex flex-col gap-5'>
                <p className='text-[#FB2E86] text-[16px] font-[700] z-20'>Best Furniture For Your Castle....</p>
                <h1 className='text-[40px] w-[524px] font-[700] z-10'>New Furniture Collection Trends in 2020</h1>
                <p className='text-[#FB2E86] text-[16px] font-[700]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                <div>
                  <button className='bg-[#FB2E86] text-white w-[163px] h-[50px]'>Shop Now</button>
                </div>
              </div>

              <div className='absolute top-0 right-[1134px] z-0'>
                <img src={lamp} alt="img" />
              </div>

              <div>
                <img src={heroSofa} alt="img" />
              </div>
            </div>
          </div>
        </Slider>
      </div>


      <div className='container pt-20'>
        <h2 className='text-center text-3xl font-bold text-[#1A0B5B]'>Featured Products</h2>

        <div className='flex justify-between pt-20'>
          {data.hero.map((item) => (
            <div className='group shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out'>
              <div className='h-[236px] w-[254px] bg-[#F6F7FB] flex items-center justify-center rounded-t-lg'>
                <img src={item.img} alt="img" className="group-hover:opacity-90 transition duration-300 ease-in-out" />
              </div>
              <div className='flex flex-col gap-2 items-center p-4'>
                <p className='text-[#FB2E86] font-bold group-hover:text-[#E91E63] transition duration-300'>{item.title}</p>
                <p className='text-[#151875] group-hover:text-[#3f51b5] transition duration-300'>{item.disc}</p>
                <p className='text-[#151875] font-semibold'>{item.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className='container pt-20'>
        <h2 className='text-center text-3xl font-bold text-[#1A0B5B]'>Leatest Products</h2>
        <div className='text-[#151875]  text-xl pt-12 flex justify-center items-centerm gap-12'>
          <p>New Arrival</p>
          <p>Best Seller</p>
          <p>Featured</p>
          <p>Special Offer</p>
        </div>

        <div className='pt-20 grid grid-cols-3 gap-12'>
          {data.products.map((item) => (
            <div className='group shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out'>
              <div className='bg-[#F6F7FB] flex items-center justify-center rounded-t-lg h-56'>
                <img src={item.img} alt="img" className="group-hover:opacity-90 transition duration-300 ease-in-out" />
              </div>
              <div className='flex justify-between gap-2 items-center p-4'>
                <p className='text-[#FB2E86] font-bold group-hover:text-[#E91E63] transition duration-300'>{item.title}</p>
                <div className='flex gap-2'>
                  <p className='text-[#151875] group-hover:text-[#3f51b5] transition duration-300'>{item.disc}</p>
                  <p className='text-[##FB2448] line-through'>{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className='container pt-20'>
        <h2 className='text-center text-3xl font-bold text-[#1A0B5B]'>What Shopex Offer!</h2>

        <div className='flex justify-between gap-5 pt-20'>
          {data.service.map((item) => (
            <div className='group shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out'>
              <div className='p-12   flex items-center justify-center rounded-t-lg'>
                <img src={item.img} alt="img" className="group-hover:opacity-90 transition duration-300 ease-in-out" />
              </div>
              <div className='flex flex-col gap-2 items-center text-center p-4'>
                <p className='text-[#FB2E86] font-bold group-hover:text-[#E91E63] transition duration-300'>{item.title}</p>
                <p className='text-[#151875] group-hover:text-[#3f51b5] transition duration-300'>{item.disc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>


      <div className='container mt-20 bg-[#F1F0FF]'>

        <div className='flex justify-between'>
          {data.features.map((item) => (
            <div className='flex justify-between items-center'>
              <div className='p-12   flex items-center justify-center rounded-t-lg'>
                <img src={item.img} alt="img" className="group-hover:opacity-90 transition duration-300 ease-in-out" />
              </div>
              <div className='flex flex-col gap-2 items-start text-start p-4 w-[507px]'>
                <p className='text-[#151875] font-bold text-[34px]'>{item.title}</p>
                <p className='text-[#ACABC3]'>{item.disc1}</p>
                <p className='text-[#ACABC3]'>{item.disc2}</p>
                <p className='text-[#ACABC3]'>{item.disc3}</p>

                <div className='flex gap-4 pt-6'>
                  <button className='bg-[#FB2E86] text-white p-3'>Add To Cart</button>
                  <div>
                    <p className='text-[#151875] font-semibold'>B&B Italian Sofa </p>
                    <p className='text-[#151875]'>$32.00</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
