// import React from "react";
// import styles from "./Transaction.css"
// import TransactionsBody from "../TransactionBody/TransactionBody";

// function Transaction(){



// return(
//     <div>
//       <h2  className="rh2" style={{transform: 'translateX(-600px)',color:"white",fontFamily:"ubuntu"}}>Recent Transactions</h2>
//     <div className="transactionbanner">



// <TransactionsBody />

//     </div>


//     </div>
// )
// }
// export default Transaction
import React from 'react';
//styles
import "./Transaction.css";
//components
import TransactionsBody from '../TransactionBody/TransactionBody';

const Transactions = () => {
    return (
        <div className='Transactions'>
            <h2>Recent Transactions</h2>
            <TransactionsBody />
        </div>
    );
};

export default Transactions;