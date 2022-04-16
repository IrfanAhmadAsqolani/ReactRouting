import React from 'react'
import SideBarAbout from '../sideBar_About'

function About() {
  return (
    <>
      <div className='row'>
        <div className='col-md-3'>
          <SideBarAbout />
        </div>
        <div className='col-md-9'>
          <div className='d-flex justify-content-center' style={{marginTop:'200px'}}>
            <h1>About Page</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default About