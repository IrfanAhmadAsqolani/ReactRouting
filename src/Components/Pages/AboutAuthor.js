import React from 'react'
import SideBarAbout from '../sideBar_About'

function AboutAuthor() {
  return (
    <>
      <div className='row'>
        <div className='col-md-3'>
          <SideBarAbout />
        </div>
        <div className='col-md-9'>
          <div className='justify-content-center' style={{marginTop:'200px', textAlign:'justify'}}>
            <h1>About Author</h1>
            <p>This app was developed by someone, a self-taught web developer and technical writer.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutAuthor