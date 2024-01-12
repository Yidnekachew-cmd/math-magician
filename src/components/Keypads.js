import PropTypes from 'prop-types';

const Keypads = ({ handleClick, state }) => {
  const { total, next, operation } = state;
  return (
    <div className="absolute top-[9%] left-[15%] md:left-0 flex justify-between w-[90%]  lg:w-[74%] md:top-[20%] lg:top-[14%]  h-auto">
      {/* md:h-[68svh] */}
      <div className="hidden w-[53%] md:flex pl-10 flex-col pt-32 md:pt-28">
        <h1 className=" text-4xl md:text-5xl lg:text-2xl   ">The Evolution of Calculators: From Abacus to Smartphone</h1>
        <p className="  text-xl md:text-lg  leading-8 pt-6 text-justify">Calculators have a rich history, from ancient abacuses to Blaise Pascal&apos;s mechanical invention. The rise of electronic and handheld calculators led to today&apos;s integration into smartphones and computers, transforming computation for various applications.</p>
      </div>
      <div className=" rounded-3xl bg-black flex flex-col mt-12 md:mt-0 px-1 py-2 md:px-2 md:py-3 w-[80%] md:w-[40%] lg:w-[30%] h-auto">
        <p className="pb-20 text-white text-2xl md:text-5xl self-end px-2 top-[12%] md:top-[10%] relative">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </p>
        <div className="flex flex-wrap w-full gap-x-2  gap-y-2 md:text-2xl text-[#339DFF] ">
          <button className="w-[22%] bg-[#616161] rounded-xl h-16" onClick={handleClick} type="button">
            AC
          </button>
          <button className="w-[22%] bg-[#616161] rounded-xl h-16" onClick={(e) => handleClick(e)} type="button">
            +/-
          </button>
          <button className="w-[22%] rounded-xl h-16 bg-[#005DB2]" onClick={(e) => handleClick(e)} type="button">
            %
          </button>
          <button
            onClick={(e) => handleClick(e)}
            type="button"
            className="w-[22%] rounded-xl h-16 bg-[#005DB2]"
          >
            ÷
          </button>
          <br />
          <button className="w-[22%] bg-[#303136] rounded-xl h-16" onClick={(e) => handleClick(e)} type="button">
            7
          </button>
          <button className="w-[22%] bg-[#303136] rounded-xl h-16" onClick={(e) => handleClick(e)} type="button">
            8
          </button>
          <button className="w-[22%] bg-[#303136] rounded-xl h-16" onClick={(e) => handleClick(e)} type="button">
            9
          </button>
          <button
            onClick={(e) => handleClick(e)}
            type="button"
            className=" w-[22%] rounded-xl h-16 bg-[#005DB2]"
          >
            x
          </button>
          <br />
          <button className="w-[22%] bg-[#303136] rounded-xl h-16" onClick={(e) => handleClick(e)} type="button">
            4
          </button>
          <button className="w-[22%] bg-[#303136] rounded-xl h-16" onClick={(e) => handleClick(e)} type="button">
            5
          </button>
          <button className="w-[22%] bg-[#303136] rounded-xl h-16" onClick={(e) => handleClick(e)} type="button">
            6
          </button>
          <button
            onClick={(e) => handleClick(e)}
            type="button"
            className=" w-[22%] rounded-xl h-16 bg-[#005DB2]"
          >
            -
          </button>
          <br />
          <button className="w-[22%] bg-[#303136] rounded-xl h-16" onClick={(e) => handleClick(e)} type="button">
            1
          </button>
          <button className="w-[22%] bg-[#303136] rounded-xl h-16" onClick={(e) => handleClick(e)} type="button">
            2
          </button>
          <button className="w-[22%] bg-[#303136] rounded-xl h-16" onClick={(e) => handleClick(e)} type="button">
            3
          </button>
          <button
            onClick={(e) => handleClick(e)}
            type="button"
            className=" w-[22%]  rounded-xl h-16 bg-[#005DB2]"
          >
            +
          </button>
          <br />
          <button onClick={(e) => handleClick(e)} type="button" className="w-[46%] bg-[#303136] rounded-xl h-16">
            0
          </button>
          <button className="w-[22%] bg-[#303136] rounded-xl h-16" onClick={(e) => handleClick(e)} type="button">
            .
          </button>
          <button
            onClick={(e) => handleClick(e)}
            type="button"
            className=" w-[22%]  rounded-xl h-16 bg-[#29A8FF] text-white"
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
