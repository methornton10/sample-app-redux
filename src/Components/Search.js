import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../Actions/SearchActions'

function searchingFor(term) {
    return function (x) {
        return x.title.toLowerCase().includes(term.toLowerCase()) || !term
    }
}

class Search extends Component {
    state = {
        term: ''
    }

    searchHandler = (e) => {
        //console.log("within the search handler")
        this.setState({ term: e.target.value })

    }

    componentWillMount = () => {
        this.props.fetchPosts()
        //console.log("POSTS", this.props.posts.title)
    }

    render() {

        const abc = this.props.posts.filter(searchingFor(this.state.term)).map(p => {
            return (
                <tr key={p.id}>
                    <td align="center">{p.id}</td>
                    <td align="center">{p.title}</td>
                </tr>
            )
        })
        return (
            <div>
                <p>Welcome {this.props.users.username}</p>
                <br />
                <input type="text"
                    placeholder="search for by title"
                    name="search"
                    onChange={this.searchHandler} />
                    <br />
                    <br />
                <table border="1" width="500px">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                        </tr>
                            {abc}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.posts,
    users: state.users
})

export default connect(mapStateToProps, { fetchPosts })(Search)
