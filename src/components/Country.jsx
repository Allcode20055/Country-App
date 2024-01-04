import React from "react";
import style from "./country.module.css";

const Country = (props) => {
  const { capital, area, population, name, continents, flags, languages } =
    props.countryData;

  // languages deffrent key that's way use this loginc
  let lang;
  for (let keys in languages) {
    lang = languages[keys];
  }
  const onIdPass = (id) => {
    props.onHandelRemoveName(id);
  };
  return (
    <article className={style.country}>
      <div className={style["country-img"]}>
        <img src={flags.png} alt={name.common} />
      </div>
      <div className={style.dasc}>
        <p>Name : {name.common}</p>
        <p>Area : {area}</p>
        <p>Population : {population}</p>

        <p>Capital : {capital}</p>
        <p>Continents : {continents}</p>
        <p>Language : {lang}</p>
      </div>
      <button
        className={style["country-deleted-btn"]}
        onClick={() => onIdPass(name.common)}
      >
        Delete Todo
      </button>
    </article>
  );
};

export default Country;
