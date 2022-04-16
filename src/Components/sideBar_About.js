import React from 'react'

function sideBar_About() {
  return (
    <>
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{width: '280px', height:'630px'}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Todos App</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="/" className="nav-link text-white">
                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#home" /></svg>
                    Home
                    </a>
                </li>
                <li>
                    <a href="/About/About-App" className="nav-link text-white">
                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#grid" /></svg>
                    About App
                    </a>
                </li>
                <li>
                    <a href="/About/About-Author" className="nav-link text-white">
                    <svg className="bi me-2" width={16} height={16}><use xlinkHref="#people-circle" /></svg>
                    About Author
                    </a>
                </li>
            </ul>
            <hr />
        </div>
    </>
  )
}

export default sideBar_About