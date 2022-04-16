import React from 'react'
import IconNot from '../../Assets/computer.png'

function NotFound() {
  return (
    <div className='justify-content-center d-flex'>
      <div className='justify-content-center' style={{backgroundColor:'#f2eee8', height:'550px', width:'80%', marginTop:'50px',padding:'75px'}}>
        <img src={IconNot} style={{display:'flex', marginLeft:'340px'}}/>
        <h1 style={{margin:'20px auto', textAlign:'center'}}> Oops! Something went wrong!</h1>
        <button type="button" className="btn btn-primary" style={{margin:'10px auto', display:'flex'}}><a href="/" className="text-white" style={{textDecoration:'none', alignContent:'center'}}>Return To Home</a></button>
      </div>
    </div>
    
  )
}

export default NotFound