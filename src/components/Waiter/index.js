import React from 'react';
import './style.css'

function Waiter({server},{sentOrder}) {
    return (  
        <div className='Waiter'>
             <h4>  Waiter </h4>
            
        <div className='Waiter-Table1'> TABLE 1 {console.log(sentOrder)}
        
        
         </div>
        <div className='Waiter-Table2'> TABLE 2 </div>
        <div className='Waiter-Table3'> TABLE 3 </div>
        <div className='Waiter-Table4'> TABLE 4 </div>
        </div>
    );
}

export default Waiter;