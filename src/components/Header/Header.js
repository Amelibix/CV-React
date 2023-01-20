import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`d-flex ${styles.styleHeader}`}>
      <nav className="d-flex">
        <div className="d-flex" id="haut">
          <a href="https://raw.githubusercontent.com/Amelibix/CV-React/main/public/CVAmelie.pdf">
            <h1>Amélie Brun</h1>
          </a>
        </div>
        <div className={`d-flex ${styles.navLister}`}>
          <ul className="d-flex">
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
