import React, {useState} from 'react'
import MovieItem from '../../MovieItem';
import '../../StyleSheet/AdultAndChildren.css'
const Children = ({handleClick, handleClickTicket}) => {
        // Getting API
        var API = 'https://www.galaxycine.vn/api/movie/showAndComming?';

        // Use 'useState' hook to get data
        const [films, setFilms] =  useState(() => {
            fetch(API)
            .then(function(response){
                return response.json();
            })
            .then(function(data){  
                return setFilms(data.movieShowing);
            })
            .catch(function(err){
                console.log(err);
            });
        });
    
        return (
            <div className='for-container'>
            <h1 className='heading'>The Movie for Children</h1>
             <div className="movie-list">
                 <div className="row">
                     {// '?' if the array is existed
                         films?.map(film =>
                            {if(film.age < 18){
                                return (
                                    <div key={film.id} className="col-lg-3 col-md-4 col-sm-6 movie-item"> 
                                        <MovieItem film={film} handleClick={handleClick} handleClickTicket={handleClickTicket}/>
                                    </div>
                                )  
                            }else{
                                return null; 
                            }
                            }  
                         )
                     }
                 </div>
             </div>
        </div>
        )
}
export default Children
