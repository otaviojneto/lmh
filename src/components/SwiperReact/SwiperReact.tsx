import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import { Container } from "./styles";

type SwiperReactProps = {
  children: React.ReactNode;
};

const SwiperReact: React.FC<SwiperReactProps> = ({ children }) => {
  return (
    <Container>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
      >
        {children}
      </Swiper>
    </Container>
  );
};

export default SwiperReact;
