import React, { Component } from 'react';
import Word from './word'



class Page extends Component {
    state = {

    }


    render() {
        var strwords = require(`./${this.props.pageName}`);
        var l = strwords.split(";");
        console.log("sdfds", l);
        return (
            <div>
                
                {
                    l.map((value, index) => {
                        return (<Word word={value} key={value}> </Word>)
                    })
                }

            </div>
        );
    }
}

export default Page;