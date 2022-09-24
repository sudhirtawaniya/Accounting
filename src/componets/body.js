import React from 'react'
import '../componets/style/body.css';
import {BrowserRouter} from 'react-router-dom'
import Main from '../componets/Main.js';
import Options from './Options';
export default function Body(){
    return(
        <>
        <div className='container'>
        <div className="op">
        
        <Options />
        
        </div>
        <div className='main'>
       
         <Main/>
        
         </div>
         </div>
        </>
       
    );
}