import React from 'react';
import '../index.css';

 // const IMG_API = IMG_KEY

function Movie(props) {

    const setVoteClass = (score) => {
        if (score >= 8) {
            return "green";
        } else if (score >= 6){
            return "orange";
        } else{
            return "red";
        }
    }

    return (
        <div className="movie">
            <img src={ props.movie.poster_path ? IMG_API + props.movie.poster_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1040&q=80"} alt={props.movie.title} />
            <div className="movie-info">
                <h3>{props.movie.title}</h3>
                <span className={`tag ${setVoteClass(props.movie.vote_average)}`}>{props.movie.vote_average}</span>
            </div>

            <div className="movie-over">
                <h2>Overview</h2>
                <p>{props.movie.overview}</p>
            </div>
        </div>
    );
}

export default Movie;