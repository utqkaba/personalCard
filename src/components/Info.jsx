import PropTypes from 'prop-types';

function Info({ media, links }) {
  return (
    <div className='card-links mx-7'>
      <a href={links} target='_blank' rel="noreferrer">
        <div className='card-item flex justify-center scale-90 bg-stone-200 bg-opacity-90 px-5 py-4 mb-4 rounded-full hover:bg-stone-50 hover:bg-opacity-100 hover:scale-105 duration-500 hover:blur-0 cursor-pointer drop-shadow-xl'>
          <p className='name ml-1 text-lg'>{media}</p>
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