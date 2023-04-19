import React, { useContext} from 'react'
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

export const Boardlist = () => {
  //const [dataList, setDataList] = useState(data);

  const value = useContext(DataContext);
  

  return (
    <div>
      <h3>boardlist</h3>
      {value.state.boardlist.map((data)=>(
        <li key={data.id}>{data.id}<Link to={`/boardlist/${data.id}`}>{data.title}</Link> </li>
      ))}
    </div>
  )
}


