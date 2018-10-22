import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div  className="DisplayQuote">
            <h1>{quote.character}</h1> 
            <img  src={quote.image}  alt="author of the quote"  />
            <div>{quote.quote}</div>
        </div>
    );
};

export  default  DisplayQuote;