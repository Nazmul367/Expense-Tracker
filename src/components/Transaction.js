import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {
  
  const { deleteTransaction } = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? '-' : '+'

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}$ {Math.abs(transaction.amount)}</span><button type="button" onClick={deleteTransaction} className="delete-btn" data-id={transaction?.id}>x</button>
    </li>
  )
}

export default Transaction

