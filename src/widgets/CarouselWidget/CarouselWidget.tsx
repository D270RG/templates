import {useState,useEffect,MouseEventHandler} from 'react';
import { Col,Row,Ratio,Container} from 'react-bootstrap';
import './CarouselWidget.css';
function Carousel(){
  var [transition,move] = useState(0);
  var style={
    transform: 'translate('+transition+'px,0px)',
    transitionDuration: '1s'
  }
  return(
    <Row className='debug' style={{height:'400px',width:'100%'}}>
      <Container className='h-100 debug d-flex flex-direction-row align-items-center justify-content-center p-0' >
        <Container style={style} className='h-100 w-20 debug d-flex mx-1 inactive-element-hidden'></Container>
        <Container style={style} className='h-100 w-20 debug d-flex mx-1 inactive-element-2'></Container>
        <Container style={style} className='h-100 w-20 debug d-flex mx-1 inactive-element-1'></Container>
        <Container style={style} className='h-100 w-20 debug d-flex mx-1 element'></Container>
        <Container style={style} className='h-100 w-20 debug d-flex mx-1 inactive-element-1'></Container>
        <Container style={style} className='h-100 w-20 debug d-flex mx-1 inactive-element-2'></Container>
        <Container style={style} className='h-100 w-20 debug d-flex mx-1 inactive-element-hidden'></Container>
      </Container>
      <button className='btn h-15 w-15' onClick={()=>move(transition+400)}>Right</button>
      <button className='btn h-15 w-15' onClick={()=>move(transition-400)}>Left</button>
    </Row>
  );
}

export default Carousel;