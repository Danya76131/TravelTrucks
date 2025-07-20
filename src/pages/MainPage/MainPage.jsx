import photo1x from "../../assets/images/hero-desktop-1x.webp";
import photo2x from "../../assets/images/hero-desktop-2x.webp";
import regularDesktop from "../../assets/images/hero-desktop-1x.jpg";
import s from "./MainPage.module.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <section className={s.section}>
      <div className={s.imageWrapper}>
        <picture>
          <source
            srcSet={`${photo1x} 1x, ${photo2x} 2x`}
            loading="lazy"
            media="(min-width: 1280px)"
            type="image/webp"
          />
          <img
            className={s.image}
            src={regularDesktop}
            loading="lazy"
            alt="Dream camper van at sunset"
          />
        </picture>

        <div className={s.overlay}></div>
      </div>

      <div className={s.content}>
        <div className={s.contentText}>
          <h1 className={s.title}>Campers of your dreams</h1>
          <p className={s.description}>
            You can find everything you want in our catalog
          </p>
        </div>

        <button onClick={() => navigate("/catalog")}>View Now</button>
      </div>
    </section>
  );
};

export default MainPage;
