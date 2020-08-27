import React,{useState} from 'react';
import fakeData from '../../fakeData/fakeData';
import Child from '../Child/Child';
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
    <div className='class1'>
    {
      fakeData.map(fd=><Child addAmount={addAmount} users={fd} key={fd.id}></Child>)
    }
    </div>
    <div className='class2'>
      <Cart users={users}></Cart>
    </div>
  </div>
  );
};

export default Course;