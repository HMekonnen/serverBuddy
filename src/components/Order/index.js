import React, {useState} from 'react';
import axios from 'axios';
import './style.css'

function Order() {

    const [newOrder, setNewOrder] = useState({
        customerName: "",
        pizza: {
            size: "",
            toppings: "",
            quantity: 0,
            specialRequirements: ""
        },
        beverages: {
            drinkSize: "", 
            drinkType: "", 
            drinkQuantity: 0, 
            comments: ""
    
        }, 
        miscellaneous: {
            noteType: "",
            NoteComments: ""
    
        },
        completed: false  
    })
  
    const submiNewOrder=(event) =>{
        setNewOrder({
            ...newOrder, 
            [event.target.name]: event.target.value,
        });
    };

    const handleOrderSubmit = async (event)=>{
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/order/new", {
                customerName: newOrder.customerName,
                pizza: {
                    size: newOrder.size,
                    toppings: newOrder.toppings,
                    quantity: newOrder.quantity,
                    specialRequirements: newOrder.specialRequirements
                },
                beverages: [{
                    drinkSize: newOrder.size, 
                    drinkType: newOrder.type, 
                    drinkQuantity: newOrder.quantity, 
                    comments: newOrder.specialRequirements
            
                }], 
                miscellaneous: {
                    noteType: newOrder.type,
                    noteComments: newOrder.comments
            
                },
                completed: false 
            });
            console.log(response);
            localStorage.setItem("tablesOrder", response.data);
            
      

    
} catch (e) {
    console.log(e);
  }
};
  
  
  return (
<div className='Order'> START ORDER 
<ul>
<form onSubmit={handleOrderSubmit}>
        <label htmlFor="customerName">Hi, what's your name?</label>
        <input 
        name="customerName" 
        id="customerName" 
        onChange={submiNewOrder} /> <br/>
 <h3>Pizza, Pizza! </h3> 
         <strong><label htmlFor="size">Select Pizza Size:</label></strong> <br/>
         Large 
         <input
          type= "checkbox"
          name="size"
          id="size"
          value= "Large"
          onChange={submiNewOrder}
        /> <br/>
        Medium
        <input
          type= "checkbox"
          name="size"
          id="size"
          value= "Medium"
          onChange={submiNewOrder}
        />  <br/>
        Small
        <input
          type= "checkbox"
          name="size"
          id="size"
          value= "Small"
          onChange={submiNewOrder}
        />  <br/>
<br/>
<label htmlFor="toppings"><strong> Select Toppings: </strong></label><br/>
<br/>
        <input
          type= "checkbox"
          name="toppings"
          id="toppings"
          value= "Olives" 
          onChange={submiNewOrder} /> Olives <br/>
    <input
          type= "checkbox"
          name="toppings"
          id="toppings"
          value= "Pepperoni"
          onChange={submiNewOrder}/> Pepperoni <br/>

<input
          type= "checkbox"
          name="toppings"
          id="toppings"
          value= "Extra Cheese"
          onChange={submiNewOrder}
        /> Extra Cheese <br/>
        <br/>
<label htmlFor="quantity"> Quantity: </label>
        <input
          name="quantity"
          id="quantity"
          onChange={submiNewOrder}
        />

<label htmlFor="specialRequirements"> <br/>Comments: </label> 
        <input
          name="specialRequirements"
          id="specialRequirements"
          onChange={submiNewOrder}
        /> <br/>

<h4><strong>Drinks</strong></h4>
<label htmlFor="size"><strong>Select Beverage Size:</strong></label> <br/>
Large
<input
          type= "checkbox"
          name="drinkSize"
          id="drinkSize"
          value= "Large" 
          onChange={submiNewOrder} />  <br/>
Medium
<input
          type= "checkbox"
          name="drinkSize"
          id="drinkSize"
          value= "Medium"
          onChange={submiNewOrder}/>  <br/>
Small
<input
          type= "checkbox"
          name="drinkSize"
          id="drinkSize"
          value= "Small"
          onChange={submiNewOrder}
        /> <br/>
 

 <h4> Select Beverage Type: </h4> 
 Sparkling Water
<input
          type= "checkbox"
          name="drinkSize"
          id="drinkSize"
          value= "Sparkling Water" 
          onChange={submiNewOrder} />  <br/>
Sprite
<input
          type= "checkbox"
          name="drinkSize"
          id="drinkSize"
          value= "Sprite"
          onChange={submiNewOrder}/>  <br/>
Iced Tea
<input
          type= "checkbox"
          name="drinkSize"
          id="drinkSize"
          value= "Iced Tea"
          onChange={submiNewOrder}
        /> <br/>


<label htmlFor="miscellaneous"> Miscellaneous Request (i.e. Napkins): </label>
        <input
          name="noteComments"
          id="noteComments"
          onChange={submiNewOrder}
        />
<br/><br/>
        <input type="submit" />
        
      </form>

      </ul>

  
     
       
       
         











</div>



      );
}

export default Order;