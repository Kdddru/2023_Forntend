import React, { Component } from 'react'



//글자를 입력받은데
export class SearchBar extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {isOnlyStock, toggleStock} = this.props;
        return (
        <div>
            <input type='text' placeholder='Search'></input>
            <br/>
            <input type='checkbox' defaultChecked={isOnlyStock} onClick={toggleStock} readOnly></input>
            <label>Only show porducts in stock</label>
        </div>
        )
    }
}

export default SearchBar