import styles from "./Intro.module.scss";
import image from "../../assets/images/profil.png";

function Intro() {
  return (
    <section className={`d-flex br ${styles.intro}`}>
      <div className={`d-flex flex-column ${styles.texte}`}>
        <h2>Bonjour, je suis Amélie</h2>
        <p>
          Passionnée par le code j'ai décidé de me réorienter dans le
          développement Web. Je viens de terminer ma formation de 6 mois chez
          Openclassroom et j'aimerais commencer à construire des sites web.
        </p>
      </div>
      <div className={`d-flex ${styles.image}`}>
        <img src={image} alt="Amélie Brun" />
      </div>
    </section>
  );
}

export default Intro;
