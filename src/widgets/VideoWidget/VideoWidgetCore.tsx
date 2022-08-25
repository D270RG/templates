
import { Col,Row,ListGroup,Container} from 'react-bootstrap';
import React, { useState, useEffect, useRef,useLayoutEffect} from 'react';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './VideoWidget.css';
import { extract } from 'oembed-parser';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    NavLink,
    Navigate
  } from "react-router-dom";

function VideoWidgetControl(prevState,nextState){
    return (prevState.indicator) && (nextState.indicator);
}
function Playlist(props:{contentList:Map<string,string>,parentLink:string}){

    function formList(){
        var linksKeys = Array.from(props.contentList.keys());
        var elementList:JSX.Element[] = [];
        linksKeys.forEach((link,index)=>{

                elementList.push(
                    <NavLink className={({ isActive }) =>
                                            isActive ? 'active' : undefined
                                        } 
                             to={link}  
                             style={{ textDecoration: 'none' }}>
                        <ListGroup.Item className='list-style bg-white' action>{props.contentList.get(link)}</ListGroup.Item>
                    </NavLink>
                );

        });
        return elementList
    }
    return (<ListGroup variant='flush' className='border-0'>{formList()}</ListGroup>);
}
function VideoWidgetCore(props:{throttle:any,contentList: Map<string, string>,parentLink:string}){
    const [heightString,setString] = useState('0px');
    const ref = useRef(null);

    function resize(){
       if(window.innerWidth>=992){
            try{
                setString(ref.current!['clientHeight'] + 'px');
            } catch(e) {
                setString(ref.current!['clientHeight'] + 'px');
            } //supress errors
       } else {
            setString('100%');
       }
    }
    useEffect(() => {
        resize();
        window.addEventListener('resize', props.throttle(resize));
        return () =>{
            window.removeEventListener('resize', props.throttle(resize));
        }
    },[]);
    function frames(){
        var frameArr:JSX.Element[] = [];
        Array.from(props.contentList.keys()).forEach((link,index)=>{
                if(index==0){
                    frameArr.push(
                        <Route
                            path="*"
                            element={<Navigate to={link} replace/>}
                        />
                    );
                }
                frameArr.push(
                    <Route path={link} element={     
                        <iframe 
                            key={link}
                            src={'https://www.youtube.com/embed/'+link}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    }/>
                );
        });
        return frameArr
    }
    return(
        <div>
            <Row className='shadow bg-white' >
                <Col lg='3' md='12' className='px-0' style={ {overflowY:'scroll',height:heightString}}>
                    <Playlist contentList={props.contentList} parentLink={props.parentLink}/>
                </Col>
                <Col lg='6' md='12' className='px-0'>
                    <div className='ratio ratio-16x9' style={{width:'100%'}} ref={ref} >
                        <Routes>
                            {frames()}
                        </Routes>
                    </div>
                </Col>
                <Col lg='3' md='12' className='px-0'>
                    OtherStuff2
                </Col>
            </Row>
        </div>
    );
}
export default VideoWidgetCore;
