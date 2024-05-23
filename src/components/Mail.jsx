import PropTypes from 'prop-types';
import { useState } from 'react';

function Mail({ media, links }) {

  const userMail = "utqkaba@gmail.com";
  const [isCopy, setIsCopy] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  async function copyMail() {
    try {
      await navigator.clipboard.writeText(userMail);
      setIsCopy(true);
      alert("Copied successfully! ✅ ");
    } catch (e) {
      setIsCopy(false);
      alert("Failed to copy! ❌ ");
    }
  }

  return (
    <div className='card-links mx-7'>
      <a href={links} target='_blank' rel="noreferrer" onClick={() => copyMail()}>
        <div
          className='card-item flex justify-center scale-90 bg-stone-200 bg-opacity-90 px-5 py-4 mb-4 rounded-full hover:bg-stone-50 hover:bg-opacity-100 hover:scale-105 duration-500 cursor-pointer drop-shadow-xl'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <p className='name ml-1 text-lg scale-90 sm:scale-95 md:scale-95 lg:scale-95 xl:scale-95 2xl:scale-95 transition-all duration-500'>
            {isHovered ? userMail : (isCopy ? userMail : media)}
          </p>
        </div>
      </a>
    </div>
  );
}

Mail.propTypes = {
  media: PropTypes.string.isRequired,
  links: PropTypes.any
};

export default Mail;
