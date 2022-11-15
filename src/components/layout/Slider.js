import React from "react";
import '../StyleSheet/Slider.css';
import {Carousel} from 'react-bootstrap';
import ReactPlayer from "react-player";

function Slider(){
    const imageProp=[
        {
            id:1,
            src:"https://www.galaxycine.vn/media/2022/5/9/promotion-duatop2022-digital-2048x682_1652081734177.jpg",
        }
    ]
    const videoProp = [
        {
            id:1,
            src: "https://www.youtube.com/watch?v=Rf8LAYJSOL8",
            credit:"Lạ đại phu 2",
        },

        {
            id:2,           
            src: "https://www.youtube.com/watch?v=mJ_Q9f0Am9s",
            credit:"Chuyện ma đô thị",
        },

        {
            id:3,            
            src: "https://www.youtube.com/watch?v=AlYDgL3S95Y&t=2s",
            credit:"Nghề siêu dễ",
        },

    ]

    return(
        <div className="slider-contain">
            <Carousel>
                {videoProp.map((videoOb)=>{
                    return(
                        <Carousel.Item key={videoOb.id} >
                            <ReactPlayer
                                url={videoOb.src}                                
                                pip={true}
                                controls={false}
                                playing={true}
                                width="100%"
                                height="900px"
                            />
                        </Carousel.Item>
                    )              
                })}
            
                {imageProp.map((imageOb)=>{
                    return(     
                        <Carousel.Item key={imageOb.id} > 
                            <img src={imageOb.src} alt=""/>                                     
                        </Carousel.Item>                                 
                    )
                })}                        
            </Carousel>
            
        </div>
    );
}

export default Slider;