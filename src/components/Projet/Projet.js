import styles from "./Projet.module.scss";

function Projet({ projet, formation, description, lien }) {
  return (
    <div className={`d-flex flex-column ${styles.containerProjet}`}>
      <a href={lien}>
        <i className="fa-regular fa-folder"></i>
      </a>
      <h2>{projet}</h2>
      <h3>{formation}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Projet;
