import React, { useState } from 'react'
import DataFruits from '../data/fruits.json'


const DataContext = React.createContext();


const DataProvider = ({children}) => {
  const [fruits, setfruits] = useState(DataFruits);


  const value = {
    state: {fruits},
    action: {setfruits},
  }

  return(
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export {DataProvider}

export default DataContext