import { useRef, useEffect } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../sass/style.scss";
import {
  getRectorateList as onGetRectorateList
} from "../../store/rectorate/thunk";
import { useDispatch, useSelector } from "react-redux";
import qabul from "../../assets/img/img1.png";
import qr from "../../assets/img/QR3.png";

export default function Slider() {
  const carouselRef = useRef<any>(null);
  const dispatch = useDispatch<any>();
  const rectorate = useSelector((state: any) => state.Rectorate.rectorateList);

  useEffect(() => {
    dispatch(onGetRectorateList());
  }, [dispatch]);

  const prev = () => carouselRef.current?.prev();
  const next = () => carouselRef.current?.next();

  return (
    <div className="slider">
      <div onClick={prev} className="slider-arrow left">
        <LeftOutlined />
      </div>
      <div onClick={next} className="slider-arrow right">
        <RightOutlined />
      </div>

      <Carousel
        ref={carouselRef}
        autoplay
        autoplaySpeed={10000}
        pauseOnHover
        arrows={false}
        dots={false}
        effect="fade"
      >
        {/* 1 - Bannerlar slaydi */}
        <div className="slider-slide banners-grid">
          <h5 className="slider-title">
            Muhammad al-Xorazmiy nomidagi TATU rektori va prorektorlarining
            jismoniy va yuridik shaxslarni qabul qilish JADVALI
          </h5>
          <div className="banners-container">
            {rectorate?.slice(0, 6).map((item: any) => (
              <div
                key={item.id}
                className="banner-item"
              >
                <img
                  src={
                    item.bannerBase64
                      ? `data:image/${item.bannerBase64.startsWith("iVBORw0KGgo") ? "png" : "jpeg"};base64,${item.bannerBase64}`
                      : "/images/fallback.png" 
                  }
                  alt=""
                />
                <div className="banner-overlay">
                  <Link to={`/person/${item.id}`} className="banner-btn">
                    Batafsil
                  </Link>
                  <Link
                    to={`/applicationById/${item.id}`}
                    className="banner-btn"
                  >
                    Qabuliga yozilish
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2 - Qabul rasmi */}
        <div className="slider-slide">
          <img src={qabul} alt="" className="slider-full-img" />
        </div>

        {/* 3 - QR rasmi */}
        <div className="slider-slide">
          <img src={qr} alt="" className="slider-full-img" />
        </div>

        {/* 4 - Baholash card */}
        <div className="slider-slide ">
          <div className="rate-slide">
            <div className="glass-card">
              <h3>
                Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari
                universiteti faoliyatini baholang
              </h3>
              <Link to="/ratePage" className="glass-btn">
                Baholashga o‘tish
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
