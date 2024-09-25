import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import * as S from "./styles";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type SwiperReactProps = {
  children: React.ReactNode;
};

const SwiperReact: React.FC<SwiperReactProps> = ({ children }) => {
  return (
    <S.Container>
      <S.Content>
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {children}
        </Swiper>
      </S.Content>
    </S.Container>
  );
};
export default SwiperReact;
