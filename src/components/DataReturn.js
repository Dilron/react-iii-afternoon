import React, {Component} from 'react'

export default class DataReturn extends Component{

    render(){
        return(
            <div className='employee-box'>
            <h2>{this.props.nameHeader}</h2>
            <h4>From: {this.props.from}</h4>
            <h4>Job Title: {this.props.title}</h4>
            <h4>Employer: {this.props.employer}</h4>
            <h4>Favorite Movies: <br/>
            {this.props.movies[0]}<br/>
            {this.props.movies[1]}<br/>
            {this.props.movies[2]}
            </h4>
            </div>
        )
    }
}

