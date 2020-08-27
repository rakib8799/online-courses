import React from 'react';
import './MainContainer.css';

const MainContainer = (props) => {
  const {image,courseTitle,price} = props.users;
  return (
    <div className='d-inline-block ml-3'>
      <div className='content d-inline-block my-5 ml-2 text-center  text-white'>
        <img src={image} alt=""/>
        <div className='my-4'>
        <h5>{courseTitle}</h5>
        <p>${price}</p>
        <button onClick={()=>props.addAmount(props.users)} className="btn btn-success">Enroll now</button>
        </div>
      </div>  
    </div> 
  );
};

export default MainContainer;