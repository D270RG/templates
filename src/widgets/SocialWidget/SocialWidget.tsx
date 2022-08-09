import { Col,Row,ListGroup} from 'react-bootstrap';
import Widget from './react-store-badge/index';
import {Github,Facebook,Instagram,Youtube,Twitter} from 'react-bootstrap-icons'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function SocialWidget(){
    function dropFocus(event){
        //<removeclass after blur, order important>
        event.target.blur();
        event.target.parentElement.blur();
        try{
            event.target.removeClass('active');
        } catch(e){
            event.target.removeClass('active'); 
        } //lmao
    }
    return(
        <Row>
            <Col lg='1'>{/*space*/}</Col>
            <Col lg='3'>
                <ListGroup horizontal variant='flush' className='border-0'>
                    <ListGroup.Item as='a' className='border-0' href='https://github.com' target='_blank' action onClick={event=>dropFocus(event)}><Github className='disabled' size={30}/></ListGroup.Item>
                    <ListGroup.Item as='a' className='border-0' href='https://facebook.com' target='_blank' action onClick={event=>dropFocus(event)}><Facebook size={30}/></ListGroup.Item>
                    <ListGroup.Item as='a' className='border-0' href='https://instagram.com' target='_blank' action onClick={event=>dropFocus(event)}><Instagram size={30}/></ListGroup.Item>
                    <ListGroup.Item as='a' className='border-0' href='https://youtube.com' target='_blank' action onClick={event=>dropFocus(event)}><Youtube size={30}/></ListGroup.Item>
                    <ListGroup.Item as='a' className='border-0' href='https://twitter.com' target='_blank' action onClick={event=>dropFocus(event)}><Twitter size={30}/></ListGroup.Item>
                </ListGroup>
            </Col>
            <Col lg='4'>{/*space*/}</Col>
            <Col lg='4' className='justify-content-end text-end align-items-end px-4'>
                <div>
                    <Widget
                        name="Cheerswipe"
                        googlePlayUrl="https://play.google.com/store/apps/details?id=fr.puyou.cheerswipe"
                        appStoreUrl="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1"
                        styles={{height:'40px'}}
                    />
                </div>
            </Col>
        </Row>
    );
}
export default SocialWidget;