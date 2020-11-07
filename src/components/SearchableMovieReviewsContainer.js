import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component{

    state = {
        searchTerm: '',
        reviews: []
    }

    handleSubmit = e => {
        e.preventDefault()

        fetch(`${URL} + &query=${this.state.searchTerm}`)
        .then(res => res.json())
        .then(res => this.setState({reviews: res.results}))
    }

    handleSearchInputChange = (e) => {
        this.setState({ searchTerm: e.target.value})
    }

    render() {
        return (
            <div className="searchable-movie-reviews"> 
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Movie Reviews</label>
                        <input 
                            id="search-input"
                            type="text"
                            onChange={this.handleSearchInputChange}
                        />
                    <button type='submit'>Submit</button>
                </form>
                {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews}/>
            </div>
           
        )
    }
}

export default SearchableMovieReviewsContainer
