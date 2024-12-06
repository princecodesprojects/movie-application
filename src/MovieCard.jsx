import React from 'react';
import './App.css';

const MovieCard=({movie})=>{
         return(
               <div className="movie">
                     <div>
                        <p>{movie.year}</p>
                     </div>
                     <div>
                     <button>Watch Now</button>
                        <img src={
                            movie.poster!=="N/A"
                            ?movie.Poster
                            :"https://via.placeholder.com/400"} 
                            alt={movie.title} />
                     </div>
                     <div>
                        <span>{movie.Type}</span>
                         <h3>{movie.Title}</h3>
                     </div>
               </div>
         );
}

export default MovieCard;