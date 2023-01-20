import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={` d-flex ${styles.footer}`}>
      <h3>Designed & Build by Amélie Brun</h3>
      <a href="#haut">
        <div className={` d-flex ${styles.arrow}`}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      </a>
    </footer>
  );
}

export default Footer;
