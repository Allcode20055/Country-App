import React from "react";

import style from "./countries.module.css";
import Country from "./Country";
import { v4 as uuidv4 } from "uuid";

const Countries = ({ countriesData, onHandelRemoveName }) => {
  return (
    <section className={style.countries}>
      {countriesData.map((countryData) => {
        const newCountryData = { countryData, id: uuidv4() };
        return (
          <Country
            key={newCountryData.id}
            {...newCountryData}
            onHandelRemoveName={onHandelRemoveName}
          />
        );
      })}
    </section>
  );
};

export default Countries;
