import React , { useState } from 'react'
import Table from '../components/admin/Table';
import { Link } from 'react-router-dom';

const Order = () => {

    const columns = [{
            Header: "ID",
            accessor: "_id",
          },
          {
            Header: "Quantity",
            accessor: "quantity",
          },
          {
            Header: "Discount",
            accessor: "discount",
          },
          {
            Header: "Amount",
            accessor: "amount",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Action",
            accessor: "action",
          },

        ]; 
    const [rows] = useState([
        {
            _id: "6666asdsad8cafasfe",
            amount: 1000,
            quantity: 1,
            discount: 469,
            status: <span className="red">Pending</span>,
            action: <Link to="/order/6666asdsad8cafasfe">View</Link>,
        },
        {
          _id: "6666asdsad8cafasfe",
          amount: 1000,
          quantity: 1,
          discount: 469,
          status: <span className="red">Pending</span>,
          action: <Link to="/order/6666asdsad8cafasfe">View</Link>,
      }
      ]);
    const showPagination = false;  
  return (
    <div className="order">
      <h1>My Orders</h1>
      <Table columns={columns} rows={rows} heading="Orders" showPagination={showPagination} CCN={"order-table"}/>
    </div>
  )
}

export default Order
