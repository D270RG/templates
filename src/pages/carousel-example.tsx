import {Col,Row,Container,ListGroup} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './bootstrapTweaks.css';
import './texts'
import CarouselWidget from '../widgets/CarouselWidget/CarouselWidget'
import ColumnsWidget from '../widgets/ColumnsWidget/ColumnsWidget';
import SocialWidget from '../widgets/SocialWidget/SocialWidget';


import {ThreeDots} from 'react-bootstrap-icons';
import Texts from './texts';
var contentArr = [
    'url(' + require('./pictures/city1.jpg') + ')',
    'url(' + require('./pictures/city2.jpg') + ')',
    'url(' + require('./pictures/city3.jpg') + ')',
    'url(' + require('./pictures/city4.jpg') + ')',
    'url(' + require('./pictures/city5.jpg') + ')',
    'url(' + require('./pictures/city6.jpg') + ')',
    'url(' + require('./pictures/city7.jpg') + ')',
    'url(' + require('./pictures/city8.jpg') + ')',
    'url(' + require('./pictures/city9.jpg') + ')',
    'url(' + require('./pictures/city10.jpg') + ')',
]
var showcases = [
    'url(' + require('./pictures/showcase1.jpg') + ')',
    'url(' + require('./pictures/showcase1.jpg') + ')',
    'url(' + require('./pictures/showcase1.jpg') + ')',
];
function Tiles(props:{textMap:Map<string,string>,showcases:string[],defaultPictureUrl:string}){
    var el:JSX.Element[] = [];
    var titleArr = Array.from(props.textMap.keys());
    titleArr.forEach((title,index)=>{
        var image=props.showcases.at(index);
        if(typeof(image)==undefined){
            image = 'url(' + require(props.defaultPictureUrl) + ')';
        }
        if((index%2)==0){
            el.push(<Row className='d-lg-none bg-light text-center justify-content-center p-3' style={{fontSize:'120%'}}>{title}</Row>);
            el.push(
                    <Row className='bg-light' style={{height:'400px'}}>

                        <Col xl='8' lg='8' md='12' sm='12' xs='12' className='h-100 '>
                            <div className='h-100 w-100 p-0 m-0 parallax-container' style={{backgroundImage: image,overflow:'hidden'}}></div>
                        </Col>
                        <Col xl='4' lg='4' className='text-center justify-content-center p-3 d-lg bg-red text-white'>
                            <div style={{fontSize:'150%'}}>{title}</div>
                            <div>{props.textMap.get(title)}</div>
                        </Col>
                        
                    </Row>   
            );
            el.push(<Row className='d-lg-none bg-light text-center p-3'>{props.textMap.get(title)}</Row>);
        } else {
            el.push(<Row className='d-lg-none bg-light text-center justify-content-center p-3' style={{fontSize:'120%'}}>{title}</Row>);
            el.push(
                    <Row className='bg-light' style={{height:'400px'}}>
                        
                        <Col xl='4' lg='4' className='text-center justify-content-center p-3 d-lg'>
                            <div style={{fontSize:'150%'}}>{title}</div>
                            <div>{props.textMap.get(title)}</div>
                        </Col>
                        <Col xl='8' lg='8' md='12' sm='12' xs='12' className='h-100'>
                            <div className='h-100 w-100 p-0 m-0 parallax-container' style={{backgroundImage: image,overflow:'hidden'}}></div>
                        </Col>
                        
                    </Row>   
            );
            el.push(<Row className='d-lg-none bg-light text-center p-3'>{props.textMap.get(title)}</Row>);
        }
        if(index!=titleArr.length){
            el.push(<Row className='d-xs' style={{height:'calc(100vh*0.06)'}}>{/*space*/}</Row>);
        };
    });
    return(<div>{el}</div>);
}
function Page(){
    return(
        <Container fluid className='m-0 p-0 bg-gradient-blue' style={{overflowX:'hidden'}}>
            <Container fluid className='m-0 p-0'>
                <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
                <CarouselWidget scale={true} shrink={false} width={200} contentArr={contentArr}/>
                <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
            </Container>
            <Container fluid className='m-0 p-0'>
                <Tiles textMap={Texts.smallTextsWithTitles} showcases={showcases} defaultPictureUrl={'url(' + require('./pictures/bg.jpg') + ')'}/>
            </Container>
            <Container fluid className='m-0 p-0 bg-white'>
                <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
                <ColumnsWidget/>
                <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
                <SocialWidget/>
            </Container>
        </Container>
    );  
}
export default Page;