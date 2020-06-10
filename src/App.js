import React,{Component} from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list';
import {SearchBox} from './components/search-box/search-box';

class App extends Component{
  constructor(){
    super();
    this.state = {
     players:[],
     searchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({players: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render(){
    const {players, searchField} = this.state;
    const fplayers = players.filter(player => player.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Zombie Rolodex</h1>
        <SearchBox
          placeholder = 'search players'
          handleChange= {this.handleChange}
        />       
        <Cardlist players={fplayers}/>
      </div>
    );
  }
}

export default App;
