import React from 'react'
import {useState} from 'react';

const AddTransaction = () => {
     const [text, setText] = useState('');
     const [Amount, setAmount] = useState(0);
    return (
        <div>
             <h3>Add new transaction</h3>
      <form >
        <div className="form-control">
          <label htmlfor="text">Text</label>
          <input type="text" value={text}  onChange={(e)=> setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlfor="amount">Amount <br />
            (negative - expense, positive - income)</label >
          <input type="number" value={Amount}  onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
    
    )
}

export default AddTransaction
