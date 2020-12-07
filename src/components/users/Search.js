import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {

    state = {
        text: '',
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text.replace(/\s+/g, ''))
        this.setState({ text: ''})
        
    }

    static propTyes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }

    render() {
        const { text } = this.state;
        const { clearUsers, showClear} = this.props;
        
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" onChange={this.onChange} name="text" placeholder="Search profile name..." value={text} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear Users</button>}
                
            </div>
        )
    }
}

export default Search
