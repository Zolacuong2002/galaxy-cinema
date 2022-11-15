import parser from 'html-react-parser';
import './StyleSheet/Modal.css'
function Modal(props){
    const {show, hide, film} = props;

    // avoid affect when click modal-container
    const handleChildClick = (event) =>{
        event.stopPropagation();
    }

    if(!show){
        return null;
    }

    return(
        <div className="modal" onClick={hide}>
           <div className="modal-container" onClick={handleChildClick}>
           <div className='close-modal'>
                    <i className="bi bi-x-lg close-modal-btn" onClick={hide}></i>
               </div>
                <img
                    className='movie-img' src={"https://www.galaxycine.vn"+film.imagePortrait} alt={film.slug}
                 />
                  <div className='title-movie'>
                            <h1 className="name">{film.name}</h1>
                            <h1 className="sub-name">{film.subName}</h1>
                        </div>
                        <div className='rating-movie'>
                            <i className="bi bi-bookmark-star-fill"> {parseFloat(film.point).toFixed(2)}/10</i> - {film.totalVotes}
                            <button className='rate-click'>Rating</button>
                        </div>
                        <div className="duration-movie">
                            <i className="bi bi-stopwatch dur"> {film.duration} minutes</i>
                        </div>
                        <div className='age-limited'>
                            <span>C : {film.age}</span>
                        </div>
                
                <div className='descrip-movie'>
                    {parser(film.description)}
                </div>
           </div>
        </div>
    )
}

export default Modal;