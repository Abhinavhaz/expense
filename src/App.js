// import logo from './logo.svg';
// import { useEffect, useRef, useState } from 'react'
// import './App.css';
// // import First from './firstbanner/firstbanner';
// import AppHead from './firstbanner/firstbanner';
// // import Transaction from './Transaction/Transaction';
// import AppBody from './TransactionBody/AppBody/Appbody';
// import TopExpenses from './TopExpenses/TopExpenses';
// import { TransactionsContext, MoneyContext } from './Money&Transaction/Contexts';

// function App() {
//   const [transactionData, setTransactionData] = useState([])

//   const [money, setMoney] = useState({
//     balance: 5000,
//     expenses: 0
//   })
//   const initialRender = useRef(true);

//   useEffect(()=>{
//     if(initialRender.current)  onLoad();

//     return(() => {
//       initialRender.current = false;
//     })
//   }, [])

  
//   useEffect(()=> {
   
//     // if initial render skip saving and save to local
//     if(!initialRender.current) localStorage.setItem("allData", JSON.stringify({money, transactionData}));
//   }, [money, transactionData])

  
//   const onLoad = () => {
//     //if present load local storage
//     const localData = localStorage.getItem("allData");
//     if(localData){
//       const {money, transactionData} = JSON.parse(localData);
//       setMoney(money);
//       setTransactionData(transactionData);
//     }
//   }
//   return (
//     <div className="App">

//       <MoneyContext.Provider value={[money, setMoney]}>
//       <TransactionsContext.Provider value={[transactionData, setTransactionData]}>
      
//      <AppHead balance={money.balance} expenses={money.expenses}    />
//      <AppBody transactionData={transactionData} /> 
     

//      </TransactionsContext.Provider> 
//       </MoneyContext.Provider>
     
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import { useEffect, useRef, useState } from 'react'
import './App.css';
// import AppHead from './firstbanner/firstbanner';
import FirstBanner from './firstbanner/firstbanner';
// import AppBody from './TransactionBody/AppBody/Appbody';
import TwoBanner from './TransactionBody/AppBody/Appbody';
import { TransactionsContext,MoneyContext } from './Money&Transaction/Contexts';

function App() {
  const [transactionData, setTransactionData] = useState([])

  const [money, setMoney] = useState({
    balance: 5000,
    expenses: 0
  })
  const initialRender = useRef(true);

  useEffect(()=>{
    if(initialRender.current)  loadFromLocalStorage();

    return(() => {
      initialRender.current = false;
    })
  }, [])

  
  useEffect(()=> {
    if(!initialRender.current) saveToLocalStorage();
  }, [money, transactionData])

  
  const loadFromLocalStorage = () => {
    const localData = localStorage.getItem("appData");
    if(localData){
      const {money, transactionData} = JSON.parse(localData);
      setMoney(money);
      setTransactionData(transactionData);
    }
  }

  const saveToLocalStorage = () => {
    localStorage.setItem("appData", JSON.stringify({money, transactionData}));
  }

  return (
    <div className="App">
      <MoneyContext.Provider value={[money, setMoney]}>
        <TransactionsContext.Provider value={[transactionData, setTransactionData]}>
          <FirstBanner balance={money.balance} expenses={money.expenses} />
          <TwoBanner transactionData={transactionData} /> 
        </TransactionsContext.Provider> 
      </MoneyContext.Provider>
    </div>
  );
}

export default App;
