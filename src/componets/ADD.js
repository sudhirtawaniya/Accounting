import React from 'react'
import '../componets/style/add.css'
export default function ADD(){
    return(
        <>
        <h1>Add</h1>
        <form>
            <div className='form'>
           
            <input type="text" required></input>
            <span className='label' > Company Name   </span>
        
            </div>
            <div className='form'>
           
           
            <input type="text" required></input>
            <span className='label' > GST NO.  </span>
            </div>
           <div className='btndiv'><button type="button" className='button' >ADD</button></div> 
        </form>
       
        </>
    );
}