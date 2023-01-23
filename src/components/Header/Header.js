import styles from "./Header.module.scss";

import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex`}>
      <div>
        <a href="https://raw.githubusercontent.com/Amelibix/CV-React/main/public/CVAmelie.pdf">
          <h1>Amélie Brun</h1>
        </a>
      </div>
      <ul className={styles.headerList}>
        <a href="#propos">
          <li>A propos</li>
        </a>
        <a href="#techno">
          <li>Technologie</li>
        </a>
        <a href="#projet">
          <li>Projet</li>
        </a>
        <a href="mailto:brun.amelie2@gmail.com">
          <li>Contact</li>
        </a>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`fa-solid fa-bars ${styles.headerXs}`}
      ></i>
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className={styles.calc}></div>
          <ul className={styles.MenuContainer}>
            <a href="#propos">
              <li>A propos</li>
            </a>
            <a href="#techno">
              <li>Technologie</li>
            </a>
            <a href="#projet">
              <li>Projet</li>
            </a>
            <a href="mailto:brun.amelie2@gmail.com">
              <li>Contact</li>
            </a>
          </ul>
        </>
      )}
    </header>
  );
}

export default Header;
