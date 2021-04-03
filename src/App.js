import React , {useState,useEffect} from 'react';

import Movie from './Components/Movie';

const featured_api='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const search_api='https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

function App() {

  const [movies,setMovies]= useState([]);
  const [searchterm,setSearchterm]= useState('');

  useEffect(() => {
    fetch(featured_api).then((res) => res.json()).then((data) => {
      setMovies(data.results);
      
    }); 
  }, [])
   
  const handle=(e)=>{
    e.preventDefault();
    if(searchterm){
      fetch(search_api + searchterm).then((res) => res.json()).then((data) => {
        setMovies(data.results);
        
      });
      setSearchterm('');
    }
    
    

  };

  const handleonChange=(e)=>{
    setSearchterm(e.target.value);
  }

  return (
    <>
     
      <header>
         <h2 className='head'>Movies List</h2>
        <form onSubmit={handle}>
          <input type="search" placeholder='Search...' className='search'  value={searchterm} onChange={handleonChange} />
        </form>
          
      </header>
      <div className='movie-cont'>
        {movies.filter((movie)=>{
          if(searchterm !== movie.title){
            return <div className='nomovie'>No!!!</div>
          }
        }).map((movie) =>(
          <Movie key={movie.id} {...movie} />
        ))}
        
      </div>
    </>
  );
}
 
export default App;