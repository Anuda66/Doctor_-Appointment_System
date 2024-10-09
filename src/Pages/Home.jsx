import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Heding from '../Component/Hedder/Heding';
import Slider from '../Component/Slider/Slider';
import Speciality from '../Component/Speciality/Speciality';
import Doctors from '../Component/Doctor/Doctors ';
import DoctorCard from '../Component/DoctorCard/DoctorCard';
import More from '../Component/More/More';
import CreateEccount from '../Component/CreateEccount/CreateEccount';
import Footer from '../Component/Footer/Footer';

function Home() {
  return (
    <div>
      <Heding/>
      <Slider/>
      <Speciality/>
      <Doctors/>
      <DoctorCard/>
      <More/>
      <CreateEccount/>
      <Footer/>
    </div>
  )
}

export default Home
