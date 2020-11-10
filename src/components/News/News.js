import React from 'react';
import {Card,Button} from 'react-bootstrap';

const News = (props) => {
  const {title,description,urlToImage}=props.article
    return (
       <div>
         <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <img style={{height:'300px',width:'100%'}} src={urlToImage} alt=""/>
          <Card.Title> {title} </Card.Title>
          <Card.Text>{description} </Card.Text>
          <Button variant="primary" >Go somewhere</Button>
    
        </Card.Body>
      </Card>
       </div>
    );
};

export default News;