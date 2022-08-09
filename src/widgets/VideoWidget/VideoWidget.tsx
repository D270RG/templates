import VideoWidgetCore from './VideoWidgetCore';
import React from 'react';
// var contentList = new Map<string,string>([
//     [`dQw4w9WgXcQ`,'No title'],
//     [`vawcdlH1R9k`,'No title'],
//     [`Un3uUH1rElo`,'No title'],
    
// ]);
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

export default React.memo(VideoWidget);