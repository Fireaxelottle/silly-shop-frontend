import React  from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import BarChart from '../../components/admin/Charts';




const DashBoard = () => {
  return (
    <div className='admin-container'>
      <AdminSidebar />
      <main>
        <div className='search-bar'>
          <span><i className='fa-solid fa-search'></i></span>
          <input type="text" placeholder='Search for data,user or stocks'/>
          <span><i className='fa-solid fa-bell'></i></span>
         <span><i className="fa-regular fa-circle-user"></i></span> 
        </div>
        <section className='widget-container'>
        <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0, 115, 255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            color="rgb(0 198 202)"
            heading="Users"
          />
          <WidgetItem
            percent={80}
            value={23000}
            color="rgb(255 196 0)"
            heading="Transactions"
          />

          <WidgetItem
            percent={30}
            value={1000}
            color="rgb(76 0 255)"
            heading="Products"
          />
        </section>
        <section className='graph-container'>
          <div className="revenue-graph">
            <h2>Revenue & Transactions</h2>
            <BarChart 
             data_2={[300, 144, 433, 655, 237, 755, 190]}
             data_1={[200, 444, 343, 556, 778, 455, 990]}
             title_1="Revenue"
             title_2="Transaction"
             bgColor_1="rgb(0, 115, 255)"
             bgColor_2="rgba(53, 162, 235, 0.8)"
             horizontal={false}
            />
          </div>

        </section>
      </main>
    </div>
  )
};

const WidgetItem = ({heading , value , percent , color ,amount})=> <article className='widget'>

  <div className='widget-info'>
    <p>{heading}</p>
    <h3>{amount ? `$${value}` : value}</h3>
    {
      percent > 0 ? 
      <p className='green'> <i className="fa-solid fa-caret-up"></i> {percent}% </p>
      :
        <p className='red'> <i className="fa-solid fa-caret-down"></i> {percent}% </p>
    }
  </div>
  <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
      )`,
      }}
    >
      <span
        style={{
          color: color,
        }}
      >
        {percent}%
      </span>
    </div>

</article>

export default DashBoard
