import React, { useContext, useState } from 'react'

const DataContext = React.createContext(null);


const DataProvider = ({children}) =>{

  const [login, setLogin] = useState(true);
  const [name , setName] = useState(`홍길동`);

  const value = {
    state : {login,name},
    action : {setLogin, setName}
  }

  return(
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )

}

export {DataProvider}

export default DataContext