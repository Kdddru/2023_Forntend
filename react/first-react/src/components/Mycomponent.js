//클래스 컴포넌트
//react의 component를 상속받아와서 사용
//상속 받아와서 사용하게 되면 component의 내용을 사용가능

import {Component} from 'react'

class MyComponent extends Component {
    //클래스형 컴포넌트의 특징
    //render함수에서 return을 통해 html을 내보냄
    render(){
        return(
            <div>
                <h1>클래스형 컴포넌트 입니다</h1>
            </div>
        )
    }

}
class MyComponent2 extends Component {
    //클래스형 컴포넌트의 특징
    //render함수에서 return을 통해 html을 내보냄
    render(){
        return(
            <div>
                <h1>클래스형 컴포넌트 입니다</h1>
            </div>
        )
    }

}

const Component1 = () =>{
    const login = true;
    return(
        <div>
        {login === true ? (<div><h1>로그인에 성공하였습니다</h1><h3>홍길동입니다</h3></div>)
        :(<div><h1>로그인이 필요합니다</h1><p>리액트를 시작하였습니다</p></div>)}
        </div>
    )
} 

export default Component1;
