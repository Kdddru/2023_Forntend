import React, { useState } from 'react'
import Slider from "react-slick";
import imgsJson from '../Data/data.json'

//font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, faBell, faImage, faEnvelope, faComment,
  faChevronRight,faChevronLeft
} from '@fortawesome/free-solid-svg-icons';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
      className={className}
      style={{ ...style, display: "block", color: "grey", width:'100px', height:'50px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className={className}
      style={{ ...style, display: "block", color: "grey",width:'100px',height:'50px' }}
      onClick={onClick}
    />
  );
}


export const Slick = () => {

  const [imgs, setImgs] = useState(imgsJson);

  console.log(imgs);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  return (
    <div style={{width:'90%', margin:'auto'}}>
      <h2>슬라이더</h2>
      <Slider {...settings}>
        <div>
          <img src={imgs[0]} alt=""  width={400} height={400}
          style={{margin:'auto'}}
          />
        </div>
        <div>
          <img src={imgs[1]} alt=""  width={400} height={400}
          style={{margin:'auto'}}
          />
        </div>
        <div>
          <img src={imgs[2]} alt="" width={400} height={400}
          style={{margin:'auto'}}
          />
        </div>
      </Slider>
      <ul className='icon-list'>
        <li><FontAwesomeIcon icon={faImage} size='xl'/></li>
        <li><FontAwesomeIcon icon={faEnvelope} size='xl'/></li>
        <li><FontAwesomeIcon icon={faHeart} size='xl'/></li>
        <li><FontAwesomeIcon icon={faComment} size='xl'/></li>
        <li><FontAwesomeIcon icon={faBell} size='xl'/></li>
      </ul>
    </div>
  );
}

