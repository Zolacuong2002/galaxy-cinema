import React from 'react'
import '../../StyleSheet/Contact.css'
const Contact = () => {
       return (
              // <!-- Begin: Contact section -->
            <div className="content-section">
                <h2 className="section-heading">CONTACT</h2>
                <p className="section-sub-heading">Let we know more</p>
                <div className="row contact-form">
                    <div className="col col-half contact-infor">
                        <p><i class="bi bi-house"></i>Ho Chi Minh, VN</p>
                        <p><i class="bi bi-phone"></i>Phone: +84 151515</p>
                        <p><i class="bi bi-mailbox2"></i>Email: mail@mail.com</p>
                    </div>
                    <div className="col col-half">
                        <form action="">
                            <div className="row">
                                <div className="col col-half">
                                    <input type="text" name="" id="form-control" required placeholder="Name"
                                        className="form-control"/>
                                </div>
                                <div className="col col-half">
                                    <input type="email" name="" id="form-control" required placeholder="Email"
                                        className="form-control"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-full">
                                    <input type="text" name="" id="form-control" required placeholder="Message"
                                        className="form-control"/>
                                </div>
                            </div>

                            <button className="btn-contact pull-right">SEND</button>
                        </form>

                    </div>
                </div>
            </div>
       )
}
export default Contact
