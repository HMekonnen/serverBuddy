import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Table from './components/Table';
import Waiter from './components/Waiter';
import Main from './components/Main'
import TableLogin from './components/TableLogin';
import WaiterLogin from './components/WaiterLogin';
import React, { useState } from 'react';
import Order from './components/Order';

function App() {
const [user, setUser]= useState(null)

const [server, setServer]= useState(null)

const [sentOrder, setSentOrder]= useState(null)

  return (
    <div className="App">


<nav className= "Nav" >

    <strong>   |<Link to="/">Welcome Page!</Link> | <Link to="/table/login">Sign into your table!</Link> | <Link to="/staff/login">Waiter Sign-in</Link> |</strong>
      </nav>


<Routes>

<Route path=  '/' element  = {<Main/>} />
<Route path = '/table/login' element =  {<TableLogin setUser={setUser}/>} />
<Route path = '/table' element =  {<Table user={user} />} />
<Route path = '/order/new' element =  {<Order setSentOrder={setSentOrder}/>} />
<Route path = '/waiter' element =  {<Waiter server={server} sentOrder= {sentOrder} />} />
<Route path = '/staff/login' element =  {<WaiterLogin setServer={setServer}/>} />


</Routes>


    </div>
  );
}

export default App;
