import React, { Component } from 'react'

class MapCamp extends Component {
    constructor(props){
        super(props);

        this.state = {
            names : ['홍길동','성춘향'],
            students : 
            [
                {id:1, name:'홍길동'},
                {id:2, name:'성춘향'},
                {id:3, name:'김철수'},
                {id:4, name:'고라니'}

            ],
            inputText : ''  //onChange를 이용해서 바꾸기
        };
        this.id = 5;
    }

    changeInputText = (e) =>{this.setState({inputText : e.target.value})}

    printInputText = () =>{
        const newStudents = this.state.students.concat(
            {id : this.id, name:this.state.inputText}
        )
        this.setState({students:newStudents});
        //input태그에 value 초기화
        this.id++;

        this.setState({inputText:''});
        
    }

    deleteStudent =(student) =>{
        const newStudents = this.state.students.filter((s)=>s.id !== student);
        this.setState({students : newStudents})
    }


    render(){
        const array = [1,2,3,4];
        const arrayMap =array.map((num)=>(num*2)); 
        



        return(
            <div>
                <h3>배열을 바로 출력</h3>
                <p>{array}</p>
                <p>{arrayMap}</p>
                <h3>map 바로 출력</h3>
                {array.map((num,index)=><p key={index}>{num*2}</p>)}
                <ul>
                    {this.state.names.map((name, index)=> <li key={index}><label>{name}</label></li>)}
                </ul> 
                {/** input태그를 이용해서 state.students에 추가 */}
                <input type='text'
                value={this.state.inputText}
                onChange={this.changeInputText}
                ></input>
                <button
                onClick={
                    //리액트는 state값 바뀔때마다 화면 새로고침
                    //push 기존의 배열에 추가
                    //concat 새로운 배열에 추가후 return
                    this.printInputText
                }
                >
                    이름추가
                </button>
                
                <table>
                    <tbody>
                        <tr>
                            <td>아이디</td>
                            <td>이름</td>
                        </tr>
                        {this.state.students.map(
                            (s)=><tr key={s.id}>
                                <td>
                                    {s.id}
                                </td>
                                <td onClick={()=>{this.deleteStudent(s.id)}}>
                                    {s.name}
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>           
        )
    }

};

export default MapCamp;




