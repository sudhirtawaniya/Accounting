import React from 'react'

import '../componets/style/options.css';
import { NavLink,BrowserRouter } from 'react-router-dom';
export default function Options(){
    return(
        <>
      
        <div className='containers'>
        <div className='content'>
        <NavLink exact to='/Dashboard'  className='opt'>
            <div className='iteam text'>
              
            <p>
                Dashboard</p>
           
            </div>
            </NavLink>
            <NavLink exact to='/party'  className='opt'>
            <div className='iteam text'>
              
            <p>
               Party</p>
           
            </div>
            </NavLink>
            <NavLink exact to='/ADD'  className='opt' >
            <div className='iteam text'>
              
            <p>
                ADD Party</p>
           
            </div>
            </NavLink>
            <NavLink exact to='/Entry' className='opt' >
            <div className='iteam text'>
              
            <p>
                ADD Entry</p>
           
            </div>
            </NavLink>
        </div>
        </div>
       
        </>
    );
}