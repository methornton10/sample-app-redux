import React, { Component } from 'react';
import { connect } from 'react-redux';  //necessary for store to be accessed everywhere
import { fetchStuff } from '../Actions/HomeActions';  //action that will be called when comp mounts

class Home extends Component {

  componentWillMount = () => {
    //console.log("Component Mounted in Home.js");
    //make the fetch request in the action
    this.props.fetchStuff();
  }
  render() {

    //cycle through each json object from the API
    //make it so that every "post" gets displayed to the user
    // const xyz = this.props.items.map(p => {
    //   return (
    //     <div key={p.id}>
    //       <h3>{p.name}</h3>
    //       <p>{p.email}</p>
    //     </div>
    //   )
    // })
    return (
      <div>
        {/* return what was cycled through below the render method */}
        {/* {xyz} */}
      </div>
    )
  }
}

//make it so that state is accessible via props ie this.props.items
const mapStateToProps = state => ({
  items: state.items.items
})


export default connect(mapStateToProps, { fetchStuff })(Home); 
