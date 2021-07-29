import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        { this.props.reviews.map( r => <Review key={r.id} review={ r } deleteReview={ () => this.props.deleteReview(r.id) }/>) }
      </ul>
    );
  }
};

export default Reviews;