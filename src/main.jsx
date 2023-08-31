import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Info from './components/Info'
import Image from './assets/react.svg'
import Cv from './components/Cv'
import Mail from './components/Mail'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='flex justify-center items-center h-screen'>
      <div className='card backdrop-contrast-125 bg-slate-500 bg-opacity-30 p-10 rounded-lg w-[30%]'>
        <img
          src={Image}
          alt="image"
          className="rounded-full m-auto"
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
