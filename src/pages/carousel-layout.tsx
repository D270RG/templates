import Container from 'react-bootstrap/Container';
import {Col,Row} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './bootstrapTweaks.css';

import CarouselWidget from '../widgets/CarouselWidget/CarouselWidget'
import SocialWidget from '../widgets/SocialWidget/SocialWidget';


import {ThreeDots} from 'react-bootstrap-icons';
import Texts from './texts';
const panorama = require('./pictures/panorama.jpg');
var contentArr = [
    <div className='w-100 h-100' style={{backgroundImage: 'url(' + require('./pictures/city1.jpg') + ')',borderRadius:'20px'}}>1</div>,
    <div className='w-100 h-100' style={{backgroundImage: 'url(' + require('./pictures/city2.jpg') + ')',borderRadius:'20px'}}>2</div>,
    <div className='w-100 h-100' style={{backgroundImage: 'url(' + require('./pictures/city3.jpg') + ')',borderRadius:'20px'}}>3</div>,
    <div className='w-100 h-100' style={{backgroundImage: 'url(' + require('./pictures/city4.jpg') + ')',borderRadius:'20px'}}>4</div>,
    <div className='w-100 h-100' style={{backgroundImage: 'url(' + require('./pictures/city5.jpg') + ')',borderRadius:'20px'}}>5</div>,
    <div className='w-100 h-100' style={{backgroundImage: 'url(' + require('./pictures/city6.jpg') + ')',borderRadius:'20px'}}>6</div>,
    <div className='w-100 h-100' style={{backgroundImage: 'url(' + require('./pictures/city7.jpg') + ')',borderRadius:'20px'}}>7</div>,
    <div className='w-100 h-100' style={{backgroundImage: 'url(' + require('./pictures/city8.jpg') + ')',borderRadius:'20px'}}>8</div>,
    <div className='w-100 h-100' style={{backgroundImage: 'url(' + require('./pictures/city9.jpg') + ')',borderRadius:'20px'}}>9</div>,
    <div className='w-100 h-100' style={{backgroundImage: 'url(' + require('./pictures/city10.jpg') + ')',borderRadius:'20px'}}>10</div>,
  ]
function Page(){
    return(
        <Container fluid className='m-0 p-0' style={{backgroundImage: 'url("http://via.placeholder.com/256x256")'}}>
            <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
                <CarouselWidget scale={true} width={200} contentArr={contentArr}/>
            <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
        </Container>
    );
}
export default Page;