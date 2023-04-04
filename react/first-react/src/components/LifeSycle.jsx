import React, { Component } from 'react'

export class LifeSycle extends Component {
    constructor(props){
        super(props);

        this.state ={
            count : 0,
            date : this.times() 
        }
    }

    //시작할때 
    //외부에서 값을 한번만 가져올때
    componentDidMount(){
        console.log('마운트');
        setInterval(()=>{this.setState({date: this.times()})},1000);
    }

    //업데이트 되었을때
    //prop값이 바뀔때 sestate를 통해서 값이 바뀔때
    componentDidUpdate(){
        console.log('업데이트');
    }

    //화면에서 없어질때
    componentWillUnmount(){
        console.log('컨포넌트가 언마운트 되었다');
    }



    times = () =>{
        const day = new Date();
        const hour = String(day.getHours()).padStart(2,0);
        const minutes =String( day.getMinutes()).padStart(2,0);
        const second = String(day.getSeconds()).padStart(2,0);
        return (`${hour} : ${minutes} : ${second}`);
    }


    count1 = () =>{
        let countNum = this.state.count;
        this.setState({count: countNum+1});
    }

    render() {
        return (
        <div>
            <h3>LifeSycle</h3>
            <h3>{this.state.count}</h3>
            <button onClick={this.count1}>+1</button>
            <hr/>
            <h3>
                시계 : {this.state.date}
            </h3>
        </div>
        )
    }
}

export default LifeSycle