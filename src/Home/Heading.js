import React from 'react'
import "./Heading.css"

export default function Heading() {
  return (
    <div className='heading-div'>
      <div className='div-1'>
        <div>
            <div className='line-1'>The World's Most Configurable</div>
            <h1 className='heading'>Travel & Expense Management Software</h1>
        </div>
        <p className='para'>Configure any rule. Enable a world class mobile experience for your users. Get seamless reporting & integrations. Inbuilt OCR expense scanning. Manage travel & non-travel expenses. Open APIs to connect with external systems.</p>
      </div>
      <div className='div-2'>
        <div className='info-div'>
            <div className='box1'>Name</div>
            <div className='box2'>Office email-id</div>
            <div className='button2'>Start trail</div>
        </div>
        <div className='details'> 30 Days free trial <div className='circle'></div> Upto 10 users</div>
      </div>
    </div>
  )
}
