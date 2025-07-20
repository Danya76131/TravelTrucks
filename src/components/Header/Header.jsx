import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.logo} onClick={() => navigate("/")}>
            Travel<span>Trucks</span>
          </h1>
        </div>
        <nav className={styles.center}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
          >
            Catalog
          </NavLink>
        </nav>
        <div className={styles.right}></div> {/* для балансування flex */}
      </div>
    </header>
  );
};

export default Header;
