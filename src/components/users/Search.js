import React, { Component } from 'react'

class Search extends Component {

    state = {
        text: '',
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value});
    

    onSubmit = (e) => {

        console.log(this.state.text);

        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" onChange={this.onChange} name="text" placeholder="Search profile name..." />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search
