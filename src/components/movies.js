import React from 'react'

const Movies = ({ movies }) => {
    return (
        <div class="list-group">
            <center><h1>Movie List</h1></center>

            {movies.map((item, index) => (
                item.map((movie) => (
                    <div>
                        <img src={movie.images[0].url} class="rounded float-left" alt={movie.title} />
                        <div class="float-right">
                            <a href={movie.id} class="list-group-item list-group-item-action flex-column align-items-start">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">{movie.title}</h5>
                                </div>
                                <p class="mb-1">{movie.running_time_friendly}</p>
                            </a>
                        </div>
                    </div>
                ))
            ))}
        </div>
    )
};

export default Movies
