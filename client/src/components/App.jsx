import React from 'react';
import axios from 'axios';
import RestaurantList from './RestaurantList.jsx';
import RandomChoice from './RandomChoice.jsx';

// all the functions you need are here, you just need to write them

// the page should show the "add restaurants to get started" section if there are no restaurants

// you should be able to add a restaurant

// you should be able to render all restaraunts that have been added

// you should be able to delete all restaurants

// you should be able to remove an individual restaurant from the list

class App extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        data: [],
        restaurantName: '',
        thereIsNoData: true,
        isRandom: false,
        theRandomChoice: ''
    }
    this.getDataFromDatabase = this.getDataFromDatabase.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleShowRandomChoice = this.handleShowRandomChoice.bind(this);
    this.handleDeleteOne = this.handleDeleteOne.bind(this);

  }

  componentDidMount() {
    this.getDataFromDatabase();
  }

  getDataFromDatabase(){
    axios.get('http://localhost:3333/api/all')
        .then((result) => {
            console.log(result);
            this.setState({
                data: result.data
            })
        })
        .catch((error) => {
            console.log('error in getting result');
        })
  }

  handleChange(e){
    let value = e.target.value;
    this.setState({
        [e.target.name]: value
    })
  }

  handleAddClick(e){
    // at some point you should set state back to blank to force re-render
    e.preventDefault();
    let newItem = {
        restaurantName: this.state.restaurantName
    }
    axios.post('http://localhost:3333/api/add', newItem)
        .then(() => {
            this.setState({
                thereIsNoData: false,
                restaurantName: ''
            })
            this.getDataFromDatabase();
        })
        .catch((error) => {
            console.log('error in rerendering page')
        })

  }

  handleClearClick(e){
    // at some point you should set state back to blank to force re-render
    e.preventDefault();
    axios.delete('http://localhost:3333/api/all')
        .then(() => {
            this.setState({
                data: [],
                thereIsNoData: true
            })

        })
        .catch((error) => {
            console.log('error in deleting all')
        })
  }

  handleShowRandomChoice(e){
    // be sure to prevent page from refreshing on form submission
    e.preventDefault();
    let resultsData = this.state.data;
    let randomIndex = Math.floor(Math.random() * resultsData.length);
    let theRandomChoice = resultsData[randomIndex].restaurantName
    this.setState({
        isRandom: !this.state.isRandom,
        theRandomChoice: theRandomChoice
    })



  }

  handleDeleteOne(clickedId){
    console.log(`${clickedId} was clicked`)
    axios.delete(`http://localhost:3333/api/deleteOne/${clickedId}`)
        .then(() => {
            this.getDataFromDatabase();
        })
        .catch((error) => {
            console.log('error in deleting one');
        })

  }

  // you will need to change conditinonal rendering to use state
    render(){

         if (this.state.thereIsNoData){
            return (
                <div>
                    <form>
                        <input placeholder="Restaurant" name="restaurantName" className="inputBar" value={this.state.restaurantName} onChange={this.handleChange}></input>
                        <button onClick={this.handleAddClick} id="addButton">Add</button>
                        <button onClick={this.handleClearClick} id="clearButton">Clear</button>
                        <h3 style={{"padding":"25px 0"}}>Add restaurants to get started!</h3>
                        <button id="randomButton">Go!</button>
                    </form>
                </div>
            )
        } if (!this.state.thereIsNoData) {
            return (
                <div>
                    <form>
                        <input placeholder="Restaurant" name="restaurantName" className="inputBar" value={this.state.restaurantName} onChange={this.handleChange}></input>
                        <button id="addButton" onClick={this.handleAddClick}>Add</button>
                        <button id="clearButton" onClick={this.handleClearClick}>Clear</button>
                        <div id="listDiv">
                        {this.state.isRandom ? <RandomChoice theRandomChoice={this.state.theRandomChoice}/> : <RestaurantList data={this.state.data} deleteOne={this.handleDeleteOne}/>}
                        </div>
                        <button onClick={this.handleShowRandomChoice} id="randomButton">Go!</button>
                    </form>
                </div>
            )
        }
    }
}

export default App;