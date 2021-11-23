import React from 'react';
import {useContext}  from "react";
import DotRing from './DotRing'; 
import { MouseContext } from "./Context/mouse-context"; 

const Curser = () => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    return (
        
             <DotRing></DotRing>
        
    );
};

export default Curser;