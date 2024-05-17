import React from 'react';
//styles
//styles
import "../Transaction/Transaction.css";
import TopExpenseBody from '../Topexpensebody/Topexpensebody';

const TopExpenses = () => {
    return (
        <div className='Transactions'>
            <h2>Top Expenses</h2>
            <TopExpenseBody />
        </div>
    );
};

export default TopExpenses;