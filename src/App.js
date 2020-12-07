import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import './App.css';

class App extends Component {
  state = {
    users: [],
    isLoading: false
  }

   async componentDidMount() {
    this.setState({ isLoading: true});

    const res = await fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIEND_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIEND_SECRET}`);
    const data = await res.json();
    
    this.setState({ users: data});
    this.setState({ isLoading: false})
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search />
          <Users users={this.state.users} isLoading={this.state.isLoading}/>
        </div>
      </div>
    );
  }
 
}

export default App;
