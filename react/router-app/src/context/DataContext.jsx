import React from 'react'
import { useState } from 'react';

const DataContext = React.createContext(``);

const DataProvider = ({children}) =>{
  const[boardlist, setBoardlist] = useState();
}