import React,{useState} from 'react';
import fakeData from '../../fakeData/fakeData';
import MainContainer from '../MainContainer/MainContainer';
import Cart from '../Cart/Cart';
import './Course.css';

const Course = () => {
  const [users,setUsers] = useState([]);
  const addAmount = (amount)=>{
    const newValue=[...users,amount];
    setUsers(newValue);
  }

  return (
  <div className='course d-flex'>
    <div className='main-component'>
    {
      fakeData.map(fd=><MainContainer addAmount={addAmount} users={fd} key={fd.id}></MainContainer>)
    }
    </div>
    <div className='unique-component'>
      <Cart users={users}></Cart>
    </div>
  </div>
  );
};

export default Course;