import styles from "./Content.module.scss";
import Intro from "../components/Intro/Intro";
import Propos from "../components/Propos/Propos";
import { useEffect, useState } from "react";

import Technologie from "../components/Technologie/Technologie";
import Projet from "../components/Projet/Projet";

function Content() {
  const [data, setData] = useState([]);
  const [dataTechno, setDataTehno] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(
        "https://raw.githubusercontent.com/Amelibix/CV-React/main/public/data.json"
      );
      const data = await response.json();
      setData(data);
      console.log(data);
    }
    fetchdata();
  }, []);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch(
        "https://raw.githubusercontent.com/Amelibix/CV-React/main/public/dataTechno.json"
      );
      const dataTechno = await response.json();
      setDataTehno(dataTechno);
    }
    fetchdata();
  }, []);

  return (
    <main className={`flex-fil ${styles.content}`}>
      <Intro />
      <div id="propos" className={styles.propos}>
        <h2>Parcours</h2>

        {data.map((data) => (
          <Propos
            key={data.id}
            button={data.parcours}
            title={data.title}
            date={data.date}
            texte={data.texte}
          />
        ))}
      </div>
      <div id="techno" className={styles.technologie}>
        <h2>Technologie</h2>
        <p>
          J'ai effectué 6 Projets avec Openclassroom, qui m'ont permis de voir
          différents langages :
        </p>
        {dataTechno.map((dataTechno, index) => (
          <Technologie
            key={index}
            title={dataTechno.title}
            texte={dataTechno.texte}
            image={dataTechno.picture}
          />
        ))}
      </div>
      <div className={` br ${styles.projet}`} id="projet">
        <h2>Projet</h2>
        <div className={`d-flex ${styles.grid}`}>
          {dataTechno.map((dataTechno, index) => (
            <Projet
              key={index}
              projet={dataTechno.projet}
              formation={dataTechno.formation}
              description={dataTechno.description}
              lien={dataTechno.lien}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Content;
