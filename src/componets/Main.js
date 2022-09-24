import React from 'react'

import '../componets/style/main.css'
import ADD from './ADD'
import {Route,Routes} from 'react-router-dom'
import Entry from './Entry';
import Party from './Party';
export default function Main(){
    return(
        <>
    
     <Routes>
     <Route exact path="/" element={ <Entry/>}></Route>
        <Route exact path="/Entry" element={ <Entry/>}></Route>
        <Route exact path="/ADD" element={ <ADD/>}></Route>
        <Route exact path="/Party" element={ <Party/>}></Route>
     </Routes>
     
        </>
    );
}