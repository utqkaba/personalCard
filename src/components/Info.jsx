import PropTypes from 'prop-types';

function Info({ media, links }) {
  return (
    <div className='card-links'>
      <a href={links} target='_blank' rel="noreferrer">
        <div className='card-item flex justify-between bg-slate-100 bg-opacity-75 px-5 py-4 rounded-full mb-4 hover:bg-opacity-100 hover:scale-105 duration-500 hover:blur-0 cursor-pointer drop-shadow-xl'>
          <p className='name ml-1'>{media}</p>
          <div className='icon mr-1'>
          </div>
        </div>
      </a>
    </div>
  )
}

Info.propTypes = {
  media: PropTypes.string.isRequired,
  links: PropTypes.any
}

export default Info