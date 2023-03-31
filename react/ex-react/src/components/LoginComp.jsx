import {Component} from 'react'

class LoginComp extends Component{
    constructor(props){
        super(props)

        this.state = {
            name :'',
            login : false,
        }
    }

    inputChange=(e)=>{
        //비구조화 할당
        this.setState(
            {name : e.target.value}
        )
    }
    printValue = (e)=>{
        e.preventDefault();
        if(!this.state.login){
            this.setState({login: true});
        }
    }
    
    render(){
        
        const {name, login} = this.state;
        
        return(
            <div>
            <p>{login ? name : '이름을 입력하세요' }</p>
            <div style={{display: !login? "block":"none"}}>
                <form onSubmit={this.printValue}>
                    <input type={'text'} onChange={this.inputChange} required></input>
                    <input type={'submit'} value='로그인'></input>
                </form>
            </div>
            </div>
        )
    }
}

export default LoginComp;