import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const users = props.users;
  const addAmount = users.reduce((sum,updatedValue)=>sum+updatedValue.price,0);
  const totalAmount= (addAmount).toFixed(2);

  return (
    <div className='cart text-center position-fixed d-flex flex-column justify-content-center align-items-center'>
      <h3 className='text-muted'>Order Summary</h3><br/>
      <h5>Items Added: {users.length}</h5><br/>
      <h5><big>Total price: ${totalAmount}</big></h5>
    </div>
  );
};

export default Cart;