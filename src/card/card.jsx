// import React, { useState } from 'react';
// //styles
// import "./card.css"
// //components
// import Button from '../Button/button';
// import Modal from '../Modal/Modal';

// const Card = props => {
    
//     const { text, value} = props;
    
//     const [modalOn, setModalOn] = useState(false);
    
//     const toggleModal = () => setModalOn(!modalOn);

//     return (
//         <div className='card'>
//             <span className='cardText'>
//                 <span>{text}: </span> 
//                 <span className={text === "Expenses" ? "cardTextRed" : "cardTextGreen"}>
//                     ₹{value}
//                 </span>
//             </span>
//             <Button 
//                 text={text === "Expenses" ? "+ Add Expense" : "+ Add Income"}
//                 background={text === "Expenses" ? "gradientRed" : "gradientGreen"}
//                 buttonSize = "largeButton"
//                 clickFunction={toggleModal}
//             />
//             {modalOn ? 
//                 <Modal 
//                 toggleModal={toggleModal} 
//                 text={text === "Expenses" ? "Add Expense" : "Add Balance"}/> 
//             :null
//             }
//         </div>
//     );
// };

// export default Card;
import React, { useState } from 'react';
import "./card.css"
import Button from '../Button/button';
import Modal from '../Modal/Modal';

const Card = ({ text, value }) => {
    
    // const  = props;
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <div className='card'>
            <span className='cardText'>
                <span>{text}: </span> 
                <span className={text === "Expenses" ? "cardTextRed" : "cardTextGreen"}>
                    ₹{value}
                </span>
            </span>
            <Button 
                text={text === "Expenses" ? "+ Add Expense" : "+ Add Income"}
                background={text === "Expenses" ? "gradientRed" : "gradientGreen"}
                buttonSize = "largeButton"
                clickFunction={toggleModal}
            />
            {isModalOpen && 
                <Modal 
                    toggleModal={toggleModal} 
                    text={text === "Expenses" ? "Add Expense" : "Add Balance"}
                /> 
            }
        </div>
    );
};

export default Card;
