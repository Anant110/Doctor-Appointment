
import React, { useState } from 'react'
import DoctorCard from './../../components/Doctors/DoctorCard'
import {doctors} from './../../assets/data/doctors'
import Testimonial from '../../components/Testimonial/Testimonial'

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(doctors);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm === '') {
      setSearchResults(doctors);
    } else {
      const results = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };
  

  return <>


  <section className='bg-[#fff9ea]' style={{backgroundColor:'beige'}}>
    <div className="container text-center">
      <h2 className='heading'>Find a Doctor</h2>
      <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
      <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search Doctor' value={searchTerm} onChange={handleChange} onKeyUp={handleSearch} />

        <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch}>Search</button>
      </div>
    </div>
  </section>

  <section style={{backgroundColor:'blanchedalmond'}}>
  <div className="container">
    <div className='mt-78 flex items-center justify-center'>
      {searchResults.length === 0
        ? <p className='leading-7 text-[20px] font-semibold text-primaryColor'>Not find any doctor</p> 
        : searchResults.map((doctor)=><DoctorCard key={doctor.id} doctor={doctor}/>)
      }
    </div>
  </div>
</section>

  <section style={{backgroundColor:'oldlace'}}>
                <div className="container">
                <div className='xl:w-[470px] mx-auto'>
                        <h2 className='heading text-center'>What our Patient say</h2>
                        <p className='text_para text-center'>
                            World-class care for everyone.Our health system offers unmatched,
                            expert health care.
                        </p>
                    </div>

                    <Testimonial/>

                </div>
            </section>
  </>
}

export default Doctors

