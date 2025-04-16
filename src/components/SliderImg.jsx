import React from 'react'

export default function SliderImg() {
  return (
    <div>
      <div className="" style={{minHeight:'36rem', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1 style={{fontSize:'50px',textAlign:'center',fontWeight:'900'}}>
10th International Conference on<br/>
Computer Vision & Image Processing</h1>
<h3 style={{padding:'20px 0'}}>10-13 December, 2025 | IIT Ropar, Punjab - 140001, INDIA</h3>
<div className="" style={{display:'flex', gap:'1rem'}}>
  <button style={{padding:'10px 30px',backgroundColor:'red', borderRadius:'10px',color:'white'}}>ABOUT CVIP 2025</button>
  <button  style={{padding:'10px 30px',backgroundColor:'black', borderRadius:'10px',color:'white'}}>Important Dates</button>
</div>
      </div>
    </div>
  )
}
