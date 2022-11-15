import './StyleSheet/BuyTicket.css';
function BuyTicket(props){
    const {show, hide, film} = props;

    // avoid affect when click modal-container
    const handleChildClick = (event) =>{
        event.stopPropagation();
    }

    if(!show){
        return null;
    }

    return(
        <div className="modal-ticket " onClick={hide}>
            <div className="modal-container-ticket" onClick={handleChildClick}>
                <div className="modal-close">
                    <i className="bi bi-x-lg close-modal-btn" onClick={hide}></i>
                </div>
                <div className="modal-heading">
                    <i class="modal-icon bi bi-ticket-perforated"></i>{film.name}
                </div>
                <div className="modal-body">
                    <label for="modal-quantity" className="modal-label"><i class="bi bi-wallet-fill"></i>Tickets, $15
                        perperson</label>
                    <input type="text" name="" className="modal-input" id="modal-quantity" placeholder="How many?"/>
                    <label for="modal-email" className="modal-label"><i class="bi bi-person"></i>Send To</label>
                    <input type="email" className="modal-input" id="modal-email" placeholder="Enter email"/>
                    <button className="modal-pay" onClick={hide}>Book <i class="bi bi-bag-check"></i></button>
                </div>
                <div className="modal-footer">
                    Need <a href="/">help!</a>
                </div>
            </div>
        </div>
    )
}

export default BuyTicket