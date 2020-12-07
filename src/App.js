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

  searchUsers = async text =>{
    
    this.setState({ isLoading: true});

    const res = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIEND_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIEND_SECRET}`);
    const data = await res.json();
    
    this.setState({ users: data.items, isLoading: false});
  }
  
  clearUsers = () => this.setState({ users: [], isLoading: false});


  render() {
    const { users, isLoading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true: false}/>
          <Users users={users} isLoading={isLoading}/>
        </div>
      </div>
    );
  }
 
}

export default App;
