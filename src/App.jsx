import { useState } from 'react'

import './App.css'
import { Slider, Table } from '@mui/material'
import BasicTable from './components/BasicTable'
import About from './components/About'
import SliderImg from './components/SliderImg'
import CVIP from './components/CVIP'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="cvip-container">
      <header className="header shadow-2xl w-full flex justify-around items-center">
        <div className="logo flex gap-2">
          {/* <img src="/iitrpr-logo.png" alt="IIT Ropar Logo" /> */}
          <h1 style={{color:'red', font:'bold',fontWeight:'900'}} className='text-2xl '>CVIP 2025</h1>
        </div>
        <nav className="nav-menu">
          <ul className='flex justify-around items-center gap-4 p-4'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#call-for-papers">Call for Papers</a></li>
            <li><a href="#important-dates">Important Dates</a></li>
            <li><a href="#committees">Committees</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    <div className="">
      <SliderImg />
    </div>
      <main>
      <CVIP/>
        <section className="important-dates bg-white shadow-md pt-20  pb-20 rounded-md " id="important-dates" style={{display:'flex', justifyContent:'space-evenly'}}>
          <div className=""><h1 className='text-2xl font-bold'>Venue</h1>
          <h2>IIT Ropar, Punjab, India</h2>
          </div>
          <div className="">
            <h1>Date: December 10 - December 13, 2025</h1>
            <h2>Time: 9:00 AM - 5:00 PM IST</h2>
          </div><div className="" style={{display:'flex'}}>

            <h2>237
            Days</h2>
            <h2>9
            Hrs</h2>
          </div>
        </section>
      </main>



      <div className="">
        <h1 style={{textAlign:'center', fontSize:'24px'}} className='text-3xl pt-10 font-medium'>Important DeadLines</h1>
        <BasicTable />
      </div>

      <div className="about bg-gray-100 pt-10 pb-10 mt-5" style={{display:'flex'}} >
        <div className="img" style={{minWidth:'50%'}}>.</div>
        <div className="" >
          <About/>
        </div>
      </div>
      <footer style={{display:'flex',justifyContent:'center',flexDirection:'column', alignItems:'center',padding:'20px 0'}}>
        <h1 style={{fontSize : '24px', padding:'10px 0'}}>Indian Institute of Technology Ropar</h1>
        <ul style={{display:'flex',gap:'1rem'}}>
          <li>Home</li>
          <li>Important Dates</li>
          <li>Call for Papers</li>
          <li>Registration</li>
          <li>IIT Roper</li>
        </ul>
        <p className=''>© 2025 Indian Institute of Technology Ropar. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
