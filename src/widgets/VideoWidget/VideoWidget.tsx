import VideoWidgetCore from './VideoWidgetCore';
import React,{useEffect,useState} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,
    NavLink
  } from "react-router-dom";

var contentList = new Map<string,Map<string,string>>([
    ['title1',new Map<string,string>([
        [`4auzwSFb5S4`,'No title'],
        [`vawcdlH1R9k`,'No title'],
        [`Un3uUH1rElo`,'No title'],
    ])],
    ['title2',new Map<string,string>([
        [`laOEVceMn-E`,'No title'],
        [`yXc47WP0kR0`,'No title'],
        [`wgc537CiYZA`,'No title'],
    ])],
    ['title3',new Map<string,string>([
        [`i2RnJJpO0uY`,'No title'],
        [`jIOmncVHbDU`,'No title'],
        [`Z_UOmAed5O8`,'No title'],
        [`zQvFxE93baw`,'No title'],
        [`HIvQvIEsHZM`,'No title'],
    ])]
]);
var contentKeys = Array.from(contentList.keys());

function ListButton(props){
    return(
        <button 
            className={props.className} 
            style={props.style} 
            id={props.title}>{props.title}</button>
    );
}
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

function PlayerRender(){
    function formButtons(){
        var buttonsArr:JSX.Element[] = [];
        var buttonTitles =  Array.from(contentList.keys());
        buttonTitles.forEach((buttonTitle,index)=>{
            buttonsArr.push(
                <NavLink to={buttonTitle} className={({ isActive }) =>
                                                isActive ? 'active' : undefined
                                            } >
                    <ListButton className='btn btn-style' title={buttonTitle}/>
                </NavLink>
            );
        });
        return buttonsArr;
    }
    function VideoWidgets(){
        var VideoWidgetArr: JSX.Element[] = [];
        Array.from(contentList.keys()).forEach((playlistTitle,index)=>{
            if(index==0){
                VideoWidgetArr.push(
                    <Route
                        path={"/"}
                        element={<Navigate to={playlistTitle+'/'}/>}
                    />
                );
            }
                VideoWidgetArr.push(
                    <Route path={playlistTitle+'/*'} element={
                        <VideoWidgetCore 
                            contentList={contentList.get(playlistTitle) as Map<string,string>}
                            parentLink={playlistTitle}
                            throttle={TimerComponent}
                        />
                    }/>
                );

        });
        return VideoWidgetArr;
    }
    return(
        <Container fluid className='m-0 p-0'>
            <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
                    {formButtons()}

                    <Row className='shadow bg-white' >
                        <Container fluid className='bg-dark m-0 p-2'>Title</Container>
                    </Row>
                    <Routes>
                        {VideoWidgets()}
                    </Routes>
            <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
        </Container>
    );
}

export default PlayerRender;