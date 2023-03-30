import React from 'react'

import Card from 'react-bootstrap/Card';

function ImgOverlay() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="https://www.christenseninstitute.org/wp-content/uploads/2017/10/healthy-meals-800-x-400.png" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>The Green House</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum itaque ducimus ea in quia autem quo accusantium vel? Pariatur, doloribus necessitatibus temporibus doloremque libero nulla reprehenderit sed aut unde vitae.
        </Card.Text>
        
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlay;