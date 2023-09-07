import React from "react";
import "../../Components/RecentProject/RecentProject.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import Bloggingweb from "../../projectimage/bloggingweb.jpg";
import onlinesShopReact from "../../projectimage/e-commerce-react.jpg";
import VideoSharingapp from "../../projectimage/videoappmongodb.jpg";
import Dicereact from "../../projectimage/DiceReact.jpg";

function RecentProject() {
  return (
    <div className="r-Project" id="recentProject">
      <span>Recent Project</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="Portfolio-slider"
      >
        <SwiperSlide>
          <img src={VideoSharingapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={onlinesShopReact} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={Bloggingweb} alt="" />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={Dicereact} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default RecentProject;
