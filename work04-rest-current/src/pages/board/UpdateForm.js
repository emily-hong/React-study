import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateForm = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {board, setBoard} = useState({
    id: 0,
    title: '',
    author: '',
  })

  useEffect(() => {
    axios({
      url: 'http://localhost:9000/boards/' + id,
      method: 'get'
    })
    .then((res) => {
      setBoard(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

  const changeForm = (e) => {
    setBoard({
      ...board,
      [e.target.name] : e.target.value
    })
  }

  const submitBoard = (e) => {
    e.preventDefault();

    axios({
      url: 'http://localhost:9000/boards/' + id,
      method: 'put',
      data: board,    
    })
    .then((res) => {
      if(res.status === 200){
        navigate("/board/"+id)
      }else{
        alert("수정 실패")
      }
    })
    .catch((err) => {})
  }

  return (
    <div>
      <h1>글 수정하기</h1>
      <Container style={{marginTop:'100px'}}>
        <Form 
          onSubmit={submitBoard}
          >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              name='title' 
              style={{  border: '3px solid black'}}
              onChange={changeForm}
              value={board.title}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Author</Form.Label>
            <Form.Control 
              type="text" 
              name='author'
              style={{  border: '3px solid black'}}
              onChange={changeForm}
              value={board.author}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
      </Container>
    </div>
  );
};

export default UpdateForm;