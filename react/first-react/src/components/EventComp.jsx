import React, { Component } from 'react'

export class EventComp extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: `홍길동`,
            address : `부산`,
            toggle : true, 
            color : '',
            messege : '메세지 바뀜',
            input : ''
        }

        /**
         * this.printEvent 이름     this.printEvent 는 메서드
         * let num = 2      num = num+2 같은 느낌
         */
        this.printEvent = this.printEvent.bind(this);
        this.printAddress = this.printAddress.bind(this);
        this.setToggle = this.setToggle.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }
    /**
     * render에서 사용한값은 못씀
     * this.state를 통해 접근
     * constructor에서 바인드로 묶어줌
     */
    printEvent(){
        console.log('이벤트 출력');
        console.log(this.state.name);
    }

    printAddress(){
        console.log(this.state.address);
    }
    
    setToggle(){
        this.setState({toggle: !this.state.toggle});
    }

    changeColor(e){
        if(e.type === 'mouseenter'){
            this.setState({color: 'red'});
        }else if(e.type === 'mouseleave'){
            this.setState({color:''});
        }
    }
    arrowPrint = ()=>{
        console.log('이벤트 실행')
        console.log(this.state.name);
        }
    changeText =()=>{
        this.setState(()=>(
            {messege : '메세지가 바꼇씁니다'}
        ))
    }
    onInputChage = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }


    render() {
        //render안에서 this = EvnetComp
        //const {} = this.state;
        const {name} = this.state;
        

        return (
            //console.log("이벤트 실행");
            <div>
                <h3>버튼을 클릭했을때 console.log(`이벤트 발생`)</h3>
                <button onClick={(e)=>{
                    console.log(e,this);
                    //클래스 컴포너트에서 사용하는 props과 state호출
                }}>
                화살표 함수를 사용해 이벤트 실행
                </button>
                <button onClick={function(e){
                    console.log(e,this);
                    //연결된 객체가 없으므로 함수의 this값을 연결
                    //undefined  그래서 화살표함수로 쓸것
                    //bind() 

                }}>
                    익명함수를 사용해서 이벤트 실행
                </button>
                <h3>이벤트의 함수(메서드)를 만들어 따로 작성</h3>
                <p>
                    버튼을 눌렀을때 console.log(이벤트 출력)
                    state.name이 "홍길동" 작성 후 출력
                </p>
                <button onClick={this.printEvent}>
                    메소드를 이용한 이용한 이벤트
                </button>
                {/**
                버튼을 누르면 state의 address 부산을 출력하고
                    console.log를 이용하여 이벤트 출력완룍
                */
                
                }
                <button onClick={this.printAddress}>
                    버튼
                </button>

                <button onClick={this.setToggle}>
                    {this.state.toggle ? "on":"off"}
                </button>
                <p
                onMouseEnter={this.changeColor}
                onMouseLeave={this.changeColor}
                style={{color : this.state.color}}
                >
                    p태그에 마우스를 올리면 글자를 빨간색으로 바꾸기
                </p>
                <button
                onClick={this.arrowPrint}
                >
                    화살표함수 버튼
                </button>
                <p>{this.state.messege}</p>
                <button
                onClick={this.changeText}
                >
                    버튼
                </button>
                <h3>input태그에서 값을 가져올 state를 onChange를 사용해서 수정</h3>
                <p>{this.state.input}</p>
                <input onChange={(e)=>{
                    console.log(e.target.value);
                    this.setState({input: e.target.value});
                    console.log("input",this.state.input);  // 이전값이 나온다
                }}></input>
                <input></input>
            </div>
        )
    }
}

export default EventComp