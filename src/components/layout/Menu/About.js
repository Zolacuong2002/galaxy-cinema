import React from "react";
import "../../StyleSheet/About.css"

function About(){
    return(
        <div className="about-container">
            <h1 className="section-heading">VỀ CHÚNG TÔI</h1>
            {/* <ReactPlayer
                url="https://www.youtube.com/watch?v=kkYgwUBISvQ"                                
                pip={false}
                controls={true}
                playing={false}
                width="100%"
                height="400px"
            /> */}
            
            
            <h3 className="section-sub-heading">LỊCH SỬ</h3>
            <p>Từ năm 2022 đến nay, “” trải qua những thách thức phải đối mặt như những startup khác như tìm kiếm khách hàng, nâng cao dịch vụ, quảng bá hình ảnh trước công chúng, tìm kiếm nhà đầu tư lâu dài và đáng tin cậy. Hiện tại, “” đạt được vị trí hiện tại một phần dựa vào sự cố gắng bền bì, và bên cạnh đó, không thể không kể đến sự tin tưởng của các bạn – những người đồng hành cùng với “” trong những năm qua. Chính vì thế chúng tôi có thể tự hào rằng “” đã là một phần trong các bạn.</p>
            <h3 className="section-sub-heading">TẦM NHÌN</h3>
            <p>Việc đạt được những thành tựu đã làm cho chúng tôi không ngừng nghỉ ngày càng làm cho “” lớn mạnh. Nhưng bên cạnh chúng tôi, các nhà đầu tư và khách hàng không thể thiếu trên con đường chinh phục những điều lớn lao hơn. Vì thế mà thay vì chỉ tập chung vào cơ sở vật chất , chúng tôi còn chú ý vào vấn đề con người nhằm tạo nên môi trường mà “” có thể vươn ra thế giới.</p>
            <h3 className="section-sub-heading">MỤC TIÊU</h3>
            <p>Với mục tiêu đem đến những tiện ích giải trí hiện đại, lành mạnh cho các khách hàng với mức giá hợp lý. Mọi người đều có thể trải nghiệm những dịch vụ giải trí tốt nhất tại đây.</p>
            
        </div>
    );
}

export default About;