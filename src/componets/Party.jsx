import React from 'react'
import '../componets/style/add.css'
export default function Party(){
    return(
        <>
        <h1>Party</h1>
        <form>
            <div className='form'>
           
            <input type="search" required></input>
            <span className='label' > Company Name   </span>
        
            </div>
          
           <div className='btndiv'><button type="button" className='button' >Search</button></div> 
        </form>
       
        </>
    );
}