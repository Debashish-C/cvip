import { useState } from 'react'

import './App.css'
import { Slider, Table } from '@mui/material'
import BasicTable from './components/BasicTable'
import About from './components/About'
import SliderImg from './components/SliderImg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="cvip-container">
      <header className="header">
        <div className="logo">
          <img src="/iitrpr-logo.png" alt="IIT Ropar Logo" />
          <h1 style={{color:'red', font:'bold'}}>CVIP 2025</h1>
        </div>
        <nav className="nav-menu">
          <ul>
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
          <div className="about" style={{display: 'flex', justifyContent:'space-between'}}>
            <div className="" style={{width:'50%', padding:'1rem',border:'20px'}}>
              <h1 style={{fontSize:'28px', padding:'1rem 0 ', fontWeight:900}}>CVIP 2025</h1>
              <p>The 10th International Conference on Computer Vision & Image Processing (CVIP-2025), a premier annual conference focused on Computer Vision and Image Processing will be held during December 10-13, 2025 at Indian Institute of Technology Ropar (IIT Ropar).

CVIP provides a great platform to students, academia, researchers and industry persons. Previous editions of CVIP were held at IIITDM Kancheepuram (CVIP-2024), IIT Jammu (CVIP-2023), VNIT Nagpur (CVIP-2022), IIT Ropar (CVIP-2021), IIIT Allahabad (CVIP-2020), MNIT Jaipur (CVIP 2019), IIIT Jabalpur (CVIP-2018), and IIT Roorkee (CVIP-2017 and CVIP-2016). All these editions of CVIP have been endorsed by the International Association for Pattern Recognition "IAPR". Also the conference proceedings are published in Springer Series on Communications in Computer and Information Science (CCIS) Springer.

The CVIP 2025 conference proceedings will be published in Springer - CCIS series, indexed in Scopus, SCImago, DBLP, Google Scholar, EI-Compendex, INSPEC and zbMATH.</p>
            </div>
            <div className="" style={{width:'50%', padding:'2rem'}}>
              <h1 style={{font:'bold', fontWeight:'600',fontSize:'18px'}}>Latest News</h1>
              <div className="" style={{padding:'20px'}}>
                <h1 style={{font:'bold', fontWeight:'600',fontSize:'18px'}}>Paper Submissions Open</h1>
                <h1>Submit your paper here. Paper Submission deadline: April 25, 2025. Kindly refer to Call for Papers and Author Guidelines for more details.</h1>
              </div>
              <div className="" style={{padding:'20px'}}>
                <h1 style={{font:'bold', fontWeight:'600',fontSize:'18px'}}>Sponsorship Opportunities
                </h1>
                <h1>Submit your paper here. Paper Submission deadline: April 25, 2025. Kindly refer to Call for Papers and Author Guidelines for more details.</h1>
              </div>
              <div className="" style={{padding:'20px'}}>
                <h1 style={{font:'bold', fontWeight:'600',fontSize:'18px'}}>Co-organizers</h1>
                <h1>Submit your paper here. Paper Submission deadline: April 25, 2025. Kindly refer to Call for Papers and Author Guidelines for more details.</h1>
              </div>

            </div>
          </div>

        <section className="important-dates" id="important-dates" style={{display:'flex', justifyContent:'space-evenly'}}>
          <div className=""><h1>Venue</h1>
          
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
        <h1 style={{textAlign:'center', fontSize:'24px'}}>Important DeadLines</h1>
        <BasicTable />
      </div>

      <div className="about" style={{display:'flex'}}>
        <div className="img" style={{minWidth:'50%'}}>.</div>
        <div className="">
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
        <p >© 2025 Indian Institute of Technology Ropar. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
