import React, {Component} from 'react'

export default class NavBar extends Component {

    render() {
        return(
            <nav className='nav-container'>
                <button className='prev-next-button' onClick={() => this.props.handlePrev()}>Previous</button>
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
                <button className='prev-next-button' onClick={() => this.props.handleNext()}>Next</button>
            </nav>    
        )
    }
}