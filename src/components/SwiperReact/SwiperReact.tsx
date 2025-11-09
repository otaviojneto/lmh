import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";

type SwiperReactProps = {
  children: React.ReactNode;
};

const SwiperReact: React.FC<SwiperReactProps> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[400px]">
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
      </div>
    </div>
  );
};
export default SwiperReact;
