import React, {useState} from 'react'
import MovieItem from '../../MovieItem';
import '../../StyleSheet/AdultAndChildren.css'
const Adult = ({handleClick, handleClickTicket}) => {
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
           <>
           <h1 className='heading'>The Movie for Adult (18+)</h1>
            <div className="for-container">
                
                <div className="row">
                    {// '?' if the array is existed
                        films?.map(film =>
                            {if(film.age >= 18){
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
           </>
        )
}
export default Adult
