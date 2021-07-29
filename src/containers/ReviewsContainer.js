import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux'


class ReviewsContainer extends Component {
  render() {
    const revs = this.props.reviews.filter(r => r.restaurantId === this.props.restaurant.id);
    return (
      <div>
        <ReviewInput addReview={ this.props.addReview } restaurantId={ this.props.restaurant.id} />
        <Reviews reviews={ revs } deleteReview={ this.props.deleteReview }/>
      </div>
    )
  } 
}

const msp = ({ reviews }) => ({ reviews })

const mdp = d => {
  return {
    addReview: r => d({ type: 'ADD_REVIEW', r }),
    deleteReview: id => d({ type: 'DELETE_REVIEW', id })
  }
}

export default connect(msp, mdp)(ReviewsContainer);
