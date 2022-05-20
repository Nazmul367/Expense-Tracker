import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"

const initalstate = {
  transactions: []
}

export const GlobalContext = createContext(initalstate)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalstate)

  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
      // payload: +e?.target?.dataset?.id
    })
  }

  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}
