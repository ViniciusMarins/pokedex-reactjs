import { useState } from "react";
import styles from "./SelectedFilter.module.css";

function SelectedFilter({ selectedTypes, tipos, setSelectedTypes }) {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSelectedTypes([...selectedTypes, value]);
    } else {
      setSelectedTypes(selectedTypes.filter((type) => type !== value));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerTypes}>
        {tipos.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              value={type}
              checked={selectedTypes.includes(type)}
              onChange={handleCheckboxChange}
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
}

export default SelectedFilter;
