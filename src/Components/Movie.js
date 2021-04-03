import React from 'react';
const img_api= "https://image.tmdb.org/t/p/w1280";

const setVoteColor=(vote)=>{
    if(vote>=8){
        return 'green';
    } else if(vote >=6){
        return 'orange';
    } else{
        return 'red';
    }
}


const Movie=({ title,poster_path,overview,vote_average })=>{
        return(
             <div className="movie" >
                <img src={poster_path ? (img_api + poster_path) : 'https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdmllfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'} alt={title} className='movie-img'/>
                <div className="movie-info">
                    <h3>{title}</h3>
                    <span className={`tag ${setVoteColor(vote_average)}`}>{vote_average}</span>
                </div>

                <div className="movie-over">
                    <h2>Overview</h2>
                    <p>{overview}</p>
                </div>
            </div>
            
        );
        
        
        
}

export default Movie;