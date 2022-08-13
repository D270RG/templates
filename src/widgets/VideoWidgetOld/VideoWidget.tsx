import VideoWidgetCore from './VideoWidgetCore';
import React,{useEffect,useState} from 'react';
import {Row,Col,Container} from 'react-bootstrap';
import {
    BrowserRouter,
    Routes,
    Route,
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

function VideoWidget(props:{contentList:Map<string,string>}){
    return(<VideoWidgetCore contentList={props.contentList} throttle={TimerComponent}/>);
}
function ListButton(props){
    const [index] = useState(props.index);
    return(
        <button 
            className={props.className} 
            style={props.style} 
            id={props.title}
            onClick={event=>{props.callback(index)}}>{props.title}</button>
    );
}
function ButtonList(props:{playlists:Map<string,Map<string,string>>,callback,activeIndex:number}){ //<ButtonTitle,Map<Id,VideoTitle>>
    function formButtons(){
        var buttonsArr:JSX.Element[] = [];
        var buttonTitles =  Array.from(props.playlists.keys());
        buttonTitles.forEach((buttonTitle,index)=>{
            if(index == props.activeIndex){
                buttonsArr.push(<ListButton className='btn' callback={props.callback} index={index} title={buttonTitle}/>);
            } else {
                buttonsArr.push(<ListButton className='btn' callback={props.callback} index={index} title={buttonTitle}/>);
            }
        });
        return buttonsArr;
    }
    return(
        <div>
                {formButtons()}

        </div>
    );
}
function PlayerRender(){
    const [activeIndex,setActive] = useState(0);
    const [data,setData] = useState(contentList.get(contentKeys.at(activeIndex) as string) as Map<string,string>);
    useEffect(()=>{
        setData(contentList.get(contentKeys.at(activeIndex) as string) as Map<string,string>);
    });
    return(
            <Container fluid className='m-0 p-0'>
                <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>

                        <ButtonList playlists={contentList} callback={setActive} activeIndex={activeIndex}/>

                        <Row className='shadow bg-white' >
                            <Container fluid className='bg-dark m-0 p-2'>Title</Container>
                        </Row>

                        <VideoWidget contentList={data}/>

                <Row className='d-xs' style={{height:'calc(100vh*0.03)'}}>{/*space*/}</Row>
            </Container>
    );
}

export default PlayerRender;