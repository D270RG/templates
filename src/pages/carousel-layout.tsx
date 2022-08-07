import {Col,Row,Container,ListGroup} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './bootstrapTweaks.css';
import './texts'
import CarouselWidget from '../widgets/CarouselWidget/CarouselWidget'
import ColumnsWidget from '../widgets/ColumnsWidget/ColumnsWidget';
import VideoWidget from '../widgets/VideoWidget/VideoWidget'


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
var contentList = new Map<string,string>([
    [`dQw4w9WgXcQ`,'No title'],
    [`vawcdlH1R9k`,'No title'],
    [`Un3uUH1rElo`,'No title'],
    
]);
function TimerComponent(func){
    var timer;
    var indicator = false;
    return function(event){
        if(timer) {
            clearTimeout(timer);
            indicator = true;
        };
        indicator = false;
        timer = setTimeout(func,100,event);
    };
}
function Page(){
    return(
        <Container fluid className='m-0 p-0' style={{backgroundImage: 'url(' + require('./pictures/bg3.jpg') + ')',overflowX:'hidden'}}>
            <Container fluid className='m-0 p-0'>
                <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
                <CarouselWidget scale={true} width={200} contentArr={contentArr}/>
                <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
            </Container>
            <Container fluid className='m-0 p-0'>
                <VideoWidget contentList={contentList} throttle={TimerComponent}/>
            </Container>
        </Container>

    );  
}
export default Page;