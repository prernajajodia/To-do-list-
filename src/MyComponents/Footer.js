import React from 'react';
import { ToDos } from './ToDos';

export const Footer = () => {
  let footerStyle = {
        position : "absolute",
        width : "100%",
        top : "100vh",
        backgroundColor : "#ABB8C3"
    }

    return (

        <footer className = "bg-dark text-light py-3" style ={footerStyle}>
            <p className = "text-center">
                Copyright &copy; Prerna Jajodia
            </p>
            <h4>
                 
            </h4>


        </footer>
    )
}