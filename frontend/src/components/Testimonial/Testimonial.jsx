
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from '../../assets/images/patient-avatar.png';
import {HiStar} from 'react-icons/hi';

function Testimonial() {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
      <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{ clickable: true }} breakpoints={{
        640: { slidesPerView: 1, spaceBetween: 0 },
        758: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}>
               <SwiperSlide>
          <div className='py-[30px] px-5 rounded-[13px]'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt="" />
              <div className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                <h4>Rahul Chauhan</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                "I have taken medical services from them.
                They treat so well and they are providing
                 the best medical services."</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-[13px]'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt="" />
              <div className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                <h4>Anant Pratap Singh</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            "Simplified prescription refills save me time. This website's efficiency and convenience are unmatched."</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-[13px]'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt="" />
              <div className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                <h4>Harsh Jain</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            "Love the appointment reminders! Keeps me on track without any hassle. A thoughtful feature that shows they value my time."</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='py-[30px] px-5 rounded-[13px]'>
            <div className='flex items-center gap-[13px]'>
              <img src={patientAvatar} alt="" />
              <div className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                <h4>Vikas Arora</h4>
                <div className='flex items-center gap-[2px]'>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                    <HiStar className='text-yellowColor w-[18px] h-[5]'/>
                </div>
              </div>
            </div>
            <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
            "Effortless booking and a clean interface make navigating this medical website a joy. Convenient and user-friendly!"</p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Testimonial;

