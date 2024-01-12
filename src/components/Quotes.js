import PropTypes from 'prop-types';
import atitude from '../assets/atitude.png';

const Quotes = ({ text, isLoading, error }) => (
  <div className="bg-quote-bg h-screen bg-fill bg-left-bottom md:bg-left-top md:bg-cover lg:bg-center w-full bg-no-repeat absolute top-0">
    {isLoading && <h2 className="absolute top-[25%] left-[10%] lg:left-12  w-[80%] rounded-3xl bg-[#29A8FF] bg-opacity-40 lg:w-[35%] md:top-[35%] p-6 md:p-12 lg:top-[33%]  h-auto text-lg md:text-2xl   border-[rgb(0,93,178)] border-8 shadow-xl text-white text-justify">Loading...</h2>}
    {error && <h2>{error}</h2>}
    { text && (
      <div className="absolute top-[25%] left-[10%] lg:left-12  w-[80%] rounded-3xl bg-[#29A8FF] bg-opacity-40 lg:w-[35%] md:top-[35%] p-6 md:p-12 lg:top-[33%]  h-auto text-lg md:text-2xl   border-[rgb(0,93,178)] border-8 shadow-xl text-white text-justify">
        <p>
          { text.quote }
          {' '}
        </p>
        <p className="text-center  lg:text-1xl pt-2">
          {text.author && ` by ${text.author}`}
        </p>
      </div>
    )}
    <img className=" absolute left-[10%] top-[13%] md:top-[20%] lg:left-12 w-12 md:w-28 h-auto rounded-full  lg:top-[14%] " src={atitude} alt="logo" />
    <img className=" absolute left-[80%] top-[83%] md:left-[75%] md:top-[70%] lg:left-[30%] w-12 md:w-28 h-auto rounded-full  lg:top-[84%] " src={atitude} alt="logo" />
  </div>
);

Quotes.propTypes = {
  text: PropTypes.shape({
    quote: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  error: PropTypes.string,
};

export default Quotes;
