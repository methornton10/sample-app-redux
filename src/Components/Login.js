import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers, validateLogin } from '../Actions/LoginActions';
import Search from '../Components/Search'; 


class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    componentWillMount = () => {
        this.props.fetchUsers();
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const p1 = this.state.username
        const p2 = this.state.password
        const p3 = this.props.users
        this.props.validateLogin(p1, p2, p3);
    }



    render() {
        //mapping through array of users
        const xyz = this.props.users.map(user => {
            return (
                <div key={user.id}>
                    <p>{user.username} : {user.address.city}</p>
                </div>
            )
        })

        //Conditional Rendering based on state of entire application
        var loginView = null;
        var errMsg = '';

        if (this.props.invalidAttempt) {
            errMsg = 'Error: Invalid Credentials';
        }

        if (this.props.loggedIn === false) {
            loginView = (
                <div>
                    <form onSubmit={this.onSubmit}>
                        <h4>Updated Sample App</h4>
                        {errMsg}
                        <br />
                        <input type="text"
                            placeholder="Enter username"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChange} />
                        <br />
                        <br />
                        <input type="password"
                            placeholder="Enter password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange} />
                        <br />
                        <br />
                        <button type="submit">Login</button>
                    </form>
                </div>
            )
        }
        else {
            loginView = (
                <div>
                <Search />
                </div>
            )
        }

        return (
            <div>
                {loginView}
                {/* {xyz} */}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.users,
    username: state.username, 
    city: state.city, 
    loggedIn: state.users.loggedIn,
    invalidAttempt: state.users.invalidAttempt
})

export default connect(mapStateToProps, { fetchUsers, validateLogin })(Login)
