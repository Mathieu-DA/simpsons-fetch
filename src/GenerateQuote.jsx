import  React  from  'react';
import './App.css';

const  GetNewQuote = ({ selectQuote }) => {
    return (
        <div  className="center">
        <button  onClick={selectQuote}>Get new quote</button>
        </div>
    );
};

export  default  GetNewQuote;