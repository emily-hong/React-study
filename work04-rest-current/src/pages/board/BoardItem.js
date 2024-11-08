import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BoardItem = (props) => { //{id, title: author: ~}
  const {id, title, author} = props.board; //구조분할할당

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Link to={`board/${id}`} className='btn btn-primary'>상세보기</Link>
      </Card.Body>
    </Card>
  );
};

export default BoardItem;