import PropTypes from 'prop-types';

const Keypads = ({ handleClick, state }) => {
  const { total, next, operation } = state;
  return (
    <div className="calculator-container">
      <h2>Let&apos;s do some Math!</h2>
      <div className="keypads">
        <p>
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </p>
        <div className="keypads-btn">
          <button onClick={handleClick} type="button">
            AC
          </button>
          <button onClick={(e) => handleClick(e)} type="button">
            +/-
          </button>
          <button onClick={(e) => handleClick(e)} type="button">
            %
          </button>
          <button
            onClick={(e) => handleClick(e)}
            type="button"
            className="bg-orange operation"
          >
            ÷
          </button>
          <br />
          <button onClick={(e) => handleClick(e)} type="button">
            7
          </button>
          <button onClick={(e) => handleClick(e)} type="button">
            8
          </button>
          <button onClick={(e) => handleClick(e)} type="button">
            9
          </button>
          <button
            onClick={(e) => handleClick(e)}
            type="button"
            className="bg-orange operation"
          >
            x
          </button>
          <br />
          <button onClick={(e) => handleClick(e)} type="button">
            4
          </button>
          <button onClick={(e) => handleClick(e)} type="button">
            5
          </button>
          <button onClick={(e) => handleClick(e)} type="button">
            6
          </button>
          <button
            onClick={(e) => handleClick(e)}
            type="button"
            className="bg-orange operation"
          >
            -
          </button>
          <br />
          <button onClick={(e) => handleClick(e)} type="button">
            1
          </button>
          <button onClick={(e) => handleClick(e)} type="button">
            2
          </button>
          <button onClick={(e) => handleClick(e)} type="button">
            3
          </button>
          <button
            onClick={(e) => handleClick(e)}
            type="button"
            className="bg-orange operation"
          >
            +
          </button>
          <br />
          <button onClick={(e) => handleClick(e)} type="button" className="zero">
            0
          </button>
          <button onClick={(e) => handleClick(e)} type="button">
            .
          </button>
          <button
            onClick={(e) => handleClick(e)}
            type="button"
            className="bg-orange operation"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

Keypads.propTypes = {
  handleClick: PropTypes.func.isRequired,
  state: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Keypads;
