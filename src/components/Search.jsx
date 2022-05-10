import React from "react";
export class Search extends React.Component{
    state = {
        search: ''
    }
render(){
    const {search} = this.state
    return (
        
        <div className="col s12">
          <div className="input-field">
            <input 
            id="email_inline" 
            type="search" 
            className="validate" 
            placeholder="search"
            value={search}
            onChange={(e) => this.setState({search: e.target.value})}
            />
          </div>
      </div>
    )
}
}