import PropTypes, { func } from 'prop-types';
import { useState } from 'react';

function Mail({ media, links }) {

  // const [userMail, setUserMail] = useState("utqkaba@gmail.com");
  const userMail = "utqkaba@gmail.com"
  const [isCopy, setIsCopy] = useState(false)


  function copyMail() {
    navigator.clipboard.writeText(userMail);
    setIsCopy(!isCopy)
  }

  return (
    <div className='card-links mx-8'>
      <a href={links} target='_blank' rel="noreferrer" onClick={() => copyMail()}>
        <div className='card-item flex justify-center bg-slate-100 bg-opacity-90 px-5 py-4 rounded-full mb-4 hover:bg-slate-50 hover:bg-opacity-100 hover:scale-105 duration-500 cursor-pointer drop-shadow-xl'>
          <p className='name ml-1 text-lg'>
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