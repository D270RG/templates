import { Col,Row,ListGroup,Container} from 'react-bootstrap';
import React, { useState, useEffect, useRef} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './VideoWidget.css';
import { extract } from 'oembed-parser';


function VideoWidgetControl(prevState,nextState){
    return (prevState.indicator) && (nextState.indicator);
}
function PlayListElement(props){
    const [index] = useState(props.index);
    if(props.active){
        return(<ListGroup.Item className='list-style active' href={'#'+index} action >{props.label}</ListGroup.Item>); //Bootstrap active styles binded to hrefs on some reason
    } else {
        return(<ListGroup.Item className='list-style' href={'#'+index} action onClick={event=>{
            props.setLink(props.embedHost+props.link); 
            props.setActive(index);
        }}>{props.label}</ListGroup.Item>);
    }
}
function Playlist(props:{contentList:Map<string,string>,setLink:any}){
    var embedLink = 'https://www.youtube.com/embed/';
    var videoLink = 'https://www.youtube.com/watch?v=';
    const [active,setActive] = useState(0);
    const [contents,updateContents] = useState(props.contentList);
    var linksKeys = Array.from(contents.keys());
    useEffect(()=>{
        formTitles();
    },[]);
    useEffect(()=>{
        props.setLink(embedLink+linksKeys.at(active));
    });

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
                console.trace(err);
                reject(err);
              })
        });
        return Promise.race([p,timeout]) as Promise<string>;
    }
    function formList(){
        var elementList:JSX.Element[] = [];

        linksKeys.forEach((link,index)=>{
            if(index == active){
                elementList.push(<PlayListElement 
                label={contents.get(link)} 
                embedHost={embedLink} 
                id={contents.get(link)} 
                setLink={props.setLink} 
                setActive={setActive} 
                index={index} 
                active={true}></PlayListElement>);
            } else {
                elementList.push(<PlayListElement 
                label={contents.get(link)} 
                embedHost={embedLink}
                id={contents.get(link)} 
                setLink={props.setLink} 
                setActive={setActive} 
                index={index} 
                active={false}></PlayListElement>);
            }
        });
        return elementList
    }
    function formTitles(){
        var promises:Promise<string>[] = [];
        
        linksKeys.forEach(id=>{
            promises.push(getTitle(id));
        });
        Promise.all(promises).then(titles=>{
            var contentsCopy = new Map(contents);
            linksKeys.forEach((key,index)=>{
                contentsCopy.set(key,titles.at(index) as string);
            });
            updateContents(contentsCopy);
        });
    }
    return (<ListGroup variant='flush' className='border-0' >{formList()}</ListGroup>);
}
function VideoWidgetCore(props:{throttle:any,contentList: Map<string, string>}){
    const [heightString,setString] = useState('0px');
    const [activeLink,setLink] = useState(props.contentList.keys()[0]);
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
    });
    return(
        <div>
            <Row className='shadow bg-white' >
                <Container fluid className='bg-white shadow m-1'>Title</Container>
            </Row>
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