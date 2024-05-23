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
    <div className='flex flex-col justify-center items-center h-screen scale-90 sm:scale-95 md:scale-95 lg:scale-95 xl:scale-95 2xl:scale-95 font-libre tracking-wider'>

      <div className='card bg-stone-300 bg-opacity-10 px-8 py-4 rounded-2xl w-[90%] sm:w-[70%] md:w-[50%] lg:w-[42%] xl:w-[36%] 2xl:w-[30%]'>

        <img
          src={Image}
          alt="profilePhoto"
          className="rounded-full m-auto my-3 hover:scale-105 duration-500"
        />

        <Header />

        <div className='mt-4'>
          <Info media="Github" links="https://github.com/utqkaba" icon="" />
          <Info media="Medium" links="https://medium.com/@utkukaba" icon="" />
          <Mail media="E-Mail" icon="" />
          <Cv media="Cv" />

        </div>
      </div>
    </div>
  </React.StrictMode>,
)
