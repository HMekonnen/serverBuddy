import React from 'react';
import TableLogin from '../TableLogin'; 
import Order from '../Order';
import './style.css'

function Table({user}) {
console.log(user)
    return (
          <div className='Table'><h4>Welcome, Table {`${user.name}!`}</h4>
          <div> 
         
         <Order/>
        
        </div>
        
        </div>
          );
}

export default Table;