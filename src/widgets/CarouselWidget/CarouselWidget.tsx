import {useState,useEffect,MouseEventHandler} from 'react';
import { Col,Row,Ratio,Container,Button} from 'react-bootstrap';
import {ChevronDoubleLeft,ChevronDoubleRight,CircleFill,Circle} from 'react-bootstrap-icons';
import './CarouselWidget.css';
function sumMaps(a:Map<string,number>,b:Map<string,number>){
  a.forEach((value,key)=>{
    a.set(key,value+(b.get(key) as number));
  });
  return a;
};
class TransitionMap{
  val:Map<string,number>;
  constructor(values?:Map<string,number>,other?:TransitionMap){
    if(values!==undefined){
      this.val = values;
    } else if(other!==undefined){
      this.val = other.get();
    } else {
      this.val = new Map([['px',-5],['%',0],['rem',0]]); //TODO: initial calc initial(contentArr.len,container.len(contentArr.len))
    }
  }
  formString(){
    var init = '';
    this.val.forEach((value,key)=>{
      init+='translateX('+value+key+') ';
    });
    return init;
  }
  get(){
    return this.val;
  }
}

function InteractiveButton(props){ //I don't want to declare types here
  //TODO: declare props as states
  var [index,setIndex] = useState(props.index);
  function move(index:number){
    console.log('callback', index);
    props.setTransition(new TransitionMap(sumMaps(props.transition.get(),new Map([['px',0],['%',(props.center-index)*100],['rem',0]]))));
    props.setCenter(index);
  }
  var style = {
    backgroundColor: 'transparent',
    border: 'none',
    transform: props.transitionString+props.initialShiftString,
    filter: 'contrast('+props.opacityAmount+')',
    transition: '0.5s linear',
    transitionDuration: '1s',
    zIndex: 999-props.distance,
    width: props.width+'px',
  }
  if(props.doScale === true){
    style.transform += props.scaleString;
  }
  if(props.doShrink === true){
    style.transform += props.shrinkString;
  }
  return(<button style={style} className='m-0 h-100 p-0 m-0' onClick={()=>{move(index)}}>{props.child}</button>);
}

function Carousel(props){
  var scaleCoeff = 0.75; //coeff+ => bigger elements, default 0.5
  var shrinkCoeff = 0.5; //shrink+ => more shrink, default 2

  var [transition,setTransition] = useState(new TransitionMap());
  var [center,setCenter] = useState(Math.floor((props.contentArr.length)/2));
  var transitionString:string = transition.formString();

  function formStyles(){
    var tileArr:JSX.Element[] = [];
    props.contentArr.forEach((frame,index)=>{
      var centricity = index-center;
      var distance = Math.abs(centricity)+1;

      var opacityAmount = 1/distance;

      var scaleModifier = scaleCoeff+(1-scaleCoeff)*(1/distance);
      var scaleString = ' scale('+scaleModifier+')';

      var shrinkModifier = -Math.sign(centricity)*Math.pow(centricity,2)*shrinkCoeff;
      var shrinkString = ' translateX('+shrinkModifier+'rem)'

      var initialShift = (props.contentArr.length*(props.width))/2+props.width/2;
      var initialShiftString = ' translateX(calc(50vw - '+initialShift+'px))';

      tileArr.push(<InteractiveButton child={frame}
                  setCenter={setCenter} setTransition = {setTransition} index={index}
                  transitionString={transitionString} initialShiftString={initialShiftString} shrinkString={shrinkString} scaleString={scaleString}
                  opacityAmount={opacityAmount} distance={distance} width={props.width} transition={transition} center={center}
                  doShrink={props.shrink} doScale={props.scale}></InteractiveButton>);
    });
    return tileArr;
  }
  return(
    <Container className={'m-0 p-0 '+props.className} fluid style={{overflow:'hidden'}}>
      <Row className='carousel-row m-0 p-0' style={{height:'400px',width:'1000%',overflow:'hidden'}}>
          {formStyles()}
      </Row>
      <Container className='d-flex text-center justify-content-center' style={{flexDirection:'row'}}>
          <button className='btn btn-nohighlight btn-scale text-dark' onClick={()=>{
                                      if(center>0){
                                        setTransition(new TransitionMap(sumMaps(transition.get(),new Map([['px',0],['%',100],['rem',0]]))));
                                        setCenter(center-1);
                                      }
                                      }}><ChevronDoubleLeft/></button>
          <button className='btn disabled' style={{color:'red'}}><Circle/></button>
          <button className='btn btn-nohighlight btn-scale text-dark' onClick={()=>{
                                    if(center<props.contentArr.length-1){
                                      setTransition(new TransitionMap(sumMaps(transition.get(),new Map([['px',0],['%',-100],['rem',-0]]))));
                                      setCenter(center+1);
                                    }
                                      }}><ChevronDoubleRight/></button>
      </Container>
    </Container>
  );
}

export default Carousel;