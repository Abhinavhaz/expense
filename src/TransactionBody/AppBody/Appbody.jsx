import React from 'react';
//styles
import "./Appbody.css";
import Transactions from '../../Transaction/Transaction';
import TopExpenses from '../../TopExpenses/TopExpenses';
//components

const TwoBanner = () => {
    return (
        <div className='AppBody'>
            <Transactions />
            <TopExpenses />
        </div>
    );
};

export default TwoBanner;