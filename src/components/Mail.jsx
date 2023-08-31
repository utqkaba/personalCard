import PropTypes from 'prop-types';

function Mail({ media, links }) {

  const mail = "utqkaba@gmail.com"

  function notifyCopyMail(password) {
    if (password === "") {
      alert("Password unsuccessfully copied to clipboard!", true)
    } else {
      copyMail()
      alert("Password successfully copied to clipboard.", password)
    }
  }

  function copyMail() {
    navigator.clipboard.writeText(mail);
  }

  return (
    <div className='card-links'>
      <a href={links} target='_blank' rel="noreferrer" onClick={() => notifyCopyMail(mail)}>
        <div className='card-item flex justify-between bg-slate-100 bg-opacity-75 px-5 py-4 rounded-full mb-4 hover:bg-opacity-100 hover:scale-105 duration-500 cursor-pointer drop-shadow-xl'>
          <p className='name ml-1'>{media}
            <span>: utqkaba@gmail.com</span>
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