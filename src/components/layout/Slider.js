import React from "react";
import '../StyleSheet/Slider.css';
import {Carousel} from 'react-bootstrap';
import ReactPlayer from "react-player";

import { useState } from "react";

    // Getting API

function Slider(){

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

    var videoProp = [];
    films?.map(film =>{
        videoProp.push({id: film.id, src: film.trailer, credit: ""} );
    });


    const imageProp=[
        {
            id:1,
            src:"https://www.galaxycine.vn/media/2022/5/9/promotion-duatop2022-digital-2048x682_1652081734177.jpg",
        }
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