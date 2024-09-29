import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import './Orders.css';

const OrderPage = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + '/api/order/list');
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error('Error fetching orders');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Error fetching orders');
    }
  };

  const statusHandler = async (event,orderId) => {
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status: event.target.value
    })
    if(response.data.success){
      await fetchAllOrders();
      
    }
  } 

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt='Parcel Icon' />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, itemIndex) => (
                  <span key={itemIndex}>
                    {item.name} x {item.quantity}
                    {itemIndex < order.items.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <p className='order-item-name'>{order.address.firstName + " " + order.address.lastName}</p>
              <div className='order-item-address'>
                <p>{order.address.street + ", "}</p>
                <p>{order.address.city + ", " + order.address.state + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
                
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>Price : ₹{order.amount}</p>
            <select onChange={(event)=> statusHandler(event,order._id)} value={order.status}>
              <option value="Booking Processing">Booking Processing</option>
              <option value="Booking Confirmed">Booking Confirmed</option>
              {/* <option value="Delivered">Delivered</option> */}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
