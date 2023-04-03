import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EventComp from './EventComp';


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
        this.myRef = React.createRef();
        this.colorRef1 = React.createRef();
        this.myComp = React.createRef();
    }
    
    textInputEvnet = () =>{
        if(this.textInput){
            this.textInput.focus();
        }
        console.log(this.textInput.value);
    }

    myRefEvent=()=>{
        if(this.myRef.current){
            this.myRef.current.focus();
        }
    }
    colorRefChange1 =()=>{
        const current = this.colorRef1.current; //current에 접근해서 사용하자구

        if(this.colorRef1.current){
            current.style.backgroundColor = 'red';
            console.log(current.value);  
        }

    }

    getMyComp = ()=>{
        console.log(this.myComp);
        console.log(this.myComp.current);
    
    }


    render(){
        return(
            <div>
                <h1>Ref를 통해 input 가져오기</h1>
                <input
                type='text'
                ref={this.seTextInputRef} //ref => state에 넣어준다
                >
                </input>
                <button
                onClick={()=>{console.log(this.textInput)}}
                >console에 textinput값을 출력</button>
                <button
                    onClick={this.textInputEvnet}
                >
                    버튼을 누르면 input에 포커스
                </button>
                <input
                type='text'
                ref = {this.myRef}
                ></input>
                <button
                    onClick={()=>{console.log(this.myRef)}}
                >
                    myRefd의 값 확인
                </button>
                <button
                onClick={this.myRefEvent}
                >
                    myRef에 포커스
                </button>
                <div>
                    <input
                    type='text'
                    ref={this.colorRef1}
                    ></input>
                    <button
                    onClick={this.colorRefChange1}
                    >색을바꿉니다</button>
                </div>
                <div>
                    <input
                    type='text'
                    ref={this.colorRef2}
                    ></input>
                    <button>색을바꿉니다</button>
                </div>
                <hr/>
                <h3>컴포넌트를 불러와서 ref를 통해 가져올 수 있다</h3>
                <EventComp ref={this.myComp}/>
                <button onClick={this.getMyComp}>ref로 들고온 myComp확인</button>
                <hr/>
                <h3>
                    리액트에서 이벤트를 사용할때 화살표함수/익명함수에 넣어서 사용하는 이유                 
                </h3>
                <p>
                    자바스크립트에서 addEventListener를 사용할때와 동일한 이유
                    addEventListener를 사용할때 함수를 넣을때 함수 이름을 넣어서 실해
                    그래서 함수이름() 실행한 결과를 넣어주면, 이벤트가 실행할때마다 되는것이 아니라, 
                    화면이 렌더할때 실행
                </p>
            </div>
        )
    }
    
};

export default RefDomEvent;