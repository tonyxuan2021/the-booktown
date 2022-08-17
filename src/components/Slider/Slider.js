import { Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#222",
    color: "white",
    height: "6rem",
  },
};

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      style={{marginBottom: "1.6rem"}}
    >
      <SwiperSlide style={styles.center}>
        FREE shipping on orders over $50
      </SwiperSlide>
      <SwiperSlide style={styles.center}>
        Buy 2 any Books, Get the 3rd Free.
      </SwiperSlide>
      <SwiperSlide style={styles.center}>
        Upgrade to Booktown member $99/year and get a book Free!
      </SwiperSlide>
    </Swiper>
  );
};
