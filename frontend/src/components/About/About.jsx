import React from 'react'
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section  style={{backgroundColor:'beige'}}>
        <div className="container" >
            <div className='flex justify-between gap-[50px] lg:gap[130px] xl:gap-0 flex-col lg:flex-row'>
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={aboutImg} alt="" />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Proud to be one of the nations best</h2>
                    <p className='text_para'>
                    As proud members of the nation's elite medical professionals, we at Medicare are dedicated to setting the highest standard of healthcare. With a collective commitment to expertise, compassion, and innovation, our team stands as a beacon of excellence.Each member contributes to a personalized, patient-centric approach, ensuring that your health journey is met with the utmost care.
                        </p>

                    <p className='text_para mt-[30px]'>
                    Embrace a healthier tomorrow with Medicare – where our esteemed doctors unite to deliver exceptional care, setting new benchmarks in medical excellence and patient satisfaction.
                    </p>

                    <Link to='/'>
                        <button className='btn'>Learn More</button>
                    </Link>

                </div>
            </div>
        </div>
    </section>
  )
}

export default About
