import { Component } from "react";

class LoginComp extends Component{
    render(){
        const prop = this.props;
        const {login, name} = this.props;   //구조화 할당
        console.log(prop);
        console.log(prop.login);
        console.log(login);
        return(
            <div>
                {
                    login ? 
                    <div>
                        <h1>로그인에 성공하였습니다</h1>
                        <h3>{name} 입니다</h3>
                    </div>
                    : 
                    <LoginText/>
                }
            </div>
        );
    }
}

//하나의 컴포넌트 작성 파일안에
//클래스형 또는 함수형 컴포넌트를 여러개 작성할 수 있다.
//export를 이용하여 내보내주지 않으면 외부에서는 사용x

class LoginText extends Component{
    render(){
        return(
            <div>
                <h1>로그인이 필요합니다</h1>
                <h3>리액트를 시작하였습니다</h3>
            </div>
        )
    }
}
export{ LoginText };
export default LoginComp;