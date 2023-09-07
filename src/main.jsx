import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Info from './components/Info'
import Image from './assets/newUtq.png'
import Cv from './components/Cv'
import Mail from './components/Mail'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex justify-center items-center h-screen scale-95'>
      <div className='card backdrop-contrast-125 bg-slate-500 bg-opacity-30 p-10 rounded-2xl w-[30%]'>
        {/* <div className=''>
          <img
            src={Image}
            alt="profilePhoto"
            className="rounded-full scale-50"
          /></div> */}
        <img
          src={Image}
          alt="profilePhoto"
          className="rounded-full m-auto mb-3 hover:scale-105 duration-500"
        />

        <Header />
        <div className='mt-4'>
          <Info media="Github" links="https://github.com/utqkaba" icon="selam" />
          <Info media="Twitter" links="https://twitter.com/utqkaba" icon="" />
          <Info media="Instagram" links="https://www.instagram.com/utqkaba/" icon="" />
          <Mail media="E-Mail" icon="" />
          <Cv media="Cv" />
        </div>
      </div>
    </div>
  </React.StrictMode>,
)
