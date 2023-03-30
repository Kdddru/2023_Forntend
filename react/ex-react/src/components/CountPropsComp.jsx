import {Component} from 'react'
import {PropTypes} from 'prop-types';

class CountPropsComp extends Component{
    constructor(props){
        super(props)

        this.state = {
            count : 0,
        }
    }
    render(){
        const { num } = this.props;
        const {count} = this.state
        return(
            <div>
                <p>{count}</p>
                <button onClick={()=>
                {
                    this.setState({count:count+num});
                }}>+num</button>
            </div>
        )
    }
}


export default CountPropsComp