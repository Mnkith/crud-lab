import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import {connect} from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    // console.log( this.props)
    return (
      <div>
        <RestaurantInput addRestaurant={ this.props.addRestaurant } />
        <Restaurants restaurants={ this.props.restaurants } deleteRestaurant={ this.props.deleteRestaurant }/>
      </div>
    )
  }
}

const msp = ({ restaurants }) => ({ restaurants })

const mdp = d => {
  return {
    addRestaurant: text => d({ type: 'ADD_RESTAURANT', text }),
    deleteRestaurant: id => d({ type: 'DELETE_RESTAURANT', id })
  }
}

export default connect(msp, mdp)(RestaurantsContainer);
