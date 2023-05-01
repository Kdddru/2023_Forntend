import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';  
import { useNavigate } from 'react-router-dom';


export const BoardForm = ({setBoardlist, id, boardlist, user}) => {
  
  const navi = useNavigate();

  const [title, setTitle] = useState(``);
  const [contents, setContents] = useState();
  

  const addBoard = (e) =>{
    e.preventDefault();
    

    const newBoard = {
        
        id:id,
        title : title,
        content : contents,
        name : user ? user.name: '익명',
        date : '2023-04-28'
      
    }

    const newBoardlist = boardlist.concat(newBoard);

    setBoardlist(newBoardlist);

    navi(`/boardlist`);
  }


  return (
    <div>
        <Form className='mx-3' onSubmit={addBoard}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" placeholder="name@example.com"
          onChange={(e)=>{setTitle(e.target.value)}}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} 
            onChange={(e)=>{setContents(e.target.value)}}
          />
        </Form.Group>
        <Button variant="primary" type='submit'>작성 완료</Button>
      </Form>
    </div>
  )
}
