import React, { Component } from 'react';
import './table.css'
import {iframeResizerContentWindow} from 'iframe-resizer'
import translate from 'google-translate-api';
class Iframe extends Component {

    loaded = () => {
        console.log("loadded");
        var my_frame = document.getElementById(this.props.src);
    var content_width = my_frame.contentWindow.document.documentElement.scrollWidth;
    var content_height = my_frame.contentWindow.document.documentElement.scrollHeight + 4;

    my_frame.style.width = content_width + 'px';
    // my_frame.style.width = '80%';
    my_frame.style.height = content_height + 'px';
        // var sHeight, frame;

        //    frame = document.getElementById("v");
        //    frame.style.height = '0px';
        //    sHeight = document.getElementById('v').
        //           contentWindow.document.body.scrollHeight + 80;
        //    frame.style.height = sHeight + 'px';
        // // var iframe = document.getElementById('v');
        // // console.log("iframe:",iframeResizerContentWindow);
        // // iframe.height = '300' + 'px';
    }
    render (){
        return (
            <div id={`iframecontainer`} className={'iframecontainer'} key={`${this.props.src}content`}>
                <iframe className='iframestyle' key={this.props.src} id={this.props.src} src={this.props.src} border={'none'} scrolling={'no'} width={'80%'} onLoad={this.loaded} onresize={this.loaded}/>
             </div>
        )
    }
}

class Word extends Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return (

            <div className="divTable blueTable" key={`${this.props.word}blueTable`}>
                <div className="divTableBody" key={`${this.props.word}divTableBody`}>
                    <div className="divTableRow" key={`${this.props.word}divTableRow`}>
                        <div className="divTableCell leftCell" key={`${this.props.word}leftCell`}>
                        <div>
                        {this.props.word}
                        </div>
                        </div>
                        <div className="divTableCell" key={`${this.props.word}iframecontainer`}>
                            <Iframe key={`${this.props.word}class`} word={this.props.word} src={`http://www.tamilvu.org/slet/pmdictionary/palsfse.jsp?serword=${this.props.word}`} width="100%" />

                        </div>
                    </div>
                   
                </div>
            </div>

           


               
        );
    }
}

export default Word;