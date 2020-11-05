import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component{

    state = {
        reviews: []
    }

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=HLQNnPBzvLFHZ4ip3CQ7JIL5AtORdjIS')
        .then(res => res.json())
        .then(res => this.setState({ 
            reviews: res.results
         }));
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <h3>Movie Reviews:</h3>
                <MovieReviews reviews = {this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer
