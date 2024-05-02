// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCoverflow, Pagination } from "swiper/modules";

import { Container, Image } from "react-bootstrap";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { project } from "../data/project";

const MainPage = () => {
  return (
    <section id="home" className="home">
      <Container className="homeContainer">
        <div className="homeContainers">
          <div className="homeImg">
            <Image loading="lazy" src="sources/svg/mainImg.svg" fluid />
          </div>

          <div className="homeInfo">
            <h1 className="minTitle">
              Create your own amazing
              <span> website </span> or <span>web application</span>
            </h1>
            <p className="minParagraph">
              {" "}
              Acos Agency is a company specialized in developing and creating websites, 
              providing its services with innovative design and advanced programming of websites.
            </p>

            <div className="btnContainer">
              <a href='#FAQs' className="minBtn1">Learn More</a>
              <a href='#Contact' className="minBtn2">Contact Us</a>
            </div>
          </div>
        </div>
      </Container>

      <Container className="homeSwiper">
        <>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 0.95,
              slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <>
              {project.map((project, index) => {
                return (
                  <SwiperSlide className="SwiperSlide">
                    <img src={project.imgUrl} alt={project.title} />
                  </SwiperSlide>
                );
              })}
            </>
          </Swiper>
        </>
      </Container>
    </section>
  );
};

export default MainPage;
