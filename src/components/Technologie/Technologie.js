import styles from "./Technologie.module.scss";

function Technologie({ image, title, texte }) {
  return (
    <div className={`d-flex ${styles.containerTechno} ${styles.reverse}`}>
      <div className={`d-flex ${styles.containerImage}`}>
        <img src={image} alt={title} />
      </div>
      <div className={`d-flex flex-column ${styles.containerParagraphe}`}>
        <h3>{title}</h3>
        <p>{texte}</p>
      </div>
    </div>
  );
}

export default Technologie;
