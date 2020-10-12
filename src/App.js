import React from 'react';
import './App.css';
import {Header} from './Component/Header';
import {Balance} from './Component/Balance';
import {IncomeExpenses} from './Component/IncomeExpenses';
import {TransactionList} from './Component/TransactionList';
import AddTransaction from './Component/AddTransaction';
 
function App() {
  return (
    <div>
   <Header/>
   <div className="container">
   <Balance/>
   <IncomeExpenses/>
   <TransactionList/>
   <AddTransaction/>
   </div>
   </div>
  );
}

export default App;
