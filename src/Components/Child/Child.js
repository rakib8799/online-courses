import React from 'react';
import './Child.css';

const Child = (props) => {
  const {image,course,price} = props.users;
  return (
    <div className='d-inline-block'>
      <div className='content d-inline-block my-5 ml-2 text-center bg-dark text-white'>
        <img src={image} alt=""/>
        <div className='my-4'>

        <h5>{course}</h5>
        <p>${price}</p>
        <button onClick={()=>props.addAmount(props.users)} className="btn btn-success">Enroll now</button>
        </div>
      </div>  
    </div> 
  );
};

export default Child;