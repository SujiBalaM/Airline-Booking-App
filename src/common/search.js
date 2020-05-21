import React, { useState } from 'react';

const Search = ({ searchPassengers, clearPassengers, showClear, setAlert }) => {
  const [text, setText] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("text", text);
    if (text === '') {
      setAlert('Please Enter Something', 'light');
    } else {
      searchPassengers(text);
       setText('');
    }
  };
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='search'
          value={text}
          onChange={onChange}
          style={{
            width: '75%',
            height: '30px',
            marginRight: '10px',
            marginLeft: '10px',
          }}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
          style={{ height: '35px' }}
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearPassengers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
