import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const users=props.users;
  const addTotal = users.reduce((sum,total)=>sum+total.price,0);
  const total= (addTotal).toFixed(2);

  return (
    <div className='cart text-center position-fixed d-flex flex-column justify-content-center align-items-center'>
      <h3>Order Summary</h3><br/>
      <h5>Items Added: {users.length}</h5><br/>
      <h5><big>Total price: ${total}</big></h5>
    </div>
  );
};

export default Cart;