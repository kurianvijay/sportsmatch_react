import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from './LogoutButton'

class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.sessionButton = this.sessionButton.bind(this)
    this.isLoggedIn = this.isLoggedIn.bind(this)
  }

  isLoggedIn() {
      if (localStorage.getItem('jwtToken')) {
        this.setState({isLoggedIn: true})
    }
  }

  sessionButton() {
    if (this.state.isLoggedIn === true) {
      return (
        <LogoutButton handleLogout={this.props.handleLogout} />
      )
    }
  }


  componentDidMount() {
    this.isLoggedIn()
  }



  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/home">SportsMatch</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" id="login-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" id="profile-link" to='/profile'>Profile</NavLink>
            </li>
            {this.sessionButton()}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
