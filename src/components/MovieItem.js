import Button from 'react-bootstrap/Button'
import './StyleSheet/Movie.css'

function MovieItem({film, handleClick, handleClickTicket}){
    return (
        <div className="Film-Item">
            <div className='movie-container'>
                <img
                   
                    className='movie-img' src={"https://www.galaxycine.vn"+film.imagePortrait} alt={film.slug}
                 />
                 <div className='movie-content'>
                    {/* // Event Click will appear detail about movie, call back to return data */}
                    <Button  onClick={() =>handleClick(film)} variant="warning" className='btn-detail'>C {film.age}</Button> 
                    <Button  onClick={() =>handleClickTicket(film)} variant="warning" className='btn-buy-ticket'>Buy ticket</Button> 
                 </div>
            </div>
            <div className='title-movie'>
                <h4 className="name">{film.name}</h4>
                <h4 className="sub-name">{film.subName}</h4>
            </div>
        </div>
    )
}
export default MovieItem;