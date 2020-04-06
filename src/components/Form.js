import React from 'react';

const Form = ({handleClick, handleSubmit, value}) => {

  

  return (
    <div className='content'>
      <form className='content__form' onSubmit={handleSubmit}>
          <input
              className='content__form--input'
              name='filter'
              type='text'
              onChange={handleClick}
              placeholder='Search...'
              id='search'
              value={value}
          />
      </form>
    </div> 
  )

}
 
export default Form




