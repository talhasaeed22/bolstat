import React from "react";
import styles from "../styles/slider.module.css";
const DashboardBox = ({ line1, line2, check, value, onChange,id }) => {
  return (
    <div className="flex justify-between shadow-md text-sm rounded px-4 py-3">
      <span>{line1}</span>
      {!check && <span>{line2}</span>}
      {check && (
        <div className={`${styles.container}`}>
          <label className={styles.switch} htmlFor={id}>
            <input type="checkbox" id={id} checked={value} onChange={onChange} />
            <div className={`${styles.slider} ${styles.round}`}></div>
          </label>
        </div>
      )}
    </div>
  );
};

export default DashboardBox;
