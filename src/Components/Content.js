import React from 'react'
import './Content.css';

function Content(props) {
  return (
    <>
        {props.daftarTugas.map((item) => (
            <div style={{display:'flex'}}>
            <input className='form-check-input' type='checkbox' id='check1' name='option1' value='something' checked style={{margin:'15px 5px'}}></input>
            <label style={item.completed ? {textDecoration: "line-through", padding:'10px', marginTop:'5px', marginBottom:'5px'} : 
            {padding:'10px', marginTop:'5px', marginBottom:'5px'}}>{item.title}</label>
            </div>
        ))}
    </>
  )
}

export default Content