import {Col,Row,Container} from 'react-bootstrap';
import React,{useState,useEffect} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './bootstrapTweaks.css';
import './texts'
import PlayerRender from '../widgets/VideoWidget/VideoWidget'
import ColumnsWidget from '../widgets/ColumnsWidget/ColumnsWidget';
import SocialWidget from '../widgets/SocialWidget/SocialWidget';

function Page(){
    return(
        <Container fluid className='m-0 p-0 bg-gradient-blue' style={{overflowX:'hidden'}}>
            <PlayerRender/>
        </Container>
    );  
}
export default Page;