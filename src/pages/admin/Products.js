import React, { useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import Table from "../../components/admin/Table";
import { Link } from "react-router-dom";

const Products = () => {
  const columns = [
    {
      Header: "Photo",
      accessor: "photo",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: "Stock",
      accessor: "stock",
    },
    {
      Header: "Action",
      accessor: "action",
    },
  ];

  const img =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

  const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

  const [rows] = useState([
    {
      photo: <img src={img} alt="Shoes" />,
      name: "Puma Shoes Air Jordan Cook Nigga 2023",
      price: 690,
      stock: 3,
      action: <Link to="/admin/product/sajknaskd">Manage</Link>,
    },

    {
      photo: <img src={img2} alt="Shoes" />,
      name: "Macbook",
      price: 232223,
      stock: 213,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
  ]);

  const data = React.useMemo(() => rows, [rows]);
  const showPagination = false;  

  return (
    <div className="admin-container ">
      <AdminSidebar />
      <main>
        <div>
          <h3>PRODUCTS</h3>
          <button>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        {  rows && rows.length >  0 ?  <Table columns={columns} data={data}  showPagination={showPagination} CCN={"admin-product-table"}/> : <p>No Products</p> }
      </main>
    </div>
  );
};

export default Products;
