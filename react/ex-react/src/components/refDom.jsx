import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class RefDomEvent extends Component {
    constructor(props){
        super(props);
        // input태그가 들어갈 공간(변수)
        this.textInput = null;
        //ref 콜백함수를 통해 DOM에 접근
        //ref에 들어갈 함수 작성(화살표함수)
        this.seTextInputRef=(element)=>{
            //element를 통해서 ref를 통해 DOM가져옴
            //저장해서 쓰기위해 만든 공간에 할당
            this.textInput = element;
        }
    }

    render(){
        return(
            <div>
                <h1>Ref를 통해 input 가져오기</h1>
                <input
                type='text'
                ref={this.seTextInputRef}
                >
                </input>
                <button
                onClick={()=>{console.log(this.textInput)}}
                >console에 textinput값을 출력</button>
            </div>
        )
    }
    
};

export default RefDomEvent;