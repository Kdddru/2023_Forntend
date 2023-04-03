import { Component } from 'react'

class MemoComp extends Component{
    constructor(props){
        super(props);
        this.state={
            memoList : [
                {id:1, memo: '기록', time: this.times()},
                {id:2, memo: '연습', time: this.times()},
            ],
            inputText : ''
        }

        this.id = this.state.memoList.length+1;
    }
    //시간
    times = () =>{
        const day = new Date();
        const hour = String(day.getHours()).padStart(2,0);
        const minutes =String( day.getMinutes()).padStart(2,0);
        const second = String(day.getSeconds()).padStart(2,0);
        return (`${hour} : ${minutes} : ${second}`);
    }

    changeInput =(e) =>{
        this.setState({inputText:e.target.value});
    }

    printTime =()=>{
        const newMemoList = this.state.memoList.concat(
            {id: this.id,memo: this.state.inputText, time: this.times()} 
            ) 
            this.setState({memoList:newMemoList});
            this.id ++;
            this.setState({inputText:''});
    }

    deleteValue = (memo) =>{
        const newMemoList = this.state.memoList.filter((m)=>m.id!==memo);
        this.setState({memoList:newMemoList});

    }


    render(){
        return(
            <div>
                <input onChange={this.changeInput}></input>
                <button onClick={this.printTime}>추가</button>
                <ul>
                    {this.state.memoList.map((m)=>
                    <li key={m.id} onClick={()=>{this.deleteValue(m.id)}}>
                    <span>{m.id}</span>
                    <span>{m.memo}</span>
                    <span>{m.time}</span>
                    </li>)}
                </ul>
            </div>
        )
    }
}


export default MemoComp