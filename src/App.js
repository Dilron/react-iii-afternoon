import React, { Component } from 'react';
import './App.css';
import data from './components/data'
import DataReturn from './components/DataReturn'
import NavBar from './components/NavBar'

class App extends Component {
  constructor(){
    super()

    this.state = {
      pageId: 1,
      nameHeader: `${data[0].name.first} ${data[0].name.last}`,
      from: `${data[0].city}, ${data[0].country}`,
      title: `${data[0].title}`,
      employer: `${data[0].employer}`,
      movies: data[0].favoriteMovies
    } 
  }

  handlePrev = (() => {
    if(this.state.pageId > 1){
      let num = this.state.pageId - 1
      let ind = num - 1
      this.setState({pageId: num})
        this.setState({nameHeader: `${data[ind].name.first} ${data[ind].name.last}`})
        this.setState({from: `${data[ind].city}, ${data[ind].country}`})
        this.setState({employer: `${data[ind].employer}`})
        this.setState({movies: data[ind].favoriteMovies})
    }
    
  })

  handleNext = (() => {
    if(this.state.pageId < 25){
      let num = this.state.pageId + 1
      let ind = num - 1
      this.setState({pageId: num})
      this.setState({nameHeader: `${data[ind].name.first} ${data[ind].name.last}`})
      this.setState({from: `${data[ind].city}, ${data[ind].country}`})
      this.setState({employer: `${data[ind].employer}`})
      this.setState({movies: data[ind].favoriteMovies})
    }
  })

  render() {
    return (
      <div className="App">
        <header className="blue-header">
        </header>

        <section className='border-box'>

          <div className='display-box'>
            <DataReturn 
            nameHeader={this.state.nameHeader}
            from={this.state.from}
            title={this.state.title}
            employer={this.state.employer}
            movies={this.state.movies}/>
            <h2 className='counter-box'>{this.state.pageId}/25</h2>
          </div>

          <NavBar 
          handlePrev={this.handlePrev}
          handleNext={this.handleNext}/>

        </section>
      </div>
    );
  }
}

export default App;
