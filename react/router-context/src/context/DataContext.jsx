import React from 'react'
import { useState } from 'react';
import dummy from '../data/dummy.json'

const DataContext = React.createContext(``);

const DataProvider = ({children}) =>{
  const[boardlist, setBoardlist] = useState(dummy);


  const value ={
    state : {boardlist},
    action : {setBoardlist}
  }

  return(
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export {DataProvider}

export default DataContext