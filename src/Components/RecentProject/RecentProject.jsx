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
import GuessNumberJS from "../../projectimage/gusenumber.jpg";

function RecentProject() {
  return (
    <div className="r-Project" id="recentProject">
      <span>Recent Project</span>
      <span>Portfolio</span>
      <a href="https://github.com/MRMutahir/" target="_blank">
        {" "}
        <button className="button">All Project</button>
      </a>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="Portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://github.com/MRMutahir/Video-Sharing-app.git"
            target="_blank"
          >
            <img src={VideoSharingapp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://onlinestore-8d926.web.app/" target="_blank">
            {" "}
            <img src={onlinesShopReact} alt="" />
          </a>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <a href="https://blogs-app-js-firebase.vercel.app/" target="_blank">
            {" "}
            <img src={Bloggingweb} alt="" />
          </a>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <a href="https://mrmutahir.github.io/RoolDice/" target="_blank">
            {" "}
            <img src={Dicereact} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://aesthetic-valkyrie-163b4a.netlify.app/"
            target="_blank"
          >
            {" "}
            <img src={GuessNumberJS} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default RecentProject;
