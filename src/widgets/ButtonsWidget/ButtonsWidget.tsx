import {useState,useEffect,MouseEventHandler} from 'react';
import { Col,Row,Ratio,Container} from 'react-bootstrap';
import {FileEarmarkPdf,Pencil,CreditCard,BagCheck,Calculator,CalendarDate,ChatRightText,CloudArrowDown,Key} from 'react-bootstrap-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './ButtonsWidget.css';
interface buttonProps{
    id:number;
    children:JSX.Element;
    link:string;
    onMouseEnter: MouseEventHandler<HTMLButtonElement> | undefined;
    onMouseLeave: MouseEventHandler<HTMLButtonElement> | undefined;
}
interface widgetProps{
    texts:string[];
}
function ButtonElement(props:buttonProps){
    return(
        <a href={props.link} target="_blank">
            <button onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave} className='w-100 h-100 d-flex rounded-str widget-button'>
                {props.children}
            </button>
        </a>
    );
}
function ButtonsWidget(props:widgetProps){
    const [currentDescId, setDescId] = useState(0);
    return(
        <Row className='bg-transparent align-items-top'>
            <Col lg='2' /*style={{border:'2px solid'}}*/>{/*space*/}</Col>
            <Col lg='4' md='6' sm='8' className='text-center' /*style={{border:'2px solid',color:'red',justifyContent:'center'}}*/>
                <Ratio aspectRatio='1x1' className='d-flex justify-content-center text-center align-items-center' style={{borderRadius:'15px'}}>{
                    <Container className='w-100 p-0 '>
                        <Row className='h-33 w-100' style={{borderRadius:'15px', margin:'auto'}}>
                            <Col xs='4' className='text-center p-2'>
                                <div className='w-100 h-100'>
                                    <ButtonElement 
                                        id={1}
                                        children={<FileEarmarkPdf className='my-auto mx-auto responsive-icon-lg'/>}
                                        link={'https://google.com'}
                                        onMouseEnter={()=>{setDescId(1)}} onMouseLeave={()=>{setDescId(0)}}
                                    />
                                </div>
                            </Col>
                            <Col xs='4' className='text-center p-2'>
                                <ButtonElement 
                                    id={2}
                                    children={<Pencil className='my-auto mx-auto responsive-icon-lg'/>}
                                    link={'https://google.com'}
                                    onMouseEnter={()=>{setDescId(2)}} onMouseLeave={()=>{setDescId(0)}}
                                />
                            </Col>
                            <Col xs='4' className='text-center p-2' >
                                <ButtonElement 
                                    id={3}
                                    children={<Calculator className='my-auto mx-auto responsive-icon-lg'/>}
                                    link={'https://google.com'}
                                    onMouseEnter={()=>{setDescId(3)}} onMouseLeave={()=>{setDescId(0)}}
                                />
                            </Col>
                        </Row>
                        <Row className='h-33 w-100' style={{borderRadius:'15px', margin:'auto'}}> 
                            <Col xs='4' className='text-center p-2'>
                                <ButtonElement 
                                    id={4}
                                    children={<CalendarDate className='my-auto mx-auto responsive-icon-lg'/>}
                                    link={'https://google.com'}
                                    onMouseEnter={()=>{setDescId(4)}} onMouseLeave={()=>{setDescId(0)}}
                                />
                            </Col>
                            <Col xs='4' className='text-center p-2'>
                                <ButtonElement 
                                    id={5}
                                    children={<ChatRightText className='my-auto mx-auto responsive-icon-lg'/>}
                                    link={'https://google.com'}
                                    onMouseEnter={()=>{setDescId(5)}} onMouseLeave={()=>{setDescId(0)}}
                                />
                            </Col>
                            <Col xs='4' className='text-center p-2'>
                                <ButtonElement 
                                    id={6}
                                    children={<Key className='my-auto mx-auto responsive-icon-lg'/>}
                                    link={'https://google.com'}
                                    onMouseEnter={()=>{setDescId(6)}} onMouseLeave={()=>{setDescId(0)}}
                                />
                            </Col>
                        </Row>
                        <Row className='h-33 w-100' style={{borderRadius:'15px', margin:'auto'}}>
                            <Col xs='4' className='text-center p-2'>
                                <ButtonElement 
                                    id={7}
                                    children={<CloudArrowDown className='my-auto mx-auto responsive-icon-lg'/>}
                                    link={'https://google.com'}
                                    onMouseEnter={()=>{setDescId(7)}} onMouseLeave={()=>{setDescId(0)}}
                                />
                            </Col>
                            <Col xs='4' className='text-center p-2'>
                                <ButtonElement 
                                    id={8}
                                    children={<BagCheck className='my-auto mx-auto responsive-icon-lg'/>}
                                    link={'https://google.com'}
                                    onMouseEnter={()=>{setDescId(8)}} onMouseLeave={()=>{setDescId(0)}}
                                />
                            </Col>
                            <Col xs='4' className='text-center p-2'>
                                <ButtonElement 
                                    id={9}
                                    children={<CreditCard className='my-auto mx-auto responsive-icon-lg'/>}
                                    link={'https://google.com'}
                                    onMouseEnter={()=>{setDescId(9)}} onMouseLeave={()=>{setDescId(0)}}
                                />
                            </Col>
                        </Row>
                    </Container>
                }</Ratio>
            </Col>
            <Col lg='1' /*style={{border:'2px solid'}}*/>{/*space*/}</Col>
            <Col lg='3' md='12' sm='12' className='text-center h-100' /*style={{border:'2px solid'}}*/>
                {(currentDescId==0) && <div className='bg-white p-3 m-4 shadow' style={{borderRadius:'10px'}}>{props.texts.at(0)}</div>}

                {(currentDescId==1) && <div className='bg-white p-3 m-4 shadow' style={{borderRadius:'10px'}}>{props.texts.at(1)}</div>}
                {(currentDescId==2) && <div className='bg-white p-3 m-4 shadow' style={{borderRadius:'10px'}}>{props.texts.at(2)}</div>}
                {(currentDescId==3) && <div className='bg-white p-3 m-4 shadow' style={{borderRadius:'10px'}}>{props.texts.at(3)}</div>}

                {(currentDescId==4) && <div className='bg-white p-3 m-4 shadow' style={{borderRadius:'10px'}}>{props.texts.at(4)}</div>}
                {(currentDescId==5) && <div className='bg-white p-3 m-4 shadow' style={{borderRadius:'10px'}}>{props.texts.at(5)}</div>}
                {(currentDescId==6) && <div className='bg-white p-3 m-4 shadow' style={{borderRadius:'10px'}}>{props.texts.at(6)}</div>}
                
                {(currentDescId==7) && <div className='bg-white p-3 m-4 shadow' style={{borderRadius:'10px'}}>{props.texts.at(7)}</div>}
                {(currentDescId==8) && <div className='bg-white p-3 m-4 shadow' style={{borderRadius:'10px'}}>{props.texts.at(8)}</div>}
                {(currentDescId==9) && <div className='bg-white p-3 m-4 shadow' style={{borderRadius:'10px'}}>{props.texts.at(9)}</div>}
            </Col>
            <Col lg='1' /*style={{border:'2px solid'}}*/>{/*space*/}</Col>
            <Col lg='1' md='1' /*style={{border:'2px solid'}}*/>{/*space*/}</Col>
        </Row>
    );
}
export default ButtonsWidget;