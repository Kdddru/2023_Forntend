import React from 'react'
import Slider from 'react-slick';

export const SimpleSlider = () => {

  const settings = {
      arrows:false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const pics =['2.png','hi.png','3.png'];



  return (
    <div>
      <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <div
            style={{
              width:'100%',
              height:'60vh',
              backgroundImage:`url(${require('../img/1.png')})`,
              backgroundSize:'cover'
            }}
            >
            </div>
          </div>
          {
            pics.map((pic,i)=>(
              <div key={i}>
              <div
              style={{
                width:'100%',
                height:'60vh',
                backgroundImage:`url(${require(`../img/${pic}`)})`,
                backgroundSize:'cover'
              }}
              >
              </div>
            </div>
            ))
          }
        </Slider>
    </div>
  )
}
