// import React from "react";
// import style from "./firstbanner.css"
// import Modal from "../Modal/Modal";

// import { useEffect, useRef, useState } from 'react'

// const First=({balance, expenses})=>{
//     const [modalOn, setModalOn] = useState(false);
//     const toggleModal = () => setModalOn(!modalOn);
//     // const { balance, expenses } = props


//     return(
//         <>
//         <h2 style={{transform: 'translateX(-600px)',color:"white"}}>Expense Tracker</h2>

//         <div className="banner1" >


// <div className="banner2">
// <h2  text="Wallet" > Wallet Balance:{balance}</h2>

// <button className="btn1" clickFunction={toggleModal}> +Add Income </button>
// </div>



// <div className="banner3">

// <h2  text="Expenses"> Expenses:{expenses}</h2>

// <button className="btn2" clickFunction={toggleModal}>+Add Expenses</button>
// </div>

// {modalOn ? (
//           <Modal
//             toggleModal={toggleModal}
//             text={modalOn ? "Add Expense" : "Add Balance"}
//           />
//         ) : null}

//         </div>
//         </>
//     )

// }
// export default First
import React from 'react';
//styles
// import "./AppHead.css"
import style from "./firstbanner.css"

//components
import Card from '../card/card';
import PieChartComp from '../PieChart/PieChart';

const FirstBanner = props => {
    //props
    const { balance, expenses } = props;
    return (
      <div>
      <h1 >Expense Tracker</h1>
        <header className='AppHead'>
          
            <Card text="Wallet balance" value={balance}/>
            <Card text="Expenses" value={expenses}/>
            <PieChartComp />
        </header>
        </div>
    );
};

export default FirstBanner;