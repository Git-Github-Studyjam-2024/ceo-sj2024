import React from 'react'
import imgNhi from "./../static/imgs/img_Nhi.jpg"
import "./style.css"
const About = () => {
  return (
    <div className='d-flex flex-row justify-content-around'>
      <div className='h-auto about-info d-flex flex-column justify-content-center align-items-start text-white'>
        <span className='py-3 display-8'>
          Chào mọi người. Tôi là
        </span>
        <span className='display-5 border-top border-bottom w-100 py-4'>
          Tuyết Nhi
        </span>
        <span className='py-3 display-8'>
          Sinh viên năm 3 Trường Đại học Sư phạm Kỹ thuật TPHCM 
        </span>
        <span className='display-8'>
          Mục tiêu: Lương ngàn đô
        </span>
      </div>
      <div className='about-image'>
        <img src={imgNhi} alt='image nhi' className='about-image-style'width={300} height={400}/>
      </div>
    </div>
  )
}

export default About