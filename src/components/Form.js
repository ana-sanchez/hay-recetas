import React from 'react';
import '../styles/components/_form.scss';



const Form = ({handleClick, handleSubmit, value}) => {


    return (
    <div className='content'>
      <form className='content__form' onSubmit={handleSubmit}>
          <input
              className='content__form--search'
              name='filter'
              type='text'
              onChange={handleClick}
              placeholder='Tomato...'
              id='search'
              value={value}
          />
          <select className='content__form--select'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
      </form>
    </div> 
  )

}
 
export default Form




