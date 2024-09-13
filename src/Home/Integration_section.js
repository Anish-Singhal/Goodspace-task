import React from 'react'
import "./Integration_section.css"
import icon1 from "../assets/icon1.png"
import vector2 from "../assets/Vector2.png"

export default function IntegrationSection() {
  return (
    <div className='integration-section'>
      <h3 className='integration-heading'>Integrations</h3>

      {/* Connection Line Image */}
      <div className="line-container">
        <img src={vector2} alt="connection-line" className="connection-line" />
      </div>
      {/* <img src={vector2} alt="arrow" className='connection'></img> */}
      <div className='flex-box2'>
        <div className='flex-item2 item-1'>
            <div className='integration_div'>
                <img src={icon1} alt="logo"></img>
                <h3>HRMS Systems</h3>
            </div>
            <p>We can integrate with any HRMS as long as the employee master can be made available to us over SFTP/API.<br/><br/> We are already deeply integrated with PeopleStrong and others are coming up.</p>
        </div>
        <div className='flex-item2 item-2'>
            <div className='integration_div'>
                <img src={icon1} alt="logo"></img>
                <h3>Finance Systems</h3>
            </div>
            <p>Connect us with your finance systems to get all cost centers mapped, and all data reconciled on a periodic/regular basis.<br/><br/> Open APIs available to connect.</p>
        </div>
        <div className='flex-item2 item-3'>
            <div className='integration_div'>
                <img src={icon1} alt="logo"></img>
                <h3>Single Sign-on Systems</h3>
            </div>
            <p>We can integrate to ensure that your users don't have to log in multiple times into different logins.<br/><br/> SSO is possible with any system that offers it.</p>
        </div>
      </div>
    </div>
  )
}
