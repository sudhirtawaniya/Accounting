import React from 'react'
import '../componets/style/add.css'

export default function Entry(){
    return(
        <>
        <h1>Entry</h1>
        <form>
            <div className='form'>
           
            <input type="text" required></input>
            <span className='label' > Company Name   </span>
        
            </div>
            <div className='form'>
           
           
            <input type="text" required></input>
            <span className='label' > GST NO.  </span>
            </div>
            <div className='radio '>
            <div className='radiobtn'>
          <label for="rec" >Recived </label><input type="radio"id="rec" name="pay"></input>
          </div>
          <div className='radiobtn'>
          <label for="pay">Stock Send<input type="radio" id="pay"name="pay"></input></label> 
          </div>
          </div>
            <div className='form'>
           
           
           <input type="text" required></input>
           <span className='label' >Price </span>
         
           </div>
           
            <div className='form'>
           
           
           <input type="date" placeholder="" required></input>
           <span className='label' > Date  </span>
           </div>
           <div className='form'>
           
           
           <input type="text" placeholder="" required></input>
           <span className='label' > Description </span>
           </div>
           <div className='btndiv'><button type="button" className='button' >ADD</button></div> 
        </form>
       
        </>
    );
}