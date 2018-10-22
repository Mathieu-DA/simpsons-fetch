import  React  from  'react';

const  GetNewQuote = ({ selectQuote }) => {
    return (
        <div  className="GenerateQuote">
        <button  onClick={selectQuote}>Get new quote</button>
        </div>
    );
};

export  default  GetNewQuote;