// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container, Image } from "react-bootstrap";
// import required modules
import {  Pagination } from "swiper/modules"
import { opinion } from "../data/opinions";
import OpinionsClient from './../components/OpinionsClient';

const Opinions = () => {
  return (
    <div className="opinions" id="opinions">
      <Container className="aboutContainer">
        <div className="aboutInfo">
          <h3 className="minTitleSection"> Opinions </h3>
          <h1 className="minTitle">Our customers' opinions</h1>
          <p className="minParagraph">
            {" "}
            What do customers say about us after our services?
          </p>
         
        </div>

        <div className="aboutImg">
          <Image loading="lazy" src="sources/img/opinions.png" fluid />
        </div>
      </Container>

      <Container>
        <>
          <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          >
            <>
            {
              opinion.map((opinions , index) => {
                return(

                  <SwiperSlide className='SwiperSlide'> 
                  <OpinionsClient opinionClient={opinions}/>
                  </SwiperSlide>
                )
              })
            }
              
            </>
          </Swiper>
        </>
      </Container>
    </div>
  );
};

export default Opinions;
