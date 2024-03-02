import './ticker.css';

const Ticker = () => {
  return (
    <div className='ticker-wrapper animation-reverse m-tb-5'>
      <div className='custom-ticker' id='custom-ticker'>
        <div className='custom-ticker_container'>
          <p className='custom-ticker_items'>
            <span className='custom-ticker_item'>
              Developer javascript •
              <span className='text-border'>Developer javascript • </span>
            </span>

            <span className='custom-ticker_item'>
              Developer javascript •
              <span className='text-border'>Developer javascript • </span>
            </span>
            <span className='custom-ticker_item'>
              Developer javascript •
              <span className='text-border'>Developer javascript • </span>
            </span>
            <span className='custom-ticker_item'>
              Developer javascript •
              <span className='text-border'>Developer javascript • </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
