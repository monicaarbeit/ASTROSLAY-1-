function AstroElementsBar(props) {
  return <div className="flex">
    <button conClick={() => props.selectElement('Earth')} id="earth" className="AstroCardBTN">
      <img src="https://i.pinimg.com/564x/a0/ae/9d/a0ae9d3d3e46ab79151a6f6b6084b0ac.jpg" />
      <div class="text">Earth</div>
    </button>
    <button onClick={() => props.selectElement('Water')} className="AstroCardBTN">
      <img src="https://i.pinimg.com/564x/33/63/7d/33637d789d7e550d4371d41e6aed7c4e.jpg" />
      <div class="text">Water</div>
    </button>
    <button onClick={() => props.selectElement('Fire')} className="AstroCardBTN">
      <img src="https://i.pinimg.com/564x/7d/36/65/7d36652fa15ba83014f43ab50ddee594.jpg" />
      <div class="text">Fire</div>
    </button>
    <button onClick={() => props.selectElement('Air')} className="AstroCardBTN">
      <img src="https://i.pinimg.com/564x/8a/7c/f3/8a7cf323fe9b579f6a871d4ef2e1dfad.jpg" />
      <div class="text">Air</div>
    </button>
  </div>
}

export default AstroElementsBar;