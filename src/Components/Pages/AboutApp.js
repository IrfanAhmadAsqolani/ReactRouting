import React from 'react'
import SideBarAbout from '../sideBar_About'

function AboutApp() {
  return (
    <>
      <div className='row'>
        <div className='col-md-3'>
          <SideBarAbout />
        </div>
        <div className='col-md-9'>
          <div className='justify-content-center' style={{marginTop:'200px', textAlign:'justify'}}>
            <h1>About App</h1>
            <p>In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done, press the enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close your app or reopened it. You still have access to your to-dos items.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutApp