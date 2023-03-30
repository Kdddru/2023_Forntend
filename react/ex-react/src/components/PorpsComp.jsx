import { Component } from 'react'

class PorpsComp extends Component{
    render(){
        const color = this.props;
        return(
            <div style={color}>
                props값을 받아와서 글자색을 꿨습니다
            </div>
        );
    }
}

export default PorpsComp;