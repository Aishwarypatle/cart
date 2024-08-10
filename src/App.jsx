import { useState } from 'react';
import './index.css';

const cartItems = [
  {
    price: 10,
    name: 'item 1',
    id: 'item1',
    quantity: 1,
  },
  {
    price: 20,
    name: 'item 2',
    id: 'item2',
    quantity: 2,
  },
  {
    price: 15,
    name: 'item 3',
    id: 'item3',
    quantity: 1,
  },
];
function App() {

  const [ value, setValue ] = useState();

  const handleItemCountChange = (e, val, id) => {
    const { value } = e.target
    let total = 0;
    cartItems.map((data) =>{
      if(data.id == id){
        data.quantity =  value
      }
      total += (data.price * data.quantity)
    })
    setValue(total)
  };
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div className="item-card" key={item.id}>
            <div className="item-card-title">
              <p>{item.name}</p>
              <p className="item-card-price">
                ₹{item.price} * {item.quantity} = {item.price * item.quantity}
              </p>
            </div>
            <input
              className="item-count-input"
              type="number"
              value={item.quantity}
              onChange={(e, val) => handleItemCountChange(e, val, item.id)}
            />
          </div>
        );
      })}
      <div className="item-card">
        <p className="item-card-title">Total</p>
        <p>{value}</p>
      </div>
    </div>
  );
}

export default App