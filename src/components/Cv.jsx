import PropTypes from 'prop-types';

function Cv({ media }) {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('UtkuKaba.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'UtkuKaba10/23.pdf';
        alink.click();
      })
    })
  }

  return (
    <div className='card-links mx-7'>
      <div onClick={onButtonClick} className='card-item flex justify-center scale-90 bg-slate-100 bg-opacity-90 px-5 py-4 rounded-full mb-4 hover:bg-slate-50 hover:bg-opacity-100 hover:scale-105 duration-500 hover:blur-0 cursor-pointer drop-shadow-xl'>
        <p className='name ml-1 text-lg'>{media}</p>
      </div>
    </div>
  )
}

Cv.propTypes = {
  media: PropTypes.string.isRequired,
}

export default Cv