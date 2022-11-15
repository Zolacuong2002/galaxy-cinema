import React from "react";
// import bootstrap from "bootstrap";
import '../StyleSheet/Footer.css';


function Footer(){
    return(
        <footer className="footer">              
            <div className="footer-contain">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <h1>GIỚI THIỆU</h1>
                        <ul>
                            <li><a href="/home">VỀ CHÚNG TÔI</a></li>
                            <li><a href="/home">TUYỂN DỤNG</a></li>
                            <li><a href="/home">CHÍNH SÁCH</a></li>
                            <li><a href="/home">ƯU ĐÃI</a></li>
                        </ul>
                        
                    </div>
                    
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <h1>CHĂM SÓC KHÁCH HÀNG</h1>
                        <ul>
                            <li>Hotline: +84 151515</li>
                            <li>Giờ làm việc: 24/7</li>
                            <li>Email hỗ trợ: mail@mail.com</li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <h1>KẾT NỐI GALAXY CINEMA</h1>
                        <div className="link">
                            <a href="/home"><i className="fab fa-facebook-f"></i></a>
                        </div>
                    </div>
                    <hr/>
                        <div className="row">
                        <p className="info">
                            &copy;The LEXI movie
                        </p>
                    </div>
                </div>
            
            </div>       
        </footer>
        
    );
}

export default Footer;