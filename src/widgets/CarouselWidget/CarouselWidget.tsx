import {useState,useEffect,MouseEventHandler} from 'react';
import { Col,Row,Ratio,Container} from 'react-bootstrap';
import './CarouselWidget.css';
function sumMaps(a:Map<string,number>,b:Map<string,number>){
  a.forEach((value,key)=>{
    a.set(key,value+(b.get(key) as number));
  });
  return a;
};
class CycledList{
  contentArr:JSX.Element[];
  constructor(){
    this.contentArr = [
      <div>1</div>,
      <div>2</div>,
      <div>3</div>,
      <div>4</div>,
      <div>5</div>,
      <div>6</div>,
      <div>7</div>,
      <div>4</div>,
      <div>5</div>,
      <div>6</div>,
  
    ]
  }
  
}
class TransitionMap{
  val:Map<string,number>;
  constructor(values?:Map<string,number>,other?:TransitionMap){
    if(values!==undefined){
      this.val = values;
    } else if(other!==undefined){
      this.val = other.get();
    } else {
      this.val = new Map([['px',0],['%',-150],['rem',0]]);
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
function Carousel(props){
  var scaleCoeff = 0.75; //coeff+ => bigger elements, default 0.5
  var shrinkCoeff = 2; //shrink+ => more shrink, default 2
  var contentArr = [
    <div>1</div>,
    <div>2</div>,
    <div>3</div>,
    <div>4</div>,
    <div>5</div>,
    <div>6</div>,
    <div>7</div>,
    <div>8</div>,
    <div>9</div>,
    <div>10</div>,

  ]
  var [transition,setTransition] = useState(new TransitionMap());
  var [center,setCenter] = useState(Math.floor((contentArr.length)/2));
  var transitionString:string = transition.formString();

  function formStyles(){
    var tileArr:JSX.Element[] = [];
    contentArr.forEach((frame,index)=>{
      var centricity = index-center;
      var distance = Math.abs(centricity)+1;

      var opacityAmount = 1/distance;

      var scaleModifier = scaleCoeff+(1-scaleCoeff)*(1/distance);
      var scaleString = ' scale('+scaleModifier+')';

      var shrinkModifier = -Math.sign(centricity)*Math.pow(centricity,2)*shrinkCoeff;
      var shrinkString = ' translateX('+shrinkModifier+'rem)'

      var style = {
        transform: transitionString,
        filter: 'contrast('+opacityAmount+')',
        transition: '1s linear',
        transitionDuration: '1s',
        zIndex: 9999-distance,
        width: '8%',
      }
      if(props.scale === true){
        style.transform += scaleString;
      }
      if(props.shrink === true){
        style.transform +=shrinkString;
      }
      tileArr.push(<Container style={style} className='h-100 debug mx-1 element p-0'>{frame}</Container>);
    });
    return tileArr;
  }
  
  return(
    <Container fluid>
      <Row className='debug' style={{height:'400px',width:'150%',overflow:'hidden'}}>
          {formStyles()}
      </Row>
      <Row>
          <button className='btn h-15 w-15' onClick={()=>{
                                      if(center>0){
                                        setTransition(new TransitionMap(sumMaps(transition.get(),new Map([['px',2],['%',100],['rem',0.25]]))));
                                        setCenter(center-1);
                                      }
                                      }}>Right</button>
          <button className='btn h-15 w-15' onClick={()=>{
                                    if(center<contentArr.length-1){
                                      setTransition(new TransitionMap(sumMaps(transition.get(),new Map([['px',-2],['%',-100],['rem',-0.25]]))));
                                      setCenter(center+1);
                                    }
                                      }}>Left</button>
      </Row>
    </Container>
  );
}

export default Carousel;