import Container from 'react-bootstrap/Container';
import { Col,Row} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './bootstrapTweaks.css';

import ButtonsWidget from '../widgets/ButtonsWidget/ButtonsWidget'
import ColumnsWidget from '../widgets/ColumnsWidget/ColumnsWidget'
import SocialWidget from '../widgets/SocialWidget/SocialWidget';


import {ThreeDots} from 'react-bootstrap-icons';
import Texts from './texts';

import bg3 from './pictures/bg3.jpg'

function Label(){
    return(
        <Row className='d-xs p-0 m-0 bg-transparent justify-content-center text-center align-items-center' style={{height:'calc(100vh*0.4)',overflow:'hidden'}}>
            <Col className='justify-content-center text-center align-items-center text-white h-100 d-flex' style={{fontSize:'100px'}} xs='12'>
                LABEL
            </Col>
        </Row>
    );
}


function Grid(){
    return(
        <Container className='parallax-container' fluid style={{backgroundImage: 'url(' + require('./pictures/bg4.jpg') + ')'}}>
                <Label/>
                <Row className='bg-light shadow'>
                    <Col lg='1' className='d-lg' /*style={{border:'2px solid'}}*/>{/*space*/}</Col>
                    <Col lg='10' md='12' className='text-center bg-light' /*style={{border:'2px solid'}}*/>      
                        <div className='pt-3'>
                            {Texts.headerText}
                        </div>
                        <ThreeDots className='responsive-icon-md pb-2' style={{color:'red'}}/>
                    </Col>
                    <Col lg='1' className='d-lg'/*style={{border:'2px solid'}}*/>{/*space*/}</Col>
                </Row>

                <Row className='d-lg' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
                <ButtonsWidget texts={Texts.buttonsDescriptions}/>
                <Row className='d-lg' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>

                <Row className='bg-red shadow'>
                    <Col md='1' /*style={{border:'2px solid'}}*/>{/*space*/}</Col>
                    <Col md='10' /*style={{border:'2px solid'}}*/>
                        <div className='py-3 text-light'>
                            {Texts.footerText}
                        </div>
                    </Col>
                    <Col md='1' /*style={{border:'2px solid'}}*/>{/*space*/}</Col> 
                </Row>
                <Container fluid className='bg-white'>
                    <Row className='d-lg' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>

                    <Row className='d-lg'>
                        <ColumnsWidget/>
                    </Row>

                    <Row className='d-lg' style={{height:'calc(100vh*0.02)'}}></Row>
                    <Row className='d-lg'> <hr></hr></Row>
                    <Row className='d-lg' style={{height:'calc(100vh*0.01)'}}>{/*space*/}</Row>

                    <Row className='d-lg'>
                        <SocialWidget/>
                    </Row>

                    <Row className='d-lg' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
                </Container>
            </Container>
    );
}
export default Grid;