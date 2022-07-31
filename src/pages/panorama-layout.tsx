import Container from 'react-bootstrap/Container';
import {Col,Row} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './bootstrapTweaks.css';

import PanoramaWidget from '../widgets/CarouselWidget/CarouselWidget'
import SocialWidget from '../widgets/SocialWidget/SocialWidget';


import {ThreeDots} from 'react-bootstrap-icons';
import Texts from './texts';
const panorama = require('./pictures/panorama.jpg');

function Page(){
    return(
        <Container fluid style={{backgroundImage: 'url("http://via.placeholder.com/256x256")'}}>
            <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
                <PanoramaWidget/>
            <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
        </Container>
    );
}
export default Page;