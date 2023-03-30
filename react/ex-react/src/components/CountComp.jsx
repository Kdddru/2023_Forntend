import { Component } from 'react'

class CountComp extends Component{
    constructor(props){
        super(props)

        this.state = {
            number : 0,
        }
    }
    render(){
        const {number} = this.state;
        return(
            <div>
                <p>{number}</p>
                <button onClick={()=>{
                    this.setState({number:number+10});
                }}>+10</button>
                <button onClick={()=>{
                    this.setState({number:number-number})
                }}>초기화</button>
                <button onClick={()=>this.setState({number:number-10})}>-10</button>
            </div>
        );
    }
}

export default CountComp;