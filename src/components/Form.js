import React from 'react';

const Form = ({clickHandler}) => {

  const onClickHandler = e => {
    clickHandler(e.target.value)
  }

  return (
    <div className='content'>
      <form className='content__form'>
          <input
              className='content__form--input'
              name='filter'
              type='search'
              onChange={onClickHandler}
              placeholder='Search...'
              id='search'
          />
      </form>
    </div> 
  )

}
 
export default Form




