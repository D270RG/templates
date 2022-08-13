
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
  } from "react-router-dom";

function VideoWidgetControl(prevState,nextState){
    return (prevState.indicator) && (nextState.indicator);
}
function PlayListElement(props){
    const [index] = useState(props.index);
    if(props.active){
        return(<ListGroup.Item className='list-style active' action >{props.label}</ListGroup.Item>); //Bootstrap active styles binded to hrefs on some reason
    } else {
        return(<ListGroup.Item className='list-style' action onClick={event=>{
            // ReactDOM.unstable_batchedUpdates(() => {
                props.setLink(props.embedHost+props.link); 
                props.setElementList(props.formList(index));
            // });
        }}>{props.label}</ListGroup.Item>);
    }
}
function Playlist(props:{contentList:Map<string,string>,setLink:any}){
    var embedLink = 'https://www.youtube.com/embed/';
    var videoLink = 'https://www.youtube.com/watch?v=';
    const [dataList,setDataList] = useState(props.contentList) //unrendered;
    const [elementList,setElementList] = useState([] as JSX.Element[]); //rendered
    useEffect(()=>{
        formTitles().then(titledData=>{
            setDataList(new Map(titledData as Map<string,string>));
            props.setLink(embedLink+Array.from(props.contentList.keys())[0]);
        });
    },[props.contentList]); //inlist navigation
    useLayoutEffect(()=>{
        setElementList(formList(0));
    },[dataList]); //inlist navigation
    function getTitle(id:any){
        var url = videoLink+id;
        var timeout = new Promise(function(resolve, reject){
            setTimeout(function() { 
                reject('Timed out'); 
            }, 2000);
        });
        var p = new Promise<string>((resolve,reject)=>{
            extract(url).then((oembed) => {
                resolve(oembed['title'] as string);
              }).catch((err) => {
                reject(err);
              })
        });
        return Promise.race([p,timeout]) as Promise<string>;
    }
    function formList(activeIndex:number){
        var linksKeys = Array.from(dataList.keys());
        var elementList:JSX.Element[] = [];
        linksKeys.forEach((link,index)=>{
            if(index == activeIndex){
                elementList.push(

                        <PlayListElement 
                        label={dataList.get(link)} 
                        embedHost={embedLink} 
                        link = {link}
                        setLink={props.setLink} 
                        setElementList={setElementList}
                        formList={formList}
                        index={index} 
                        active={true}/>
            );
            } else {
                elementList.push(

                        <PlayListElement 
                        label={dataList.get(link)} 
                        embedHost={embedLink} 
                        link = {link}
                        setLink={props.setLink} 
                        setElementList={setElementList}
                        formList={formList}
                        index={index} 
                        active={false}/>

                );
            }
        });
        return elementList
    }
    function formTitles(){
        var promises:Promise<string>[] = [];
        var linksKeys = Array.from(props.contentList.keys());

        linksKeys.forEach(id=>{
            promises.push(getTitle(id));
        });
        var p = new Promise((resolve,reject)=>{
            Promise.all(promises).then(titles=>{
                var contentsCopy = new Map(props.contentList);
                linksKeys.forEach((key,index)=>{
                    contentsCopy.set(key,titles.at(index) as string);
                });
                resolve(contentsCopy);
            });
        });
        return p;
    }
    return (<ListGroup variant='flush' className='border-0'>{elementList}</ListGroup>);
}
function VideoWidgetCore(props:{throttle:any,contentList: Map<string, string>}){
    const [heightString,setString] = useState('0px');
    const [activeLink,setLink] = useState(Array.from(props.contentList.keys())[0]);
    const ref = useRef(null);

    function resize(){
       try{
        setString(ref.current!['clientHeight'] + 'px');
       } catch(e) {
        setString(ref.current!['clientHeight'] + 'px');
       } //supress errors
    }
    useEffect(() => {
        resize();
        window.addEventListener('resize', props.throttle(resize));
        return () =>{
            window.removeEventListener('resize', props.throttle(resize));
        }
    },[]);
    return(
        <div>
            <Row className='shadow bg-white' >
                <Col lg='3' md='12' className='px-0' style={ {overflowY:'scroll',maxHeight:heightString}}>
                    <Playlist contentList={props.contentList} setLink={setLink}/>
                </Col>
                <Col lg='6' md='12' className='px-0'>
                    <div className={'ratio ratio-16x9'} style={{width:'100%'}} ref={ref}>
                        <iframe 
                            src={activeLink}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                    </div>
                </Col>
                <Col lg='3' md='12' className='px-0'>
                    OtherStuff2
                </Col>
            </Row>
        </div>
    );
}
export default React.memo(VideoWidgetCore,VideoWidgetControl);
