import PropTypes from 'prop-types';
import { useState } from 'react';

function Mail({ media, links }) {

  const userMail = "utqkaba@gmail.com"
  const [isCopy, setIsCopy] = useState(false)

  async function copyMail() {
    try {
      await navigator.clipboard.writeText(userMail);
      setIsCopy(true)
      alert("Copied successfully! ✅ ")
    } catch (e) {
      setIsCopy(false)
      alert("Failed to copy! ❌ ")
    }
  }

  return (
    <div className='card-links mx-7'>
      <a href={links} target='_blank' rel="noreferrer" onClick={() => copyMail()}>
        <div className='card-item flex justify-center scale-90 bg-slate-100 bg-opacity-90 px-5 py-4 rounded-full mb-4 hover:bg-slate-50 hover:bg-opacity-100 hover:scale-105 duration-500 cursor-pointer drop-shadow-xl'>
          <p className='name ml-1 text-lg scale-90 sm:scale-95 md:scale-95 lg:scale-95 xl:scale-95 2xl:scale-95'>
            {isCopy === true ? userMail : media}
          </p>
          <div className='icon mr-1'>
          </div>
        </div>
      </a>
    </div>
  )
}

Mail.propTypes = {
  media: PropTypes.string.isRequired,
  links: PropTypes.any
}

export default Mail