import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import { FaBox } from "react-icons/fa6";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {orders.map((order, index) => (
          <div
            key={index}
            className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700'
          >
            <FaBox className='w-7 h-7' />

            <div>
              {order.items.map((item, idx) => (
                <p className='p-0.5' key={idx}>
                  {item.name} x {item.quantity} <span>{item.size}</span>
                  {idx !== order.items.length - 1 && ','}
                </p>
              ))}
            </div>

            <p className='mt-3 mb-2 font-medium'>
              {order.address.firstName + ' ' + order.address.lastName}
            </p>

            <div>
              <p>{order.address.street},</p>
              <p>
                {order.address.city}, {order.address.state},{' '}
                {order.address.country}, {order.address.zipcode}
              </p>
            </div>

            <p>{order.address.phone}</p>

            <div>
              <p className='text-sm sm:text-[15px]'>Items: {order.items.length}</p>
              <p className='mt-3'>Methods: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

            <p className='text-sm sm:text-[15px]'>
              {currency}
              {order.amount}
            </p>

            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className='p-2 font-semibold'
            >
              <option value='OrderPlaced'>OrderPlaced</option>
              <option value='Packing'>Packing</option>
              <option value='Shipping'>Shipping</option>
              <option value='Out for delivery'>Out for delivery</option>
              <option value='Delivered'>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
