import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleChange=(e)=>{
        this.props.getSearch(e.target.value)
    }
    render() {
        return (
            <div>
            <div className='input-field col l1 s12' onChange={this.handleChange}>
        <i className="material-icons prefix">search</i>

            <input type="text" placeholder="Search" id="searchq"/>
            
        </div>
            </div>
        )
    }
}


