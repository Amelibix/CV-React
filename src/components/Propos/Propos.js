import styles from "./Propos.module.scss";
import React from "react";
import { useState } from "react";

function Propos({ button, title, date, texte }) {
  const [active, setActive] = useState(0);

  const [open, setOPen] = useState(true);

  const toggleCollapse = () => {
    setOPen(!open);
  };

  return (
    <div className={`d-flex ${styles.containerPropos}`}>
      <div className={`d-flex ${styles.containerButton}`}>
        <button
          className={`${open && styles.buttonOpen}`}
          onClick={toggleCollapse}
        >
          {button}
        </button>
      </div>

      <div className={`d-flex ${styles.textOpen}`}>
        {open && (
          <div className={`d-flex flex-column ${styles.text}`}>
            <h3>{title}</h3>
            <h4>{date}</h4>
            <p>{texte}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Propos;
