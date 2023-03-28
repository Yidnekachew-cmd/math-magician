const Keypads = () => (
  <div className="keypads">
    <p>0</p>
    <div className="keypads-btn">
      <button type="button">AC</button>
      <button type="button">+/-</button>
      <button type="button">%</button>
      <button type="button" className="bg-orange">÷</button>
      <br />
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button" className="bg-orange">x</button>
      <br />
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button" className="bg-orange">-</button>
      <br />
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button" className="bg-orange">+</button>
      <br />
      <button type="button" className="zero">0</button>
      <button type="button">.</button>
      <button type="button" className="bg-orange">=</button>
    </div>
  </div>
);

export default Keypads;
