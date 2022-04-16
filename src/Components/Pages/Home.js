import React from 'react'
import SideBarHome from '../sideBar_Home'
import Content from '../Content';

const daftarTugas = [ 
  {
    id: 1,
    title: "Membuat Komponen",
    completed: true,
  },
  {
    id: 2,
    title: "Unit Testing",
    completed: true,
  },
  {
    id: 3,
    title: "Setup Development Environment",
    completed: true,
  },
  {
    id: 4,
    title: "Deploy ke server",
    completed: true,
  },
];

function Home() {
  return (
    <>
      <div className='row'>
        <div className='col-md-3'>
          <SideBarHome />
        </div>
        <div className='col-md-9'>
          <div className='justify-content-center' style={{marginTop:'200px', textAlign:'justify'}}>
            <h1 style={{textAlign:'center', color:'grey'}}>Todos App</h1>
            <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Add Todo...' style={{borderRadius:'20px'}} />
            <Content daftarTugas = {daftarTugas} /> 
          </div>
        </div>
      </div>  
    </>
  )
}

export default Home