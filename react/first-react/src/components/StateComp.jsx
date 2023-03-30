import React, { Component} from 'react'

class StateComp extends Component{
    //state 컴포넌트 안에서 사용되는 변수
    constructor(props){
        //constructor를 사용하면 props를 따로 연결
        super(props);
        // this.state안에 객체 형태로 값을 작성할 수 있다
        this.state = {
            number : 0,
            name : "홍길동"
        }
    }

    //화면에 출력되는 html
    //render 업데이트 되서 실행
    //가상돔 화면에 출력하기 위해 render()를 호출
    //초기화x => this.state
    //업데이트마다 화면에 표시되는 값 : state, props
    render(){
        //this.state의 값을 비구조화 할당을 통해 사용
        const {number,name} = this.state;
        let count = 0;
        return(
            <div>
                <h2>{name}</h2>
                <h3>state의값 {number}, 변수값 {count}</h3>
                <button onClick={()=>{
                    this.setState({number: number+1})  //setState: state값을 수정해주는것
                    this.setState({name: '고길동'} )
                }}>
                    +1
                </button>
                <button onClick={()=>{
                    count++;
                    console.log(count);
                }}>
                    count+1
                </button>
                <button onClick={()=>{
                    this.setState({number:number-1})
                    //()=>() return으로 객체 전달
                    this.setState((prevState) =>(
                        {number:prevState.number-1}
                    ))
                }}>
                    -1
                </button>
                <button onClick={()=>{
                    this.setState({number:number-number})
                }}>
                    초기화
                </button>
            </div>
        )
    }
}

export default StateComp;